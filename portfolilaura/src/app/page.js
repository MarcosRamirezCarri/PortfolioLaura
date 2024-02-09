import Image from "next/image";
import NavBar from "./[locale]/Components/NavBar/NavBar";
import About from "./[locale]/Components/About/About";


export default function Home() {
  return (
    <div className="w-full h-full gap-10">
      <NavBar/>
      
      <About/>

    </div>
  );
}
