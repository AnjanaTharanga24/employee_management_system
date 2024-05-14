package com.example.employeeapi.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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

    @ManyToOne(fetch = FetchType.LAZY)
    private Department department;

    @OneToMany(mappedBy = "employee")
    @JsonBackReference
    private List<Dependent> dependentList;
}