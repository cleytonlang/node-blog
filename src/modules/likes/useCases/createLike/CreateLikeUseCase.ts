import { prisma } from "../../../../database/prismaClient";

export class CreateLikeUseCase {
  async create(post_id: string) {
    return await prisma.likes.create({
      data: {
        post_id,
      },
    });
  }
}
