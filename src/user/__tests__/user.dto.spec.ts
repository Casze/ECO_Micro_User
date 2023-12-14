// create-user.dto.spec.ts
import { CreateUserDto } from '../dto/create.user.dto';
import { validate, ValidationError } from 'class-validator';

describe('CreateUserDto', () => {
  let createUserDto: CreateUserDto;

  beforeEach(() => {
    createUserDto = new CreateUserDto();
  });

  it('should validate that all fields are present and valid', async () => {
    createUserDto.username = 'testuser';
    createUserDto.password = 'testPassword';
    createUserDto.email = 'test@example.com';

    const errors: ValidationError[] = await validate(createUserDto);
    expect(errors).toHaveLength(0); // No errors if all validations pass
  });

  it('should fail validation if username is empty', async () => {
    createUserDto.username = '';
    createUserDto.password = 'testPassword';
    createUserDto.email = 'test@example.com';

    const errors: ValidationError[] = await validate(createUserDto);
    expect(errors).toHaveLength(1); // One error for username
    expect(errors[0].property).toEqual('username');
  });

  it('should fail validation if password is empty', async () => {
    createUserDto.username = 'testuser';
    createUserDto.password = '';
    createUserDto.email = 'test@example.com';

    const errors: ValidationError[] = await validate(createUserDto);
    expect(errors).toHaveLength(1); // One error for password
    expect(errors[0].property).toEqual('password');
  });

  it('should fail validation if email is empty', async () => {
    createUserDto.username = 'testuser';
    createUserDto.password = 'testPassword';
    createUserDto.email = '';

    const errors: ValidationError[] = await validate(createUserDto);
    expect(errors).toHaveLength(1); // One error for email
    expect(errors[0].property).toEqual('email');
  });

  it('should fail validation if email is not properly formatted', async () => {
    createUserDto.username = 'testuser';
    createUserDto.password = 'testPassword';
    createUserDto.email = 'not-an-email';

    const errors: ValidationError[] = await validate(createUserDto);
    expect(errors).toHaveLength(1); // One error for email format
    expect(errors[0].constraints).toHaveProperty('isEmail');
  });

  // You can add more test cases for other constraints and validation rules as necessary.
});
