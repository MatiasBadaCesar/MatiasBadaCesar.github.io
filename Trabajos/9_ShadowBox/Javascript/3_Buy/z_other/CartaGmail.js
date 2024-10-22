window.onload = function() {
    const canvas = document.getElementById('canvas');
    if (!canvas || !canvas.getContext) {
        console.error('Canvas no soportado o no encontrado.');
        return;
    }
    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');
    const imagenCombinada = document.getElementById('imagenCombinada');
    const inputImagen = document.getElementById('imagen');

    // Obtener las imágenes de los componentes HTML
    const componentes = document.querySelectorAll('.carta img');
    const imagenesSrc = Array.from(componentes).map(img => ({
        src: img.src,
        id: img.parentElement.id
    }));

    // Cargar las imágenes
    const cargarImagenes = imagenesSrc.map(({ src, id }) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve({ img, id });
            img.onerror = () => reject(new Error(`Error al cargar la imagen ${src}`));
        });
    });

    // Dibujar las imágenes en el lienzo aplicando los estilos
    Promise.all(cargarImagenes).then(imagenes => {
        imagenes.forEach(({ img, id }) => {
            let width = 100;
            let height = 100;
            let x = 0;
            let y = 0;

            // Ajustar tamaño y posición para cada componente
            switch (id) {
                case 'carta-componente-0':
                    width = 420;
                    height = 420;
                    x = -5;
                    y = -20;
                    break;
                case 'carta-componente-1':
                    width = 220;
                    height = 260;
                    x = 100;
                    y = 40;
                    break;
                case 'carta-componente-2':
                    width = 400;
                    height = 400;
                    x = 0;
                    y = 0;
                    break;
                case 'carta-componente-3':
                    width = 380;
                    height = 380;
                    x = 20;
                    y = 40;
                    break;
                case 'carta-componente-4':
                    width = 60;
                    height = 60;
                    x = 170;
                    y = 300;
                    break;
                case 'carta-componente-5-1':
                    width = 50;
                    height = 50;
                    x = 70;
                    y = 290;
                    break;
                case 'carta-componente-5-2':
                    width = 50;
                    height = 50;
                    x = 105;
                    y = 300;
                    break;
                case 'carta-componente-5-3':
                    width = 30;
                    height = 30;
                    x = 266;
                    y = 310;
                    break;
                case 'carta-componente-5-4':
                    width = 30;
                    height = 30;
                    x = 306;
                    y = 310;
                    break;
            }

            // Dibujar borde (opcional, se puede omitir si no se desea un borde)
            ctx.fillStyle = 'transparent'; // Hacer el borde transparente si no se desea un borde
            ctx.fillRect(x, y, width + 2, height + 2);

            // Dibujar imagen
            ctx.drawImage(img, x, y, width, height);
        });

        // Obtener la imagen combinada
        const dataURL = canvas.toDataURL('image/png');
        imagenCombinada.src = dataURL;

        // Convertir dataURL a Blob
        fetch(dataURL)
            .then(res => res.blob())
            .then(blob => {
                const file = new File([blob], "imagen_combinada.png", { type: 'image/png' });
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                inputImagen.files = dataTransfer.files;
            })
            .catch(error => console.error('Error al convertir la imagen combinada:', error));
    }).catch(error => console.error('Error al cargar las imágenes:', error));
};
