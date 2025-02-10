import { Joke } from "../types/interfaces"

export async function getRandomJoke() {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke")
        const joke: Joke = await response.json()
        console.log(joke)
        return joke;
    } catch (error) {
        console.error(error);
        return null;

    }
}