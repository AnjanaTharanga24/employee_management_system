package com.example.employeeapi.controller.response;

import com.example.employeeapi.model.Department;
import com.example.employeeapi.model.Dependent;
import com.example.employeeapi.model.Gender;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
public class EmployeeResponse {
    private Long id;
    private String empName;
    private Integer empAge;
    private String empEmail;
    private String empMobile;
    private Gender gender;
    private LocalDate dob;
    private Department department;
    private List<Dependent> dependents;
}