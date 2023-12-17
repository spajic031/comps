import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./context/navigation";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);

//LIBRARYS

// PROP TYPES - npm install prop-types

// TAILWINDCSS- npm install -D tailwindcss postcss autoprefixer
// -npx tailwindcss init -p

//CLASSNAMES - npm install classnames

//REACT ICONS - npm install react-icons
