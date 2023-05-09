/* Este es un código JavaScript que importa varios módulos y componentes de diferentes archivos y
bibliotecas. También está renderizando el componente principal de la aplicación, `<App />`, usando
`ReactDOM.createRoot` y `root.render`. Además, está importando archivos CSS con fines de diseño.
Finalmente, está llamando a la función `reportWebVitals` para informar las métricas de rendimiento. */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./main.scss";
import "react-rater/lib/react-rater.css";
import "react-toastify/dist/ReactToastify.css";
import 'react-tooltip/dist/react-tooltip.css'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
reportWebVitals();
