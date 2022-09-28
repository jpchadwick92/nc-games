import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import ReviewList from "./components/ReviewList";

function App() {
  return (
    <section className="App">
      <Header />

      <Routes>
        <Route path="/" element={<ReviewList />} />
      </Routes>
    </section>
  );
}

export default App;
