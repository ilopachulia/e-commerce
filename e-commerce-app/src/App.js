import "./App.css";
import CardList from "./components/CardList";
import Footer from "./shared-components/Footer";
import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/SignUp/Singup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Layout>
  );
}

export default App;
