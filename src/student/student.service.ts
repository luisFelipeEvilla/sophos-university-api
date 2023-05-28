import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { Faculty } from 'src/faculty/entities/faculty.entity';
import { EnrollSemester } from './entities/enroll-semester.entity';
import { SemesterService } from 'src/semester/semester.service';
import { EnrollSemesterDto } from './dto/enroll-semester.dto';

@Injectable()
export class StudentService {
  constructor(@InjectRepository(Student) private readonly studentRepository: Repository<Student>,
    @InjectRepository(Faculty) private readonly facultyRepository: Repository<Faculty>,
    @InjectRepository(EnrollSemester) private readonly enrollSemesterRepository: Repository<EnrollSemester>,
    private readonly semesterService: SemesterService
  ) { }

  async create(createStudentDto: CreateStudentDto) {
    const student = this.studentRepository.create(createStudentDto);

    const faculty = await this.facultyRepository.findOne({ where: { id: createStudentDto.facultyId } });

    if (!faculty) throw new NotFoundException(`Faculty with id ${createStudentDto.facultyId} not found`);

    student.faculty = faculty;

    return await this.studentRepository.save(student);
  }

  async findAll() {
    return await this.studentRepository.find();
  }

  async findOne(id: number) {
    const student = await this.studentRepository.findOne({ where: { id }, relations: ['faculty', 'semesters', 'semesters.semester', 'semesters.courses'], });


    if (!student) throw new NotFoundException(`Student with id ${id} not found`);

    return student;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const student = await this.studentRepository.findOne({ where: { id } });

    if (!student) throw new NotFoundException(`Student with id ${id} not found`);

    Object.assign(student, updateStudentDto);

    return await this.studentRepository.save(student);
  }

  async remove(id: number) {
    const student = await this.studentRepository.findOne({ where: { id } });

    if (!student) throw new NotFoundException(`Student with id ${id} not found`);

    return await this.studentRepository.remove(student);
  }

  async enrollSemester(id: number, enrollSemesterDto: EnrollSemesterDto) {
    try {
      const student = await this.findOne(id);
      const semester = await this.semesterService.getCurrentSemester();

      // check if  the student already enroll this semester
      const enrollSemester = await this.enrollSemesterRepository.findOne({
        where: { semester: { id: semester.id}, student: { id: student.id }}
      });

      if (enrollSemester) throw new ConflictException('Student already enroll this semester');

      const newEnrollSemester = this.enrollSemesterRepository.create(enrollSemesterDto);
      newEnrollSemester.semester = semester;
      newEnrollSemester.student = student;

      return await this.enrollSemesterRepository.save(newEnrollSemester);

    } catch (error) {
      throw error;
    }
  }
}
