import React from "react";
import Header from "./header";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

function NewsletterSection() {
  return (
    <section className="mt-[9rem]">
      <Header title="Our newsletter" subtitle="Subscribe Our Newsleter" />
      <div className="flex flex-col md:flex-row  items-center justify-center mt-8 md:mt-[3.31rem]">
        <div className="mt-[-2.5rem]">
          <Image
            src="/newsl.svg"
            alt="large envelop image"
            width={500}
            height={500}
          />
        </div>
        <div>
          <p className="mb-[1.44rem] text-normal font-semibold">
          Stay up to date with the latest developments in the world of IT and computer science with our newsletter. Get exclusive insights, tips, and resources delivered straight to your inbox. Subscribe now to stay informed and ahead of the curve!
          </p>

          <Input
            type="email"
            placeholder="Your E-mail here..."
            className="h-[3.8125rem] rounded-[3.0625rem] newsletter-box-shadow"
          />
          <div className="mt-[3.12rem]">
            <Button className="w-full bg-blue-400 hover:bg-blue-200 font-mono text-lg rounded-sm flex flex-grow">Subscribe Our Newsletter</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
