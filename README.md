# LABORATORIOS 5 & 6 - CI/CD | React

## Descripción
Este proyecto es la parte de **Frontend** del sistema de reservas de laboratorios desarrollado en los **Laboratorios 5 & 6**, utilizando **React.js** para la construcción de la interfaz de usuario. Se implementó un flujo de **CI/CD** mediante **GitHub Actions** para la integración y despliegue continuo en **Azure App Service**.

La estructura de nuestro frontend ha sido pensada de la siguiente manera: <br><br>

```
C:.
│   package-lock.json
│   package.json
│
├───.github
│   └───workflows
│           azure-static-web-apps-ambitious-river-02ff82c00.yml
│
├───public
│       favicon.ico
│       index.html
│       logo192.png
│       logo512.png
│       manifest.json
│       robots.txt
│
└───src
    │   .DS_Store
    │   App.js
    │   App.test.js
    │   index.js
    │   logo.jpg
    │   logo.svg
    │   reportWebVitals.js
    │   setupTests.js
    │   styles.css
    │
    ├───components
    │       CancelarReserva.js
    │       ConsultaDisponibilidad.js
    │       NavBar.js
    │       ReservarLaboratorio.js
    │
    └───services
            api.js
```

## Implementaciones Realizadas

### 1. Desarrollo del Frontend con React
- Construcción de la interfaz de usuario en **React.js**.
- Manejo del estado global con **Context API**.
- Consumo de la API del backend mediante **Axios**.
- Manejo de autenticación con **JWT**.

### 2. Configuración de CI/CD con GitHub Actions
Se creó un **workflow** en GitHub Actions con los siguientes **jobs**:
- **setup-node**: Configura la versión de Node.js.
- **install**: Instala las dependencias del proyecto (`npm install`).
- **lint**: Ejecuta el análisis estático del código (`npm run lint`).
- **build**: Compila el proyecto para producción (`npm run build`).
- **test**: Ejecuta las pruebas automatizadas (`npm test`).
- **deploy**: Despliega la aplicación en **Azure App Service** si los pasos anteriores son exitosos.

Este workflow se activa con cada `push` o `pull_request` a la rama `main`. <br><br>

![Screenshot 2025-04-03 063751](https://github.com/user-attachments/assets/c4c37cfb-d501-4003-a803-bb5b6b436304)


### 3. Estilos y Diseño
- Se utilizó **CSS Modules** para el estilizado de los componentes.
- Diseño responsivo para compatibilidad con diferentes dispositivos.

### 4. Integración con el Backend
- Conexión con la API REST del backend para gestionar reservas.
- Implementación de validaciones en los formularios.

### 5. Despliegue en Azure
- Se configuró el despliegue en **Azure App Service** utilizando **GitHub Actions**.
- Optimización del rendimiento con lazy loading y código minificado.

## Resultado Final
✅ **CI/CD funcional con GitHub Actions**
✅ **Despliegue exitoso en Azure**
✅ **Interfaz de usuario intuitiva y funcional**
✅ **Integración con el backend**
✅ **Manejo de autenticación con JWT**

---
🚀 **Frontend desplegado y funcionando en Azure con éxito!** 🎉
