import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const ConfettiQuestion = () => {
  return (
    <div className="h-40 w-[330px] absolute overflow-hidden ">
      <Player
        autoplay
        src="https://lottie.host/43b5714e-5947-4c52-a855-0d9dd0cd06a9/1SaMnPdxvh.json"
        style={{
          height: "100%",
          width: "100%",
        }}
      ></Player>
    </div>
  );
};

export default ConfettiQuestion;
