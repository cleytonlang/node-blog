import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";

export class ListUserController {
  async list(request: Request, response: Response) {
    const listUserUseCase = new ListUserUseCase();
    const result = await listUserUseCase.list();

    return response.json(result);
  }
}
