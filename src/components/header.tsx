import logo from "../assets/Logo.svg";

export function Header() {
 return (
   <div className="w-full h-auto bg-white shadow-shadow-small">
    <div className=" ml-[21.41px] p-[10px] gap-[10px]">
        <img src={logo} alt="logo" />
    </div>
   </div>
 );
}