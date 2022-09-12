// App.js is center of the application; it's the root component, or wrapper component, that houses all other components
// to effect any chance on the application, we need to either modify this file or add components inside it.d

import React from "react"; //you need to import React in every component file
import "./App.css";
import About from "./components/About/index";
import Navigation from "./components/Nav";

// React components must always return a single parent JSX element - but it may have many children elements
function App() {
    return (
        //returns JSX, which can represent HTML in JS
        <div>
            <Navigation></Navigation>
            <main>
                <About></About>
            </main>
        </div>
    );
}

export default App;
