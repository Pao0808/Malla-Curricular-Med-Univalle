const planEstudios = {
  "Primer semestre": [
    { nombre: "🧠 Anatomía I" },
    { nombre: "🧬 Genética" },
    { nombre: "🔬 Histología I" },
    { nombre: "💻 Informática Aplicada" }
  ],
  "Segundo semestre": [
    { nombre: "🧠 Anatomía II", requisito: "Anatomía I" },
    { nombre: "👶 Embriología", requisito: "Genética" },
    { nombre: "🔬 Histología II", requisito: "Histología I" },
    { nombre: "⚗️ Bioquímica I" },
    { nombre: "🏥 Salud Pública I" },
    { nombre: "📘 Inglés Técnico I" }
  ],
  "Tercer semestre": [
    { nombre: "⚗️ Bioquímica II", requisito: "Bioquímica I" },
    { nombre: "💓 Fisiología I", requisito: "Anatomía II" },
    { nombre: "🧫 Microbiología I" },
    { nombre: "🧬 Patología I", requisito: "Anatomía II, Histología II" },
    { nombre: "📐 Biofísica", requisito: "Anatomía II" },
    { nombre: "📘 Inglés Técnico II", requisito: "Inglés Técnico I" }
  ],
  "Cuarto semestre": [
    { nombre: "⚗️ Bioquímica III", requisito: "Bioquímica II" },
    { nombre: "💓 Fisiología II", requisito: "Fisiología I" },
    { nombre: "🧫 Microbiología II", requisito: "Microbiología I" },
    { nombre: "🪱 Parasitología", requisito: "Microbiología I" },
    { nombre: "🧬 Patología II", requisito: "Patología I" },
    { nombre: "🧠 Psicología Médica" },
    { nombre: "🤝 Sociología y Ética Médica" },
    { nombre: "🥗 Electiva: Nutrición" }
  ],
  "Quinto semestre": [
    { nombre: "🩺 Semiología I", requisito: "Fisiología II, Bioquímica III" },
    { nombre: "🛠️ Técnica Quirúrgica I", requisito: "Fisiología II" },
    { nombre: "💊 Farmacología I", requisito: "Fisiología II, Bioquímica III" },
    { nombre: "📉 Fisiopatología I", requisito: "Fisiología II, Patología II" },
    { nombre: "🧬 Patología III", requisito: "Patología II" },
    { nombre: "🧪 Inmunología", requisito: "Microbiología II, Patología II" }
  ],
  "Sexto semestre": [
    { nombre: "🩺 Semiología II", requisito: "Semiología I" },
    { nombre: "🛠️ Técnica Quirúrgica II", requisito: "Técnica Quirúrgica I" },
    { nombre: "💊 Farmacología II", requisito: "Farmacología I" },
    { nombre: "📉 Fisiopatología II", requisito: "Fisiopatología I" },
    { nombre: "💉 Anestesiología", requisito: "Fisiología II" },
    { nombre: "🏥 Salud Pública II", requisito: "Salud Pública I" },
    { nombre: "🖼️ Imagenología", requisito: "Anatomía II" }
  ]
};

const contenedor = document.getElementById("contenedor");

for (const [semestre, cursos] of Object.entries(planEstudios)) {
  const bloque = document.createElement("section");

  const titulo = document.createElement("h2");
  titulo.textContent = semestre;
  bloque.appendChild(titulo);

  const lista = document.createElement("ul");
  cursos.forEach(curso => {
    const item = document.createElement("li");
    item.innerHTML = `${curso.nombre}${curso.requisito ? `<br><small>Requiere: ${curso.requisito}</small>` : ""}`;
    lista.appendChild(item);
  });

  bloque.appendChild(lista);
  contenedor.appendChild(bloque);
}
