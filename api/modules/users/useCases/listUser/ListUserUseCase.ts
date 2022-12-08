import { prisma } from "../../../../database/prismaClient";

export class ListUserUseCase {
  async list() {
    return await prisma.users.findMany({
      select: {
        name: true,
        email: true,
      },
    });
  }
}
