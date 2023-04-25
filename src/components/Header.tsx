import MyButton from "../components/MyButton";
import MyButtonHoverBlack from "../components/MyBlackButton";
function Header() {
  return (
    <header className="bg-white w-[100%]">
      <div className="flex justify-between items-center mx-[200px] h-[80px]">
        <div className="flex gap-5 items-center">
          <h1 className="bg-black text-white rounded px-2 py-1 font-bold text-center text-lg">
            IT
          </h1>
          <h1 className="text-xl font-bold">kerja-IT.com</h1>
        </div>
        <div className="space-x-4">
          <MyButton text="🏹 Talents" />
          <MyButton text="📢 Post Jobs" />
          <MyButton text="💌 Get Job Alerts" />
          <MyButton text="☁️ Login" />
          <MyButtonHoverBlack text="✨ Register" />
        </div>
      </div>
    </header>
  );
}

export default Header;
