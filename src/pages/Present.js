import React, { useState } from "react";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from '../components/SliderData'

const Present = () => {
    return <ImageSlider slides={SliderData} />
};

export default Present;
