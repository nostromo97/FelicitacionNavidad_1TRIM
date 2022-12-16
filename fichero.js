/*------------------------------------------
Asignatura: Desarrollo Web en Entorno Cliente
Autor: Agustín Arcos Reyes
Curso: 2ºDAW
Fecha: Diciembre 2022
Centro: CENEC Málaga
--------------------------------------------*/

//Función que hace que la animación comienza tras 3000 milisegundos (3 segundos).
$(document).ready(setTimeout(function() {
    animation();
}),3000);


//Los fundidos de las animaciones
function animation(){
    var title1 = new TimelineMax();
    //De la clase titulo
    title1.staggerFromTo(".titulo", 1,
    {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
    {ease: Back.easeOut.config(1.7), opacity: 1, bottom:0}, 0.05);
    //Del div donde están los titulos
    title1.staggerFromTo("div", 1,
    {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
    {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);


}