
import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";
const promise = axios.get('http://localhost:5173/notes')

promise.then(response => {
  console.log(response.data)
})
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  
  </React.StrictMode>
);
