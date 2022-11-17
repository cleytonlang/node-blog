import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface IUpdateUser {
  name?: string;
  email: string;
  password?: string;
  user_id: string;
}

export class UpdateUserUseCase {
  async update({ name, email, password, user_id }: IUpdateUser) {
    const userExist = await prisma.users.findFirst({
      where: {
        email,
        id: user_id,
      },
    });

    if (!userExist) {
      throw new Error("User not exists");
    }

    const fields = {} as IUpdateUser;
    if (name) {
      fields.name = name;
    }
    if (password) {
      const hashPassword = await hash(password, 10);
      fields.password = hashPassword;
    }

    return await prisma.users.update({
      where: {
        email: email,
      },
      data: fields,
    });
  }
}
