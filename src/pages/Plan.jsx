import Steps from "@/components/Steps/Steps";
import Step1 from "@/components/StepWiz/Step1";
import Step2 from "@/components/StepWiz/Step2";
import Step3 from "@/components/StepWiz/Step3";
import Step4 from "@/components/StepWiz/Step4";
import Step5 from "@/components/StepWiz/Step5";
import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import { useNavigate } from "react-router-dom";

const Plan = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [step1, setStep1] = useState(null);
  const [milk1, setMilk1] = useState(null);
  const [milk2, setMilk2] = useState(null);

  const [meat, setMeat] = useState(null);

  const [step4, setStep4] = useState(null);

  const onFinish = (values) => {
    const data = {
      ...step1,
      milk1,
      milk2,
      meat,
      ...step4,
      ...values,
    };
    console.log({ data });
    navigate("/result", { state: { data } });
  };

  const onStepChange = (stats) => {
    setCurrentStep(stats.activeStep);
  };

  return (
    <section className="text-gray-600">
      <div className="container px-5 py-16 mx-auto grid grid-cols-1 gap-6">
        <h2>Получите свой план питания</h2>
        <Steps step={currentStep} />
        <StepWizard className="min-h-[300px] mt-10" onStepChange={onStepChange}>
          <Step1 setStep={setStep1} />
          <Step2
            milk1={milk1}
            setMilk1={setMilk1}
            setMilk2={setMilk2}
            milk2={milk2}
          />
          <Step3 meat={meat} setMeat={setMeat} />
          <Step4 setStep={setStep4} />
          <Step5 onFinish={onFinish} />
        </StepWizard>

        {/* {sw && (
          <Navigation {...sw} step={sw?.currentStep} total={sw?.totalSteps} />
        )} */}
      </div>
    </section>
  );
};

export default Plan;
