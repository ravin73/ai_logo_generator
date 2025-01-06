import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import LogoDesign from "@/app/_data/LogoDesign";
import Image from "next/image";

function LogoDesigns({onHandleInputChange,formData}) {
  const [selectedOption, setSelectedOption] = useState(formData?.design?.title);
  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoDesignTitle}
        description={Lookup.LogoDesignDesc}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {LogoDesign.map((design, index) => (
          <div key={index} onClick={() => {setSelectedOption(design.title);
            onHandleInputChange(design)
          }}
          className={`p-1 hover:border-2 border-primary rounded-xl cursor-pointer ${selectedOption==design.title && 'border-2 rounded-xl border-primary'}`}
          >
            <Image
              src={design.image}
              alt={design.title}
              width={300}
              height={200}
              className="w-full rounded-xl h-[200px] object-cover"
            />
            <h2 className="text-center text-lg text-gray-800 font-medium mt-4">{design.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoDesigns;
