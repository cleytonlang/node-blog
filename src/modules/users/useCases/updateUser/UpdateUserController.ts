import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  async update(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const user_id = request.user_id;
    const updateUserUseCase = new UpdateUserUseCase();
    const result = await updateUserUseCase.update({ name, email, password, user_id });

    return response.json(result);
  }
}
