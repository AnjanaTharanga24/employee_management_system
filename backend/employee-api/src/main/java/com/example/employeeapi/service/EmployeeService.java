package com.example.employeeapi.service;

import com.example.employeeapi.controller.request.EmployeeRequest;
import com.example.employeeapi.controller.response.EmployeeResponse;
import com.example.employeeapi.exception.DepartmentNotFoundException;

import java.util.List;

public interface EmployeeService {

    EmployeeResponse registerEmployee(EmployeeRequest employeeRequest) throws DepartmentNotFoundException;

}
