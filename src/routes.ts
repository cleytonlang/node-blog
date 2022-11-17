import { Router } from "express";
import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateUser";

import { AuthenticateUserController } from "./modules/account/authenticateUser/AuthenticateUserController";

import { ListUserController } from "./modules/users/useCases/listUser/ListUserController";
import { CreateUserController } from "./modules/users/useCases/createUser/CreateUserController";
import { UpdateUserController } from "./modules/users/useCases/updateUser/UpdateUserController";

import { ListPostController } from "./modules/posts/useCases/listPost/ListPostController";
import { CreatePostController } from "./modules/posts/useCases/createPost/CreatePostController";
import { UpdatePostController } from "./modules/posts/useCases/updatePost/UpdatePostController";

import { CreateViewController } from "./modules/views/useCases/createView/CreateViewController";
import { ListViewController } from "./modules/views/useCases/listView/ListViewController";

import { CreateLikeController } from "./modules/likes/useCases/createLike/CreateLikeController";
import { ListLikeController } from "./modules/likes/useCases/listLike/ListLikeController";

const routes = Router();

const authenticateUserController = new AuthenticateUserController();
const listUserController = new ListUserController();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();

const listPostController = new ListPostController();
const createPostController = new CreatePostController();
const updatePostController = new UpdatePostController();

const createViewController = new CreateViewController();
const listViewController = new ListViewController();

const createLikeController = new CreateLikeController();
const listLikeController = new ListLikeController();

routes.post("/authenticate", authenticateUserController.authenticate);

routes.get("/user/", ensureAuthenticateUser, listUserController.list);
routes.post("/user/", createUserController.create);
routes.put("/user/:id", ensureAuthenticateUser, updateUserController.update);

routes.get("/post/", listPostController.list);
routes.get("/post/filter", ensureAuthenticateUser, listPostController.filter);
routes.post("/post/", ensureAuthenticateUser, createPostController.create);
routes.put("/post/:id", ensureAuthenticateUser, updatePostController.update);

routes.patch("/post/view", listViewController.list);
routes.post("/post/view", createViewController.create);

routes.patch("/post/like", listLikeController.list);
routes.post("/post/like", createLikeController.create);

export { routes };
