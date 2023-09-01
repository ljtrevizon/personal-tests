import math
import random
i = 0
numeros = []
n=random.randint(1,20)
print("El numero es: ",n)
print("----------------------------------------------------------------")
while i <= n*2:
    if i%2 != 0:
        numeros.append(i)
        print(numeros)
    i+=1
print("----------------------------------------------------------------")
suma=sum(numeros)
print("|","La raiz cuadrada de los primeros ",n," numeros impares es: ",math.sqrt(suma),"|")
print("----------------------------------------------------------------")

