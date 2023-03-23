package com.example.registrations.employee;

import com.example.generic.GenericResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    MessageSource messageSource;

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    public Employee findById(Long id) {
        Optional<Employee> employeeOptional = employeeRepository.findById(id);
        if (employeeOptional.isPresent())
            return employeeOptional.get();

        throw new ResponseStatusException(
                HttpStatus.NOT_FOUND,
                "Nenhum funcionário encontrado para o id informado."
        );
    }

    public Employee save(Employee employee) {
        return saveOrUpdate(employee);
    }

    public Employee update(Employee employee) {
        validateExistenceEmployee(employee.getId());
        return saveOrUpdate(employee);
    }

    private Employee saveOrUpdate(Employee employee) {
        return employeeRepository.save(employee);
    }

    private void validateExistenceEmployee(Long id) {
        if (!employeeRepository.existsById(id))
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND,
                    "{employee.NotFound}"
            );
    }

    public GenericResponse deleteById(Long id) {
        validateExistenceEmployee(id);
        employeeRepository.deleteById(id);
        return new GenericResponse("Registro deletado com sucesso.");
    }

}
