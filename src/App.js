
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Present from "./pages/Present";
import PresentUpload from "./pages/PresentUpload";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import { useState } from "react";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/vaccify-app" exact element={ <Home /> } />
                <Route path="/about-us" exact element={ <AboutUs /> } />
                <Route path="/login" exact element={ <Login/> } />
                <Route path="/present" exact element={ <Present /> } />
                <Route path="/presentupload" exact element={ <PresentUpload /> } />
                <Route path="/contact" exact element={ <Contact /> } />
            </Routes>
        </Layout>
    );
}

export default App;