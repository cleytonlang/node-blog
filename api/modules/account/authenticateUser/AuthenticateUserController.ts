import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  async authenticate(request: Request, response: Response) {
    const { email, password } = request.body;
    const authenticateUserUseCase = new AuthenticateUserUseCase();
    const result = await authenticateUserUseCase.execute({
      email,
      password,
    });

    return response.json(result);
  }
}
