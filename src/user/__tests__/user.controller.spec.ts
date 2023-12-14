/*
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

describe('UsersController', () => {
  let app: INestApplication;
  let userService: UserService;

  const mockUserService = {
    createUser: jest.fn(dto => dto),
    findOneUser: jest.fn(id => ({ id, username: 'testuser', email: 'test@example.com' })),
    deleteUser: jest.fn(id => ({ id })),
    // Suponiendo que existe un método updateUser
    updateUser: jest.fn((id, dto) => ({ ...dto, id })),
  };

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
    userService = moduleRef.get<UserService>(UserService);
  });

  describe('Creating a user', () => {
    it('/POST user', () => {
      const newUser = { username: 'newuser', email: 'newuser@example.com', password: 'password' };
      return request(app.getHttpServer())
        .post('/user')
        .send(newUser)
        .expect(201)
        .then(response => {
          expect(response.body).toEqual(newUser);
          expect(mockUserService.createUser).toHaveBeenCalledWith(newUser);
        });
    });
  });
  /*
  describe('Finding a user', () => {
    it('/GET users/:id', () => {
      const userId = 'someUserId';
      return request(app.getHttpServer())
        .get(`/users/${userId}`)
        .expect(200)
        .then(response => {
          expect(response.body).toEqual({ id: userId, username: 'testuser', email: 'test@example.com' });
          expect(mockUserService.findOneUser).toHaveBeenCalledWith(userId);
        });
    });
  });

  describe('Deleting a user', () => {
    it('/DELETE users/:id', () => {
      const userId = 'someUserIdToDelete';
      return request(app.getHttpServer())
        .delete(`/users/${userId}`)
        .expect(200)
        .then(response => {
          expect(response.body).toEqual({ id: userId });
          expect(mockUserService.deleteUser).toHaveBeenCalledWith(userId);
        });
    });
  });

  describe('Updating a user', () => {
    it('/PUT users/:id', () => {
      const userId = 'someUserIdToUpdate';
      const updateUserDto = { username: 'updateduser', email: 'updateduser@example.com' };
      return request(app.getHttpServer())
        .put(`/users/${userId}`)
        .send(updateUserDto)
        .expect(200)
        .then(response => {
          expect(response.body).toEqual({ ...updateUserDto, id: userId });
          expect(mockUserService.updateUser).toHaveBeenCalledWith(userId, updateUserDto);
        });
    });
  });

  afterAll(async () => {
    await app.close();
  });
  -/

});

*/


// user.controller.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';

describe('UsersController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Add tests for endpoints
  // Example for createUser endpoint
  it('should create a user', async () => {
    const createUserDto = { username: 'testuser', password: 'pass123', email: 'test@test.com' };
    jest.spyOn(service, 'createUser').mockImplementation(async () => ({ message: 'Usuario creado', error: undefined }));

    expect(await controller.createUser(createUserDto)).toEqual({ message: 'Usuario creado', error: undefined });
  });

  // Add more tests for other endpoints
});

const mockUserService = {
  createUser: jest.fn(dto => ({ message: 'Usuario creado', error: undefined })),
  findUser: jest.fn(id => ({ message: 'Usuario encontrado', error: undefined })),
  deleteUser: jest.fn(id => ({ message: 'Usuario eliminado', error: undefined })),
  // More mocked functions as needed
};


