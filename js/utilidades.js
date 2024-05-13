var directorioImagenes = "recursos/imagenes/"

function crearNodo(tipoNodo) {
    var nodo = document.createElement(tipoNodo);
    return nodo;
}

function crearNodoConTexto(tipoNodo, textoNodo) {
    var nodo = document.createElement(tipoNodo);
    var textoNodo = document.createTextNode(textoNodo);
    nodo.appendChild(textoNodo);
    return nodo;
}

function crearNodoImagen(nombreImagen, alt) {
    var nodo = crearNodo("img");
    nodo.src = directorioImagenes + nombreImagen;
    nodo.alt = alt;
    return nodo;
}

function crearNodoLista(tipoNodo, textoNodo) {
    var nodo = crearNodo(tipoNodo);
    var textoNodo = document.createTextNode(textoNodo);
    nodo.appendChild(textoNodo);
    return nodo;
}

function adicionarNodoABody(nodo) {
    document.body.appendChild(nodo);
}

function adicionarNodoAContenedor(nodo, contenedor) {
    contenedor.appendChild(nodo);
}

var divPadreUno = crearNodo("div");
var divPadreDos = crearNodo("div");
var divPadreTres = crearNodo("div");
var imagenFondo = crearNodoImagen("fondo.jpg", "FondoImg");
var divMenu = crearNodo("div");
var divNav = crearNodo("div");
var logoImg = crearNodoImagen("logo.png", "LogoPng");
var home = crearNodoConTexto("a", "HOME");
var services = crearNodoConTexto("a", "SERVICES");
var events = crearNodoConTexto("a", "EVENTS");
var about = crearNodoConTexto("a", "ABOUT US");
var contact = crearNodoConTexto("a", "CONTACT");
var divMedio = crearNodo("div");
var spanPrecio = crearNodoConTexto("span", "$8,450");
var veniceItaly = crearNodoConTexto("h3", "Venice, Italy");
var parrafoEnDivMedio = crearNodoConTexto("p", "Travel is free responsive template by templatemo.");
var parrafoDos = crearNodoConTexto("p", "All images used in this template are from ");
var unsplash = crearNodoConTexto("span", "Unsplash.");
var botonVerdeMedio = crearNodoConTexto("a", "PRE-BOOKING");
var contenedorPaises = crearNodo("div");
var variosDivs = crearNodo("div");
var divPaisUno = crearNodo("div");
var divPaisDos = crearNodo("div");
var divPaisTres = crearNodo("div");
var divPaisCuatro = crearNodo("div");
var tituloItaly = crearNodoConTexto("h4", "ITALY");
var tituloFrance =  crearNodoConTexto("h4", "FRANCE");
var tituloGermany = crearNodoConTexto("h4", "GERMANY");
var tituloSpain = crearNodoConTexto("h4", "SPAIN");
var imagenItaly = crearNodoImagen("escaleras.jpg", "EscalerasJpg");
var imagenFrance = crearNodoImagen("personas.jpg", "PersonasJpg");
var imagenGermany = crearNodoImagen("edificios.jpg", "EdificiosJpg");
var imagenSpain = crearNodoImagen("montañas.jpg", "MontañasJpg");
var ciudadesItaly = crearNodoConTexto("span", "Rome, Milan, Naples");
var ciudadesFrance = crearNodoConTexto("span", "Paris, Marseille, Lyon");
var ciudadesGermany = crearNodoConTexto("span", "Berlin, Hamburg, Munich");
var ciudadesSpain = crearNodoConTexto("span", "Madrid, Barcelona, Valencia");
var hotelItaly = crearNodoConTexto("span", "SILVER HOTEL, 4 NIGHTS, 5 STARS");
var hotelFrance = crearNodoConTexto("span", "NEW PALACE, 5 NIGHTS, 5 STARS");
var hotelGermany = crearNodoConTexto("span", "LUXE HOTEL, 5 NIGHTS, 6 STARS");
var hotelSpain = crearNodoConTexto("span", "GOOD HOTEL, 4 NIGHTS, 6 STARS");
var precioItaly = crearNodoConTexto("a", "$1,800 BOOK NOW");
var precioFrance = crearNodoConTexto("a", "$2,300 BOOK NOW");
var precioGermany = crearNodoConTexto("a", "$3,100 BOOK NOW");
var precioSpain = crearNodoConTexto("a", "$4,800 BOOK NOW");
var imagenCohete = crearNodoImagen("cohete.png", "CohetePng");
var imagenPalmera = crearNodoImagen("palmera.png", "PalmeraPng");
var imagenDelfin = crearNodoImagen("delfin.png", "DelfinPng");
var imagenCohete1 = crearNodoImagen("cohete.png", "CohetePng");
var imagenPalmera1 = crearNodoImagen("palmera.png", "PalmeraPng");
var imagenDelfin1 = crearNodoImagen("delfin.png", "DelfinPng");
var segundoLogo = crearNodoImagen("logo.png", "LogoPng");
var contenedorCopy = crearNodo("div");
var textoCopy = crearNodoConTexto("span", "Copyright © 2084 ");
var guion = crearNodoConTexto("span", " - ");
var by = crearNodoConTexto("span", " by ");
var company = crearNodoConTexto("span", "Company Name");
var travel = crearNodoConTexto("span", "Travel");
var templatemo = crearNodoConTexto("span", "templatemo");
var facebook = crearNodoImagen("facebook.png", "FacebookPng");
var twitter = crearNodoImagen("twitter.png", "TwiitterPng");
var linkedin = crearNodoImagen("linkedin.png", "LinkedinPng");
var flickr = crearNodoImagen("flickr.png", "FlickrPng");
var wifi = crearNodoImagen("wifi.png", "WifiPng");
var contenedorLogos = crearNodo("div");
var divCohete = crearNodo("div");
var divPalmera = crearNodo("div");
var divDelfin = crearNodo("div");
var divCohete1 = crearNodo("div");
var divPalmera1 = crearNodo("div");
var divDelfin1 = crearNodo("div");
var divFlechaGris = crearNodo("div");
var flechaGris = crearNodoConTexto("a", "←");
var flechaGris2 = crearNodoConTexto("a", "→");
var flechaVerde = crearNodoConTexto("a", "←");
var flechaVerde2 = crearNodoConTexto("a", "→");
adicionarNodoABody(divPadreUno); 
adicionarNodoAContenedor(divMenu, divPadreUno); //divPadreUno > divMenu
adicionarNodoAContenedor(divFlechaGris, divPadreUno);
adicionarNodoAContenedor(flechaGris, divFlechaGris);
adicionarNodoAContenedor(flechaGris2, divFlechaGris);
adicionarNodoAContenedor(flechaVerde, divPaisUno);
adicionarNodoAContenedor(flechaVerde2, divPaisCuatro);
divFlechaGris.setAttribute("class", "arrow-container");
adicionarNodoAContenedor(logoImg, divMenu); //divMenu > Elementos
adicionarNodoAContenedor(divNav, divMenu)
adicionarNodoAContenedor(home, divNav);
adicionarNodoAContenedor(services, divNav);
adicionarNodoAContenedor(events, divNav);
adicionarNodoAContenedor(about, divNav);
adicionarNodoAContenedor(contact, divNav); 
adicionarNodoAContenedor(divMedio, divPadreUno); //divMedio > Elementos
adicionarNodoAContenedor(spanPrecio, divMedio);
adicionarNodoAContenedor(veniceItaly, divMedio);
adicionarNodoAContenedor(parrafoEnDivMedio, divMedio);
adicionarNodoAContenedor(parrafoDos, divMedio);
adicionarNodoAContenedor(unsplash, divMedio);
adicionarNodoAContenedor(botonVerdeMedio, divMedio);
adicionarNodoABody(contenedorPaises);
adicionarNodoAContenedor(variosDivs, contenedorPaises); //Muchos Divs > Elementos
adicionarNodoAContenedor(divPaisUno,variosDivs);
adicionarNodoAContenedor(divPaisDos,variosDivs);
adicionarNodoAContenedor(divPaisTres,variosDivs);
adicionarNodoAContenedor(divPaisCuatro,variosDivs);
adicionarNodoAContenedor(tituloItaly, divPaisUno);
adicionarNodoAContenedor(imagenItaly, divPaisUno);
adicionarNodoAContenedor(ciudadesItaly, divPaisUno);
adicionarNodoAContenedor(hotelItaly, divPaisUno);
adicionarNodoAContenedor(precioItaly, divPaisUno);
adicionarNodoAContenedor(tituloFrance, divPaisDos);
adicionarNodoAContenedor(imagenFrance, divPaisDos);
adicionarNodoAContenedor(ciudadesFrance, divPaisDos);
adicionarNodoAContenedor(hotelFrance, divPaisDos);
adicionarNodoAContenedor(precioFrance, divPaisDos);
adicionarNodoAContenedor(tituloGermany, divPaisTres);
adicionarNodoAContenedor(imagenGermany, divPaisTres);
adicionarNodoAContenedor(ciudadesGermany, divPaisTres);
adicionarNodoAContenedor(hotelGermany, divPaisTres);
adicionarNodoAContenedor(precioGermany, divPaisTres);
adicionarNodoAContenedor(tituloSpain, divPaisCuatro);
adicionarNodoAContenedor(imagenSpain, divPaisCuatro);
adicionarNodoAContenedor(ciudadesSpain, divPaisCuatro);
adicionarNodoAContenedor(hotelSpain, divPaisCuatro);
adicionarNodoAContenedor(precioSpain, divPaisCuatro);
adicionarNodoABody(divPadreDos); //divPadreDos > Elementos
adicionarNodoAContenedor(divCohete, divPadreDos);
adicionarNodoAContenedor(divPalmera, divPadreDos);
adicionarNodoAContenedor(divDelfin, divPadreDos);
adicionarNodoAContenedor(divCohete1, divPadreDos);
adicionarNodoAContenedor(divPalmera1, divPadreDos);
adicionarNodoAContenedor(divDelfin1, divPadreDos);
adicionarNodoAContenedor(imagenCohete, divCohete);
adicionarNodoAContenedor(imagenPalmera, divPalmera);
adicionarNodoAContenedor(imagenDelfin, divDelfin);
adicionarNodoAContenedor(imagenCohete1, divCohete1);
adicionarNodoAContenedor(imagenPalmera1, divPalmera1);
adicionarNodoAContenedor(imagenDelfin1, divDelfin1);
adicionarNodoABody(divPadreTres); //divPadreTres > Elementos
adicionarNodoAContenedor(segundoLogo, divPadreTres);
adicionarNodoAContenedor(contenedorCopy, divPadreTres);
adicionarNodoAContenedor(textoCopy, contenedorCopy)
adicionarNodoAContenedor(company, contenedorCopy);
adicionarNodoAContenedor(guion, contenedorCopy);
adicionarNodoAContenedor(travel, contenedorCopy);
adicionarNodoAContenedor(by, contenedorCopy);
adicionarNodoAContenedor(templatemo, contenedorCopy);
adicionarNodoAContenedor(contenedorLogos, divPadreTres);
adicionarNodoAContenedor(facebook, contenedorLogos);
adicionarNodoAContenedor(twitter, contenedorLogos);
adicionarNodoAContenedor(linkedin, contenedorLogos);
adicionarNodoAContenedor(flickr, contenedorLogos);
adicionarNodoAContenedor(wifi, contenedorLogos);
home.classList.add("home");
divPadreUno.setAttribute("class", "container-main");
divPadreDos.setAttribute("class", "second-main-container");
divMenu.setAttribute("class", "menu-container");
home.setAttribute("id", "home");
divMedio.setAttribute("class", "middle-container");
spanPrecio.setAttribute("class", "span-price");
veniceItaly.setAttribute("class", "veniceItaly");
contenedorPaises.setAttribute("class", "country-container");
variosDivs.setAttribute("class", "many-containers");
divPadreTres.setAttribute("class", "footer-container");


