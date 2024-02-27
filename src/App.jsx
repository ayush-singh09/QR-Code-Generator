import React, { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [URL, setURL] = useState("Be Happy");

  const photoUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${URL}`;

  return (
    <div className="hero h-screen overflow-scroll w-full  bg-[#070F2B] flex items-center justify-evenly">
      <div className="h-[100px]"></div>
      <div className="header absolute top-10 left-[50%] translate-x-[-50%] font-bold text-2xl rounded border-[#535C91] border py-2 px-5">
        <h1 className="text-[20px]">Insane QR Generator</h1>
      </div>

      <div className="inp h-fit max-w-[400px] w-[30vw] min-w-[230px] bg-[#1B1A55] rounded-md px-4 py-6 flex flex-col gap-6">
        <h1 className="text-lg">Enter any URL or Text</h1>
        <input
          value={text}
          className="he bg-transparent border border-white rounded-md px-2 py-1 w-full "
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="Enter your text"
          type="text"
        />
        <button
          className="he bg-[#9290C3] py-[5px] text-black rounded-md font-bold"
          onClick={() => {
            if (text.length > 0) {
              setURL(text);
            } else alert("Enter text please");
          }}
        >
          Generate QR
        </button>
      </div>

      <div className="qrbox h-fit max-w-[470px] w-[42vw] min-w-[200px] bg-[#1B1A55] rounded-md px-4 py-6 gap-6 flex flex-col items-center">
        <div className="he bg-[#535C91] rounded py-[4px] w-full">
          <h1 className="text-center">{URL}</h1>
        </div>
        <div className="qr h-fit w-fit p-3 rounded-md bg-[#535C91]">
          <img src={photoUrl} className={`h-[200px] w-[200px]`} alt="qr" />
        </div>
        <button className="he bg-[#9290C3] w-full py-[6px] rounded-md">
          Save Image
        </button>
      </div>
<div className="h-[100px]"></div>
      <div className="footer w-full text-center min-h-[60px] text-sm bg-[#070c1b] absolute bottom-0 left-0 flex justify-between items-center px-5">
        <h1>project made for learning purpose only 👻</h1>
        <h1>❤️ love from insane.</h1>
        <h1>©️ All Rights Reserved 2024</h1>
      </div>
    </div>
  );
}

export default App;
