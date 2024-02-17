import Image from "next/image";
import NavBar from "./[locale]/Components/NavBar/NavBar";
import About from "./[locale]/Components/About/About";
import Titles from "./[locale]/Components/Titles/Titles";
import AllCompanies from "./[locale]/Components/Companies/Companies";
import Projects from "./[locale]/Components/Projects/Projects";
import Carousel from "./[locale]/Components/Carousels/Carousel";
import Footer from "./[locale]/Components/Footer/Footer";


export default function Home() {
  return (
    <div className="w-full flex flex-col overflow-x-hidden overflow-y-hidden gap-10">
      <NavBar/>
      <About/>
      <Titles/>
      <AllCompanies/>
      <Projects/>
      <Carousel/>
      <Footer/>
    </div>
  );
}
