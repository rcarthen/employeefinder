const express = require('express');
const path = ('path');

const employeeList = require('../data/employee.js');

module.exports = function (app) {

  // GET Request will be used to display a JSON of all possible employees.
  app.get('/api/employees', function (req, res) {
    res.json(employeeList);
  });

  //POST Request will be used to display a random employee.
  app.post('/api/employees', function (req, res) {
    console.log(req.body);
    let randomUser = Math.floor(Math.random() * employeeList.length)
    res.json(employeeList[randomUser]);

  });


}