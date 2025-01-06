import React from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";


function LogoDesc({onHandleInputChange,formData}) {
  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoDescTitle}
        description={Lookup.LogoDescDesc}
      />

      <input
        type="text"
        placeholder={Lookup.InputTitlePlaceholder}
        // defaultValue={formData?.desc}
        value={formData?.desc}
        className="outline-none p-4 border rounded-lg mt-5 w-full"
        onChange={(event) => onHandleInputChange(event.target.value)}
      />
    
    </div>
  );
}

export default LogoDesc;
