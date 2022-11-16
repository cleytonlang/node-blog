import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateUser {
  email: string;
  password: string;
}
export class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateUser) {
    const user = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Email or password invalid!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or password invalid!");
    }

    const token = sign({ email }, "9736542c8472d85afaae7c729f943076", {
      subject: user.id,
      expiresIn: "1d",
    });

    return token;
  }
}
