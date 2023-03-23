package com.example.registrations.employee;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "employee")
public class EmployeeController {

    private final EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping
    public ResponseEntity getAll() {
        return ResponseEntity.ok(employeeService.findAll());
    }

    @GetMapping(path = "{id}")
    public ResponseEntity getById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(employeeService.findById(id));
    }

    @PostMapping
    public ResponseEntity save(@RequestBody @Valid Employee employee) {
        return ResponseEntity.ok(employeeService.save(employee));
    }

    @PutMapping
    public ResponseEntity update(@RequestBody @Valid Employee employee) {
        return ResponseEntity.ok(employeeService.update(employee));
    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(employeeService.deleteById(id));
    }

}
