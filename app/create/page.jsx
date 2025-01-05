"use client";
import React, { useState } from "react";
import LogoTitle from "./_components/LogoTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LogoDesc from "./_components/LogoDesc";
import LogoPallete from "./_components/LogoPallete";
import LogoDesigns from "./_components/LogoDesigns";
import LogoIdea from "./_components/LogoIdea";

function CreateLogo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState();
  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    console.log(formData);
  };
  return (
    <div className="mt-28 p-10 border rounded-xl 2xl:mx-72">
      {step == 1 ? (
        <LogoTitle
          onHandleInputChange={(v) => onHandleInputChange("title", v)}
        />
      ) : step == 2 ? (
        <LogoDesc onHandleInputChange={(v) => onHandleInputChange("desc", v)} />
      ) : step == 3 ? (
        <LogoPallete
          onHandleInputChange={(v) => onHandleInputChange("pallete", v)}
        />
      ) : step == 4 ? (
        <LogoDesigns
          onHandleInputChange={(v) => onHandleInputChange("design", v)}
        />
      ) : step == 5 ? (
        <LogoIdea onHandleInputChange={(v) => onHandleInputChange("idea", v)} />
      ) : null}

      <div className="flex justify-between items-center mt-10">
        {step != 1 && (
          <Button variant="outline" onClick={() => setStep(step - 1)}>
            {" "}
            <ArrowLeft /> Previous
          </Button>
        )}
        <Button onClick={() => setStep(step + 1)}>
          {" "}
          <ArrowRight /> Next
        </Button>
      </div>
    </div>
  );
}

export default CreateLogo;
