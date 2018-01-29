###1. CIFRADO CÉSAR
##Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha

#Por ejemplo:

###Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
##Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG
#A continuación un video de Michelle que te lleva a través de la fórmula matemática del Cifrado César y un par de cosas más que debes saber para resolver este reto. ¡Escúchala con detenimiento y sigue sus consejos! :)


#También te compartimos más información de lo que Michelle te ha explicado en el video anterior:

##Consideraciones Específicas

##Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26
##Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher
##El usuario no debe poder ingresar un campo vacío o que contenga números