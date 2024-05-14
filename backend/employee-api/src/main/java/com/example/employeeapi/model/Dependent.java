package com.example.employeeapi.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "dependent")
public class Dependent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String dependentName;
    private Integer dependentAge;
    private String contactNumber;

    @ManyToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "id")
    private Employee employee;
}