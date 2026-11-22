const express = require('express');
const app = express();
 
const PUERTO = process.env.PORT || 3000;
 
app.get('/', (req, res) => {
  const nombre = process.env.NOMBRE_ALUMNO || 'Estudiante CECyTEH';
  res.send(`
    <html>
      <head><title>Mi App en la Nube</title></head>
      <body style="font-family: Arial; text-align: center; padding: 50px; background: #e3f2fd;">
        <h1>¡Mi aplicación está en la nube!</h1>
        <h2>Alumno: ${nombre}</h2>
        <p>Módulo IV - Submódulo 1 - CECyTEH</p>
        <p>Servidor funcionando correctamente</p>
      </body>
    </html>
  `);
});
 
app.get('/salud', (req, res) => {
  res.json({ estado: 'ok', mensaje: 'Servidor activo', puerto: PUERTO });
});
 
app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en el puerto ${PUERTO}`);
});
