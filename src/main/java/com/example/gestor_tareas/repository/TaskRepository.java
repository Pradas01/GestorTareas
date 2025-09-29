/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package com.example.gestor_tareas.repository;

/**
 *
 * @author alexp
 */

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.gestor_tareas.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
    // Buscar tareas por estado (hechas o pendientes)
    List<Task> findByDone(boolean done);
}
