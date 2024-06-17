import React from "react";
import memesData from "../MemesData";
export default function Meme()
{
    /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     *
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
    const [memeImage, setMemeImage] = React.useState('');
    function getImage()
    {

        const meme = memesData.data.memes;
        console.log(meme);
        const randomSelect = Number(Math.floor(Math.random() * meme.length));
        console.log(randomSelect);
        setMemeImage(meme[randomSelect].url);
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getImage}>
                    Get a new meme image 🖼
                </button>

                <img src={memeImage}></img>

            </div>
        </main>
    );
}