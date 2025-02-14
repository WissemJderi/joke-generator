import { useState } from "react";
import Button from "./Button";
function Joke() {
  const [joke, setJoke] = useState({ setup: "", punchline: "" });
  const fethApi = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) =>
        setJoke({
          setup: data.setup,
          punchline: data.punchline,
        })
      );
  };

  return (
    <>
      <Button fetchApi={fethApi} />
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
    </>
  );
}

export default Joke;
