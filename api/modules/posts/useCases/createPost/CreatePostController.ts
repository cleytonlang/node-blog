import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";

export class CreatePostController {
  async create(request: Request, response: Response) {
    const { title, description } = request.body;
    const user_id = request.user_id;
    const createPostUseCase = new CreatePostUseCase();
    const result = await createPostUseCase.create({ title, description, user_id });

    return response.json(result);
  }
}
