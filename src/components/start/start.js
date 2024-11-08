import { useEffect, useState } from "react";

function Start({ setQuiz }) {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
   setTimeout(() =>{
      setAnimation(true);
   }, 5000 ) 
  })
  return (
    <div className="flex flex-col bg-[#2B223E] h-[812px] w-[375px]  flex-grow justify-between">
      <div className="flex flex-col items-center my-auto">
        <img src="/assets/nerd.png" alt="nerd" className="mx-auto" />
        <h1 className="font-bold text-white text-[33px] text-center  pt-14">
          Ready for a <span className="text-[#7A68FF]">Quik</span>Quiz?
        </h1>
        <h2 className="font-normal leading-7 text-[15px] text-[#9A9A9A] text-center">
          Gear up for a QuikQuiz sprint! You've got just 30 seconds per
          question. Tap the info icon 🛈 at the top right to check out the module
          each question comes from. Let's see what you've got! -{" "}
          <span className="text-[#7A68FF]">Goodluck!</span>
        </h2>
      </div>
      <button
        onClick={() => setQuiz()}
        className={`shadow-md shadow-gray-900 w-[327px] bg-[#7A68FF] text-white font-bold text-[17px] rounded-3xl mb-8 mx-auto  ${animation ? "p-4 border-red border-solid border-[4px] animate-pulse-border" : "p-5"}`}
      >
        Start A New Quiz ✏️
      </button>
    </div>
  );
}

export default Start;
