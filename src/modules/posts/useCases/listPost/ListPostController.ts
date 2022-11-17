import { Request, Response } from "express";
import { ListPostUseCase } from "./ListPostUseCase";

export class ListPostController {
  async list(request: Request, response: Response) {
    const listPostUseCase = new ListPostUseCase();
    const result = await listPostUseCase.list();

    return response.json(result);
  }

  async filter(request: Request, response: Response) {
    const listPostUseCase = new ListPostUseCase();
    const result = await listPostUseCase.list(request.user_id);

    return response.json(result);
  }
}
