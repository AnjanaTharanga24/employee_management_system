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
    private Integer empAge;
    private String empEmail;
    private String empMobile;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private LocalDate dob;

    @ManyToOne
   private Department department;

    @OneToMany(mappedBy = "employee")
    private List<Dependent> dependentList;
}
