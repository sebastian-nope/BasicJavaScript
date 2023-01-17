var articulos = [
    {nombre: "Bicicleta", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];

//.filter
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <=500
});
//(2)[{costo:320 nombre:Libro}{costo:500 nombre:Teclado}]


//.map
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});
//(7)[ Bicicleta,Tv,Libro,Celular,Laptop,Teclado,Audifonos ]


//.find
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});
//{ costo:20000,nombre:Laptop }


//.forEach
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
//Bicicleta Tv Libro Celular Laptop Teclado Audifonos


//.some
var articulosBaratos = articulos.some(function(){
    return articulo.costo <=700;
});
//true