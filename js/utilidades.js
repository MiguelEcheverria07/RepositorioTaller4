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
adicionarNodoABody(divPadreUno); 
adicionarNodoAContenedor(divMenu, divPadreUno); //divPadreUno > divMenu
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