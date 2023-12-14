import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { getModelToken } from '@nestjs/mongoose';
import { CreateUserDto } from '../dto/create.user.dto';

const mockUserModel = {
  create: jest.fn().mockResolvedValue({ _id: 'a uuid', ...CreateUserDto }), // Simula la creación de un usuario
  findById: jest.fn().mockResolvedValue({ _id: 'a uuid', ...CreateUserDto }), // Simula la búsqueda de un usuario
  findByIdAndDelete: jest.fn().mockResolvedValue({ _id: 'a uuid' }), // Simula la eliminación de un usuario
  // Simula cualquier otra función que tu servicio pueda llamar
};


describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken('User'),
          useValue: mockUserModel,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  /*
  it('should create a user', async () => {
    const userDto = { username: 'testuser', password: 'pass123', email: 'test@test.com' };
    mockUserModel.create.mockResolvedValue(userDto); // Asegúrate de que el mock devuelva lo que se espera
    const result = await service.createUser(userDto);
    expect(result).toEqual(userDto);
    //expect(mockUserModel.create).toHaveBeenCalledWith(userDto);
  });
  */

  // Add more tests for other methods
});
