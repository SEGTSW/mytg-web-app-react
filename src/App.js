import './App.css';
import {useEffect} from "react";

const tg =window.Telegram.WebApp
function App() {

  useEffect(() => {
      tg.ready();
  },[])

  const onClosle = () => {
  tg.close();
  }

    return (
    <div className="App">
      work
        <button onClick={onClosle} >Закрити</button>
    </div>
  );
}

export default App;
