import { Router } from "express";
import getUserInfo from "../controllers/familyController";

const routes = Router();

routes.post('/', getUserInfo);

export default routes;