import Image from "next/image";

export default function NavBar() {
  return (
    <div className="fixed w-[100vw] h-28 bg-offSalmon-200 flex flex-row shadow-sm justify-between shadow-salmon-200 p-3">
        <div className="flex flex-col place-self-start relative left-4">
          <div className="flex flex-row gap-2 ">
          <p className="text-5xl text-center self-end font-bold font-spartan">Laura </p>
          <div className="flex flex-col">
          <p className="text-3xl text-center font-semibold font-spartan">Ramirez </p>
          <p className="text-3xl text-center font-semibold font-spartan">Carrivali</p>
          </div>
          </div>
        
      <p className="text-lg text-center font-semibold font-spartan">Licenciada en letras y copyrighter</p>
        </div>
<div className="flex flex-row relative gap-16 justify-self-end right-4">
  <button>Sobre mi</button>
  <button>Mis proyectos</button>
  <button>Contactame!</button>
</div>
        
    </div>
  );
}