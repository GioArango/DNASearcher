# Mutant DNA Detector

Programa para detectar la secuencia ADN de un mutante.

### Prerequisitos
------------
- Node.js (v16 o superior)
- npm

### Instalación

------------

1. Clonar repositorio
```
git clone https://github.com/GioArango/DNASearcher.git`
cd DNASearcher
```

2. Instalar dependencias
```
npm install
```

### Ejecución local
------------

```
npm run dev
```

### Endpoint

- **URL:** `http://localhost:3000/api/v1/dna/mutant`
- **Método:** POST
- **Content-Type:** `application/json`
 


### Ejecución en la Nube
------------

### Endpoint

- **URL:** `https://tkt0l87jmd.execute-api.us-east-2.amazonaws.com/dev/mutant`
- **Método:** POST
- **Content-Type:** `application/json`

### Ejemplo solicitud:
------------
```
{
    "dna": [
        "ATGCGA",
        "CCGTGA",
        "TTATTA",
        "TAGATA",
        "TCAACA",
        "TCAATA"
    ]
}
```

### Respuesta
- **200 OK:** Mutante detectado
- **403 Forbidden:** ADN Humano no mutante
- **400 Bad Request:** Solicitud incorrecta
- **500 Internal Server Error:** Error del servidor