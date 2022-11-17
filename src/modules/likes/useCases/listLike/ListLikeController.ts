import { Request, Response } from "express";
import { ListLikeUseCase } from "./ListLikeUseCase";

export class ListLikeController {
  async list(request: Request, response: Response) {
    const { ids } = request.body;
    const listLikeUseCase = new ListLikeUseCase();
    const result = await listLikeUseCase.list(ids);

    return response.json(result);
  }
}
