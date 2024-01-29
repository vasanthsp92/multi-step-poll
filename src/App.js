import React from "react";
import Carousel from "./components/Carousel";
import { StateProvider } from "./context/Store";
import { questions } from "./data/Questions";

function App() {
  return (
    <StateProvider>
      <div className="App">
        <Carousel questions={questions} />
      </div>
    </StateProvider>
  );
}

export default App;
