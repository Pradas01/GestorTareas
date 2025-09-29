import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task, NewTask } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // La URL base del Backend
  private apiUrl = 'http://localhost:8080/api/tasks';

  constructor(private http: HttpClient) { }

  // 1. GET /api/tasks?status=all|pending|done
  getTasks(status: 'all' | 'pending' | 'done' = 'all'): Observable<Task[]> {
    let params = new HttpParams();
    
    // Configura el filtro para la query string
    if (status !== 'all') {
      params = params.set('status', status);
    }
    
    return this.http.get<Task[]>(this.apiUrl, { params });
  }

  // 2. POST /api/tasks
  createTask(task: NewTask): Observable<Task> {
    const payload = {
        title: task.title,
        dueDate: task.dueDate || undefined // Evita enviar campo si está vacío
    };
    return this.http.post<Task>(this.apiUrl, payload);
  }
}