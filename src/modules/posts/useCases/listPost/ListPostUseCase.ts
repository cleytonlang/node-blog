import { prisma } from "../../../../database/prismaClient";

export class ListPostUseCase {
  async list() {
    return await prisma.posts.findMany({
      where: {
        deleted: false,
      },
      select: {
        id: true,
        title: true,
        description: true,
      },
    });
  }
}