// Definición de variables CSS
document.documentElement.style.setProperty('--verde', '#9ed034');
document.documentElement.style.setProperty('--rojo', '#e54747');
document.documentElement.style.setProperty('--grisClaro', '#888');

// Estilos para el body
document.body.style.margin = '0';
document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
document.body.style.fontSize = '13px';

// Estilos para .container-main
divPadreUno.style.backgroundImage = 'url("../recursos/imagenes/fondo.jpg")';
divPadreUno.style.backgroundSize = '98.75vw';
divPadreUno.style.backgroundRepeat = 'no-repeat';
divPadreUno.style.height = '48.15vw';
divPadreUno.style.position = 'relative';
divPadreUno.style.display = 'flex';
divPadreUno.style.justifyContent = 'center';

// Estilos para .container-main::after
var afterElement = document.createElement('style');
afterElement.textContent = `
    .container-main::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1;
    }
`;
document.head.appendChild(afterElement);

// Estilos para .arrow-container
divFlechaGris.style.zIndex = '2';
divFlechaGris.style.width = '100%';
divFlechaGris.style.display = 'flex';
divFlechaGris.style.position = 'absolute';
divFlechaGris.style.justifyContent = 'space-between';
divFlechaGris.style.margin = '25% 0';

// Estilos para .arrow-container > a
flechaGris.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
flechaGris.style.fontSize = '15px';
flechaGris.style.padding = '20px 15px';
flechaGris.style.alignItems = 'center';
flechaGris.style.textDecoration = 'none';

