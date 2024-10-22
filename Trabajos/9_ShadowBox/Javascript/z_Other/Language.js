// Lenguaje.js
var strings; // Variable global para almacenar las cadenas de texto

// Cargar cadenas de texto en español al inicio
setTimeout(function() {
    cargarEleccion();
}, 100);

// Cargar las cadenas de texto según el idioma seleccionado
function cargarCadenasIdioma(idioma) {
    if (idioma === "es") {
        strings = strings_es;
    } else if (idioma === "en") {
        strings = strings_en;
    } else if (idioma === "fr") {
        strings = strings_fr;
    }
    guardarEleccion(idioma);
}

// Cambiar el idioma al hacer clic en el botón correspondiente
document.getElementById("btn_choose_es").addEventListener("click", function() {
    cargarCadenasIdioma("es");
    aplicarTraducciones();
});
document.getElementById("btn_choose_en").addEventListener("click", function() {
    cargarCadenasIdioma("en");
    aplicarTraducciones();
});
document.getElementById("btn_choose_fr").addEventListener("click", function() {
    cargarCadenasIdioma("fr");
    aplicarTraducciones();
});

// Aplicar las traducciones a los elementos del HTML
function aplicarTraducciones() {
    for (var key in strings) {
        if (strings.hasOwnProperty(key)) {
            var element = document.getElementById(key);
            if (element) {
                element.textContent = strings[key];
            }
        }
    }
}


