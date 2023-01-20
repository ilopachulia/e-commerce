import "./App.css";
import CardList from "./components/CardList";
import Footer from "./shared-components/Footer";
import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Layout>
  );
}

export default App;
