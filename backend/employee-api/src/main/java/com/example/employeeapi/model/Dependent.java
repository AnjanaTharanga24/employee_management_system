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
    private String dependentAge;
    private String contactNumber;

    @ManyToOne
    private Employee employee;
}
