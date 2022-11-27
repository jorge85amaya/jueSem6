let diaSemana = prompt("¿Que dia de la semana es hoy?");
let ejerLun = "Camina 10km.";
let ejerMar = "Camina 15km.";
let ejerMie = "Camina 20km.";
let ejerJue = "Corre 5km.";
let ejerVie = "Corre 10km.";
let ejerSab = "Corre 15km.";
let ejerDom = "Camina 10km.";
switch (diaSemana){
    case "lunes":
        alert(`Hoy es lunes: ${ejerLun}`);
        break;
    case "martes":
        alert(`Hoy es martes: ${ejerMar}`);
        break;
    case "miercoles":
        alert(`Hoy es miercoles: ${ejerMie}`);
        break;
    case "jueves":
        alert(`Hoy es jueves: ${ejerJue}`);
        break;
    case "viernes":
        alert(`Hoy es viernes: ${ejerVie}`);
        break;
    case "sabado":
        alert(`Hoy es sabado: ${ejerSab}`);
        break;
    case "domingo":
        alert(`Hoy es domingo: ${ejerDom}`);
        break;
    default:
        alert("Escribe el dia de la semana completo y en minúscula.");
}