import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import Colors from "@/app/_data/Colors";

function LogoPallete({onHandleInputChange,formData}) {
  const [selectedOption, setSelectedOption] = useState(formData?.pallete);
  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {Colors.map((pallete, index) => (
          <div
            className={`flex p-1 ${
              selectedOption == pallete.name &&
              "border-2 rounded-lg border-primary"
            }`}
            key={index}
          >
            {pallete?.colors.map((color, index) => (
              <div
                className="h-24 w-full"
                key={index}
                onClick={() => {setSelectedOption(pallete.name);
                  onHandleInputChange(pallete.name)
                }}
                style={{
                  backgroundColor: color,
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoPallete;
