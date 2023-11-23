import Header from "./Component/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { UserProvider } from "./config/Usercontext";

import Footer from "./Component/Footer";
// import Signup from "./Component/Signup";
// import LoginForm from "./Component/Login";
// import Home from "./Component/Home";
import Aboutus from "./Component/Aboutus";
// import Login from "./Component/Login";



function App() {
  return (
      <UserProvider>

        <Header/>
        <Aboutus/>
        <Footer/>
        </UserProvider>  )
}

export default App
