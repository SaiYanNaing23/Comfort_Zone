import Header from "./components/Header";
import Nav from "./components/Nav";
import PopularMovies from "./components/PopularMovies";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <PopularMovies/>
    </div>
  );
}

export default App;
