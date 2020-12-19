import React from 'react';
import Input from '../components/Input';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./input.css"


 function InputPage() {

    return(
        <div className="inputPage">
            <Header/>
            <Input/>
            <Footer/>

        </div>

    )
};

export default InputPage