# Traslaductor

Este es un proyecto que traduce palabras a un idioma inventado.

## Descripción de idioma

- Si la palabra termina con 'ar', se le quitan esas dos letras. Ejemplo: amasar => amas
- Si la palabra inicia con 'z', se le añade 'pe' al final de la palabra. Ejemplo: Zorro => Zorrope |Zarpar => Zarppe, por la regla 1
- Si la palabra traducida tiene más de 10 letras, se debe dividir a la mitad y unir por un guion
- Si la palabra original es un palíndromo, ninguna regla cuenta y la palabra se devuelve igual intercalando mayusculas y minusculas. Ejemplo : sometemos => SoMeTeMoS

## Instalación

```
npm install traslaductor
```

## Uso

```
import traslaductor from 'traslaductor'

traslaductor("Programar") // Program
trasluctor("Zorro")) // Zorrope
trasluctor("Zarpar")) // Zarppe
trasluctor("Paralelepiped")) // paralel-epipedo
trasluctor("oao")) // somos
```

## Créditos

- [Tjier Salazar Varos](https://twitter.com/TjierSV)

## License

[MIT](https://opensource.org/licenses/MIT)