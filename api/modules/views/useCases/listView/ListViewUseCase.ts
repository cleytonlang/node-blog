import { prisma } from "../../../../database/prismaClient";

interface IFilterProps {
  ids?: string[];
}
export class ListViewUseCase {
  async list(ids: IFilterProps) {
    return await prisma.views.groupBy({
      where: { post_id: { in: ids } },
      by: ["post_id"],
      _count: {
        post_id: true,
      },
    });
  }
}
