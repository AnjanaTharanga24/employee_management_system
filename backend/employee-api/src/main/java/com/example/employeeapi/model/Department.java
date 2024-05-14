package com.example.employeeapi.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "department")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String depId;
    private String depName;

    @OneToMany(mappedBy = "department")
    private List<Employee> employeeList;
}
