import Image from "next/image";
import NavBar from "./[locale]/Components/NavBar/NavBar";
import About from "./[locale]/Components/About/About";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col gap-10">
      <NavBar/>
      
      <About/>
    </div>
  );
}
