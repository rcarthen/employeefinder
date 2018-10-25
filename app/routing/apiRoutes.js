const express = require('express');

const employeeList = require('../data/employee.js');


module.exports = function (app) {

  // API Requests for /api/ employeeList

  // GET Request
  // This will be used to display a JSON of all possible employees.
  app.get('/api/employees', function (req, res) {
    console.log(employeeList);
    res.json(employeeList);
  });

  // POST Request
  // POST routes /api/employees. This will be used to handle incoming survey results.
  app.post('/api/employees', function (req, res) {
    console.log(req.body);
    res.redirect("/");
  });














}