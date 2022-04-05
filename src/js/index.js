//import react into the bundle
import React from "react";
import reactDom from "react-dom/client";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application
const root = reactDom.createRoot(document.getElementById('app'))
root.render(<Layout />);
