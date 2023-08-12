import React from "react";
import LoadingIcons from "react-loading-icons";
import '../../styles/Loader.css'

function LoadingScreen() {
  return (
    <div>
      <div className="loading-icon">
        <LoadingIcons.TailSpin stroke="black" strokeOpacity={2000} speed={.75}/>
        <p>Please wait</p>
      </div>
    </div>
  );
}

export default LoadingScreen;
