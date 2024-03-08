import Image from "next/image";
import React from "react";
import { Recursive } from "next/font/google";
import { cn } from "@/lib/utils";

const recursive = Recursive({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-recursive",
});
export default function Header() {
  return (
    <div className="w-full flex flex-col h-80 justify-center items-center">
      <Image src={"logo.svg"} height={120} width={120} alt="logo" />
      <h1
        className={cn(
          "text-4xl italic py-3 text-[#FF7575]",
          recursive.className,
        )}
      >
        Writings for Developers
      </h1>
      <p className="font-light">
        Curated collection of articles for busy developers
      </p>
    </div>
  );
}
