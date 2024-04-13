import Image from "next/image";

const Logo = () => {
    return ( <div className="flex items-center justify-center self-center mt-[0.5rem]">
        <Image src={"/MainLogo.png"} alt="COMPIL" width={150} height={150} className="dark:invert" />
    </div> );
}
 
export default Logo;