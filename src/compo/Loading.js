import React,{useState, useEffect} from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

const Loading = () => {
    const [progress, setProgress] = useState(0);
  
        setTimeout(() => {
            progress < 100 ? setProgress(progress + 1) : clearInterval(this);
         console.log(progress);
     }, 10);

  return (
    <div>
      <ProgressBar style={{width:70}}  completed={progress} bgColor="green" animateOnRender={true} />
      
    </div>
  );
}

export default Loading
