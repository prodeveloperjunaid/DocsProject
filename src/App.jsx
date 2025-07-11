import React from "react";
import Background from "./component/Background";
import Forground from "./component/Forground";

const App = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Forground />
    </div>
  );
};

export default App;
