package com.example.employeeapi.service.impl;

import com.example.employeeapi.controller.request.DependentRequest;
import com.example.employeeapi.controller.request.EmployeeRequest;
import com.example.employeeapi.controller.response.EmployeeResponse;
import com.example.employeeapi.exception.DepartmentNotFoundException;
import com.example.employeeapi.model.Department;
import com.example.employeeapi.model.Dependent;
import com.example.employeeapi.model.Employee;
import com.example.employeeapi.repository.DepartmentRepository;
import com.example.employeeapi.repository.DependentRepository;
import com.example.employeeapi.repository.EmployeeRepository;
import com.example.employeeapi.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;
    private DepartmentRepository departmentRepository;
    private DependentRepository dependentRepository;

    @Override
    public EmployeeResponse registerEmployee(EmployeeRequest employeeRequest) throws DepartmentNotFoundException {
        Employee employee = new Employee();
        employee.setEmpName(employeeRequest.getEmpName());
        employee.setEmpAge(employeeRequest.getEmpAge());
        employee.setEmpEmail(employeeRequest.getEmpEmail());
        employee.setEmpMobile(employeeRequest.getEmpMobile());
        employee.setGender(employeeRequest.getGender());
        employee.setDob(employeeRequest.getDob());

        Optional<Department> departmentOptional = departmentRepository.findById(employeeRequest.getDepartmentId());

        if (!departmentOptional.isPresent()) {
            throw new DepartmentNotFoundException("department not found with id " + employeeRequest.getDepartmentId());
        }

        Department department = departmentOptional.get();
        employee.setDepartment(department);

        // Create a list of Dependent objects from the dependentRequests
        List<Dependent> dependents = new ArrayList<>();
        if (employeeRequest.getDependentRequests() != null) {
            for (DependentRequest dependentRequest : employeeRequest.getDependentRequests()) {
                Dependent dependent = new Dependent();
                dependent.setDependentName(dependentRequest.getDependentName());
                dependent.setDependentAge(dependentRequest.getDependentAge());
                dependent.setContactNumber(dependentRequest.getContactNumber());
                dependent.setEmployee(employee); // Set the employee for the dependent
                dependents.add(dependent);
            }
        }
        employee.setDependentList(dependents);

        // Save the employee first
        Employee savedEmployee = employeeRepository.save(employee);

        // Save the dependents
        List<Dependent> savedDependents = new ArrayList<>();
        for (Dependent dependent : dependents) {
            dependent.setEmployee(savedEmployee); // Set the saved employee for the dependent
            Dependent savedDependent = dependentRepository.save(dependent);
            savedDependents.add(savedDependent);
        }

        EmployeeResponse response = EmployeeResponse.builder()
                .id(savedEmployee.getId())
                .empName(savedEmployee.getEmpName())
                .empAge(savedEmployee.getEmpAge())
                .empEmail(savedEmployee.getEmpEmail())
                .empMobile(savedEmployee.getEmpMobile())
                .gender(savedEmployee.getGender())
                .dob(savedEmployee.getDob())
                .department(savedEmployee.getDepartment())
                .dependents(savedDependents)
                .build();

        return response;
    }
}