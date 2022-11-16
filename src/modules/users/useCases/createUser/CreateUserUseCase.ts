import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateUserUseCase {
  async execute({ username, password }: ICreateClient) {
    const clientExist = await prisma.users.findFirst({
      where: {
        username,
      },
    });

    if (clientExist) {
      throw new Error("Client already exists");
    }

    const hashPassword = await hash(password, 10);

    return await prisma.users.create({
      data: {
        username,
        password: hashPassword,
      },
    });
  }
}
