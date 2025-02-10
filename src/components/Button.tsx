type ButtonProps = {
    text: string;
    onClick: () => void;
}

function Button({ text, onClick }: ButtonProps) {
    return (
        <button id="new-joke" className="button" role="button" onClick={onClick}>{text}</button>
    )
}

export default Button
