import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateUser {
  name: string;
  email: string;
  password: string;
}

export class CreateUserUseCase {
  async create({ name, email, password }: ICreateUser) {
    const userExist = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (userExist) {
      throw new Error("User already exists");
    }

    const hashPassword = await hash(password, 10);

    return await prisma.users.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });
  }
}
