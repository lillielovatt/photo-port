import React from "react";

const Navigation = () => {
    const categories = [
        {
            name: "commercial",
            description:
                "Photos of grocery stores, food trucks, and other commercial products",
        },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies" },
        {
            name: "landscape",
            description:
                "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
    ];

    function categorySelected(name) {
        console.log(`${name} selected`);
    }

    return (
        <header>
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">
                        {" "}
                        📸{" "}
                    </span>{" "}
                    Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {/* whenever we map over anything in JSX, the outermost element must have a key attribute */}
                    {/* that's set to something unique (helps React keep track of items in the virtual DOM) */}
                    {/* when you map over an array in a JSX expression, you should return only a single JSX element */}
                    {/* like how you can only return a single element from a React component */}
                    {categories.map((category) => (
                        <li className="mx-1" key={category.name}>
                            <span
                                onClick={() => categorySelected(category.name)}
                            >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

// onClick is expecting a CB function declarataion; important that we wrap it in a function declaration rather than just calling
// categorySelected(category.name), which would cause function to get called WHENEVER the component renders as well

export default Navigation;