var strings_es = {
    //INICIO
    // Menú Principal
    "btn_card": "Cuadro de Carta",
    "btn_extra": "Información de Cuadro",
    "btn_guide": "¿Cómo comprar?",
    "btn_inscription":"Inscripción",
    // Componente Carta
    "btn_buy_false":"¡Registrese y Compre!",
    "btn_buy":"¡Comprar!",
    "aspect": "Aspecto",
    "invoker": "Invocador",
    "choose_champeon": "¡Elige tu Campeón!",
    "buscar": "Buscar",
    "elige-un-borde": "Elige un Borde",
    "elige-tus-runas": "¡Elige tus runas!",
    "elige-tus-hechizos": "¡Elige tus hechizos!",
    "choose_icon_text": "¡Elige tu icono!",
    "choose_icon": "Elige tu icono",
    "icono-campeones": "Campeones",
    "icono-chibis": "Chibis",
    "icono-ligas": "Ligas",
    "icono-tematicas": "Temáticas",
    "icono-worlds": "Worlds",
    "choose_skin": "¡Elige tu Skin!",
    "choose_box": "¡Elige tu Marco",
    "button_buy": "¡Comprar!",
    // Sección Extra Carta
    "infobox_section_title_1": "¡Hasta tres relieves!",
    "infobox_section_title_2": "Tres diferentes tipos de tamaños.",
    "infobox_section_title_3": "Material de alta calidad",
    "infobox_title_descriptive_1": "",
    "infobox_title_descriptive_2": "",
    "infobox_title_descriptive_3": "",
    "infobox_section_descriptive_1": "Todos los cuadros disponibles ofrecen la opción de seleccionar entre tres niveles de relieve durante el proceso de compra.",
    "infobox_section_descriptive_2": "Tenemos 3 tipos de tamaño desde la talla XS hasta la talla L. Estamos trabajando para agregar una talla más.",
    "infobox_section_descriptive_3": "Utilizamos MDF de alta densidad que está plastificado para garantizar la durabilidad de tu cuadro. Además, hemos seleccionado estos.",
    // Sección Información Compra y Envío
    "buying-selling_title": "¡ENVÍOS A TODO EUROPA!",
    "buying-selling_descriptive": "Realizamos envíos a toda Europa, directamente a tu puerta. Los pedidos dentro de Francia suelen tardar 4 días hábiles en llegar, mientras que los envíos a otras partes de Europa pueden demorar hasta 8 días hábiles.",
    // Sección Informativa
    "info_buy_title": "¿Sabes cómo comprar?",
    "info_buy_section_title_1": "¡Personaliza tu cuadro!",
    "info_buy_section_descriptive_title_1": "",
    "info_buy_section_descriptive_1": "¡Escoge tu campeón y personalízalo de la manera que más te guste!",
    "info_buy_section_title_2": "Elige los relieves!",
    "info_buy_section_descriptive_title_2": "",
    "info_buy_section_descriptive_2": "Escoge la cantidad de relieve que quieras para tu carta.",
    "info_buy_section_title_3": "Elige el tamaño",
    "info_buy_section_descriptive_title_3": "",
    "info_buy_section_descriptive_3": "Puedes escoger el tamaño que más te agrade para tu carta de carga de League of Legends.",
    "info_buy_section_title_4": "¡Llena tus datos y haz la compra!",
    "info_buy_section_descriptive_title_4": "",
    "info_buy_section_descriptive_4": "Dinos a dónde quieres que te llegue tu carta y la manera de contactarte para darte el mejor seguimiento posible del pedido.",
    // Footer

    //INSCRIPCION
    "btnInicio": "Inicio",
    // 
    "textTitulo": "¡Forma parte de la Comunidad!",
    //
    "text-center": "Inicie Seción",
    /*"email": "Correo electrónico",
    "password": "Contraseña",*/
    "inscripcion": "Inscribirse",
    "toggle-button1":"¿Todavía no estás suscripto?",
    // 
    "suscripcion": "Suscripción de Usuario",
   /* "fullname": "Tu nombre completo",
    "username": "Nombre de usuario",*/
    "suscribirse": "Suscribirse",
    "toggle-button2":"¿Ya estás suscripto?",

    //COMPRAR
    "tituloPrincipal": "¡Opciones finales!",
    "eligeTamaño": "Elige Tamaño",
    "eligeRelieve": "Elige Relieve",
    "tamaño1": "M 16x28",
    "tamaño2": "L 35x20",
    "tamaño3": "XL 58x34",
    "relieve1": "Relieve 1",
    "relieve2": "Relieve 2",
    "relieve3": "Relieve 3",
    "siguiente": "Comprar ahora",
    "total": "Total: ",
    //
    "atras":"Retroceder",
    "atras2":"Retroceder",
    "tituloFormulario": "Formulario de Envío",
    "etiquetaNombre": "Nombre",
    "etiquetaPais": "Pais",
    "etiquetaCiudad": "Ciudad",
    "etiquetaCodigo": "Código Postal",
    "etiquetaDireccion": "Dirección de envío",
    "etiquetaCelular": "Celular de contacto",
    "siguiente2": "Siguiente",
    //
    "tituloMedioPago": "Elige medio de pago",
    "textoDescriptivo": "Este es un texto descriptivo explicando cómo funciona el medio de transporte y la demora aproximada de 6 días para cada entrega.",
    "tituloPrecio": "Precio Final:",
    "EnviarOrden": "Subir Comprobante y Finalizar",
    //
    "Producto-descripcion": "Producto Elegido",
    
    //COMPRA REALIZADA
    "tituloPrincipalCompra": "¡Felicidades por tu compra!",
    "p-Compra": "Por favor vea su perfil y siga el seguimiento de su producto",
    
    //PERFIL
    "editar-btn": "Editar Cuenta",
    "editarInformacion": "Editar Información",
    "NombreEditar": "Nombre Completo",
    "UsuarioEditar": "Nombre de Usuario",
    "guardar-btn": "Guardar",
    "estadoPedido": "Estado del Pedido",
};

