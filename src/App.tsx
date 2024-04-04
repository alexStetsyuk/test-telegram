import "./App.css";

import WebApp from "@twa-dev/sdk";
import quotes from "./quotes";

function App() {
  const getRandomQuote = () => {
    const rand = Math.floor(Math.random() * quotes.length);
    WebApp.showAlert(`Your motivation: ${quotes[rand]}`);
  };

  return <button onClick={getRandomQuote}>Get your motivation!</button>;
}

export default App;
