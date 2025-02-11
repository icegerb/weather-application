import "./App.css";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  return (
    <div className='mx-auto flex h-full w-full items-center justify-center bg-[url("./assets/background/11.png")] bg-cover bg-center md:h-dvh'>
      <WeatherCard />
    </div>
  );
}

export default App;
