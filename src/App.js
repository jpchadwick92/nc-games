import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import ReviewList from "./components/ReviewList";
import Nav from "./components/Nav";

function App() {
  return (
    <section className="App">
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<ReviewList />} />
        <Route path="/categories/:category" element={<ReviewList />} />
      </Routes>
    </section>
  );
}

export default App;
