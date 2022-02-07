const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const {recordSchema} = require('../models/user');

// This section will help you get a list of all the records.
router.get("/", (req, res) => {
    recordSchema.find((error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });
    
    
router.route('/edit-user/:id').get((req, res) => {
    recordSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  
  // Update Details
  router.route('/update-user/:id').put((req, res, next) => {
    recordSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('User details updated successfully !')
      }
    })
  })
  // Delete Student
  router.route('/delete-user/:id').delete((req, res, next) => {
    recordSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })

  module.exports = router;
