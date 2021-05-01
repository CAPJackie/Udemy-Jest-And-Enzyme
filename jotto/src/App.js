import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import { Input } from "./Input";

const App = () => {
  return (
    <div className="container">
      <h1>Jotto </h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
      <Input secretWord="App" />
    </div>
  );
};

export default App;