var strings_en = {
    //INICIO
    // Main Menu
    "btn_card": "Letter Box",
    "btn_extra": "Box Information",
    "btn_guide": "How to buy?",
    "btn_inscription":"Registration",
    // Card Component
    "btn_buy_false":"Register and Buy!",
    "btn_buy":"Buy!",
    "aspect": "Aspect",
    "invoker": "Summoner",
    "choose_champeon": "Choose your Champion!",
    "buscar": "Search",
    "elige-un-borde": "Choose a Border",
    "elige-tus-runas": "Choose your Runes!",
    "elige-tus-hechizos": "Choose your Spells!",
    "choose_icon_text": "Choose your Icon!",
    "choose_icon": "Choose your Icon",
    "icono-campeones": "Champions",
    "icono-chibis": "Chibis",
    "icono-ligas": "Leagues",
    "icono-tematicas": "Themes",
    "icono-worlds": "Worlds",
    "choose_skin": "Choose your Skin!",
    "choose_box": "Choose your Frame",
    "button_buy": "¡Buy!",
    // Extra Card Section
    "infobox_section_title_1": "Up to three reliefs!",
    "infobox_section_title_2": "Three different sizes.",
    "infobox_section_title_3": "High-quality material",
    "infobox_title_descriptive_1": "",
    "infobox_title_descriptive_2": "",
    "infobox_title_descriptive_3": "",
    "infobox_section_descriptive_1": "All available frames offer the option to select from three levels of relief during the purchase process.",
    "infobox_section_descriptive_2": "We have 3 sizes from XS to L size. We are working to add one more size.",
    "infobox_section_descriptive_3": "We use high-density MDF that is laminated to ensure the durability of your frame. In addition, we have selected these.",
    // Purchase and Shipping Information Section
    "buying-selling_title": "SHIPPING TO ALL EUROPE!",
    "buying-selling_descriptive": "We ship to all of Europe, directly to your door. Orders within France usually take 4 business days to arrive, while shipments to other parts of Europe may take up to 8 business days.",
    // Information Section
    "info_buy_title": "Do you know how to buy?",
    "info_buy_section_title_1": "Customize your frame!",
    "info_buy_section_descriptive_title_1": "",
    "info_buy_section_descriptive_1": "Choose your champion and customize it the way you like!",
    "info_buy_section_title_2": "Choose the reliefs!",
    "info_buy_section_descriptive_title_2": "",
    "info_buy_section_descriptive_2": "Choose the amount of relief you want for your card.",
    "info_buy_section_title_3": "Choose the size",
    "info_buy_section_descriptive_title_3": "",
    "info_buy_section_descriptive_3": "You can choose the size that suits you best for your League of Legends loading card.",
    "info_buy_section_title_4": "Fill in your details and make the purchase!",
    "info_buy_section_descriptive_title_4": "",
    "info_buy_section_descriptive_4": "Tell us where you want your card to arrive and how to contact you to give you the best possible order follow-up.",
    // Footer

    //INSCRIPCION
    "btnInicio": "Home",
    // 
    "textTitulo": "Be part of the Community!",
    //
    "text-center": "Start Session",
   /* "email": "Email",
    "password": "Password",*/
    "inscripcion": "Sign up",
    "toggle-button1":"Not subscribed yet?",
    //
    "suscripcion": "User Subscription",
    /*
    "fullname": "Your full name",
    "username": "Username",*/
    "subscribe": "Subscribe",
    "toggle-button2":"Are you already subscribed?",

    //COMPRAR
    "btnInicio": "Home",
    "tituloPrincipal": "Final Options!",
    "eligeTamaño": "Choose Size",
    "eligeRelieve": "Choose Relief",
    "tamaño1": "M 16x28",
    "tamaño2": "L 35x20",
    "tamaño3": "XL 58x34",
    "relieve1": "Relief 1",
    "relieve2": "Relief 2",
    "relieve3": "Relief 3",
    "siguiente": "Buy now",
    "total": "Total: ",
    //
    "atras":"back",
    "atras2":"back",
    "tituloFormulario": "Shipping Form",
    "etiquetaNombre": "Name",
    "etiquetaPais": "Country",
    "etiquetaCiudad": "City",
    "etiquetaCodigo": "Postal Code",
    "etiquetaDireccion": "Shipping Address",
    "etiquetaCelular": "Contact Phone",
    "siguiente2": "Next",
    //
    "tituloMedioPago": "Choose payment method",
    "textoDescriptivo": "This is a descriptive text explaining how the shipping method works and the approximate 6-day delay for each delivery.",
    "tituloPrecio": "Final Price:",
    "EnviarOrden": "Upload Receipt and Finish",
    //
    "Producto-descripcion": "Chosen Product",

    //COMPRA REALIZADA
    "tituloPrincipalCompra": "Congratulations on your purchase!",
    "p-Compra": "Please view your profile and follow the tracking of your product",
    
    //PERFIL
    "editar-btn": "Edit Account",
    "editarInformacion": "Edit Information",
    "NombreEditar": "Full Name",
    "UsuarioEditar": "Username",
    "guardar-btn": "Save",
    "estadoPedido": "Order Status",
};

