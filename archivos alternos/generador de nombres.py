import random

nombres=[]
print("Elige 10 nombres")
for _ in range (10):
    nombre=str(input("Escribe un nombre: "))
    nombres.append(nombre)
print("Elige 10 apellidos")
apellidos=[]
for _ in range (10):
    apellido = str(input("Escribe un apellido: "))
    apellidos.append(apellido)
lista = []
i=0
vueltas = int(input("Elige cuantos numeros quieres: "))
while i<vueltas:
    combinado = nombres[random.randint(0,9)]+" "+apellidos[random.randint(0,9)]
    lista.append(combinado)
    i+=1
    print(i,". ",combinado)
print("La lista es: ",lista)