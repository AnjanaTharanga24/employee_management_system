package com.example.employeeapi.service;

import com.example.employeeapi.controller.request.EmployeeRequest;
import com.example.employeeapi.controller.response.EmployeeResponse;

public interface EmployeeService {

    public EmployeeResponse registerEmployee(EmployeeRequest employeeRequest);

}
