import React,{useEffect,useState} from "react";
import { TypeAnimation } from "react-type-animation";

const Intro = () =>{
    
    return (
        <div className="flex items-center justify-center flex-col
        text-center pt-20 pb-6">
            <h1 className="text-4xl dark:text-white md:text-7xl mb-1
            md:mb-3 font-bold">Siddharth Malik</h1>
            <span className="text-base md:text-xl mb-3 font-medium">
  <span>I am a </span>{' '} 
  <TypeAnimation
    sequence={[
      'Software Engineer',
      1000,
      'Backend Developer',
      1000,
      'Tech Enthusiast',
      1000,
    ]}
    repeat={Infinity}
  />
</span>
<p className=" text-base max-w-xl mb-6 font-bold">
            Lorem Ipmsum
         </p>
        </div>
    )
}
export default Intro;