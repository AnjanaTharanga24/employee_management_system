package com.example.employeeapi.controller;

import com.example.employeeapi.controller.request.DepartmentRequest;
import com.example.employeeapi.controller.response.DepartmentResponse;
import com.example.employeeapi.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class DepartmentController {

    private DepartmentService departmentService;

    @PostMapping("/departments")
    private DepartmentResponse createDepartment(@RequestBody DepartmentRequest departmentRequest){
        return departmentService.createDepartment(departmentRequest);
    }
}
