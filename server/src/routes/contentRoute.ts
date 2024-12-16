import express from "express"
import { createContent, getContent, removeContent, shareBrain } from "../controller/contentController";
import { auth } from "../middleware/authMiddleware";

const contentRouter = express.Router();

contentRouter.route('/content').post(auth, createContent).get(auth, getContent).delete(removeContent)

contentRouter.get('/brain/Share', auth, shareBrain)
contentRouter.get('/brain/:ShareLink')

export {contentRouter}
