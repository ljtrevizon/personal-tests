import random

minus="abcdefghijklmnopqrstuvxyz"
maximus=minus.upper()
numeros="123456789"
especiales="@#$%^&*()_+{}[]"
base=minus+maximus+numeros+especiales
i=1

longitud=50
for _ in range (30):
    muestra=random.sample(base, longitud)
    password="".join(muestra)
    print(i,". ",password)
    i=i+1