import ConfettiResult from "../confetti/confetti-result";
import ShareMenu from "../share-menu/share-menu";
import { useState } from "react";

function Finish({ setComplete, setLoad, setQuiz }) {
  const [confetti, setConfetti] = useState(true);
  const [show, setShow] = useState(false);
  const [hidden, setHide] = useState(false);
  const [styleDef, setStyleDef] = useState(true);
  let modalStyle = `absolute hi bg-[#1D1D1D] h-[458px] w-[375px] rounded-t-3xl z-100  ${
    show && "animate-appear bottom-0"
  } ${hidden && "animate-disappear bottom-[-458px]"} ${styleDef && "bottom-[-458px]"}`;

  setTimeout(() => setConfetti(false), 2000);


  return (
    <div className="relative flex flex-col overflow-hidden bg-[#2B223E] h-[812px] w-[375px]  flex-grow justify-between">
      {confetti && <ConfettiResult />}

      <div className="flex flex-col items-center my-auto">
        <img src="/assets/party.png" alt="party" className="mx-auto pb-8" />
        <h1 className="font-bold text-white text-[33px] text-center">
          <span className="text-[#7A68FF]">Quik</span>Quiz Complete!
        </h1>
        <h2 className="font-normal text-[15px] text-[#9A9A9A] text-center px-4">
          Awesome job completing a QuikQuiz. Your results are zooming their way
          to your inbox. Sharing is caring, don't forget to show off your
          knowledge to friends and fam!
        </h2>
      </div>
      <div className="flex flex-col items-center mb-4">
        <button
          onClick={() => {
            setQuiz(true);
            setLoad(true);
            setComplete(false);
          }}
          className="w-[327px] bg-[#7A68FF] text-white font-bold text-[17px] p-4 rounded-2xl mb-5"
        >
          Start Over 👊
        </button>
        <button
          onClick={() => {
           
            setHide(false);
            setStyleDef(false);
            setShow(true);
          }}
          className="w-[327px] text-white font-bold text-[17px] mb-5"
        >
          Share My Results 📣
        </button>
      </div>
      <ShareMenu modalStyle={modalStyle} setHide={setHide} setShow={setShow} setStyleDef={setStyleDef} styleDef={styleDef} />
    </div>
  );
}

export default Finish;