flechaGris2.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
flechaGris2.style.fontSize = '15px';
flechaGris2.style.padding = '20px 15px';
flechaGris2.style.alignItems = 'center';
flechaGris2.style.textDecoration = 'none';


// Estilos para .menu-container
divMenu.style.position = 'relative';
divMenu.style.display = 'flex';
divMenu.style.justifyContent = 'space-between';
divMenu.style.alignItems = 'center';
divMenu.style.backgroundColor = '#fff';
divMenu.style.padding = '2vw 0 2vw 1.9vw';
divMenu.style.marginTop = '4.42vw';
divMenu.style.maxWidth = '82%';
divMenu.style.height = '46px';
divMenu.style.zIndex = '2';
divMenu.style.overflow = 'hidden';

// Estilos para .menu-container > div
divNav.style.position = 'relative';
divNav.style.marginLeft = '30vw';
divNav.style.right = '0';
divNav.style.top = '0';
divNav.style.bottom = '0';
divNav.style.display = 'flex';
divNav.style.alignItems = 'center';

// Estilos para @media (max-width: 1150px)
var mediaQuery = window.matchMedia('(max-width: 1150px)');
if (mediaQuery.matches) {
    divNav.style.marginLeft = '18vw';
}
var links = divNav.querySelectorAll('a');
links.forEach(function(link) {
    link.style.color = '#afafaf';
    link.style.fontSize = '14px';
    link.style.padding = '100% 1.8vw'; // Ajuste de padding
    link.style.borderLeft = '1px solid #eee';
    link.style.textDecoration = 'none';
    link.style.display = 'inline-block'; // Asegurar que los enlaces sean inline-block para controlar su tamaño
    link.style.whiteSpace = 'nowrap'; 
});

