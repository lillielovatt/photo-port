// App.js is center of the application; it's the root component, or wrapper component, that houses all other components
// to effect any chance on the application, we need to either modify this file or add components inside it.d

import React, { useState } from "react"; //you need to import React in every component file
import "./App.css";
import About from "./components/About/index";
import Navigation from "./components/Nav";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";

// React components must always return a single parent JSX element - but it may have many children elements
function App() {
    const [categories] = useState([
        {
            name: "commercial",
            description:
                "Photos of grocery stores, food trucks, and other commercial projects",
        },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies" },
        {
            name: "landscape",
            description:
                "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    const [contactSelected, setContactSelected] = useState(false);
    return (
        // returns JSX, which can represent HTML in JS
        <div>
            <Navigation
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Navigation>

            {/* if contactSelected is FALSE, then display Gallery/About. Else, if contactSelected is TRUE, display ContactForm */}
            {!contactSelected ? (
                <>
                    <Gallery currentCategory={{ currentCategory }}></Gallery>
                    <About></About>
                </>
            ) : (
                <ContactForm></ContactForm>
            )}

            <main>
                <div>
                    <ContactForm></ContactForm>
                    <Gallery currentCategory={currentCategory}></Gallery>
                    <About></About>
                </div>
            </main>
        </div>
    );
}

export default App;
