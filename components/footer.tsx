import React from "react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import Link from "next/link";

function FooterSection() {
  return (
    <section className="flex flex-col gap-[1.9rem] w-full mt-[10.44rem]">
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div>
          <Image src="/MainLogo.png" alt="footer logo" width={180} height={180} />
        </div>
        <div className="text-lightBlue text-[1rem] font-mono">
          © 2024 COMPIL❤️ All rights reserved.
        </div>
        <div className="flex gap-4">
          <p className="text-lightBlue text-[1rem] hover:text-blue-500 hover:scale-125 cursor-pointer transition-all duration-300"><Link href={"#home"}>
          Home</Link></p>
          <p className="text-lightBlue text-[1rem] hover:text-blue-500 hover:scale-125 cursor-pointer transition-all duration-300"><Link href={"#services"}>
          Services</Link></p>
          <p className="text-lightBlue text-[1rem] hover:text-blue-500 hover:scale-125 cursor-pointer transition-all duration-300"><Link href={"#test"}>
          Testimonials</Link></p>
          <p className="text-lightBlue text-[1rem] hover:text-blue-500 hover:scale-125 cursor-pointer transition-all duration-300"><Link href={"#team"}>
          Team</Link></p>
          <p className="text-lightBlue text-[1rem] hover:text-blue-500 hover:scale-125 cursor-pointer transition-all duration-300"><Link href={"#contact"}>
          Contact Us</Link></p>
          
        </div>
      </div>
      <Separator />
      <div className="pb-[2.56rem] flex justify-center">
        <p className="text-lg font-mono">
        Empowering innovation, one click at a time
        </p>
      </div>
    </section>
  );
}

export default FooterSection;
