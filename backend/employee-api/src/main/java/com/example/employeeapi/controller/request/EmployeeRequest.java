package com.example.employeeapi.controller.request;

import com.example.employeeapi.model.Gender;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeRequest {
    private Long id;
    private String empName;
    private Integer empAge;
    private String empEmail;
    private String empMobile;
    private Gender gender;
    private LocalDate dob;
    private Long departmentId;
    private List<DependentRequest> dependentRequests; // Changed to DependentRequest
}