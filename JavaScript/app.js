
/*Segundo Entregable */

function Articulo(cod_articulo,descripcion,precio,descuento,cantPdesc){

    this.cod_articulo=cod_articulo;
    this.descripcion=descripcion;
    this.precio=precio;
    this.descuento=descuento;
    this.cantPdesc=cantPdesc;
  
    
}

function CalculoDescuentos(precio,descuento,cantidad)
{
    var calculo
    var resultado

    calculo=descuento* precio*cantidad/100 
    resultado=precio * cantidad -calculo
    return resultado
}


const articulo1= new Articulo("1144","Amoxidal",1200,10,2)
const articulo2= new Articulo("2244","Crema Anti Age",2500,5,2)
const articulo3= new Articulo("3344","Ibuprofeno",900,15,5)
const articulo4= new Articulo("4444","Aspirina",500,10,3)
const articulo5= new Articulo("5544","Bisolvon",2800,20,4)

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
  
     else if(codIngresado=="1144")
        {
           alert("El Articulo elegido es"+ " " +articulo1.descripcion + "\n" + "Su precio es :$"+articulo1.precio+"\n"+"si compra más de "+" "+articulo1.cantPdesc+" "+"Unidades" +"\n"+"tiene un descuento del"+" "+articulo1.descuento+"%"+"\n"+"---------------------------------------")
           cantidadIngresada=prompt("Cantidad")
           if(cantidadIngresada >articulo1.cantPdesc )
           {

            var resultadoFinal= CalculoDescuentos(articulo1.precio,articulo1.descuento,cantidadIngresada)
            alert("El precio Final de la compra es de $ " + " " + resultadoFinal) 
             


           }
           else
           {
           preciofinal=cantidadIngresada*articulo1.precio
           TotalAcumulado=+preciofinal
           alert("El precio Final de la compra es de $" + " " + preciofinal)
           
            }



          
   
        }
        else if(codIngresado=="2244")
        {
            alert("El Articulo elegido es"+ " " +articulo2.descripcion + "\n" + "Su precio es :$"+articulo2.precio+"\n"+"si compra más de "+" "+articulo2.cantPdesc+" "+"Unidades" +"\n"+"tiene un descuento del"+" "+articulo2.descuento+"%"+"\n"+"---------------------------------------")
            cantidadIngresada=prompt("Cantidad")
            if(cantidadIngresada > articulo2.cantPdesc )
            {
                var resultadoFinal= CalculoDescuentos(articulo2.precio,articulo2.descuento,cantidadIngresada)
            alert("El precio Final de la compra es de $ " + " " + resultadoFinal) 
              
 
 
            }
            else
            {
            preciofinal=cantidadIngresada*articulo2.precio
            TotalAcumulado=+preciofinal
            alert("El precio Final de la compra es de $" + " " + preciofinal)
            
             }
 
   
        }
        else if(codIngresado=="3344")
        {
            alert("El Articulo elegido es"+ " " +articulo3.descripcion + "\n" + "Su precio es :$"+articulo3.precio+"\n"+"si compra más de "+" "+articulo3.cantPdesc+" "+"Unidades" +"\n"+"tiene un descuento del"+" "+articulo3.descuento+"%"+"\n"+"---------------------------------------")
            cantidadIngresada=prompt("Cantidad")
            if(cantidadIngresada > articulo3.cantPdesc )
            {
                var resultadoFinal= CalculoDescuentos(articulo3.precio,articulo3.descuento,cantidadIngresada)
                alert("El precio Final de la compra es de $ " + " " + resultadoFinal) 
              
 
 
            }
            else
            {
            preciofinal=cantidadIngresada*articulo3.precio
            TotalAcumulado=+preciofinal
            alert("El precio Final de la compra es de $" + " " + preciofinal)
            
             }
 
   
        }
        else if(codIngresado=="4444")
        {
            alert("El Articulo elegido es"+ " " +articulo4.descripcion + "\n" + "Su precio es :$"+articulo4.precio+"\n"+"si compra más de "+" "+articulo4.cantPdesc+" "+"Unidades" +"\n"+"tiene un descuento del"+" "+articulo4.descuento+"%"+"\n"+"---------------------------------------")
            cantidadIngresada=prompt("Cantidad")
            if(cantidadIngresada > articulo4.cantPdesc )
            {
                var resultadoFinal= CalculoDescuentos(articulo4.precio,articulo4.descuento,cantidadIngresada)
                alert("El precio Final de la compra es de $ " + " " + resultadoFinal) 
                
              
 
 
            }
            else
            {
            preciofinal=cantidadIngresada*articulo4.precio
            TotalAcumulado=+preciofinal
            alert("El precio Final de la compra es de $" + " " + preciofinal)
            
             }
 
   
        }
        else if(codIngresado=="5544")
        {
            alert("El Articulo elegido es"+ " " +articulo5.descripcion + "\n" + "Su precio es :$"+articulo5.precio+"\n"+"si compra más de "+" "+articulo5.cantPdesc+" "+"Unidades" +"\n"+"tiene un descuento del"+" "+articulo5.descuento+"%"+"\n"+"---------------------------------------")
            cantidadIngresada=prompt("Cantidad")
            if(cantidadIngresada > articulo5.cantPdesc )
            {
                var resultadoFinal= CalculoDescuentos(articulo5.precio,articulo5.descuento,cantidadIngresada)
                alert("El precio Final de la compra es de $ " + " " + resultadoFinal) 
              
 
 
            }
            else
            {
            preciofinal=cantidadIngresada*articulo5.precio
            TotalAcumulado=+preciofinal
            alert("El precio Final de la compra es de $" + " " + preciofinal)
            
             }
 
   
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




   

