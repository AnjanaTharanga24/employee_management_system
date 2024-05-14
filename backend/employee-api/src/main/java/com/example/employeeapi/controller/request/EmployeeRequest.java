package com.example.employeeapi.controller.request;
import com.example.employeeapi.model.Gender;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeRequest {

    private Long id;
    private String empName;
    private String empAge;
    private String empEmail;
    private Gender gender;
    private LocalDate DOB;
}