// Estilos específicos para el enlace "HOME"
var homeLink = divNav.querySelector('a.home');
if (homeLink) {
    homeLink.style.color = '#fff'; 
    homeLink.style.backgroundColor = 'var(--verde)';
}
// Estilos para .middle-container
divMedio.style.position = 'absolute';
divMedio.style.backgroundColor = '#fff';
divMedio.style.textAlign = 'center';
divMedio.style.padding = '2.5vw';
divMedio.style.left = '0';
divMedio.style.margin = '15vw 0 0 7.8vw';
divMedio.style.zIndex = '2';

// Estilos para .span-price
spanPrecio.style.backgroundColor = 'var(--rojo)';
spanPrecio.style.color = '#fff';
spanPrecio.style.fontWeight = '700';
spanPrecio.style.fontSize = '28px';
spanPrecio.style.padding = '0.4vw 1.3vw';

// Estilos para .veniceItaly
veniceItaly.style.margin = '2.1vw 0 1.55vw 0';
veniceItaly.style.fontSize = '1.85vw';
veniceItaly.style.fontWeight = '600';
veniceItaly.style.color = '#444';

// Estilos para .middle-container > p
parrafoEnDivMedio.style.color = 'var(--grisClaro)';

// Estilos específicos para p:nth-of-type(1) y p:nth-of-type(2)
parrafoEnDivMedio.style.display = 'block';
parrafoEnDivMedio.style.marginBottom = '0';
parrafoDos.style.marginTop = '0';
parrafoDos.style.color = 'var(--grisClaro)';
parrafoDos.style.display = 'inline';

