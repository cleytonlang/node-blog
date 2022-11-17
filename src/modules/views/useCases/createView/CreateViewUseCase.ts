import { prisma } from "../../../../database/prismaClient";

export class CreateViewUseCase {
  async create(post_id: string) {
    return await prisma.views.create({
      data: {
        post_id,
      },
    });
  }
}
