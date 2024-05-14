package com.example.employeeapi.controller.request;

import com.example.employeeapi.model.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DepartmentRequest {

    private Long id;
    private String depId;
    private String depName;
}
