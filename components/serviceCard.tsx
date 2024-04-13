import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
interface IProps {
  iconUrl: string;
  title: string;
  description: string;
  action?: () => void;
}

function ServiceCard({ iconUrl, title, description, action }: IProps) {
  return (
    <div className="flex flex-grow flex-col gap-[2.56rem]  pt-[1.91rem] pb-[2.81rem] px-[3rem] items-center shadow-sm service-card-shadow rounded-[1.75rem]">
      <div>
        <Image src={iconUrl} alt="service icon" height={100} width={100}/>
      </div>
      <p className="text-[2.25rem] font-[700]">{title}</p>
      <p className="text-center font-mono">{description}</p>
      <Button variant={"default"} className="bg-blue-500 hover:bg-blue-200 w-[10.125rem]" >Learn More</Button>
    </div>
  );
}

export default ServiceCard;
