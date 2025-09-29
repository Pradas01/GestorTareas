// src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ⬅️ Necesario para [(ngModel)]

// Importamos el servicio y los modelos

import { HttpErrorResponse } from '@angular/common/http'; // Para manejo de errores
import { NewTask, Task } from './models/task.model';
import { TaskService } from './task';


@Component({
  selector: 'app-root',
  standalone: true,
  // ⬅️ Importamos aquí los módulos necesarios
  imports: [
    CommonModule, 
    FormsModule // Habilita el binding de formularios
  ], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  
  tasks: Task[] = [];
  newTask: NewTask = { title: '', dueDate: undefined };
  currentStatus: 'all' | 'pending' | 'done' = 'all';

  successMessage: string = '';
  errorMessage: string = '';

  // Inyección de dependencias
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  // Carga y filtra tareas
  loadTasks(): void {
    this.taskService.getTasks(this.currentStatus).subscribe({
      next: (data) => {
        this.tasks = data;
      },
      error: (err) => {
        this.showError('❌ Error al conectar con el Backend (Revise el puerto 8080).');
        console.error('Error al cargar tareas:', err);
      }
    });
  }

  // Maneja el envío del formulario POST
  onSubmit(): void {
    this.clearMessages();
    
    if (!this.newTask.title || !this.newTask.title.trim()) {
      this.showError('El título es obligatorio.');
      return;
    }

    this.taskService.createTask(this.newTask).subscribe({
      next: (task) => {
        this.showSuccess(`✅ Tarea creada: '${task.title}'`);
        this.newTask = { title: '', dueDate: undefined }; // Limpiar formulario
        this.loadTasks(); // Refrescar lista
      },
      error: (err: HttpErrorResponse) => {
        this.showError('❌ Error al crear la tarea. Revise el formato o el Backend.');
        console.error('Error al crear tarea:', err);
      }
    });
  }

  // Función para cambiar el filtro
  filterTasks(status: 'all' | 'pending' | 'done'): void {
    if (this.currentStatus !== status) {
        this.currentStatus = status;
        this.loadTasks();
    }
  }
  
  // Helpers UX
  private showSuccess(message: string): void { this.successMessage = message; setTimeout(() => this.successMessage = '', 3000); }
  private showError(message: string): void { this.errorMessage = message; setTimeout(() => this.errorMessage = '', 5000); }
  private clearMessages(): void { this.successMessage = ''; this.errorMessage = ''; }
}