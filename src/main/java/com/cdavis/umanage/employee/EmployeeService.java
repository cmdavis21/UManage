package com.cdavis.curapatientChallenge.employee;

import org.springframework.dao.DataAccessException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepo) { employeeRepository = employeeRepo; }

    // --- CRUD applications --- //

    // GET / READ employees
    public List<Employee> findAllEmployees() { return employeeRepository.findAll(); }

    // GET / Search for employees
    public List<Employee> searchEmployees(String query) {
        if (query != null) {
            try {
                // attempt to parse the query as an integer (ID)
                int id = Integer.parseInt(query);
                Optional<Employee> employee = employeeRepository.findById(id);
                if (employee.isPresent()) {
                    List<Employee> result = new ArrayList<>();
                    result.add(employee.get());
                    return result;
                } else {
                    return Collections.emptyList(); // No employee found with the given ID
                }
            } catch (NumberFormatException e) {
                // if parsing as an integer fails, assume it's a name query
                List<Employee> employees = employeeRepository.findAllByName(query);
                return employees; // no employee found with the given name
            }
        } else {
            // if query is null, return all employees
            return employeeRepository.findAll();
        }
    }

    // POST / CREATE new employees
    public Employee saveEmployee(Employee employee) {
        validateEmployee(employee);

        try {
            employeeRepository.save(employee);
        } catch (DataIntegrityViolationException e) {
            // handle database constraint violation (e.g., duplicate key)
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Employee data integrity violation", e);
        } catch (DataAccessException e) {
            // handle other database-related exceptions
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Database error", e);
        } catch (Exception e) {
            // handle other unexpected exceptions
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "An error occurred while saving employee", e);
        }
        return employee;
    }

    // PUT / UPDATE an employee information
    public void updateEmployee(int id, Employee updateEmployee) {
        validateEmployee(updateEmployee);

        Optional<Employee> existingEmployeeOptional = employeeRepository.findById(id);

        if (existingEmployeeOptional.isPresent()) {
            Employee existingEmployee = existingEmployeeOptional.get();

            existingEmployee.setName(updateEmployee.getName());
            existingEmployee.setPhoneNumber(updateEmployee.getPhoneNumber());
            existingEmployee.setSupervisors(updateEmployee.getSupervisors());

        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Employee with id " + id + " was not found");
        }
    }

    // DELETE an employee
    public void deleteEmployee(int id) { employeeRepository.deleteById(id); }

    // validateEmployee method
    private void validateEmployee(Employee employee) {
        if (employee.getName() == null || employee.getName().isEmpty()) {
            throw new IllegalArgumentException("Employee name must not be empty");
        } else if (employee.getPhoneNumber() == null || employee.getPhoneNumber().isEmpty() || employee.getSupervisors() == null || employee.getSupervisors().isEmpty()) {
            throw new IllegalArgumentException("Employee information must be completed");
        }
    }
}
