import random

minus="abcdefghijklmnopqrstuvxyz"
maximus=minus.upper()
numeros="123456789"
especiales="@#$%^&*()_+{}[]"
base=minus+maximus+numeros+especiales

longitud=50
for _ in range (5):
    muestra=random.sample(base, longitud)
    password="".join(muestra)
    print(password)