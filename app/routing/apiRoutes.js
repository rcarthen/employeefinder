const employeeList = require('../data/employee.js');


module.exports = function(app) {

  // API Requests for /api/ employeeList

  // GET Request
  // This will be used to display a JSON of all possible employees.
  app.get('/api/employees', function(req, res) {
    res.json(employeeList);
  });

  // POST Request
 // POST routes /api/employees. This will be used to handle incoming survey results.
  app.post('/api/employees', function(req, res) {

    // Checks to make sure every property on the req.body is an employee
    // If it's not, returns with success: false and exits the function
    for(let key in req.body) {
      if(!sampleTable.hasOwnProperty(key)){
        return res.json({ success: false });
      };
    }
});














}