import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async create(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const createUserUseCase = new CreateUserUseCase();
    const result = await createUserUseCase.create({ name, email, password });

    return response.json(result);
  }

  async update(request: Request, response: Response) {
    const { name, email, password } = request.body;
    const createUserUseCase = new CreateUserUseCase();
    const result = await createUserUseCase.update({ name, email, password });

    return response.json(result);
  }
}
