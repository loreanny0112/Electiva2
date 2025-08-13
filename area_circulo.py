import math

def calcular_area_circulo(radio):
    area = math.pi * radio ** 2
    return area

# Ejemplo de uso
if __name__ == "__main__":
    radio = float(input("Introduce el radio del círculo: "))
    area = calcular_area_circulo(radio)
    print(f"El área del círculo con radio {radio} es: {area:.2f}")
