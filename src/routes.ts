import { Router } from "express";
import { AuthenticateUserController } from "./modules/account/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./modules/users/useCases/createUser/CreateUserController";

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

routes.post("/authenticate", authenticateUserController.authenticate);
routes.post("/user/", createUserController.create);
routes.put("/user/:id", createUserController.update);
export { routes };
