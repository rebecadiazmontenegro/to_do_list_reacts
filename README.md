# Lista TO-DO con React

![header](./src/assets/header_readme.png)

---

### ⏳ Flujo de la aplicación:

1. Nada más empezar tendremos un input y un botón. El botón tendrá el texto ADD
2. Si hemos escrito algo en el input y hacemos click sobre el botón ADD, se añadirá un item debajo del input.
3. Cuando un item sea añadido, se borrará inmediatamente lo que habíamos escrito en el input.
4. Se debe hacer una precarga de tareas de un JSON de datos
El botón de RESET mostrará de nuevo sólo las tareas obtenidas de la precarga de datos

---

## 🚀 Instalación
```bash
git clone <tu-repo-url>

cd nombre-del-proyecto

npm install

npm start
```
---

## 📑 Requisitos Fase 1
| Requisito | Cumplido |
|-----------|----------|
| Formulario con input + botón | ✅ |
| Componente `List` que recorra listas de items | ✅ |
| Componente `Card` que contenga cada TO-DO | ✅ |
| Botón CLEAR para borrar todas las tareas | ✅ |
| Botón BORRAR asociado a cada tarea | ✅ |
| Botón RESET de tareas | ✅ |
| Dar estilo CSS a los componentes | ✅ |
| Flujo de la aplicación: ADD añade item y limpia input | ✅ |
| Precarga de tareas desde JSON | ✅ |

---

## 📑 Requisitos Fase 2
| Requisito | Cumplido |
|-----------|----------|
| Botón ADD solo aparece si hay texto en input | ✅ |
| Al añadir un item, limpia input y desaparece ADD | ✅ |
| Precarga de tareas usando lifecycle (`useEffect`) | ✅ |
| Input se vacía tras 20 segundos si no se envía | ✅ |
| Mensaje "tarea añadida" durante 5 segundos | ✅ |
| Validación: mínimo 6 caracteres en título | ✅ |

---

## 📑 Requisitos Fase 3
| Requisito | Cumplido |
|-----------|----------|
| Editar tarea con formulario prellenado | ✅ |
| Marcar tareas como completadas (tachar) | ✅ |
| Eliminar tareas | ✅ |

---

![header](./src/assets/mock-up.png)

## 🔧 Tecnologías utilizadas

- React
- CSS 
- Hooks: useState, useEffect
- JSON para datos precargados

## 👩🏼‍💻 Participantes

- Rebeca Díaz-Montenegro Sánchez
    - Linkdin: https://www.linkedin.com/in/rebeca-diaz-montenegro-s%C3%A1nchez-818515245/