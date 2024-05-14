package com.example.employeeapi.service;

import com.example.employeeapi.controller.request.DepartmentRequest;
import com.example.employeeapi.controller.response.DepartmentResponse;

public interface DepartmentService {

    DepartmentResponse createDepartment(DepartmentRequest departmentRequest);
}
