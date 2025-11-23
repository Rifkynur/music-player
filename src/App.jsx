import { useState } from "react";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-h-screen bg-white/80 overflow-hidden shadow-md">
      <MusicPlayer />
    </div>
  );
}

export default App;
