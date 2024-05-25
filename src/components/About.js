// src/components/About.js
import './About.css';
import image1 from '../images/kdd1.png';
import image2 from '../images/kdd2.png';
import image3 from '../images/kdd3.png';
import image4 from '../images/kdd4.png';
import image5 from '../images/kdd5.png';
import image6 from '../images/kdd6.png';

function About() {

return (
    <div className="about-project-container">
      <h1>Introduccion</h1>
      <div className="description">
        <p>
            Bienvenido a nuestra plataforma web dedicada a abordar la problemática de la fibrilación auricular, una afección cardíaca común y potencialmente peligrosa. Nos complace presentarte un resumen de nuestro proyecto, así como los avances y métodos empleados en el desarrollo de esta innovadora plataforma inteligente. En este proyecto, hemos integrado avanzadas técnicas de machine learning y métodos estadísticos neutrosóficos para identificar biomarcadores de fibrilación auricular, lo que nos permite lograr una detección temprana y precisa de esta enfermedad. Nuestro enfoque se basa en un riguroso proceso de extracción, preprocesamiento, transformación y análisis de datos, respaldado por las últimas investigaciones en el campo de la cardiología y la ciencia de datos.
        </p>
      </div>
      <div className="steps-container">
        <div className="step">
        <img src={image1} alt="Imagen 1" />
          <h2>Obtención de Datos</h2>
          <p>
            En la etapa de obtención de datos, nos hemos asegurado de recopilar información de electrocardiogramas (ECG) provenientes de diversas fuentes, incluyendo bases de datos médicas y registros electrónicos de salud. Posteriormente, hemos llevado a cabo una exhaustiva verificación de la calidad e integridad de los datos para evitar posibles sesgos en nuestro análisis.
          </p>
        </div>
        <div className="step">
            <img src={image2} alt="Imagen 2" />
          <h2>Preprocesamiento de Datos</h2>
          <p>
            El preprocesamiento de datos ha sido fundamental para garantizar que nuestros datos estén en un formato coherente y adecuado para el análisis posterior. Hemos empleado el método de soft computing neutrosofico para normalizar los datos del EKG, permitiendo así ajustar los valores mínimos y máximos de manera flexible. Además, hemos realizado la selección de un subconjunto de datos y su transformación para facilitar el análisis subsiguiente.
          </p>
        </div>
        <div className="step">
            <img src={image3} alt="Imagen 3" />
          <h2>Transformación de Datos</h2>
          <p>
            En la etapa de transformación de datos, hemos extraído características importantes de las señales de ECG, como los picos R, P, Q, S y T, utilizando técnicas avanzadas de procesamiento de señales. Esto nos ha permitido identificar características específicas relevantes para el análisis de la fibrilación auricular, facilitando así una detección más precisa y eficiente de esta condición cardíaca.
          </p>
        </div>
        <div className="step">
            <img src={image4} alt="Imagen 4" />
          <h2>Minería de Datos</h2>
          <p>
            La minería de datos ha implicado el empleo de técnicas avanzadas de aprendizaje automático, tales como la Regresión Logística Multinomial y el Naive Bayes Gaussiano, para construir modelos predictivos para la detección de la fibrilación auricular. Estos modelos analizan los datos de ECG para identificar patrones y características asociadas con la presencia de esta enfermedad, logrando así una detección más precisa y eficiente.
          </p>
        </div>
        <div className="step">
            <img src={image5} alt="Imagen 5" />
          <h2>Evaluación de Modelos</h2>
          <p>
            En la evaluación de modelos, hemos realizado una exhaustiva evaluación utilizando diversas métricas de rendimiento y técnicas avanzadas como el Coeficiente de Correlación de Matthews (MCC), garantizando así una evaluación completa y objetiva de la capacidad predictiva de nuestros modelos en la detección de la fibrilación auricular.
          </p>
        </div>
        <div className="step">
            <img src={image6} alt="Imagen 6" />
          <h2>Presentación de Resultados</h2>
          <p>
            Finalmente, en la presentación de resultados, hemos procurado presentar los hallazgos de manera clara y accesible para los estudiantes de medicina, utilizando técnicas avanzadas de visualización de datos como SHAP y LIME para mejorar la interpretación de los resultados y facilitar una toma de decisiones informada en el diagnóstico y tratamiento de la fibrilación auricular.
          </p>
        </div>
      </div>
    </div>
    );
}

export default About;