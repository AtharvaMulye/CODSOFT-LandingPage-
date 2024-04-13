import Image from "next/image";
import React from "react";

interface IProps {
  imageUrl: string;
  review: string;
  reviewerName: string;
}

function TestimonialCard({ imageUrl, review, reviewerName }: IProps) {
  return (
    <div className="flex flex-col md:flex-row gap-[1.88rem]">
      <Image
        src={imageUrl}
        alt="reviewer profile picture"
        className="rounded-[1rem] object-cover"
        height={100}
        width={100}
      />
      <div className="flex flex-col gap-[0.81rem]">
        <p className="text-darkBlue font-bold">{review}</p>
        <p className="text-darkBlue font-bold opacity-[0.3]">{reviewerName}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
