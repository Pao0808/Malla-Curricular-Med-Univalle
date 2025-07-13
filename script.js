const cursos = [
  {
    semestre: "Primer semestre",
    materias: [
      { id: "anatomia1", nombre: "Anatomía I" },
      { id: "genetica", nombre: "Genética" },
      { id: "histologia1", nombre: "Histología I" },
      { id: "informatica", nombre: "Informática Aplicada" }
    ]
  },
  {
    semestre: "Segundo semestre",
    materias: [
      { id: "anatomia2", nombre: "Anatomía II", requiere: ["anatomia1"] },
      { id: "embriologia", nombre: "Embriología", requiere: ["genetica"] },
      { id: "histologia2", nombre: "Histología II", requiere: ["histologia1"] },
      { id: "bioquimica1", nombre: "Bioquímica I" },
      { id: "salud1", nombre: "Salud Pública I" },
      { id: "ingles1", nombre: "Inglés Técnico I" }
    ]
  },
  {
    semestre: "Tercer semestre",
    materias: [
      { id: "bioquimica2", nombre: "Bioquímica II", requiere: ["bioquimica1"] },
      { id: "fisiologia1", nombre: "Fisiología I", requiere: ["anatomia1"] },
      { id: "patologia1", nombre: "Patología I", requiere: ["anatomia2", "histologia2"] },
      { id: "biofisica", nombre: "Biofísica", requiere: ["anatomia1"] },
      { id: "ingles2", nombre: "Inglés Técnico II", requiere: ["ingles1"] },
      { id: "microbio1", nombre: "Microbiología I" }
    ]
  },
  {
    semestre: "Cuarto semestre",
    materias: [
      { id: "bioquimica3", nombre: "Bioquímica III", requiere: ["bioquimica2"] },
      { id: "fisiologia2", nombre: "Fisiología II", requiere: ["fisiologia1"] },
      { id: "microbio2", nombre: "Microbiología II", requiere: ["microbio1"] },
      { id: "parasitologia", nombre: "Parasitología", requiere: ["microbio1"] },
      { id: "patologia2", nombre: "Patología II", requiere: ["patologia1"] },
      { id: "psicologia", nombre: "Psicología Médica" },
      { id: "sociologia", nombre: "Sociología y Ética Médica" },
      { id: "nutricion", nombre: "Electiva (Nutrición)" }
    ]
  },
  {
    semestre: "Quinto semestre",
    materias: [
      { id: "semiologia1", nombre: "Semiología General y Especial I", requiere: ["fisiologia2", "bioquimica3"] },
      { id: "tecnica1", nombre: "Técnica Quirúrgica I", requiere: ["fisiologia2"] },
      { id: "farmaco1", nombre: "Farmacología y Terapéutica I", requiere: ["fisiologia2"] },
      { id: "fisiopato1", nombre: "Fisiopatología I", requiere: ["fisiologia2", "patologia2"] },
      { id: "inmunologia", nombre: "Inmunología", requiere: ["microbio2", "patologia2"] }
    ]
  },
  {
    semestre: "Sexto semestre",
    materias: [
      { id: "semiologia2", nombre: "Semiología General y Especial II", requiere: ["semiologia1"] },
      { id: "tecnica2", nombre: "Técnica Quirúrgica II", requiere: ["tecnica1"] },
      { id: "farmaco2", nombre: "Farmacología y Terapéutica II", requiere: ["farmaco1"] },
      { id: "fisiopato2", nombre: "Fisiopatología II", requiere: ["fisiopato1"] },
      { id: "anestesiologia", nombre: "Anestesiología", requiere: ["fisiologia2"] },
      { id: "salud2", nombre: "Salud Pública II", requiere: ["salud1"] },
      { id: "imagenologia", nombre: "Imagenología", requiere: ["anatomia2"] }
    ]
  }
];

const malla = document.getElementById("malla");

function renderMalla() {
  cursos.forEach(bloque => {
    const cont = document.createElement("div");
    cont.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = bloque.semestre;
    cont.appendChild(titulo);

    bloque.materias.forEach(curso => {
      const div = document.createElement("div");
      div.className = "curso";
      div.textContent = curso.nombre;
      div.dataset.id = curso.id;
      div.dataset.requiere = JSON.stringify(curso.requiere || []);
      if (curso.requiere && curso.requiere.length > 0) {
        div.classList.add("bloqueado");
      }
      cont.appendChild(div);
    });

    malla.appendChild(cont);
  });

  actualizarEstado();
}

function actualizarEstado() {
  document.querySelectorAll(".curso").forEach(el => {
    const requisitos = JSON.parse(el.dataset.requiere);
    const cumplidos = requisitos.every(req => {
      const curso = document.querySelector(`.curso[data-id='${req}']`);
      return curso && curso.classList.contains("tachado");
    });

    if (requisitos.length && !cumplidos) {
      el.classList.add("bloqueado");
    } else {
      el.classList.remove("bloqueado");
    }
  });
}

malla.addEventListener("click", e => {
  if (!e.target.classList.contains("curso")) return;
  if (e.target.classList.contains("bloqueado")) return;

  e.target.classList.toggle("tachado");
  actualizarEstado();
});

renderMalla();
function marcarTodo() {
  document.querySelectorAll(".curso").forEach(el => {
    if (!el.classList.contains("bloqueado")) {
      el.classList.add("tachado");
    }
  });
  actualizarEstado();
}

function reiniciarMalla() {
  document.querySelectorAll(".curso").forEach(el => {
    el.classList.remove("tachado");
  });
  actualizarEstado();
}
