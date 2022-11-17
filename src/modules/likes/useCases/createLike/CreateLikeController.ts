import { Request, Response } from "express";
import { CreateLikeUseCase } from "./CreateLikeUseCase";

export class CreateLikeController {
  async create(request: Request, response: Response) {
    const { post_id } = request.body;
    const createLikeUseCase = new CreateLikeUseCase();
    const result = await createLikeUseCase.create(post_id);

    return response.json(result);
  }
}
