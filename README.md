# GESTOR DE TAREAS (Spring Boot + Angular Standalone)

Este proyecto implementa un gestor de tareas simple, utilizando un **Backend REST** con Spring Boot (Java) y un **Frontend SPA** con Angular Standalone.

---

## Requisitos del Sistema

Necesitas tener instalado lo siguiente:

1.  **Java Development Kit (JDK) 17+**
2.  **Node.js 18+**
3.  **Angular CLI** (v17+)

---

## Configuración y Endpoints

| Componente | Puerto | URL Base del API | Notas |
| :--- | :--- | :--- | :--- |
| **Backend** | `8080` | `http://localhost:8080/api` | Usa H2 en memoria. CORS habilitado para 4200. |
| **Frontend** | `4200` | N/A | Consume la API del Backend. |

### Endpoints

* `GET /api/tasks?status=all|pending|done`
* `POST /api/tasks`

---

## Pasos de Ejecución

Debes iniciar el Backend primero.

### 1. Iniciar el Backend (Spring Boot)

1.  Abre la terminal en la **raíz del proyecto** (donde está el `pom.xml`).
2.  Ejecuta:

```bash
./mvnw spring-boot:run

### para el frontend 
cd <Carpeta-del-Frontend>  solo si no estas ya 

npm install si es necesario si no
npm start 
# o ng serve --open

http://localhost:4200
