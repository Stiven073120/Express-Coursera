var Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function (){
    return 'id: ' + this.id + "| color: " + this.color;
}

// agregar bicicletas
Bicicleta.allBicis = [];
Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici);
}

// buscar bicicletas por id 
Bicicleta.findById = function(aBiciId){
    var aBici = Bicicleta.allBicis.find(x => x.id ==aBiciId);
    if (aBici)
        return aBici;
    else
        throw new Error(`No existe una bicicleta con el id ${aBiciId}`)     
}

// remover bicicletas 
Bicicleta.removeById = function(aBiciId){
    for(var i = 0; i < Bicicleta.allBicis.length; i++){
        if (Bicicleta.allBicis[i].id = aBiciId){
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }
}



var a = new Bicicleta(1, 'rojo', 'urbana', [4.411518653907084, -75.26588555333936]);
var b = new Bicicleta(2, 'blanca', 'urbana', [4.410415016063295, -75.26474887750399])

Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta; 