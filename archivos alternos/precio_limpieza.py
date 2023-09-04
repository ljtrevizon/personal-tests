print("Elige el tipo de vivienda (por medio del numero al lado del nombre)")
print("1. Casa de un piso: 50")
print("2. Casa de dos pisos: 60")
print("3. Apartamento: 40")
print("4. Casa de tres pisos o mas: 70")
opcion_casa=int(input("Escoja el numero: "))
if opcion_casa>4 and opcion_casa<=0:
    print("Error")
else: 
    opcion_habitaciones=int(input("Escoja el numero de habitaciones: "))
    if opcion_casa == 1:
        precio_base=50
    else:
        if opcion_casa==2:
            precio_base=60
        else:
            if opcion_casa==3:
                precio_base=40
            else:
                if opcion_casa==4:
                    precio_base=70
    if opcion_habitaciones==1:
        precio_habitaciones=10
    else:
        if opcion_habitaciones >=2 and opcion_habitaciones<=4:
            precio_habitaciones=20
        else:
            if opcion_habitaciones >=5:
                precio_habitaciones=30
precio_total=precio_base+precio_habitaciones
propina=precio_total*0.15
precio_total=propina+precio_total
print("El precio total es: ",precio_total)