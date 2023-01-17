var user= "piedra";
var cpu= "papel";


switch (true) {

    //empate
    case user == cpu:
        console.log("Empate, escogiste "+ user +" que empata con "+ cpu);
        break;

    //piedra
    case user == "piedra" && cpu == "papel":
        console.log ("Ganaste, la piedra gana contra a la tijera");
        break;
    case user == "piedra" && cpu == "tijera":
        console.log ("Ganaste, la piedra gana contra a la tijera");
        break;
    
    //papel 
    case user == "papel" && cpu == "piedra":
        console.log ("Ganaste, el papel gana contra la piedra");
        break;
    case user == "papel" && cpu == "tijera":
        console.log ("Perdiste, el papel pierde contra la tijera");
        break;

    //tijera
    case user == "tijera" && cpu == "piedra":
        console.log ("Perdiste, la tijera pierde contra la piedra");
        break;
    case user == "tijera" && cpu == "papel":
        console.log ("Ganaste, la tijera gana contra el papel");
        break;

    default:
        console.log ("Error, elije bien por favor");
}