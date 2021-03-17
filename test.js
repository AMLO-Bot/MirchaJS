class Pelicula {
    constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
      this.id = id;
      this.titulo = titulo;
      this.director = director;
      this.estreno = estreno;
      this.pais = pais;
      this.generos = generos;
      this.calificacion = calificacion;
  
      this.validarIMDB(id);
      this.validarTitulo(titulo);
      this.validarDirector(director);
      this.validarEstreno(estreno);
      this.validarPais(pais);
      this.validarGeneros(generos);
      this.validarCalificacion(calificacion);
    }
  
    static get listaGeneros() {
      return [
        "Action",
        "Adult",
        "Adventure",
        "Animation",
        "Biography",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Family",
        "Fantasy",
        "Film Noir",
        "Game-Show",
        "History",
        "Horror",
        "Musical",
        "Music",
        "Mystery",
        "News",
        "Reality-TV",
        "Romance",
        "Sci-Fi",
        "Short",
        "Sport",
        "Talk-Show",
        "Thriller",
        "War",
        "Western",
      ];
    }
  
    static generosAceptados() {
      return console.info(
        `Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`
      );
    }
  
    validarCadena(propiedad, valor) {
      if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
      if (typeof valor !== "string")
        return console.error(
          `${propiedad} "${valor}" ingresado, NO es una cadena de texto`
        );
    }
  
    validarLongitudCadena(propiedad, valor, longitud) {
      if (valor.length > longitud)
        return console.error(
          `${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud})`
        );
      return true;
    }
  
    validarNumero(propiedad, valor) {
      if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
      if (typeof valor !== "number")
        return console.error(
          `${propiedad} "${valor} ingresado, NO es un numero"`
        );
  
      return true;
    }
  
    validarArreglo(propiedad, valor) {
      if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);
      if (!(valor instanceof Array))
        return console.error(
          `${propiedad} "${valor}" ingresado, NO es un arreglo`
        );
      if (valor.length === 0) return console.error("no tiene datos");
      for (let num of valor) {
        if (typeof num !== "string") {
          return console.error(
            `El valor ${num} ingresado no es un cadena de texto`
          );
        }
      }
  
      return true;
    }
  
    validarIMDB(id) {
      if (this.validarCadena("IMDB id", id)) {
        if (!/^([a-z]{2}([0-9]){7}$)/.test(id)) {
          return console.error(
            `IMDB id "${id}" no es váñido, debe tener 9 carcateres, los 2 primeros letras minusculas, los 7 restantes numeros`
          );
        }
      }
    }
  
    validarTitulo(titulo) {
      if (this.validarCadena("Titulo", titulo)) {
        this.validarLongitudCadena("Titulo", titulo, 100);
      }
    }
  
    validarDirector(director) {
      if (this.validarCadena("Director", director)) {
        this.validarLongitudCadena("Director", director, 50);
      }
    }
  
    validarEstreno(estreno) {
      if (this.validarNumero("Año de estreno", estreno)) {
        if (!/^([0-9]){4}$/.test(estreno)) {
          return console.error(
            `Año de estreno "${estreno}" no es válido, debe ser un numero de 4 digitos`
          );
        }
      }
    }
  
    validarPais(pais) {
      this.validarArreglo("Pais", pais);
    }
  
    validarGeneros(generos) {
      if (this.validarArreglo("Géneros", generos)) {
        for (const genero of generos) {
          if (!Pelicula.listaGeneros.includes(genero)) {
            console.error(`Géneros incorrectos "${generos.join(", ")}`);
            Pelicula.generosAceptados();
          }
        }
      }
    }
  
    validarCalificacion(calificacion) {
      if (this.validarNumero("Calificación", calificacion))
        return calificacion < 0 || calificacion > 10
          ? console.error("La calificación tiene que estar entre 0 y 10")
          : (this.calificacion = calificacion.toFixed(1));
    }
  
    fichaTecnica() {
      console.info(
        `Ficha Técnica: \nTítulo: ${this.titulo} \nDirector: ${
          this.director
        }\nAño: ${this.estreno} \nPais: ${this.pais.join(
          ", "
        )}\nGéneros: ${this.generos.join(", ")}\nCalificación: ${
          this.calificacion
        }\nIMDB id: ${this.id}`
      );
    }
  }
  
  const peliculas = [
    {
      id: "tt1234567",
      titulo: "el titulo",
      director: "Manuel medarno",
      estreno: 2020,
      pais: ["Mexico"],
      generos: ["Comedy", "Sport"],
      calificacion: 1,
    },
    {
      id: "tt1234567",
      titulo: "el titulo",
      director: "Manuel medarno",
      estreno: 2020,
      pais: ["Mexico"],
      generos: ["Comedy", "Sport"],
      calificacion: 2,
    },
    {
      id: "tt1234567",
      titulo: "el titulo",
      director: "Manuel medarno",
      estreno: 2020,
      pais: ["Mexico"],
      generos: ["Comedy", "Sport"],
      calificacion: 8,
    },
  ];
  console.log(new Pelicula("tt1234567","el titulo","Manuel medarno",2020,["Mexico"],["Comedy", "Sport"],8))
  peliculas.forEach((el) => new Pelicula(el).fichaTecnica());