import MyButton from "./MyButton";
import { useState } from "react";

function Subheader() {
  const [hide, setHide] = useState(false);
  function toggleHide() {
    setHide(!hide);
  }
  return (
    <div
      className="flex flex-col justify-between items-center p-4 gap-[10px] h-auto bg-black"
      style={{ display: hide ? "none" : "flex" }}
    >
      <p className="text-white font-bold ">
        👻 Tired of being ghosted by employers? Apply for jobs through referrals
        instead with CariKabel.com
      </p>
      <div className="space-x-4">
        <a href="https://carikabel.notion.site/carikabel/CariKabel-com-522530b1fcfd4be7adcd3be941a58cda">
          <MyButton text="Go to CariKabel.com 🤝" />
        </a>
        <button
          onClick={toggleHide}
          className="py-2 px-3 hover:bg-gray-900 rounded-md bg-black text-gray-500 border border-gray-500"
        >
          No, thank you.
        </button>
      </div>
    </div>
  );
}

export default Subheader;
