export interface Task {
  id: number;
  title: string;
  dueDate?: string; // Viene como string "YYYY-MM-DD" desde Spring
  done: boolean;
}

// Interfaz para el objeto que enviaremos al POST
export interface NewTask {
  title: string;
  dueDate?: string;
}