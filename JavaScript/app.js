
/*Segundo Entregable */

function Articulo(cod_articulo,descripcion,precio,descuento,cantPdesc){

    this.cod_articulo=cod_articulo;
    this.descripcion=descripcion;
    this.precio=precio;
    this.descuento=descuento;
    this.cantPdesc=cantPdesc;
}


const articulo1= new Articulo("112244","Amoxidal",1200,10,2)
const articulo2= new Articulo("113344","Crema Anti Age",2500,5,2)
const articulo3= new Articulo("114444","Ibuprofeno",900,15,5)
const articulo4= new Articulo("115544","Aspirina",500,10,3)
const articulo5= new Articulo("116644","Bisolvon",2800,20,4)

var codIngresado=0
var cantidadIngresada=0
var preciofinal=0
var TotalAcumulado


alert("Bienvenido a FarmaShop, a continuación el listado de nuestros articulos")



console.table(articulo1)
console.table(articulo2)
console.table(articulo3)
console.table(articulo4)
console.table(articulo5)

if (confirm("Desea comprar algun Articulo?"))
    {
     true;
     codIngresado=prompt("Ingrese Codigo del Articulo:")

     if(isNaN(codIngresado))
     {
        alert("Debe Ingresar un Numero no se permiten Textos, si desea salir ponga cero")
        codIngresado=prompt("Ingrese Codigo del Articulo:")
     while(isNaN(codIngresado))
     {
        alert("Debe Ingresar un Numero no se permiten Textos, si desea salir ponga cero")
        codIngresado=prompt("Ingrese Codigo del Articulo:")
        if(codIngresado==0)
        {
            alert("Muchas gracias por su visita!!")
        }
     }
    }
  
     else if(codIngresado=="112244")
        {
           alert("El Articulo elegido es"+ " " +articulo1.descripcion + "\n" + "Su precio es :$"+articulo1.precio+"\n"+"si compra más de "+" "+articulo1.cantPdesc+" "+"Unidades" +"\n"+"tiene un descuento del"+" "+articulo1.descuento+"%"+"\n"+"---------------------------------------")
           cantidadIngresada=prompt("Cantidad")
           if(cantidadIngresada >2 )
           {
               var calculo=0
               
               calculo=articulo1.descuento/100 * articulo1.precio
               preciofinal=articulo1.precio-calculo
               TotalAcumulado=+preciofinal

               alert("se aplicara un descuento de $" + " " + calculo)
               alert("El precio Final de la compra es de $" + " " + preciofinal) 
               alert(TotalAcumulado)


           }
           preciofinal=cantidadIngresada*articulo1.precio
           TotalAcumulado=+preciofinal
           alert("El resultado de su compra es de $" + " " + preciofinal)
           alert("El acumulado es de :"+" "+"$"+TotalAcumulado)
           confirm("Muchas gracias por su compra, desea seguir comprando?")



           while(isNaN(cantidadIngresada))
           {
               alert("Debe Ingresar un Numero, si quiere salir ponga Cero")
               cantidadIngresada=prompt("Cantidad")
   
               if(cantidadIngresada==0)
               {
                   alert("Muchas gracias por su visita!!")
               }
               else
               {
   
               }
           }
   
        }
        else if(codIngresado=="113344")
        {
   
        }
        else if(codIngresado=="114444")
        {
   
        }
        else if(codIngresado=="115544")
        {
   
        }
        else if(codIngresado=="116644")
        {
   
        }



    }
    else
    {
     false;
     alert("Gracias por su visita")
    }















/*Primer Entregable
var numero=0
var contador =0
var intentos=5

alert('Adivina el numero del 1 al 10 en 5 intentos')
while(numero!=3)
{
    
    numero=prompt("Ingrese Número:")
    if(isNaN(numero))
    {
        alert("Debe Ingresar un Numero no se permiten Textos")
    }
   else if(numero <=0 || numero > 10)
    {
        alert("Debe Ingresar un Número entre 1 y 10")
       
    }
    else{

    if(numero==3)
    {
        alert("Felicitaciones adivinaste el numero!!")
    }
    else
    {
        
            contador++
            cantidad=5-contador
            
            alert("Fallaste te quedan" +' '+ cantidad + ' '+  'Intentos')

    }
    if(contador==5)
    {
        alert("Lo siento has perdido el Juego!!")
    }
    
}
       
    

   
}

   */




   

