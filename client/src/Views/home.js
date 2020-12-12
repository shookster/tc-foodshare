import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import './home.css';
import background from '../components/image/food.jpg'

function Home(){
    return (
        <div className="backgroudImage" style ={{backgroundImage:`url(${background})`}}>
    
        <Navbar />
        <p>
            lksjdlkfjslkjdflskjdflksjdflkjslkljlkjk <br/>
            ksdjflkjsdlkfjsldkfjlskdjfklsjdflkjsdlkj <br/>
            lksjdlkfjslkjdflskjdflksjdflkjslkljlkjk <br/>
            ksdjflkjsdlkfjsldkfjlskdjfklsjdflkjsdlkj <br/>
            lksjdlkfjslkjdflskjdflksjdflkjslkljlkjk <br/>
            ksdjflkjsdlkfjsldkfjlskdjfklsjdflkjsdlkj <br/>
            lksjdlkfjslkjdflskjdflksjdflkjslkljlkjk <br/>
            ksdjflkjsdlkfjsldkfjlskdjfklsjdflkjsdlkj <br/>
            lksjdlkfjslkjdflskjdflksjdflkjslkljlkjk <br/>
            ksdjflkjsdlkfjsldkfjlskdjfklsjdflkjsdlkj <br/>
            lksjdlkfjslkjdflskjdflksjdflkjslkljlkjk <br/>
            ksdjflkjsdlkfjsldkfjlskdjfklsjdflkjsdlkj <br/>
            lksjdlkfjslkjdflskjdflksjdflkjslkljlkjk <br/>
            ksdjflkjsdlkfjsldkfjlskdjfklsjdflkjsdlkj <br/>
        </p>
        <Footer />
        </div>
    )
}

export default Home;