// Estilos para .middle-container > span:nth-of-type(2)
unsplash.style.color = 'var(--verde)';

// Estilos para .middle-container > a
botonVerdeMedio.style.backgroundColor = 'var(--verde)';
botonVerdeMedio.style.display = 'block';
botonVerdeMedio.style.textAlign = 'center';
botonVerdeMedio.style.width = 'max-content';
botonVerdeMedio.style.margin = '2vw auto 0 auto';
botonVerdeMedio.style.padding = '0.8vw 2.2vw';
botonVerdeMedio.style.color = '#fff';
botonVerdeMedio.style.fontWeight = '700';

// Estilos para .country-container
contenedorPaises.style.position = 'relative';
contenedorPaises.style.marginTop = '-53px';
contenedorPaises.style.height = 'auto';
contenedorPaises.style.width = '100%';
contenedorPaises.style.display = 'flex';
contenedorPaises.style.justifyContent = 'center';

// Estilos para .many-containers
variosDivs.style.display = 'flex';
variosDivs.style.justifyContent = 'center';
variosDivs.style.gap = '30px';
variosDivs.style.flexWrap = 'wrap';
variosDivs.style.position = 'relative';
variosDivs.style.zIndex = '2';

// Estilos para .many-containers > div > a
var links2 = variosDivs.querySelectorAll('div > a');
links2.forEach(function(link) {
    link.style.display = 'block';
    link.style.backgroundColor = 'var(--verde)';
    link.style.color = '#fff';
    link.style.textDecoration = 'none';
    link.style.marginTop = '15px';
    link.style.fontSize = '14px';
    link.style.fontWeight = '700';
    link.style.textAlign = 'center';
    link.style.padding = '12px 0';
});

// Estilos para .many-containers > div:nth-of-type(1) > a:nth-of-type(2)
var div1 = variosDivs.children[0]; 
var link1 = div1.children[0]; 
link1.style.position = 'absolute';
link1.style.top = '130px';
link1.style.marginTop = '12px'; 

// Estilos para .many-containers > div:nth-last-of-type(1) > a:nth-last-of-type(2)
var ultimoDiv = variosDivs.children[3];
var ultimoLink = ultimoDiv.children[0];
ultimoLink.style.position = 'absolute';
ultimoLink.style.top = '130px';
ultimoLink.style.left = 'calc(100% - 5.8%)';
ultimoLink.style.marginTop = '12px';
link1.style.setProperty('padding', '12px 15px');
ultimoLink.style.setProperty('padding', '12px 15px');

// Estilos para .many-containers > div
var divs = variosDivs.querySelectorAll('div');
divs.forEach(function(div) {
    div.style.marginBottom = '20px';
    div.style.width = '22%';
});

// Estilos para .many-containers > div > img
var imagenes = variosDivs.querySelectorAll('div > img');
imagenes.forEach(function(imagen) {
    imagen.style.width = '100%';
});

// Estilos para @media (max-width: 1000px)
var mediaQuery1000 = window.matchMedia('(max-width: 1100px)');
if (mediaQuery1000.matches) {
    divs[divs.length - 1].style.display = 'none';
    divs.forEach(function(div) {
        div.style.width = '28%';
    });
    variosDivs.style.flexWrap = 'nowrap';
    variosDivs.style.marginTop = '80px';
}

