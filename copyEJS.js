import fs from 'fs-extra';

const sourceDir = './src/web/views';
const destDir = './dist/web/views';

fs.ensureDir(sourceDir, (err) => {
  if (err) {
    console.error('Error al crear el directorio de origen:', err);
    return;
  }

  fs.ensureDir(destDir, (err) => {
    if (err) {
      console.error('Error al crear el directorio destino:', err);
      return;
    }

    fs.cp(sourceDir, destDir, { recursive: true }, (err) => {
      if (err) {
        console.error('Error al copiar archivos EJS:', err);
      } else {
        console.log('Archivos EJS copiados con éxito.');
      }
    });
  });
});
