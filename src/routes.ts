import { Router } from "express";
import { AuthenticateUserController } from "./modules/account/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./modules/users/useCases/createUser/CreateUserController";
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const routes = Router();

routes.post("/authenticate", authenticateUserController.handle);
routes.post("/user/", createUserController.handle);
export { routes };
