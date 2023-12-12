const express = require('express');
const fs = require('fs');
const app = express();

const employeeJSONBuffer = fs.readFileSync('employee.json');
const employee = JSON.parse(employeeJSONBuffer);


app.get('/employees', (req, res) => {   //employees is the path/ trigger for the request and res.json is the response with a JSON of employees
    res.json(employee);
});


app.get('/employees/:employeeID', (req, res) => {
    const requestedEmployeeID = req.params.employeeID;
    const requestedEmployee = employee.find(emp => emp.employeeID === requestedEmployeeID);

    if (requestedEmployee) {
        res.json(requestedEmployee);
    } else {
        res.status(404).json({ error: 'Employee not found' });
    }
});

app.listen(6000, (err) => {
    if (err) {
        console.log('Error starting server');
    } else {
        console.log('Server is running on port 8000');
    }
});
