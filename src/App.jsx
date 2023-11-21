import Header from "./Component/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from "./Component/Footer";
import Signup from "./Component/Signup";
import LoginForm from "./Component/Login";
// import Login from "./Component/Login";



function App() {
  return (
    <div>
      <Header/>
      <Signup/>
      <Footer/>
    </div>
  )
}

export default App
