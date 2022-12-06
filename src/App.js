import "./Styles/Global.scss"
import "./App.css";
import Header from "./Components/Header/Header";
import LangingPage from "./Pages/LandingPage/LandingPage";
import LoginForm from "./Pages/LoginForm/LoginForm";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
     <LandingPage  /> 
      {/* <LoginForm /> */}
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
