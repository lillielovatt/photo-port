import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

const Navigation = (props) => {
    //  initializing the category state as an array of a few objects
    const { categories = [], setCurrentCategory, currentCategory } = props;
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);
    // 1st argument is CB function, 2nd is array with a single element, currentCategory
    // 2nd directs hook to re-render the component on changes to the value of this state
    // if currentCategory changes now, the component will re-render so that the change in document.title will be visible to user

    return (
        <header className="flex-row px-1">
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
                        // short-circuit expression
                        <li
                            className={`mx-1 ${
                                currentCategory.name === category.name &&
                                "navActive" //first half will get evaluated and IF true, then second bit will be returned
                            }`}
                            key={category.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentCategory(category);
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
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
