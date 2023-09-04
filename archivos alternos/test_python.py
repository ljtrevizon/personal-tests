import math
import random

i = 0
numeros = []
n=random.randint(1,100000)
print("El numero es: ",n)
print("----------------------------------------------------------------")
while i <= n*2:
    if i%2 != 0:
        numeros.append(i)
        print(i)
    i+=1
print("El numero fue: ",n)
print("----------------------------------------------------------------")
suma=sum(numeros)
print("|","La raiz cuadrada de los primeros ",n," numeros impares es: ",math.sqrt(suma),"|")
print("----------------------------------------------------------------")

input()

i=1
numero3 = random.randint(1,10000000)
numero1 = random.randint(1,10000000)
numero2 = random.randint(1,10000000)
complete=""


while (numero1!=numero3 and numero2!=numero3):
    print(i)
    i=i+1
    numero1=random.randint(1,10000000)
    numero2=random.randint(1,10000000)
    if i==10000:
        numero1=numero3
        numero2=numero3
        complete="false"
    else:
        complete="true"
print("-----------")
if complete=="false":
    print("No se logro el objetivo")
    print("El numero fue: ",numero3)
else:
    print("Fueron ",i," intentos")


input()

