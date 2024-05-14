package com.example.employeeapi.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String empName;
    private String empAge;
    private String empEmail;
    private String empMobile;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private LocalDate DOB;

    @OneToMany(mappedBy = "employee")
    private List<Department> departmentList;

    @OneToMany(mappedBy = "employee")
    private List<Dependent> dependentList;
}
