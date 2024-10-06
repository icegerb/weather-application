import "./App.css";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  return (
    <div className='container mx-auto flex justify-center bg-[url("./assets/background/11.png")] bg-cover bg-center'>
      <WeatherCard />
    </div>
  );
}

export default App;
