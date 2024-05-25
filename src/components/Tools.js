// src/components/Tools.js
import './Tools.css';
import image9 from '../images/flask.png';
import image10 from '../images/couchdb.png';
import image11 from '../images/react.png';
import image12 from '../images/nodejs.svg';
import image13 from '../images/python.svg';
import image14 from '../images/IA.png';

function Tools() {

return (
    <div className="tools-container">
            <p>En el contexto de mi investigación, la meticulosa elección de las herramientas tecnológicas adecuadas es un paso crucial que define la calidad y el alcance de mi proyecto. Con este propósito en mente, he dirigido mi atención hacia la selección de herramientas sofisticadas que me permitan desarrollar una plataforma web inteligente para la detección de fibrilación auricular.</p>
                <div class="grid-container">
                    <div class="grid-item">
                        <div className="tool">
                            <h2>Flask</h2>
                            <p>En el núcleo del desarrollo del backend de mi plataforma, he decidido emplear Flask debido a su flexibilidad y eficiencia en el manejo de datos. La versatilidad de Flask me proporciona la estructura sólida necesaria para gestionar datos cardíacos de manera efectiva y ofrecer respuestas rápidas a las consultas de los usuarios.</p>
                            <img src={image9} alt="Flask" />
                        </div>
                    </div>
                    <div class="grid-item">
                        <div className="tool">
                            <h2>CouchDB</h2>
                            <p>Para la gestión y almacenamiento de los datos cruciales relacionados con la fibrilación auricular, he seleccionado CouchDB por su capacidad para manejar datos no estructurados y su robusta replicación bidireccional. Con CouchDB, puedo garantizar la integridad y disponibilidad de los datos, lo que es esencial para la fiabilidad de mi plataforma.</p>
                            <img src={image10} alt="CouchDB" />
                        </div>
                    </div>
                    <div class="grid-item">
                        <div className="tool">
                            <h2>React</h2>
                            <p>En el desarrollo del frontend de mi plataforma, he optado por React como la piedra angular para crear una experiencia de usuario excepcional. Con React, tengo la capacidad de construir interfaces de usuario dinámicas y altamente personalizadas que proporcionan a los usuarios una experiencia fluida e intuitiva al interactuar con la plataforma.</p>
                            <img src={image11} alt="React" />
                        </div>
                    </div>
                    <div class="grid-item">
                        <div className="tool">
                            <h2>JavaScript-Node.js</h2>
                            <p>Node.js desempeña un papel fundamental en el desarrollo del backend de mi plataforma, proporcionando un entorno de ejecución eficiente para el código JavaScript del lado del servidor. La elección de JavaScript-Node.js garantiza una integración fluida entre el frontend y el backend, facilitando una comunicación eficaz y una experiencia de usuario cohesiva.</p>
                            <img src={image12} alt="JavaScript-Node.js" />
                        </div>
                    </div>
                    <div class="grid-item">
                        <div className="tool">
                            <h2>Python</h2>
                            <p>En el análisis de datos y la implementación de algoritmos de inteligencia artificial, Python es mi herramienta de preferencia. Con Python, tengo acceso a una amplia gama de bibliotecas especializadas en ciencia de datos y aprendizaje automático, lo que me permite explorar a fondo los datos cardíacos y desarrollar modelos de IA avanzados para la detección precisa de la fibrilación auricular.</p>
                            <img src={image13} alt="Python" />
                        </div>
                    </div>
                    <div class="grid-item">
                        <div className="tool">
                            <h2>Inteligencia Artificial (IA)</h2>
                            <p>La integración de técnicas de inteligencia artificial en mi plataforma es esencial para mejorar la precisión y la eficacia de mi sistema de detección de fibrilación auricular. Con la IA, puedo desarrollar algoritmos sofisticados capaces de analizar patrones complejos en los datos cardíacos y detectar signos tempranos de la enfermedad con una precisión sin igual.</p>
                            <img src={image14} alt="Inteligencia Artificial (IA)" />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Tools;