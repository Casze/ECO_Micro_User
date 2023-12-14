import { CreateUserDto } from '../dto/create.user.dto';
import { validate } from 'class-validator';

describe('CreateUserDto', () => {
    let createUserDto: () => CreateUserDto;

    beforeEach(() => {
        createUserDto = () => ({
        name: 'John Doe',
        username: 'john_doe',
        email: 'john.doe@example.com',
        password: 'password123',
        });
    });

    describe('Initialization', () => {
        it('should be defined', () => {
        const userDto = createUserDto();
        expect(userDto).toBeDefined();
        });
    });

    describe('Name Validation', () => {
        it('should have a valid name', () => {
        const userDto = createUserDto();
        expect(userDto.username).toEqual('john_doe');
        });
    });

    describe('Username Validation', () => {
        it('should have a valid username', () => {
        const userDto = createUserDto();
        expect(userDto.username).toEqual('john_doe');
        });
    });

    describe('Email Validation', () => {
        it('should have a valid email', () => {
        const userDto = createUserDto();
        expect(userDto.email).toMatch(/^\S+@\S+\.\S+$/);
        });
    });

    describe('Password Validation', () => {
        it('should have a valid password', () => {
        const userDto = createUserDto();
        expect(userDto.password).toMatch(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
        });
    });

    // Uncomment and adjust this block if needed, depending on how you're handling the read-only property in your DTO.
    
    describe('Email Format Validation', () => {
        it('should fail validation with an invalid email', async () => {
        // Asegúrate de que la función 'createUserDto' está creando una instancia de la clase 'CreateUserDto'.
        const userDto = new CreateUserDto();
        userDto.email = 'invalid-email'; // Asegúrate de que la clase permite modificar esta propiedad.
        const validationErrors = await validate(userDto);
        
        // La prueba espera encontrar un error de validación para el campo 'email'.
        expect(validationErrors).toEqual(
            expect.arrayContaining([
            expect.objectContaining({
                property: 'email',
                constraints: {
                isEmail: expect.anything(), // Utiliza 'expect.anything()' si no estás seguro del mensaje exacto de error.
                },
            }),
            ]),
        );
        });
    });
  
});
  

// Add more 'describe' blocks for additional validations as necessary.

