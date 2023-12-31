package com.cdavis.umanage.employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    Employee findByName(String name);

    List<Employee> findAllByName(String query);

    Optional<Employee> findById(int id);

    List<Employee> findBySupervisors(String supervisors);
}
