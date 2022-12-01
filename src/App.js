import "./Styles/Global.scss"
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="container">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
