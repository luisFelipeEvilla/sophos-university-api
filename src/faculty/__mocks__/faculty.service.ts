import { FacultyStub } from  "../test/stubs/faculty.stub";

export const FacultyService = jest.fn().mockReturnValue({
    findAll: jest.fn().mockResolvedValue([FacultyStub()]),
    findOne: jest.fn().mockResolvedValue(FacultyStub()),
    create: jest.fn().mockResolvedValue(FacultyStub()),
    update: jest.fn().mockResolvedValue(FacultyStub()),
    remove: jest.fn().mockResolvedValue(FacultyStub()),
});