import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface IProps {
  imageUrl: string;
  name: string;
  profession: string;
}

function TeamCard({ imageUrl, name, profession }: IProps) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center border-[4px] border-[#EBEAED] rounded-t-[1rem] py-[3rem]">
        <div>
          <Image
            src={imageUrl}
            alt="team member photo"
            className="rounded-full"
            width={120}
            height={120}
          />
        </div>
        <p className="text-lightBlue font-bold text-[1.2rem] my-6">{name}</p>
        <p className="text-darkBlue font-bold opacity-[0.3]">{profession}</p>
      </div>

      <div className="flex justify-around items-center h-[3.6875rem] border-[4px] border-[#EBEAED] border-t-0  rounded-b-[1rem]">
        <div>
          <img src="/github.svg" className="px-8 hover:scale-125 transition-all duration-300" alt="social icon" />
        </div>
        <Separator orientation="vertical" color="#EBEAED" className="w-[3px]" />
        <div>
          <img src="/instagram.svg" className="px-8 hover:scale-125 transition-all duration-300" alt="social icon" />
        </div>
        <Separator orientation="vertical" color="#EBEAED" className="w-[3px]" />
        <div>
          <img src="/linkedin.svg" className="px-8 hover:scale-125 transition-all duration-300" alt="social icon" />
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
