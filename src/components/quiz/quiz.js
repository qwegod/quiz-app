import { useState, useEffect } from "react";
import ConfettiQuestion from "../confetti/confetti-question";

function Quiz({ setComplete }) {
  const [question, setQuestion] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const [buttonPressed, setPressButton] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [buttonText, setButtonText] = useState("Lock It In 🔒");
  const [score, setScore] = useState(1);
  const [notSelected, setSelect] = useState(false);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (buttonText === "Complete Quiz 🎉"){
   setTimeout(() =>{
      setAnimation(true);
   }, 5000 ) }
  }, [buttonText])

  useEffect(() => {
    if (confetti) {
      const timer = setTimeout(() => {
        setConfetti(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [confetti]);
  useEffect(() => {
    if (notSelected === true) setButtonText("Select Answer! 😠");
    if (selectedId != null && notSelected === true) {
      setSelect(false);
      setButtonText("Lock It In 🔒");
    }
  }, [selectedId, notSelected]);
  const QUESTIONS_COUNT = 2;
  const buttonStyle = notSelected
    ? "shadow-md w-[327px] bg-[#D44D4D] text-white font-bold text-[17px] p-5 rounded-3xl m-auto"
    : buttonText === "Complete Quiz 🎉"
    ? `shadow-md shadow-gray-900 w-[327px] bg-[#7A68FF] text-white font-bold text-[17px] rounded-3xl  m-auto  ${animation ? "p-4 border-red border-solid border-[4px] animate-pulse-border" : "p-5"}`
    : selectedId === null
    ? "shadow-md w-[327px] bg-[#6F6C87] text-white font-bold text-[17px] p-5 rounded-3xl m-auto"
    : "shadow-md w-[327px] bg-[#7A68FF] text-white font-bold text-[17px] p-5 rounded-3xl m-auto";
  const questions = [
    {
      text: `Identify this artist, known for merging traditional Japanese art with
        pop culture.`,
      photo: "/assets/photo-1.png",
    },
    {
      text: `How many wins does Floyd Mayweather have in his professional boxing career?`,
      photo: "/assets/photo-2.png",
    },
    {
      text: `How long has Apple reportedly been developing the new Vision Pro for?`,
      photo: "/assets/photo-3.png",
    },
  ];

  const items = [
    [
      { id: 1, name: "Takashi Murakami", correct: 1 },
      { id: 2, name: "Another Artist" },
      { id: 3, name: "Yet Another Artist" },
    ],
    [
      { id: 1, name: "50 wins, 0 losses, 0 draws", correct: 1 },
      { id: 2, name: "50 wins, 1 loss, 0 draws" },
      { id: 3, name: "49 wins, 0 losses, 1 draw" },
    ],
    [
      { id: 1, name: "5 years" },
      { id: 2, name: "+15 years", correct: 1 },
      { id: 3, name: "10 years" },
    ],
  ];

  const handleSelectClick = () => {
    return buttonPressed
      ? "h-[15px] w-[15px] self-center filter brightness-105 hue-rotate-[230deg]"
      : "h-[15px] w-[15px] self-center";
  };

  const handleItemClick = (id) => {
    if (buttonPressed) {
      return;
    }

    setSelectedId(id === selectedId ? null : id);
  };

  const getItemStyle = (id) => {
    const correctItemId = items[question].find(
      (item) => item.correct != null
    )?.id;

    const isCorrect = id === correctItemId;

    const isSelected = id === selectedId;

    const isIncorrect =
      buttonPressed &&
      isSelected &&
      items[question][selectedId - 1]?.correct == null;

    if (buttonPressed) {
      if (isIncorrect) {
        return "w-[327px] bg-[#4E2828] font-bold text-[14px] text-white rounded-3xl mb-2 flex p-5 cursor-pointer justify-between transition ease-in-out delay-400  border-[#D44D4D] border-solid border-[2px]";
      } else if (isCorrect) {
        return "w-[327px] bg-[#284E3E] font-bold text-[14px] text-white rounded-3xl mb-2 flex p-5 cursor-pointer justify-between transition ease-in-out delay-400 border-[#29DA30] border-solid border-[2px]";
      } else {
        return "w-[327px] bg-[#35284E] font-bold text-[14px] text-white rounded-3xl mb-2 flex p-5 cursor-pointer justify-between border-[#6F6C87] border-solid border-[1px]";
      }
    } else {
      return isSelected
        ? "w-[327px] bg-[#35284E] font-bold text-[14px] text-white rounded-3xl mb-2 flex p-5 cursor-pointer justify-between border-[#562ca5] border-solid border-[2px]"
        : "w-[327px] bg-[#35284E] font-bold text-[14px] text-white rounded-3xl mb-2 flex p-5 cursor-pointer justify-between border-[#6F6C87] border-solid border-[1px]";
    }
  };

  const handleButtonClick = () => {
    if (selectedId === null) {
      setSelect(true);
    } else {
      if (!buttonPressed) {
        if (QUESTIONS_COUNT === question) {
          setButtonText("Complete Quiz 🎉");
        } else {
          setButtonText("Next Question 👍");
        }
        setPressButton(true);
        if (items[question][selectedId - 1].correct != null) {
          setConfetti(true);
          setScore(score + 1);
        }
      } else {
        if (buttonText === "Complete Quiz 🎉") {
          setComplete(true);
          return;
        }
        setQuestion(question + 1);
        setPressButton(false);
        setSelectedId(null);
        setButtonText("Lock It In 🔒");
      }
    }
  };

  return (
    <div className="flex flex-col bg-[#2B223E] h-[812px] w-[375px]">
      <header className="flex justify-between px-5">
        <img
          src="/assets/close.png"
          alt="close"
          className="w-[12px] h-[12px] self-center"
        />
        <div className="bg-[#7A68FF] text-center text-white font-semibold rounded-3xl px-4 py-2 self-center ml-20">
          {question + 1}
        </div>
        <div>
          <div className="text-[#6F6C87] font-semibold text-[14px] flex flex-row p-5">
            <img
              src="/assets/info.png"
              alt="info"
              className="mr-2 h-[15px] w-[15px] self-center"
            />
            <span className="text-white mr-1">{question + 1} </span> /{" "}
            {QUESTIONS_COUNT + 1}
          </div>
        </div>
      </header>
      <h1 className="font-bold text-[23px] text-white text-center p-5">
        {questions[question].text}
      </h1>
      <img src={questions[question].photo} alt="photo-1" className="p-5" />
      <section className="p-5 ">
        {confetti && <ConfettiQuestion />}
        {items[question].map((item) => (
          <div
            key={item.id}
            className={getItemStyle(item.id)}
            onClick={() => handleItemClick(item.id)}
          >
            {item.name}

            {buttonPressed ? (
              item.correct != null ? (
                <img
                  src="/assets/selected.png"
                  alt="selected"
                  className={handleSelectClick()}
                />
              ) : item.id !== 1 && item.id === selectedId ? (
                <img
                  src="/assets/red-close.png"
                  alt="red-close"
                  className="h-[15px] w-[15px] self-center"
                />
              ) : (
                <img
                  src="/assets/select.png"
                  alt="select"
                  className="h-[15px] w-[15px] self-center"
                />
              )
            ) : selectedId !== item.id ? (
              <img
                src="/assets/select.png"
                alt="select"
                className="h-[15px] w-[15px] self-center"
              />
            ) : (
              <img
                src="/assets/selected.png"
                alt="selected"
                className={handleSelectClick()}
              />
            )}
          </div>
        ))}
      </section>
      <button className={buttonStyle} onClick={handleButtonClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default Quiz;
