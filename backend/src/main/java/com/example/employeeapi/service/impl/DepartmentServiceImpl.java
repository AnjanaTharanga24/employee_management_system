package com.example.employeeapi.service.impl;

import com.example.employeeapi.controller.request.DepartmentRequest;
import com.example.employeeapi.controller.response.DepartmentResponse;
import com.example.employeeapi.model.Department;
import com.example.employeeapi.repository.DepartmentRepository;
import com.example.employeeapi.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {
    private DepartmentRepository departmentRepository;

    @Override
    public DepartmentResponse createDepartment(DepartmentRequest departmentRequest) {

        Department department = new Department();
        department.setDepId(departmentRequest.getDepId());
        department.setDepName(departmentRequest.getDepName());

        departmentRepository.save(department);

        DepartmentResponse response = DepartmentResponse.builder()
                .id(department.getId())
                .depId(department.getDepId())
                .depName(department.getDepName())
                .build();

        return response;
    }
}
