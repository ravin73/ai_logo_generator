"use client"
import React, { useState } from "react";
import Lookup from "../_data/Lookup";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
    const [logoTitle,setLogoTitle]=useState()
  return (
    <div className="flex flex-col items-center mt-24 gap-5">
      <h2 className="text-primary text-5xl text-center font-bold">{Lookup.HeroHeading}</h2>
      <h2 className="text-5xl text-center font-bold">{Lookup.HeroSubHeading}</h2>
      <p className="text-lg text-gray-500 text-center">{Lookup.HeroDesc}</p>
      <div className="flex w-full mt-10 gap-2 lg:gap-6 max-w-2xl">
        <input placeholder={Lookup.InputTitlePlaceholder} className="p-3 w-full rounded-md border outline-none shadow-md"
        onChange={(event)=>setLogoTitle(event?.target.value)}
        />
        <Link href={`/create?title=${encodeURIComponent(logoTitle || '')}`} >
        <Button className='p-6'>Get Started</Button>
        </Link>
       
      </div>
    </div>
  );
}

export default Hero;
