import { useEffect, useState } from "react";

const Image = () => {
    const [imageURL, setImageURL] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typis", 
            { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("servor error");
                }
                return response.json();
            })
            .then((response) => setImageURL(response[0].url))
            .catch((error) => setError(error));
    }, []); // Only need to fetch once at mount

    if (error) return <p>A network error was encountered.</p>
    return (
        imageURL && (
            <>
                <h1>An image</h1>
                <img src={imageURL} alt={"placeholder text"} />
            </>
        )
    );
};

export default Image;