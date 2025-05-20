const frase = "Hola mundo";
const velocidad = 100;
const pausa = 1500;

let j = 0;
let escribiendo = true;

const titulo = document.getElementById("titulo");

function typeLoop() {
  if (escribiendo) {
    if (j < frase.length) {
      titulo.textContent = frase.slice(0, j + 1);
      j++;
      setTimeout(typeLoop, velocidad);
    } else {
      setTimeout(() => {
        escribiendo = false;
        setTimeout(typeLoop, velocidad);
      }, pausa);
    }
  } else {
    if (j > 0) {
      titulo.textContent = frase.slice(0, j - 1);
      j--;
      setTimeout(typeLoop, velocidad / 2);
    } else {
      setTimeout(() => {
        escribiendo = true;
        setTimeout(typeLoop, velocidad);
      }, pausa);
    }
  }
}

typeLoop();

const datos = {
  1: `
    <article>
  <section>
    <h2>¿Qué es HTML?</h2>
    <p>HTML (HyperText Markup Language) es el lenguaje estándar para crear páginas web. No es un lenguaje de programación, sino un lenguaje de marcado que estructura el contenido en la web.</p>
  </section>
  <section>
    <h2>Elementos y etiquetas</h2>
    <p>Los elementos HTML se representan con etiquetas. Una etiqueta abre con <code>&lt;nombre&gt;</code> y cierra con <code>&lt;/nombre&gt;</code>. Por ejemplo, <code>&lt;p&gt;</code> define un párrafo.</p>
  </section>
  <section>
    <h2>Atributos</h2>
    <p>Las etiquetas pueden tener atributos que dan más información, como <code>src</code> en imágenes o <code>href</code> en enlaces. Ejemplo: <code>&lt;a href="https://ejemplo.com"&gt;Enlace&lt;/a&gt;</code>.</p>
  </section>
  <section>
    <h2>Documentos HTML estructurados</h2>
    <p>Un documento HTML típico comienza con <code>&lt;!DOCTYPE html&gt;</code>, seguido por las etiquetas <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code> y <code>&lt;body&gt;</code>. Dentro del <code>head</code> se incluye información como título y metadatos, mientras que en el <code>body</code> va el contenido visible.</p>
  </section>
  <section>
    <h2>Importancia de la semántica</h2>
    <p>Usar etiquetas semánticas (como <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>) ayuda a organizar el contenido y facilita la accesibilidad y el SEO.</p>
  </section>
  <section>
    <h2>Conclusión</h2>
    <p>HTML es el esqueleto de cualquier sitio web. Dominar sus conceptos clave permite construir páginas sólidas y preparadas para crecer con CSS y JavaScript. Como barista del código, cada etiqueta es un grano que aporta sabor a tu web.</p>
  </section>
</article>
  `,
  2: `
    <article>  
  <section>
    <h2>¿Qué es CSS?</h2>
    <p>CSS (Cascading Style Sheets) es el lenguaje que se usa para estilizar el contenido HTML. Piensalo como el estilista personal de tu página: decide colores, tamaños, posiciones, tipografías y animaciones.</p>
  </section>
  <section>
    <h2>Cómo se aplica CSS</h2>
    <p>CSS se puede aplicar de tres formas: 
      <ul>
        <li><strong>En línea:</strong> dentro de la etiqueta HTML usando el atributo <code>style</code>.</li>
        <li><strong>Interno:</strong> en la etiqueta <code>&lt;style&gt;</code> dentro del <code>&lt;head&gt;</code>.</li>
        <li><strong>Externo:</strong> enlazando un archivo <code>.css</code> con <code>&lt;link rel="stylesheet" href="estilos.css"&gt;</code>.</li>
      </ul>
    </p>
  </section>
  <section>
    <h2>Reglas CSS: selectores, propiedades y valores</h2>
    <p>Una regla CSS se compone de:</p>
    <pre><code>selector {
  propiedad: valor;
}</code></pre>
    <p>Ejemplo: <code>p { color: blue; }</code> hará que todos los párrafos tengan texto azul.</p>
  </section>
  <section>
    <h2>Selectores comunes</h2>
    <p>Los selectores indican qué elementos serán afectados:
      <ul>
        <li><code>elemento</code> (por tipo, como <code>h1</code>)</li>
        <li><code>.clase</code> (por clase)</li>
        <li><code>#id</code> (por identificador único)</li>
        <li><code>elemento elemento</code> (selectores descendientes)</li>
      </ul>
    </p>
  </section>
  <section>
    <h2>Cascada y especificidad</h2>
    <p>El orden importa. CSS se llama “en cascada” porque los estilos se aplican de arriba a abajo, pero también depende de qué tan específicos sean los selectores. Si dos estilos chocan, gana el más específico.</p>
  </section>

  <section>
    <h2>Box model: el ADN del diseño web</h2>
    <p>Todo en CSS está contenido en una “caja”. El modelo de caja incluye:
      <ul>
        <li><strong>Content:</strong> el contenido.</li>
        <li><strong>Padding:</strong> espacio interno.</li>
        <li><strong>Border:</strong> borde.</li>
        <li><strong>Margin:</strong> espacio externo entre elementos.</li>
      </ul>
    </p>
    <img src="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model/box-model.png" alt="Modelo de Caja CSS" style="width:100%; max-width:500px; display:block; margin: 20px auto;">
  </section>
  <section>
    <h2>Conclusión</h2>
    <p>CSS transforma contenido crudo en una experiencia visual. Dominar sus fundamentos es como tener buen gusto en diseño: hace que todo se vea más atractivo, funcional y profesional. Si HTML es la base, CSS es el look que enamora.</p>
  </section>
</article>
  `,
  3: `
  <article>
  <section>
    <h2>¿Qué es JavaScript?</h2>
    <p>JavaScript es un lenguaje de programación que permite agregar interactividad a las páginas web. A diferencia de HTML y CSS, que estructuran y estilizan, JavaScript hace que las cosas *pasen*: validaciones, animaciones, eventos, y mucho más.</p>
  </section>
  <section>
    <h2>¿Dónde se usa?</h2>
    <p>JavaScript se ejecuta en el navegador. Puede escribirse dentro de la etiqueta <code>&lt;script&gt;</code> o en archivos externos con extensión <code>.js</code>. Hoy también se usa del lado del servidor con tecnologías como Node.js.</p>
  </section>
  <section>
    <h2>Variables y tipos de datos</h2>
    <p>JavaScript permite guardar información en variables. Se declaran con <code>let</code>, <code>const</code> o <code>var</code>:</p>
    <pre><code>let nombre = "Joaquin Oliva";
const PI = 3.14;
var edad = 30;</code></pre>
    <p>Los tipos de datos más comunes son: <code>string</code>, <code>number</code>, <code>boolean</code>, <code>object</code>, <code>array</code> y <code>null</code>.</p>
  </section>
  <section>
    <h2>Funciones</h2>
    <p>Una función encapsula una tarea. Se puede definir así:</p>
    <pre><code>function saludar() {
  alert("¡Hola, mundo!");
}</code></pre>
    <p>Y se ejecuta escribiendo <code>saludar();</code></p>
  </section>
  <section>
    <h2>Eventos</h2>
    <p>JavaScript puede reaccionar a acciones del usuario como clics, teclas o movimiento del mouse. Ejemplo:</p>
    <pre><code>document.getElementById("boton").addEventListener("click", function() {
  alert("¡Clic detectado!");
});</code></pre>
  </section>
  <section>
    <h2>Manipulación del DOM</h2>
    <p>El DOM (Document Object Model) es la representación de la página. JS permite modificarlo en tiempo real:</p>
    <pre><code>document.querySelector("h1").textContent = "Nuevo título";</code></pre>
    <p>Así se puede cambiar texto, estilos, clases, atributos y más.</p>
  </section>
  <section>
    <h2>Conclusión</h2>
    <p>JavaScript es el alma dinámica de la web. Aprender sus fundamentos es el primer paso para crear experiencias ricas e interactivas. No se trata solo de hacer cosas que se mueven, sino de pensar cómo mejorar la experiencia del usuario con lógica y creatividad.</p>
  </section>
</article>
  `,
};

function mostrar(id) {
  const div = document.getElementById("contenido");
  div.innerHTML = datos[id];
}

const botones = document.getElementsByClassName("btn-primary");
Array.from(botones).forEach((e) => {
  e.addEventListener("click", function () {
    const seccionDestino = document.getElementById("contenido");
    if (seccionDestino) {
      seccionDestino.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

window.addEventListener("load", function () {
  const seccionDestino = document.getElementById("contenido");
  if (seccionDestino) {
    seccionDestino.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
