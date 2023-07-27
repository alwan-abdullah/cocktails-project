import Lottie from 'react-lottie';
import animationData from './lottie/cocktail_animation.json';
import { useState, useEffect } from 'react';
import background from "./img/coctail.jpg";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
    // Creating a timeout within the useEffect hook
    useEffect(() => {
  
      // Creating a timeout within the useEffect hook
      setTimeout(() => {
          setIsLoading(false);
      }, 5000);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    }
  }
  if(isLoading){
  return (
    <div id="overlay">
    <Lottie 
    options={defaultOptions}
      height={'30em'}
      width={'30em'}
    />
    </div>
  );
}
return (
  
  <div className="App">

  </div>
);
}

export default App;
