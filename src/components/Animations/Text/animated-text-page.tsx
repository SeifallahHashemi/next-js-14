import React from "react";
import AnimatedText from "@/components/Animations/Text/AnimatedText";

const AnimatedTextPage = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden relative">
      <div className="w-full h-full grid place-items-center mt-[100vh]">
        <AnimatedText text={['Hello', "world"]} wrapper='p' className='text-9xl font-bold' repeatDelay={1000}/>
      </div>
    </div>
  );
};

export default AnimatedTextPage;