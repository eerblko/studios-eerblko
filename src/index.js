import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import App from './components/App.js';
import NBYes from './components/NBYes.js';
import About from './components/About.js';
import Result from './components/Result.js';
import Tools from './components/Tools.js';
import image1 from './images/image1.jpg';
import image2 from './images/image2.webp';
import image3 from './images/image3.webp';
import image4 from './images/anatomia.webp';
import image5 from './images/12derivations.png';
import image6 from './images/EKG.png';
import image7 from './images/ritmi.png';
import image8 from './images/fibrillation.png';
import image9 from './images/comparison.png';

const MainMenu = () => (
  <nav>
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/about">Sobre el Proyecto</Link></li>
      <li>
        Modelos Predictivos
        <ul className="submenu">
          <li><Link to="/regresion-logistica">Regresión Logística Multinomial</Link></li>
          <li><Link to="/naive-bayes">Naive Bayes</Link></li>
        </ul>
      </li>
      <li><Link to="/result">Resultados y Conclusiones</Link></li>
      <li><Link to="/tools">Recursos y Herramientas</Link></li>
    </ul>
  </nav>
);

const Main = () => (
  <Router>
    <div>
      <MainMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/regresion-logistica" element={<App />} />
        <Route path="/naive-bayes" element={<NBYes />} />
        <Route path="/result" element={<Result />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </div>
  </Router>
);

const Home = () => (
  <div>
    <ImageCarousel />
    <div class="grid-container">
        <section class="grid-item">
          <h2>Anatomía del Corazón</h2>
          <p>Explorar la anatomía cardíaca es sumergirse en un complejo entramado de estructuras y funciones, donde cada componente, desde las aurículas y ventrículos hasta las válvulas y vasos sanguíneos, desempeña un papel vital en el proceso de circulación y oxigenación del organismo. Este órgano central, con su intrincada red de tejidos y sistemas, representa el epicentro de la vitalidad humana, uniendo la fisiología con la esencia misma de la vida. Acompáñenos en este fascinante recorrido por la anatomía del corazón, donde desentrañaremos los secretos de su arquitectura y función, revelando la extraordinaria complejidad y belleza que subyace en cada latido.</p>
          <img src={image4} alt="Imagen 4" className="result-image"/>
        </section>
        <section class="grid-item">
          <h2>12 Derivaciones</h2>
          <p>Adentrarse en el mundo de las 12 derivaciones del electrocardiograma (ECG) es adentrarse en el núcleo mismo de la comprensión del corazón humano. Este instrumento, que capta la actividad eléctrica del músculo cardíaco desde múltiples perspectivas, nos sumerge en un viaje fascinante hacia la comprensión de la salud cardiovascular. Desde su fundamento teórico, cada derivación ofrece una ventana única hacia el complejo funcionamiento eléctrico del corazón, desvelando sus ritmos, conducciones y posibles anomalías. Por otro lado, en su aplicación práctica en el diagnóstico clínico, estas derivaciones se convierten en herramientas vitales para los médicos, permitiendo identificar arritmias, isquemias y otras afecciones cardíacas con precisión y rapidez.</p>
          <img src={image5} alt="Imagen 5" className="result-image"/>
        </section>
        <section class="grid-item">
          <h2>Electrocardiograma (ECG)</h2>
          <p>Sumergirse en el universo del electrocardiograma (EKG) es embarcarse en un viaje al epicentro mismo de la medicina cardiovascular moderna. Este dispositivo, que registra la actividad eléctrica del músculo cardíaco, nos otorga una visión privilegiada del funcionamiento interno de uno de los órganos más vitales del cuerpo humano. Desde sus primeros trazos hasta su aplicación clínica en la detección y diagnóstico de patologías cardíacas, el EKG ha sido un pilar insustituible en la práctica médica.</p>
          <img src={image6} alt="Imagen 6" className="result-image"/>
        </section>
        <section class="grid-item">
          <h2>Ritmo Sinusal Normal</h2>
          <p>Sumergirse en el estudio del ritmo sinusal normal es adentrarse en los misterios del corazón humano, donde cada latido refleja la armoniosa danza de la actividad eléctrica cardíaca. Desde su origen en el nodo sinusal hasta su expresión en los delicados circuitos de conducción, este ritmo es la sinfonía que asegura el bombeo eficiente de sangre por todo el cuerpo. Su presencia regular no solo indica un corazón saludable, sino que también sirve como una señal crucial para detectar posibles trastornos cardíacos. En la práctica médica, comprender y monitorear este ritmo es esencial para la prevención y el tratamiento de enfermedades cardíacas, marcando el pulso de la salud cardiovascular.</p>
          <img src={image7} alt="Imagen 7" className="result-image"/>
        </section>
        <section class="grid-item">
          <h2>Fibrilación Auricular</h2>
          <p>Comprender en su totalidad el complejo fenómeno de la fibrilación auricular requiere sumergirse en los intrincados entramados de la fisiopatología cardíaca, donde la actividad eléctrica desordenada en las aurículas desencadena una serie de desafíos clínicos y terapéuticos. Esta arritmia, que afecta a millones de personas en todo el mundo, representa un área de intensa investigación y un punto crucial en la práctica médica contemporánea. Desde sus fundamentos anatómicos y electrofisiológicos hasta su impacto en la salud cardiovascular, cada aspecto de la fibrilación auricular ofrece una oportunidad para profundizar en el conocimiento y avanzar en su manejo clínico. Únase a nosotros en un viaje de exploración hacia los misterios de esta condición, donde abordaremos desde sus mecanismos íntimos hasta las estrategias más innovadoras en diagnóstico y tratamiento.</p>
          <img src={image8} alt="Imagen 8" className="result-image"/>
        </section>
        <section class="grid-item">
          <h2>Picos P: Normalidad vs Fibrilación</h2>
          <p>Enfocarse en la comprensión de las capas donde se manifiestan los picos P en un ritmo sinusal normal y su ausencia en la fibrilación auricular nos invita a una inmersión profunda en la complejidad de la fisiología del corazón humano. Estas capas, como testigos privilegiados de la actividad eléctrica cardíaca, nos brindan una ventana única para entender los enigmas detrás de la generación y propagación de los impulsos eléctricos en este órgano vital. En un ritmo sinusal normal, los picos P, que reflejan la activación auricular en el electrocardiograma (ECG), se identifican típicamente en las derivaciones I, II, III, aVR, aVL y aVF. Con una amplitud de aproximadamente 0.1 mV y una duración de 0.08 segundos, estos picos son predominantemente detectados en la capa auricular del corazón, específicamente en la pared de la aurícula derecha, donde el nodo sinusal desencadena el impulso eléctrico inicial. Esta señal fluye armónicamente a través de las aurículas y luego hacia los ventrículos, desencadenando una contracción cardíaca secuencial y eficaz que impulsa la sangre hacia la circulación sistémica y pulmonar. Por el contrario, en la fibrilación auricular, la ausencia de picos P se convierte en el símbolo inequívoco de una actividad eléctrica caótica y desordenada en las aurículas. En lugar de los picos P característicos, el trazado del electrocardiograma revela ondas fibrilatorias irregulares y de bajo voltaje, indicativas de una falta de coordinación en la contracción auricular y el consiguiente riesgo de formación de coágulos sanguíneos. Este contraste revelador resalta la importancia crucial de identificar y comprender las características electrocardiográficas únicas asociadas con el ritmo sinusal normal y la fibrilación auricular, proporcionando información vital para la toma de decisiones clínicas en el diagnóstico y manejo de las enfermedades cardiovasculares.</p>
          <img src={image9} alt="Imagen 9" className="result-image"/>
        </section>
      </div>
  </div>
);

const ImageCarousel = () => (
  <Carousel showArrows={true} showThumbs={false}>
    <div>
      <img src={image1} alt="Imagen 1" />
    </div>
    <div>
      <img src={image2} alt="Imagen 2" />
    </div>
    <div>
      <img src={image3} alt="Imagen 3" />
    </div>
  </Carousel>
);

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
