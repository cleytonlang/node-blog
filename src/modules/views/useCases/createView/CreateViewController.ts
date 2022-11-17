import { Request, Response } from "express";
import { CreateViewUseCase } from "./CreateViewUseCase";

export class CreateViewController {
  async create(request: Request, response: Response) {
    const { post_id } = request.body;
    const createViewUseCase = new CreateViewUseCase();
    const result = await createViewUseCase.create(post_id);

    return response.json(result);
  }
}
