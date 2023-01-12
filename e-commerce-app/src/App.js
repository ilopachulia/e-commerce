import "./App.css";
import CardList from "./components/CardList";
import Footer from "./shared-components/Footer";
import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Layout>
  );
}

export default App;
