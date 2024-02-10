import Image from "next/image";
import NavBar from "./[locale]/Components/NavBar/NavBar";
import About from "./[locale]/Components/About/About";
import Titles from "./[locale]/Components/Titles/Titles";


export default function Home() {
  return (
    <div className="w-full flex flex-col overflow-x-hidden overflow-y-hidden gap-10">
      <NavBar/>
      <About/>
      <Titles/>
    </div>
  );
}
