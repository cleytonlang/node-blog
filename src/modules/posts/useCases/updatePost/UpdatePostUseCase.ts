import { prisma } from "../../../../database/prismaClient";

interface IUpdatePost {
  title: string;
  description: string;
  user_id: string;
  post_id: string;
  deleted?: boolean;
}

export class UpdatePostUseCase {
  async update({
    title,
    description,
    user_id,
    post_id,
    deleted = false,
  }: IUpdatePost) {
    const userExist = await prisma.posts.findFirst({
      where: {
        id: post_id,
        user_id,
      },
    });

    if (!userExist) {
      throw new Error("Only the owner of the post can change");
    }

    const deletedPost = deleted ? true : false;

    return await prisma.posts.update({
      where: {
        id: post_id,
      },
      data: {
        title,
        description,
        deleted: deletedPost,
      },
    });
  }
}
