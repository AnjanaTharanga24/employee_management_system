package com.example.employeeapi.controller.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DependentRequest {

    private Long id;
    private String dependentName;
    private Integer dependentAge;
    private String contactNumber;
}
