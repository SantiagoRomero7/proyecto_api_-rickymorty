# 🌌 Rick and Morty API Explorer

Proyecto web interactivo que explora el universo de **Rick and Morty** utilizando su API pública. Diseñado con una interfaz futurista, animaciones llamativas y navegación fluida para consultar personajes, episodios y locaciones.

---

## 🔗 Demo en línea

📲 Mira la app funcionando en GitHub Pages:  
https://santiagoromero7.github.io/proyecto_api_-rickymorty/

---

## 🧰 Tecnologías utilizadas

- HTML
- CSS (estilo personalizado y responsive)
- JavaScript (modular y asincrónico)
- API pública: [Rick and Morty API](https://rickandmortyapi.com/)

---

## 📁 Estructura del Proyecto

```
📂 rick-and-morty-app/
├── index.html           # Página principal
├── styles.css           # Estilos futuristas
├── main.js              # Lógica JS y consumo de API
├── img/                 # Imágenes y recursos visuales
└── README.md            # Documentación del proyecto
```

---

## ⚙️ Funcionalidades

✅ **Pantalla de bienvenida** con imagen destacada  
✅ **Navegación por secciones**: personajes, episodios y ubicaciones  
✅ **Tarjetas interactivas** con datos clave y detalles ampliables  
✅ **Buscador de personajes** por nombre  
✅ **Paginación dinámica** para evitar sobrecarga de contenido  
✅ **Responsive Design**: diseño adaptable a dispositivos móviles  
✅ **Código modular y limpio**, con separación por funciones

---

## 🧪 ¿Cómo probarlo localmente?

1. Clona el repositorio:

```bash
git clone https://github.com/SantiagoRomero7/rick-and-morty-app.git
```

2. Abre el archivo `index.html` con tu navegador.

3. GitHub Pages para verlo en línea.

---

## 📸 Maquetaciòn 

![preview](./img/image.png)

![preview](./img/image-1.png)

![preview](./img/imagenn2.png)

![preview](./img/imagenn3.png)

Este fue el diseño borrador de la pagina web antes de comenzar a realizarla, el diseño fue creado con canva, se intento hacer lo màs posible parecido, pero se puede ver que hay algunas diferencias.


---

## 🌐 Conexión con la API

La aplicación se conecta a la API pública de **Rick and Morty** utilizando la función `fetch` de JavaScript para realizar solicitudes HTTP. A continuación, se detalla el proceso:

1. **Definición de la URL base**:  
   Se utiliza una constante para almacenar la URL base de la API:  
   ```javascript
   const API_BASE = "https://rickandmortyapi.com/api";
   ```

2. **Solicitudes a los endpoints**:  
   Dependiendo de la funcionalidad, se realizan solicitudes a los endpoints `/character`, `/episode` o `/location`. Por ejemplo, para obtener personajes:  
   ```javascript
   const res = await fetch(`${API_BASE}/character?page=${page}`);
   const data = await res.json();
   ```

3. **Procesamiento de datos**:  
   Los datos obtenidos de la API se procesan y se muestran en la interfaz. Por ejemplo, los personajes se renderizan en tarjetas interactivas:  
   ```javascript
   function displayCharacters(characters) {
     characters.forEach((char) => {
       const card = document.createElement("div");
       card.innerHTML = `<h3>${char.name}</h3>`;
       charactersContainer.appendChild(card);
     });
   }
   ```

4. **Manejo de errores**:  
   Se implementa un manejo de errores para mostrar mensajes en caso de fallos en la conexión:  
   ```javascript
   try {
     const res = await fetch(`${API_BASE}/character?page=${page}`);
     const data = await res.json();
   } catch (e) {
     console.error("Error al cargar personajes:", e);
   }
   ```

5. **Búsqueda dinámica**:  
   Se permite buscar personajes, episodios o ubicaciones por nombre utilizando parámetros de consulta:  
   ```javascript
   fetch(`${API_BASE}/character/?name=${query}`)
     .then((res) => res.json())
     .then((data) => displayCharacters(data.results));
   ```

Esta implementación permite una navegación fluida y una experiencia interactiva al explorar el universo de Rick and Morty.

---

## 👨‍💻 Autor

Estudiante de Desarrollo Web en Campuslands  
📧 santiagoinstagram23@gmail.com 

💼 [GitHub](https://github.com/SantiagoRomero7)

---

## 📚 Aprendizajes

- Consumo de APIs REST con `fetch` y `async/await`
- Manipulación avanzada del DOM
- Modularización de código JS
- Diseño responsivo y UI personalizada
- Paginación y manejo de eventos

---

## 🧠 Créditos

- [Rick and Morty API](https://rickandmortyapi.com/)
- Imágenes y datos oficiales pertenecen a sus respectivos creadores

---

## 📄 Licencia

Este proyecto fue creado con fines educativos.  

## Desarrollador 

Santiago Romero 
