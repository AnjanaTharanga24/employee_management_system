package com.example.employeeapi.service.impl;

import com.example.employeeapi.controller.request.EmployeeRequest;
import com.example.employeeapi.controller.response.EmployeeResponse;
import com.example.employeeapi.model.Employee;
import com.example.employeeapi.repository.EmployeeRepository;
import com.example.employeeapi.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeResponse registerEmployee(EmployeeRequest employeeRequest) {

        Employee employee = new Employee();
        employee.setEmpName(employeeRequest.getEmpName());
        employee.setEmpAge(employeeRequest.getEmpAge());
        employee.setEmpEmail(employeeRequest.getEmpEmail());
        employee.setEmpMobile(employeeRequest.getEmpMobile());
        employee.setGender(employeeRequest.getGender());
        employee.setDob(employeeRequest.getDob());

        employeeRepository.save(employee);

        EmployeeResponse response = EmployeeResponse.builder()
                .id(employee.getId())
                .empName(employee.getEmpName())
                .empAge(employee.getEmpAge())
                .empEmail(employee.getEmpEmail())
                .empMobile(employee.getEmpMobile())
                .gender(employee.getGender())
                .dob(employee.getDob())
                .build();

        return response;
    }
}
