
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Present from "./pages/Present";
import PresentUpload from "./pages/PresentUpload";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import { useState } from "react";
import { SliderData } from "./components/SliderData";
import ImageSlider from "./components/ImageSlider";

function App() {

    let [selectedFiles,setSelectedFiles] = useState([])

    return (
        
        <Layout>
            <Routes>
                <Route path="/vaccify-app" exact element={ <Home /> } />
                <Route path="/about-us" exact element={ <AboutUs /> } />
                <Route path="/login" exact element={ <Login/> } />
                <Route path="/present" exact element={ <Present selectedFiles={selectedFiles}/> } />
                <Route path="/presentupload" exact element={ <PresentUpload setSelectedFiles={setSelectedFiles} selectedFiles={selectedFiles} /> } />
                <Route path="/contact" exact element={ <Contact /> } />
                <Route path="/imageslider" exact element={ <ImageSlider selectedFiles={selectedFiles} /> } />
            </Routes>
        </Layout>
    );
}

export default App;