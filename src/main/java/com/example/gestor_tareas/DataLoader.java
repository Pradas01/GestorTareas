/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.example.gestor_tareas;

import java.time.LocalDate;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.gestor_tareas.model.Task;
import com.example.gestor_tareas.repository.TaskRepository;

/**
 *
 * @author alexp
 */
@Component
public class DataLoader implements CommandLineRunner {

    private final TaskRepository repository;

    public DataLoader(TaskRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        repository.deleteAll();

        Task t1 = new Task();
        t1.setTitle("Comprar leche");
        t1.setDueDate(LocalDate.now().plusDays(1));

        Task t2 = new Task();
        t2.setTitle("Estudiar Spring Boot");
        t2.setDueDate(LocalDate.now().plusDays(3));

        Task t3 = new Task();
        t3.setTitle("Hacer ejercicio");
        t3.setDone(true);

        Task t4 = new Task();
        t4.setTitle("Llamar a mamá");

        repository.save(t1);
        repository.save(t2);
        repository.save(t3);
        repository.save(t4);
    }
}
