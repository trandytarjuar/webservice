const express = require('express');
const bodyParser = require('body-parser')
const customerController = require('../controller/customerController');
const urlencodedParser = bodyParser.urlencoded({ extended: true })

const customerRouter = express.Router();

customerRouter
         .route('/')
         .post(urlencodedParser,customerController.postDataCustomer)
         .get(customerController.getAllDataCustomer);
    
customerRouter
         .route('/:id')
          .get(customerController.getAllDataCustomerByNama)         
         .patch(urlencodedParser,customerController.updateDataCustomerById)
         .delete(customerController.deleteDataCustomerById)

 customerRouter
         .route('/:address')
         .get(customerController.getAllDataCustomerByAddress)

        

module.exports = customerRouter;