 import Categories from "../components/Categories"; 
import { useEffect } from "react";

function HomePage() {
    useEffect(() => {
        // To Scroll the page to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <> 
            <Categories /> 
        </>
    )
}

export default HomePage;