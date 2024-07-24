import LoginPage from "./(login)/LoginForm";
import { VscLink } from "react-icons/vsc";



export default function Home() {
  return (
    <main className="flex min-h-screen w-full  flex-col items-center justify-center bg-white md:bg-gray-light">
      <div className="flex flex-col md:justify-center  md:items-center gap-[51px] px-5 md:px-10 py-5">
        <div className="flex items-center md:justify-center gap-[7px]">
          <VscLink size={26} color="white" className="bg-primary rounded-lg p-[2px]" />
          <h2 className="text-[2rem] font-bold">devlinks</h2>
        </div>
        <LoginPage />
      </div>
    </main>
  );
}
