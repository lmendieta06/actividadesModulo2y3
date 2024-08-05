import {Router} from "express";
import { loginService } from "../service/loginService.js";

export const routerLogin = Router();

routerLogin.post("/", loginService)