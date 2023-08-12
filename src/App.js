import React, { useEffect, useState } from "react";
import Loader from './components/common/Loader';
import Home from "./components/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <Loader/>
      ) : (
       <Home/>
      )}
    </div>
  );
}

export default App;
