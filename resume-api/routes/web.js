import express from "express";
import stucontroller from '../controllers/stucontroller.js'
import upload from "../middleware/upload.js";
const router=express.Router();

//route lvl middleware for parsing multiport data
router.use('/',upload.fields([{name:'pimage',maxCount:1},{name:'rdoc',maxCount:1}]))

router.post('/',stucontroller.saveprofile)
 router.get('/list',stucontroller.show)

export default router    