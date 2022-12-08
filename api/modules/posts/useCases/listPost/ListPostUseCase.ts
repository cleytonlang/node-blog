import { prisma } from "../../../../database/prismaClient";

interface IFilterProps {
  user_id?: string;
}
export class ListPostUseCase {
  async list(user_id: IFilterProps) {
    const filter = {
      deleted: false,
    };

    if (user_id) {
      filter.user_id = user_id;
    }

    return await prisma.posts.findMany({
      where: filter,
      select: {
        id: true,
        user_id: true,
        title: true,
        description: true,
      },
    });
  }
}
