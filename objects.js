var miAuto = {
    marca: "Fiat",
    modelo: "Siena",
    color: "Rojo",
    anio: 2006,
    placa: "BSL-351",
    detalleDelAuto: function(){
        console.log(`Marca:${this.marca} Modelo:${this.modelo} Color:${this.color} Año:${this.anio} Placa:${this.placa}`);
    }
};

miAuto.marca //"Fiat"
miAuto.anio //"2006"

miAuto.detalleDelAuto(); // Marca:Fiat Modelo:Siena Color:Rojo Año:2006 Placa:BSL-351