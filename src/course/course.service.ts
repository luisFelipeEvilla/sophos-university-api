import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { TeachCourse } from './entities/teach-course.entity';
import { TeacherService } from 'src/teacher/teacher.service';
import { StudentService } from 'src/student/student.service';

@Injectable()
export class CourseService {
  constructor(@InjectRepository(Course) private readonly courseModel: Repository<Course>,
  @InjectRepository(TeachCourse) private readonly teachCourseModel: Repository<TeachCourse>,
  private readonly teacherService: TeacherService,
  private readonly studentService: StudentService
  ) { }
  
  async create(createCourseDto: CreateCourseDto) {
    const course = this.courseModel.create(createCourseDto);
    
    return await this.courseModel.save(course);
  }

  async findAll() {
    return await this.courseModel.find();
  }

  async findOne(id: number) {
    const course = await this.courseModel.findOne({where:  {id}, relations: ['teachers', 'students']});

    if (!course) throw new NotFoundException('Course not found');

    return course;
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const course = await this.courseModel.findOne({where:  {id}});
    this.courseModel.merge(course, updateCourseDto);
    
    return await this.courseModel.save(course);
  }

  async remove(id: number) {
    const course = await this.courseModel.findOne({where:  {id}});
    
    return await this.courseModel.remove(course);
  }

  async addTeacher(courseId: number, teacherId: number) {
    try {
      const course = await this.findOne(courseId);
      const teacher = await this.teacherService.findOne(teacherId);

      // check if the teacher is already teaching the course
      const alreadyTeach = course.teachers.find(teacher => teacher.id === teacherId);

      if (alreadyTeach) throw new ConflictException('The teacher is already teaching the course');
      
      course.teachers.push(teacher);

      return await this.courseModel.save(course);
    } catch (error) {
      if (error instanceof NotFoundException) throw new NotFoundException(error.message);
    }
  }

  async removeTeacher(courseId: number, teacherId: number) {
    const course = await this.findOne(courseId);

    course.teachers = course.teachers.filter(teacher => teacher.id !== teacherId);

    return await this.courseModel.save(course);
  }

  async addStudent(courseId: number, studentId: number) {
    const course = await this.findOne(courseId);
    const student = await this.studentService.findOne(studentId);

    // check if the student is already taking the course
    const alreadyTake = course.students.find(student => student.studentId === studentId);
    
    if (alreadyTake) throw new ConflictException('The student is already taking the course');
    
    // get student last semester
    const lastSemester = student.semesters[student.semesters.length - 1];

    course.students.push(lastSemester);

    console.log(course);
    

    return await this.courseModel.save(course);
  }

  async removeStudent(courseId: number, studentId: number) {

  }
}
