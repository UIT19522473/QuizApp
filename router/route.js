import { Router } from "express";
import * as controller from "../controllers/controller.js";

const router = Router();

//question routes
router
  .route("/questions")
  .get(controller.getQuestions) //get request
  .post(controller.insertQuestions) //post request
  .delete(controller.dropQuestions);

router
  .route("/result")
  .get(controller.getResult)
  .post(controller.storeResult)
  .delete(controller.dropResult);

export default router;
