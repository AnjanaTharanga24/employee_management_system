package com.example.employeeapi.controller.response;

import com.example.employeeapi.model.Employee;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DepartmentResponse {

    private Long id;
    private String depId;
    private String depName;
}