// Estilos para @media (max-width:720px)
var mediaQuery720 = window.matchMedia('(max-width: 820px)');
if (mediaQuery720.matches) {
    divs.forEach(function(div) {
        div.style.width = '38%';
    });
    variosDivs.style.flexWrap = 'wrap';
    divs[divs.length - 1].style.display = 'block';
}

// Estilos para .many-containers > div > h4
var titulos = variosDivs.querySelectorAll('div > h4');
titulos.forEach(function(titulo) {
    titulo.style.backgroundColor = 'var(--verde)';
    titulo.style.color = '#fff';
    titulo.style.margin = '0';
    titulo.style.fontSize = '23px';
    titulo.style.fontWeight = '400';
    titulo.style.padding = '10px 0';
    titulo.style.textAlign = 'center';
});

// Estilos para .many-containers > div > span:nth-of-type(1)
var spans1 = variosDivs.querySelectorAll('div > span:nth-of-type(1)');
spans1.forEach(function(span) {
    span.style.display = 'block';
    span.style.color = 'var(--verde)';
    span.style.marginTop = '8px';
    span.style.fontWeight = '700';
    span.style.fontSize = '14px';
});

// Estilos para .many-containers > div > span:nth-of-type(2)
var spans2 = variosDivs.querySelectorAll('div > span:nth-of-type(2)');
spans2.forEach(function(span) {
    span.style.color = 'var(--rojo)';
    span.style.display = 'block';
    span.style.margin = '5px 0';
    span.style.fontWeight = '400';
});

// Estilos para .second-main-container
divPadreDos.style.backgroundColor = '#eee';
divPadreDos.style.display = 'grid';
divPadreDos.style.marginTop = '5vw';
divPadreDos.style.gridTemplateColumns = 'repeat(auto-fit, minmax(150px, 0.14fr))';
divPadreDos.style.justifyContent = 'center';
divPadreDos.style.gridAutoFlow = 'dense';
divPadreDos.style.gridAutoColumns = 'minmax(10vw, 1fr)';
divPadreDos.style.position = 'relative';

// Estilos para .second-main-container > div
var divsSegundoMain = divPadreDos.querySelectorAll('div');
divsSegundoMain.forEach(function(div) {
    div.style.borderLeft = '1px solid #d4d4d4';
    div.style.padding = '30px 0';
    div.style.textAlign = 'center';
});

// Estilos para .second-main-container > div:nth-last-of-type(1)
divsSegundoMain[divsSegundoMain.length - 1].style.borderRight = '1px solid #d4d4d4';

// Estilos para @media (max-width: 1050px)
var mediaQuery1050 = window.matchMedia('(max-width: 1050px)');
if (mediaQuery1050.matches) {
    divPadreDos.style.gridTemplateColumns = 'auto auto auto';
    divPadreDos.style.justifyContent = 'space-around';
    divsSegundoMain.forEach(function(div) {
        div.style.border = '0';
    });
}

// Estilos para @media (max-width: 800px)
var mediaQuery800 = window.matchMedia('(max-width: 800px)');
if (mediaQuery800.matches) {
    divPadreDos.style.gridTemplateColumns = 'auto auto';
}

// Estilos para .footer-container
divPadreTres.style.display = 'flex';
divPadreTres.style.justifyContent = 'space-around';
divPadreTres.style.alignItems = 'center';
divPadreTres.style.padding = '100px 0';

// Estilos para .footer-container > div > span
var spansFooter = divPadreTres.querySelectorAll('div > span');
spansFooter.forEach(function(span) {
    span.style.color = 'var(--grisClaro)';
});

// Estilos para .footer-container > div > span:nth-of-type(2n+2)
spansFooter.forEach(function(span, index) {
    if (index % 2 !== 0) {
        span.style.color = 'var(--verde)';
    }
});


// Estilos para .footer-container > div > img
var imagenesFooter = divPadreTres.querySelectorAll('div > div > img');
imagenesFooter.forEach(function(imagen) {
    imagen.style.marginLeft = '30px';
    imagen.style.width = '13px';
});

