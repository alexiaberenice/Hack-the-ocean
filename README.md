**Contenido**

[TOCM]

[TOC]

# Deep Blue
## Introducción
*DeepBlue: save the ocean* es un proyecto realizado para el hackathon "Hack the ocean" en LaunchX de InnovaccionVirtual.

El proyecto nació para resolver una problematica:** La contaminacion de los océanos**
Consiste en el desarrollo de una aplicación web conectada a distintos sensores colocados en los océanos (Pacífico, Indico, Atlántico, Ártico, Antártico) que permita medir el nivel de contaminación del agua de acuerdo a indicadores como el fosforo, el nitrogeno o la presencia de microplasticos como principales contaminantes.

Dentro de esta aplicación se podrá:
- Visualizar la ubicación de los sensores en un *mapa 3D* de los océanos proporcionado por google earth
- Seleccionar un oceano en especifico para visualizar la información de los sensores a través de gráficas, o si se desea, un resumen de los 5 oceanos y los principales contaminantes. 
- De igual manera, dentro de la página encontraremos informacion sobre las acciones que podemos realizar para reducir el daño ambiental en los océanos.

##Tecnologías usadas
![](https://alexiaberenice.github.io/tecnologias.png)

### Imagenes

![](https://alexiaberenice.github.io/Imagenes/inicio.png)

>Mapa 3D de los oceanos proporcionado por google earth

![](https://alexiaberenice.github.io/Imagenes/inidices.png)

> Indices de contaminación

![](https://alexiaberenice.github.io/Imagenes/Contaminantes.png)

> Principales contaminantes

![](https://alexiaberenice.github.io/Imagenes/Acerca de.png)

> Acerca de
                
----
###Diagramas

```flow
st=>start: Login
op=>operation: Login operation
cond=>condition: Successful Yes or No?
e=>end: To admin

st->op->cond
cond(yes)->e
cond(no)->op
```

![](https://alexiaberenice.github.io/Logo.png)
###End
