package com.example.employeeapi.controller.response;

import com.example.employeeapi.model.Gender;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EmployeeResponse {

    private Long id;
    private String empName;
    private Integer empAge;
    private String empMobile;
    private String empEmail;
    private Gender gender;
    private LocalDate dob;
}
