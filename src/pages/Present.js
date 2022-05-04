import React, { useState } from "react";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from '../components/SliderData'

const Present = ({selectedFiles}) => {
    return <ImageSlider selectedFiles={selectedFiles} slides={SliderData} />
};

export default Present;
