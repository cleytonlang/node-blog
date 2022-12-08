import { prisma } from "../../../../database/prismaClient";

interface ICreatePost {
  title: string;
  description: string;
  user_id: string;
}

export class CreatePostUseCase {
  async create({ title, description, user_id }: ICreatePost) {
    return await prisma.posts.create({
      data: {
        title,
        description,
        user_id,
      },
    });
  }
}
