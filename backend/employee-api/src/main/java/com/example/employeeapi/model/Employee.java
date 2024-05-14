package com.example.employeeapi.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

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

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private LocalDate DOB;
}
