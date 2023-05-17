import { Test, TestingModule } from '@nestjs/testing';
import { FacultyService } from './faculty.service';
import { Faculty } from './entities/faculty.entity';
import { FacultyStub } from './test/stubs/faculty.stub';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { log } from 'console';

jest.mock('./faculty.service.ts');

describe('FacultyService', () => {
  let service: FacultyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacultyService],
    }).compile();

    service = module.get<FacultyService>(FacultyService);

    jest.clearAllMocks();
  });

  describe('find all', () => {
    describe('when get faculties its called', () => {
      let faculties: Faculty[];

      beforeEach(async () => {
        faculties = await service.findAll();
      });

      test('then it should call the faculty service', () => {
        expect(service.findAll).toHaveBeenCalled();
      });

      test('then it should return an array of faculties', () => {
        expect(faculties).toEqual([FacultyStub()]);
      });
    });
  });

  describe('find one', () => {
    describe('when get faculty its called', () => {
      let faculty: Faculty;

      beforeEach(async () => {
        faculty = await service.findOne('6462e9e6446df3ca66e8013a');
      });

      test('then it should call the faculty service', () => {
        expect(service.findOne).toHaveBeenCalled();
      });

      test('then it should be called with the correct id', () => {
        expect(service.findOne).toHaveBeenCalledWith('6462e9e6446df3ca66e8013a');
      });

      test('then it should return a faculty', () => {
        expect(faculty).toEqual(FacultyStub());
      });
    });
  });

  describe('create', () => {
      describe('when create faculty its called', () => {
        let faculty: Faculty;
        let createFacultyDto: CreateFacultyDto;

        beforeEach(async () => {
            createFacultyDto = {
              name: FacultyStub().name
            };

            faculty = await service.create(createFacultyDto);
        });

        test('then it should call the faculty service', () => {
            expect(service.create).toHaveBeenCalled();
        });

        test('then it should be called with the correct dto', () => {
            expect(service.create).toHaveBeenCalledWith(createFacultyDto);
        });

        test('then it should return a faculty', () => {
            expect(faculty).toEqual(FacultyStub());
        });

      });
  });

  describe('update', () => {
    let faculty: Faculty;
    let updateFacultyDto: UpdateFacultyDto;

    describe('when update faculty its called', () => {
      beforeEach(async () => {
        updateFacultyDto = {
          name: 'Faculty 2'
        };
        
        faculty = await service.update(FacultyStub()._id, updateFacultyDto);
      });

      test('then it should call the faculty service', () => {
        expect(service.update).toHaveBeenCalled();
      });

      test('then it should be called with the correct id', () => {
        expect(service.update).toHaveBeenCalledWith(FacultyStub()._id, updateFacultyDto);
      });

      test('then it should return a faculty', () => {
        expect(faculty).toEqual(FacultyStub());
      });
    });
  });
});
