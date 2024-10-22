// Botones de Color
$(document).ready(function() {
    // Variables
    let ultimoFiltroMarco = 'hue-rotate(0deg)';
    let ultimoFiltroBorde = 'hue-rotate(0deg)';
    const componenteMarco = '#card_box';
    const componenteBorde = '#card_bank';
    const barraMarco = '#marco-slider';
    const barraBorde = '#borde-slider';

    // Datos de colores
    const colores = [
        { selector: '#boxBlue', filtro: 'hue-rotate(280deg)', tipo: 'marco' },
        { selector: '#bankBlue', filtro: 'hue-rotate(280deg)', tipo: 'borde' },
        { selector: '#boxGreen', filtro: 'hue-rotate(240deg)', tipo: 'marco' },
        { selector: '#bankGreen', filtro: 'hue-rotate(240deg)', tipo: 'borde' },
        { selector: '#boxGreen2', filtro: 'hue-rotate(200deg)', tipo: 'marco' },
        { selector: '#bankGreen2', filtro: 'hue-rotate(200deg)', tipo: 'borde' },
        { selector: '#boxBrown', filtro: 'hue-rotate(120deg)', tipo: 'marco' },
        { selector: '#bankBrown', filtro: 'hue-rotate(120deg)', tipo: 'borde' },
        { selector: '#boxRed', filtro: 'hue-rotate(90deg)', tipo: 'marco' },
        { selector: '#bankRed', filtro: 'hue-rotate(90deg)', tipo: 'borde' },
        { selector: '#boxRed2', filtro: 'hue-rotate(60deg)', tipo: 'marco' },
        { selector: '#bankRed2', filtro: 'hue-rotate(60deg)', tipo: 'borde' },
        { selector: '#boxViolet', filtro: 'hue-rotate(20deg)', tipo: 'marco' },
        { selector: '#bankViolet', filtro: 'hue-rotate(20deg)', tipo: 'borde' },
        { selector: '#boxNone', filtro: 'hue-rotate(0deg)', tipo: 'marco' },
        { selector: '#bankNone', filtro: 'hue-rotate(0deg)', tipo: 'borde' }
    ];

    // Asignar eventos de color
    colores.forEach(color => {
        agregarEventoFiltro(color.selector, color.filtro, color.tipo);
    });

    // Función para agregar eventos de color
    function agregarEventoFiltro(selector, filtro, tipo) {
        $(selector).click(function() {
            const imagen = $(tipo === 'marco' ? componenteMarco : componenteBorde); 
            aplicarFiltro(imagen, filtro, tipo);
        });
    }
    
    // Aplicar el filtro de color
    function aplicarFiltro(imagen, filtro, tipo) {
        imagen.css('filter', filtro);
        if (tipo === 'marco') {
            ultimoFiltroMarco = filtro;
            save_colour('color-marco', `${filtro} saturate(100%)`);
        } else {
            ultimoFiltroBorde = filtro;
            save_colour('color-borde', `${filtro} saturate(100%)`);
        }
    }

    // Asignar eventos a las barras de saturación
    agregarEventoSlider($(barraMarco), 'marco');
    agregarEventoSlider($(barraBorde), 'borde');

    // Función para agregar eventos a las barras de saturación
    function agregarEventoSlider(slider, tipo) {
        slider.on("input", function() {
            const saturacion = `${$(this).val()}%`;
            const imagen = $(tipo === 'marco' ? componenteMarco : componenteBorde);
            aplicarSaturacion(imagen, `saturate(${saturacion})`, tipo);
        });
    }
    
    // Aplicar saturación a la imagen
    function aplicarSaturacion(imagen, filtro, tipo) {
        if (tipo === 'marco') {
            imagen.css('filter', `${ultimoFiltroMarco} ${filtro}`);
            save_colour('saturacion-marco', filtro);
        } else {
            imagen.css('filter', `${ultimoFiltroBorde} ${filtro}`);
            save_colour('saturacion-borde', filtro);
        }
    }

    // Reiniciar valores después de 200 ms
    setTimeout(reiniciarValores, 200);

    // Función para reiniciar los valores de color y saturación
    function reiniciarValores() {
        save_colour('color-marco', 'hue-rotate(0deg)');
        save_colour('color-borde', 'hue-rotate(0deg) saturate(100%)');
        save_colour('saturacion-marco', 'saturate(100%)');
        save_colour('saturacion-borde', 'saturate(100%)');
    }

    // Función para guardar valores en sessionStorage
    function save_colour(componente, valor) {
        if (valor) {
            sessionStorage.setItem(componente, valor);
        } else {
            alert("No fue posible guardar el color");
        }
    }
});
