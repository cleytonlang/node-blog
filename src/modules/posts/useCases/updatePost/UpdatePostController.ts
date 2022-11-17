import { Request, Response } from "express";
import { UpdatePostUseCase } from "./UpdatePostUseCase";

export class UpdatePostController {
  async update(request: Request, response: Response) {
    const { title, description, post_id, deleted } = request.body;
    const { id } = request.params;
    const user_id = request.user_id;

    const updatePostUseCase = new UpdatePostUseCase();
    const result = await updatePostUseCase.update({
      title,
      description,
      user_id,
      id,
      deleted,
    });

    return response.json(result);
  }
}
