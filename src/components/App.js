// src/components/App.js
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid, BarChart, Bar } from 'recharts';

function App() {

  const [documentDetailsList, setDocumentDetailsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'];
  const [predictedResult, setPredictedResult] = useState(null);
  const [classificationReport, setClassificationReport] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [focusedFeature] = useState(null);
  const [tooltipData, setTooltipData] = useState(null);
  const [confusionMatrixData, setConfusionMatrixData] = useState([]);
  const [showConfusionMatrix, setShowConfusionMatrix] = useState(false);
  const [crossValAccuracy, setCrossValAccuracy] = useState(null);
  const [rocCurveData, setRocCurveData] = useState(null);
  const [cache, setCache] = useState({});

  useEffect(() => {
    const fetchDocumentDetails = async () => {
      try {
        // Verificar si los datos están en caché
        if (cache[currentPage]) {
          setDocumentDetailsList(cache[currentPage]);
        } else {
          const response = await axios.get(`http://localhost:5000/api/docs?page=${currentPage}`);
          // Almacenar los datos en caché
          setDocumentDetailsList(response.data.docs);
          setCache({ ...cache, [currentPage]: response.data.docs });
        }
      } catch (error) {
        console.error('Error obteniendo los detalles de los documentos:', error);
      }
    };

    fetchDocumentDetails();
  }, [currentPage, cache]);


  useEffect(() => {
    // Configura un temporizador para ocultar la notificación después de 10 segundos
    const timer = setTimeout(() => {
      setPredictedResult('');
    }, 10000);

    // Limpiar el temporizador cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, [predictedResult]); // Esto asegura que el efecto se ejecute cada vez que predictedResult cambie
  
  // Función para cerrar la notificación
  const handleCloseNotification = () => {
  // Oculta la notificación
    setPredictedResult('');
  };

  // Nueva función para obtener los siguientes 10 registros
  const handleGetNextDocuments = () => {
    setCurrentPage(currentPage + 1);
  };

  // Nueva función para obtener los 10 registros anteriores
  const handleGetPreviousDocuments = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRowClick = (document) => {
    console.log('Registro seleccionado:', document);
    setSelectedDocument(document);
  };

  const handlePredictClick = async () => {
    if (selectedDocument) {
      try {
        const response = await axios.post('http://localhost:5000/api/predict', selectedDocument);
        // Manejar la respuesta del backend según sea necesario
        console.log('Respuesta de la predicción:', response.data);
        setPredictedResult(response.data.predicted_result);
      } catch (error) {
        console.error('Error al procesar la predicción:', error);
      }
    } else {
      console.warn('No se ha seleccionado ningún documento para predecir.');
    }
  };

const handleGetClassificationReport = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/classification_report');
        setClassificationReport(response.data.classification_report);
        // Añadir estas líneas
        console.log("Informe de clasificación:", response.data.classification_report);
        parseClassificationReport(response.data.classification_report);
    } catch (error) {
        console.error('Error obteniendo el informe de clasificación:', error);
    }
};
    
const handleGenerateCoefficientsChart = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/generate_coefficients_chart');
    setChartData(response.data.chartData);
  } catch (error) {
    console.error('Error obteniendo el gráfico de coeficientes:', error);
  }
};

const handleBarMouseEnter = (feature, value) => {
  // Muestra el valor del coeficiente al apuntar con el puntero sobre una distribución
  setTooltipData({ feature, value });
};

const handleBarMouseLeave = () => {
  // Oculta el valor del coeficiente al mover el puntero fuera de una distribución
  setTooltipData(null);
};

const renderTooltipContent = () => {
  if (tooltipData) {
    return (
      <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px' }}>
        <p><strong>{tooltipData.feature}:</strong> {tooltipData.value}</p>
      </div>
    );
  }
  return null;
};
    

const handleGetConfusionMatrix = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/confusion_matrix');
    console.log("Matriz de confusion:", response.data.confusion_matrix);
    setConfusionMatrixData(response.data.confusion_matrix);
    setShowConfusionMatrix(true); // Habilita la visualización de la matriz de confusión
  } catch (error) {
    console.error('Error obteniendo la matriz de confusión interactiva:', error);
  }
};


