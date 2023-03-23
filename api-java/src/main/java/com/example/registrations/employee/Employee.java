package com.example.registrations.employee;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import java.io.Serializable;

@Getter
@Setter
@Entity
@Table(name = "employee")
public class Employee implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 30)
    @NotBlank(message = "O campo name deve ser informado.")
    @Length(min = 2, max = 30, message = "O campo name deve possuir entre {min} e {max} caracteres.")
    private String name;

    @Column(nullable = false, length = 50)
    @NotBlank(message = "O campo surname deve ser informado.")
    @Length(min = 2, max = 50, message = "O campo surname deve possuir entre {min} e {max} caracteres.")
    private String surname;

    @Column(nullable = false)
    @NotBlank(message = "O campo email deve ser informado.")
    private String email;

    private Long nis;

}
