import { useState } from "react";
import { useEffect } from "react";

const LoadingScreen = ({onComplete}) => {

    const [text, setText] = useState("");
    const fullText = "<Shad.dev />";

    useEffect(() => {
        let index = 0;
       const interval = setInterval(()=>{
        setText(fullText.substring(0,index));
        index++;
        if(index > fullText.length){
            clearInterval(interval);

            setTimeout(() => {
                onComplete();
            }, 1000);
        }
       }, 100);
         return () => clearInterval(interval);

    },[onComplete])


    return (
       <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
        <div className="md-4 text-4xl font-mono font-bold">
            {text} <span className="animation-blink ml-1"> | </span>
        </div>
       </div>
    );
}

export default LoadingScreen;