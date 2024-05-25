// src/components/Result.js
import './Result.css';
import image7 from '../images/SHAP.png';
import image8 from '../images/LIME.png';


function Result() {

return (
    <div className="container2">
         <h1 className="result-title">Presentación de resultados</h1>
            <div className="document-card2">
                <div className="section">
                    <h2 className="section-title">SHAP (Explicaciones Aditivas de Shapley)</h2>
                    <p className="section-content">Comenzaremos explicando SHAP, una herramienta que nos ayuda a entender cómo funciona nuestro modelo de detección de fibrilación auricular. Utilizamos SHAP para analizar la contribución de cada característica del corazón en nuestras predicciones. Por ejemplo, si la frecuencia cardíaca máxima (max_hr) es alta, es más probable que nuestro modelo prediga la fibrilación auricular. Por otro lado, si la variabilidad de la frecuencia cardíaca (hrv) es baja, también podría indicar un mayor riesgo de la enfermedad.</p>
                    <img src={image7} alt="SHAP" className="result-image"/>
                    <p className="section-content">Los resultados de SHAP nos proporcionan información valiosa sobre cómo cada característica del corazón afecta la predicción de la fibrilación auricular. Por ejemplo, observamos que características como "max_hr", "avg_hr", "r_median", "intervalos_RR_median" y "s_median" tienen valores positivos, lo que sugiere que contribuyen positivamente a la predicción del modelo. Por otro lado, características como "min_hr", "hrv", "q_median", "t_median" y "p_median" tienen valores negativos, lo que indica una contribución negativa a la predicción. Estos hallazgos nos ayudan a identificar qué características son más importantes para tomar decisiones informadas sobre la presencia de fibrilación auricular.</p>
                </div>
                <div className="section">
                    <h2 className="section-title">LIME (Explicaciones Locales Interpretativas Independientes del Modelo)</h2>
                    <p className="section-content">Ahora pasemos a LIME, otra herramienta que utilizamos para comprender mejor cómo cada característica del corazón influye en nuestras predicciones de fibrilación auricular. LIME nos permite analizar las características del corazón en intervalos específicos de sus valores para obtener una comprensión más detallada de su importancia en el contexto de la enfermedad.</p>
                    <img src={image8} alt="LIME" className="result-image"/>
                    <p className="section-content">Los resultados de LIME nos revelan patrones importantes sobre cómo cada característica del corazón está asociada con la predicción de fibrilación auricular. Por ejemplo, observamos que valores específicos de características como "min_hr", "avg_hr", "max_hr", "q_median", "t_median", "intervalos_RR_median", "s_median" y "p_median" están relacionados con un mayor riesgo de la enfermedad. Esto nos indica qué aspectos del corazón son más relevantes para la detección temprana y precisa de la fibrilación auricular.</p>
                </div>
                <div className="section">
                    <h2 className="section-title">Conclusión</h2>
                    <p className="section-content">El análisis de los resultados obtenidos mediante SHAP y LIME nos proporciona una comprensión profunda de cómo cada característica del corazón influye en la predicción de la fibrilación auricular. Esto es fundamental para desarrollar modelos predictivos más precisos en el ámbito clínico y tomar decisiones informadas sobre el diagnóstico y tratamiento de esta importante condición cardíaca. Esperamos que esta información te ayude a comprender mejor tu salud cardíaca y a tomar medidas proactivas para cuidar tu bienestar.</p>
                </div>
        </div>
    </div>
    );
}

export default Result;