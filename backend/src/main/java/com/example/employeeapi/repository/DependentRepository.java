package com.example.employeeapi.repository;

import com.example.employeeapi.model.Dependent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DependentRepository extends JpaRepository<Dependent , Long> {
}
