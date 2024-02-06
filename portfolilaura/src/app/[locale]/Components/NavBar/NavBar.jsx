import Image from "next/image";

export default function NavBar() {
  return (
    <div className="fixed w-full h-24 bg-salmon-200 flex flex-row shadow-sm shadow-salmon-200  p-5">
        <div className="flex flex-col place-self-start">
        <p className="text-2xl text-center">Laura Ramirez</p>
      <p className="text-md text-center">Licenciada en letras</p>
        </div>
        
    </div>
  );
}