const renderConfusionMatrix = () => {
  return (
    <div>
      <h2>Matriz de Confusión</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>No AF</th>
            <th>AF</th>
          </tr>
        </thead>
        <tbody>
          {confusionMatrixData.map((row, index) => (
            <tr key={index}>
              <td>{index === 0 ? 'No AF' : 'AF'}</td>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const handleGetCrossValAccuracy = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/cross_val_accuracy');
    setCrossValAccuracy(response.data.cross_val_accuracy);
  } catch (error) {
    console.error('Error obteniendo el Cross-validated Accuracy:', error);
  }
};

const handleGenerateRocCurve = async () => {
  try {
    // Llamada a la API para generar la curva ROC
    const response = await axios.get('http://localhost:5000/api/roc_curve_data');
    setRocCurveData(response.data.roc_curve_data);
  } catch (error) {
    console.error('Error obteniendo datos de la curva ROC:', error);
  }
};

// Función para parsear el informe de clasificación
const parseClassificationReport = () => {
  if (!classificationReport) return [];

  // Dividir el informe de clasificación en líneas y eliminar líneas vacías
  const lines = classificationReport.trim().split('\n').filter(line => line.trim() !== '');

  const data = [];
  let accuracy = null;
  let macroPrecision = null;
  let macroRecall = null;
  let macroF1Score = null;
  let weightedPrecision = null;

  // Iterar sobre las líneas del informe de clasificación
  lines.forEach((line, index) => {
    // Dividir cada línea en sus partes
    const parts = line.trim().split(/\s+/);

    // Ignorar la primera línea y la última línea
    if (index !== 0 && index !== lines.length - 1) {
      // Extraer los valores de precisión, recall, f1-score y support
      const [label, precision, recall, f1Score, support] = parts;

      // Si el label es 'accuracy', almacenar el valor de precisión
      if (label.toLowerCase() === 'accuracy') {
        accuracy = parseFloat(precision);
      } else if (label.toLowerCase() === 'macro' && parts[1].toLowerCase() === 'avg') {
        // Extracción de valores para "macro avg"
        macroPrecision = parseFloat(parts[2]);
        macroRecall = parseFloat(parts[3]);
        macroF1Score = parseFloat(parts[4]);
      } else if (label.toLowerCase() === 'weighted' && parts[1].toLowerCase() === 'avg') {
        weightedPrecision = parseFloat(precision);
      } else {
        // Convertir los valores a números
        const precisionNum = isNaN(parseFloat(precision)) ? null : parseFloat(precision);
        const recallNum = isNaN(parseFloat(recall)) ? null : parseFloat(recall);
        const f1ScoreNum = isNaN(parseFloat(f1Score)) ? null : parseFloat(f1Score);
        const supportNum = isNaN(parseFloat(support)) ? null : parseFloat(support);

        // Agregar los datos al array
        data.push({
          label,
          precision: precisionNum,
          recall: recallNum,
          f1Score: f1ScoreNum,
          support: supportNum
        });
      }
    }
  });

  // Agregar el valor de accuracy al inicio del array si está presente
  if (accuracy !== null) {
    data.unshift({ label: 'accuracy', precision: accuracy, recall: null, f1Score: null, support: null });
  }

  // Agregar el valor de "macro avg" si está presente
  if (macroPrecision !== null) {
    data.push({ label: 'macro avg', precision: macroPrecision, recall: macroRecall, f1Score: macroF1Score, support: null });
  }

  // Agregar el valor de "weighted avg" si está presente
  if (weightedPrecision !== null) {
    data.push({ label: 'weighted avg', precision: weightedPrecision, recall: null, f1Score: null, support: null });
  }

  return data;
};


// Función para renderizar la tabla
const renderTable = () => {
  if (!documentDetailsList || !Array.isArray(documentDetailsList)) return null;

  // Elimina las columnas no deseadas
  const { _id, _rev, ritmi, ...filteredDetails } = documentDetailsList[0] || {};

  return (
    <div className="table-responsive">
      <table className="horizontal-table">
        <thead>
          <tr>
            {Object.keys(filteredDetails).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {documentDetailsList.map((document, index) => (
            <tr key={index} onClick={() => handleRowClick(document)}>
              <td>{document.avg_hr}</td>
              <td>{document.hrv.toFixed(2)}</td>
              <td>{document.intervalos_RR_median.toFixed(2)}</td>
              <td>{document.max_hr}</td>
              <td>{document.min_hr}</td>
              <td>{document.p_median.toFixed(2)}</td>
              <td>{document.q_median.toFixed(2)}</td>
              <td>{document.r_median.toFixed(2)}</td>
              <td>{document.s_median.toFixed(2)}</td>
              <td>{document.t_median.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


return (
  <div className="container">
    <h1>Simulacion de RLM</h1>
      <div className="document-card">
       <h2>Detalles del Documento {currentPage}</h2>
       {renderTable()}
       <div className="pagination-buttons">
          <button onClick={handleGetPreviousDocuments}>Anterior</button>
          <span>Página {currentPage}</span>
          <button onClick={handleGetNextDocuments}>Siguiente</button>
        </div>
      </div>
    <div className="button-container">
      <button onClick={handlePredictClick}>Predecir</button>
      <button onClick={handleGetClassificationReport}>Obtener Informe</button>
      <button onClick={handleGenerateCoefficientsChart}>Generar Gráfico de Coeficientes</button>
      <button onClick={handleGetConfusionMatrix}>Obtener Matriz de Confusión Interactiva</button>
      <button onClick={handleGetCrossValAccuracy}>Graficar validacion cruzada en cada pliegue </button>
      <button onClick={handleGenerateRocCurve}>Generar Curva ROC</button>
    </div>
    {predictedResult && (
      <div className="notification" id="notification">
        <p className="notification-text">Resultado de la predicción: {predictedResult}</p>
        <button className="close-button" onClick={() => handleCloseNotification()}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    )}

    <div className="visualization-grid">
    {classificationReport && (
      <div>
        <h2>Informe de Clasificación</h2>
        <pre>{classificationReport}</pre>
      </div>
    )}
    {classificationReport && (
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={parseClassificationReport()}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="precision" fill="#8884d8" name="Precision" />
          <Bar dataKey="recall" fill="#82ca9d" name="Recall" />
          <Bar dataKey="f1Score" fill="#ffc658" name="F1-Score" />
        </BarChart>
      </ResponsiveContainer>
    )}
    {chartData && (
      <div>
        <h2>Gráfico de Coeficientes</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="feature" />
            <YAxis />
            <Tooltip content={renderTooltipContent} />
            <Legend />
            {Object.keys(chartData[0]).map((key, index) => {
              if (key !== 'feature') {
                return (
                  <Bar
                    key={index}
                    dataKey={key}
                    fill={colors[index % colors.length]}
                    onMouseEnter={() => handleBarMouseEnter(key, chartData[0][key])}
                    onMouseLeave={handleBarMouseLeave}
                  />
                );
              }
              return null;
            })}
          </BarChart>
        </ResponsiveContainer>
        {focusedFeature && (
          <div className="selected-feature">
            <p><strong>Distribución seleccionada:</strong> {focusedFeature}</p>
            <p><strong>Valor del coeficiente:</strong> {chartData[0][focusedFeature]}</p>
          </div>
        )}
      </div>
    )}
    {showConfusionMatrix && renderConfusionMatrix()}
    {crossValAccuracy && (
      <div className="visualization">
        <h2>Precisión validada cruzadamente</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={crossValAccuracy.map((accuracy, index) => ({
              fold: index + 1,
              accuracy
            }))}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="fold" />
            <YAxis domain={[0.88, 0.9]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="accuracy" stroke="#8884d8" name="Accuracy" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )}
    {rocCurveData && (
      <div>
        <h2>Curva ROC</h2>
        <p>Área bajo la curva (AUC): {rocCurveData.roc_auc}</p>
        <ResponsiveContainer width="100%" aspect={1.2}>
          <LineChart
            width={800}
            height={400}
            data={[
              ...rocCurveData.fpr.map((fpr, index) => ({ fpr, tpr: rocCurveData.tpr[index] })),
              { fpr: 1, tpr: 1 },
            ]}
            margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              dataKey="fpr"
              label={{ value: 'False Positive Rate', position: 'insideBottom', offset: 0 }}
              domain={[0, 1]}
              tick={{ dx: -8, dy: 5, fontSize: '12px' }}
            />
            <YAxis
              type="number"
              label={{ value: 'True Positive Rate', angle: -90, position: 'insideLeft' }}
              domain={[0, 1]}
              tick={{ dx: -8, dy: 5, fontSize: '12px' }}
              ticks={[0, 0.25, 0.5, 0.75, 1]} // Establecer los ticks deseados en el eje y
            />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="tpr" stroke="#8884d8" name="ROC Curve" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )}
    </div>
  </div>
);
}


export default App;