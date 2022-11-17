import { prisma } from "../../../../database/prismaClient";

interface IUpdatePost {
  title?: string;
  description?: string;
  user_id: string;
  id: string;
  deleted?: boolean;
}

export class UpdatePostUseCase {
  async update({
    title,
    description,
    user_id,
    id,
    deleted = false,
  }: IUpdatePost) {
    const userExist = await prisma.posts.findFirst({
      where: {
        id: id,
        user_id,
      },
    });

    if (!userExist) {
      throw new Error("Only the owner of the post can change");
    }

    const deletedPost = deleted ? true : false;

    const items = { deleted: deletedPost } as IUpdatePost;
    if (title) {
      items.title = title;
    }
    if (description) {
      items.description = description;
    }

    return await prisma.posts.update({
      where: {
        id,
      },
      data: items,
    });
  }
}