var strings_fr = {
    //INICIO
    // Menu Principal
    "btn_card": "Boîte aux lettres",
    "btn_extra": "Informations sur la boîte",
    "btn_guide": "Comment acheter?",
    "btn_inscription": "Inscription",
    // Composant de la Carte
    "btn_buy_false":"¡Inscrivez-vous et comprenez!",
    "btn_buy":"¡Comparez !",
    "aspect": "Aspect",
    "invoker": "Invocateur",
    "choose_champeon": "Choisissez votre champion!",
    "buscar": "Recher...",
    "elige-un-borde": "Choisissez une bordure",
    "elige-tus-runas": "Choisissez vos runes!",
    "elige-tus-hechizos": "Choisissez vos sorts!",
    "choose_icon_text": "Choisissez votre icône!",
    "choose_icon": "Choisissez votre icône",
    "icono-campeones": "Champions",
    "icono-chibis": "Chibis",
    "icono-ligas": "Ligues",
    "icono-tematicas": "Thèmes",
    "icono-worlds": "Worlds",
    "choose_skin": "Choisissez votre skin!",
    "choose_box": "Choisissez votre cadre",
    "button_buy": "¡Compare!",
    // Section Carte Supplémentaire
    "infobox_section_title_1": "Jusqu'à trois reliefs!",
    "infobox_section_title_2": "Trois tailles différentes.",
    "infobox_section_title_3": "Matériau de haute qualité",
    "infobox_title_descriptive_1": "",
    "infobox_title_descriptive_2": "",
    "infobox_title_descriptive_3": "",
    "infobox_section_descriptive_1": "Tous les cadres disponibles offrent la possibilité de choisir parmi trois niveaux de relief lors du processus d'achat.",
    "infobox_section_descriptive_2": "Nous avons 3 tailles, de XS à la taille L. Nous travaillons pour ajouter une taille supplémentaire.",
    "infobox_section_descriptive_3": "Nous utilisons du MDF haute densité stratifié pour garantir la durabilité de votre cadre. De plus, nous avons sélectionné ceux-ci.",
    // Section Informations sur l'Achat et l'Expédition
    "buying-selling_title": "LIVRAISON DANS TOUTE L'EUROPE!",
    "buying-selling_descriptive": "Nous expédions dans toute l'Europe, directement à votre porte. Les commandes en France mettent généralement 4 jours ouvrables à arriver, tandis que les expéditions vers d'autres parties de l'Europe peuvent prendre jusqu'à 8 jours ouvrables.",
    // Section Information
    "info_buy_title": "Savez-vous comment acheter?",
    "info_buy_section_title_1": "Personnalisez votre cadre!",
    "info_buy_section_descriptive_title_1": "",
    "info_buy_section_descriptive_1": "Choisissez votre champion et personnalisez-le comme vous le souhaitez!",
    "info_buy_section_title_2": "Choisissez les reliefs!",
    "info_buy_section_descriptive_title_2": "",
    "info_buy_section_descriptive_2": "Choisissez la quantité de relief que vous souhaitez pour votre carte.",
    "info_buy_section_title_3": "Choisissez la taille",
    "info_buy_section_descriptive_title_3": "",
    "info_buy_section_descriptive_3": "Vous pouvez choisir la taille qui vous convient le mieux pour votre carte de chargement League of Legends.",
    "info_buy_section_title_4": "Remplissez vos coordonnées et effectuez l'achat!",
    "info_buy_section_descriptive_title_4": "",
    "info_buy_section_descriptive_4": "Dites-nous où vous voulez que votre carte arrive et comment vous contacter pour vous donner le meilleur suivi de commande possible.",
    // Pied de page

    //INSCRIPCION
    "btnInicio": "Accueil",
    // 
    "textTitulo": "Faites partie de la Communauté !",
    //
    "text-center": "Démarrer la session",
    /*"email": "E-mail",
    "password": "Mot de passe",*/
    "inscripcion": "Inscrivez-vous",
    "toggle-button1":"Pas encore abonné ?",
    //
    "suscripcion": "Abonnement utilisateur",
    /*"fullname": "Votre nom complet",
    "username": "Nom d'utilisateur",*/
    "subscribe": "S'abonner",
    "toggle-button2":"Êtes-vous déjà abonné?",

    //COMPRAR
    "btnInicio": "Accueil",
    "tituloPrincipal": "Options Finales !",
    "eligeTamaño": "Choisissez la taille",
    "eligeRelieve": "Choisissez le soula..",
    "tamaño1": "M 16x28",
    "tamaño2": "L 35x20",
    "tamaño3": "XL 58x34",
    "relieve1": "Soulage.. 1",
    "relieve2": "Soulage.. 2",
    "relieve3": "Soulage.. 3",
    "siguiente": "Acheter",
    "total": "Totale: ",
    //
    "atras":"dos",
    "atras2":"dos",
    "tituloFormulario": "Formulaire d'expédition",
    "etiquetaNombre": "Nom",
    "etiquetaPais": "Pays",
    "etiquetaCiudad": "Ville",
    "etiquetaCodigo": "Code postal",
    "etiquetaDireccion": "Adresse de livraison",
    "etiquetaCelular": "Téléphone de contact",
    "siguiente2": "Prochain",
    //
    "tituloMedioPago": "Choisissez le mode de paiement",
    "textoDescriptivo": "Il s'agit d'un texte descriptif expliquant le fonctionnement du mode de livraison et le retard approximatif de 6 jours pour chaque livraison.",
    "tituloPrecio": "Prix Final:",
    "EnviarOrden": "Télécharger le reçu et terminer",
    //
    "Producto-descripcion": "Produit choisi",

    //COMPRA REALIZADA
    "tituloPrincipalCompra": "Félicitations pour votre achat !",
    "p-Compra": "Veuillez consulter votre profil et suivre le suivi de votre produit",

    //PERFIL
    "editar-btn": "Modifier le Compte",
    "editarInformacion": "Modifier les Informations",
    "NombreEditar": "Nom Complet",
    "UsuarioEditar": "Nom d'Utilisateur",
    "guardar-btn": "Enregistrer",
    "estadoPedido": "État de la Commande",
};


// Guardar Lengua seleccionada
function guardarEleccion (idioma){
    sessionStorage.setItem("Lenguaje", idioma);
}

// Cargar seleccion guardada
function cargarEleccion (){
    var imagenRecuperada = sessionStorage.getItem("Lenguaje");
    if(imagenRecuperada){
        cargarCadenasIdioma(imagenRecuperada);
        aplicarTraducciones();
    }else{
        cargarCadenasIdioma("es");
        aplicarTraducciones();
    }
}

