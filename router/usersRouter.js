const express = require('express');
const bodyParser = require('body-parser')
const usersController = require('../controller/usersController');
const urlencodedParser = bodyParser.urlencoded({ extended: true })

const userRouter = express.Router();

userRouter
         .route('/')
         .post(urlencodedParser,usersController.addUsers)
         .get(usersController.getAllUser);
    
userRouter
         .route('/:id')
         .get(usersController.getAllDataUserById)
         .patch(urlencodedParser,usersController.updateDataUserById)
         .delete(usersController.deleteDataUserById)

module.exports = userRouter;