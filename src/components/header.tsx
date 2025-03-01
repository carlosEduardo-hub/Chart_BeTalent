import logo from "../assets/Logo.svg";

export function Header() {
 return (
   <div className="min-w-[1024px] h-[60px] bg-white top-5 left-5 shadow-shadow-small">
    <div className=" top-[12.58px] left-[21.41px] p-[10px] gap-[10px]">
        <img src={logo} alt="logo" />
    </div>
   </div>
 );
}