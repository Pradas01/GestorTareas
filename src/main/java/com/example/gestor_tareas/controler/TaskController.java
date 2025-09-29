/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.example.gestor_tareas.controler;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.gestor_tareas.model.Task;
import com.example.gestor_tareas.repository.TaskRepository;



/**
 *
 * @author alexp
 */

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "http://localhost:4200") // permite peticiones desde Angular
public class TaskController {
    private final TaskRepository repository;

    public TaskController(TaskRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Task> getTasks(@RequestParam(defaultValue = "all") String status) {
        return switch (status) {
            case "done" -> repository.findByDone(true);
            case "pending" -> repository.findByDone(false);
            default -> repository.findAll();
        };
    }

    @PostMapping
    public ResponseEntity<?> createTask( @RequestBody Task task) {
        if (task.getTitle() == null || task.getTitle().isBlank()) {
            return ResponseEntity.badRequest().body("El título es obligatorio");
        }
        Task saved = repository.save(task);
        return ResponseEntity
                .created(URI.create("/api/tasks/" + saved.getId()))
                .body(saved);
    }
}
