import { useState } from 'react';
import Button from './Button';
import { Joke } from '../types/interfaces.ts';

interface JokeDisplayProps {
    joke: Joke | null;
    showPunchline: boolean;
    handlePunchline: () => void;
    showError: boolean;
}

function JokeDisplay({ joke, handlePunchline, showPunchline, showError }: JokeDisplayProps) {
    const [num, setNum] = useState(Math.round(Math.random() * 6) + 1);

    const handleButtonClick = () => {
        setNum(Math.floor(Math.random() * 6) + 1);
        handlePunchline();
    };
    if (showError) {
        return (
            <div id="error">
                <p>Something went wrong with the connection, it's no joke :(</p>
                <img src="../../img/sad-pikachu.gif" alt="no joke :(" />
            </div>
        );
    }
    if (!joke) {
        return null;
    }


    return (
        <div>
            <div id="result">
                <p id="setup-container">{joke.setup}</p>
                <Button text={'Get Punchline'} onClick={handleButtonClick} />
                {showPunchline && (
                    <div className="punch-container">
                        <p>{joke.punchline}</p>
                        <img src={`../../img/lol${num}.gif`} alt="LOL GIF" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default JokeDisplay;
