import { Request, Response } from "express";
import { ListViewUseCase } from "./ListViewUseCase";

export class ListViewController {
  async list(request: Request, response: Response) {
    const { ids } = request.body;
    const listViewUseCase = new ListViewUseCase();
    const result = await listViewUseCase.list(ids);

    return response.json(result);
  }
}
