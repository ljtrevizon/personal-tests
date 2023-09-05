import math
import random

i = 0
numeros = []
n=random.randint(1,500)
print("El numero es: ",n)
print("----------------------------------------------------------------")
while i <= n*2:
    if i%2 != 0:
        numeros.append(i)
    i+=1
suma=sum(numeros)
print("|","La raiz cuadrada de los primeros ",n," numeros impares es: ",math.sqrt(suma),"|")
print("----------------------------------------------------------------")

input()

i=1
numero3 = random.randint(1,1000)
numero1 = random.randint(1,10000000)
numero2 = random.randint(1,10000000)
complete=""


while (numero1!=numero3 or numero2!=numero3):
    
    numero1=random.randint(1,10000000)
    numero2=random.randint(1,10000000)
    numero3=random.randint(1,10000000)
    print(i)
    i+=1
print(numero1," y ",numero2)
print("-----------")
print("El numero fue: ",numero3)
print("Fueron ",i," intentos")


input()

