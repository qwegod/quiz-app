function ShareMenu({ modalStyle, setHide, setShow, setStyleDef }) {
  
  const friends = [
    { name: "Hugo Collins", path: "/assets/user.png" },
    { name: "Sarah Dean", path: "/assets/user.png" },
    { name: "Laura Scott", path: "/assets/user.png" },
    { name: "Anne Molland", path: "/assets/user.png" },
    { name: "Micheal Thompson", path: "/assets/user.png" },
  ];

  const socials = [
    { name: "Mail", path: "/assets/social.png" },
    { name: "Message", path: "/assets/social.png" },
    { name: "Messenger", path: "/assets/social.png" },
    { name: "X", path: "/assets/social.png" },
    { name: "Instagram", path: "/assets/social.png" },
  ];



  return (
    <div className={modalStyle}>
      <div className="flex justify-between p-4">
        <img src="/assets/logo.png" alt="logo" className="w-[41px] h-[41px]" />
        <div className="mr-14">
          <h1 className="text-[14px] font-semibold text-white">
            Check Out My Quiz Results!
          </h1>
          <h2 className="text-[13px] font-normal text-white">QuikQuiz.com</h2>
        </div>
        <div
          className="self-center cursor-pointer"
          onClick={() => {
            setShow(false);
            setHide(true);
            setStyleDef(true);
            
          }}
        >
          <img
            src="/assets/close.png"
            alt="close"
            className="h-[30px] w-[30px]"
          />
        </div>
      </div>

      <hr className="border-[#363636] mb-4 border-[1px]" />

      <div className="flex overflow-x-auto space-x-8 px-5">
        {friends.map((user, index) => {
          return (
            <div key={index} className="font-normal text-[11px] text-white">
              <img
                src={user.path}
                alt="user"
                className="min-w-[60px] rounded-[30px] cursor-pointer"
              />
              {user.name.split(" ").map((name, index) => {
                return <div key={index} className="flex justify-center">{name}</div>;
              })}
            </div>
          );
        })}
      </div>

      <hr className="border-[#363636] my-4 border-[1px]" />

      <div className="flex overflow-x-auto space-x-8 px-5">
        {socials.map((social, index) => {
          return (
            <div key={index} className="font-normal text-[11px] text-white">
              <img
                src={social.path}
                alt="user"
                className="min-w-[60px] cursor-pointer"
              />
              <div key={index} className="flex justify-center"> {social.name} </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col">
        <button className="bg-[#7474802e] flex flex-row text-[17px] font-normal text-white justify-between p-3 rounded-xl mx-5 mt-5">
          Copy
          <img src="/assets/copy.png" alt="copy" className="" />
        </button>
        <button className="bg-[#7474802e] flex flex-row text-[17px] font-normal text-white justify-between p-3 rounded-xl mx-5 mt-2">
          Add to Reading List
          <img src="/assets/read.png" alt="read" />
        </button>
      </div>
    </div>
  );
}

export default ShareMenu;
