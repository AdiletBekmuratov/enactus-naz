import Steps from "@/components/Steps/Steps";
import Navigation from "@/components/StepWiz/Navigation";
import React, { useState } from "react";
import StepWizard from "react-step-wizard";

const Plan = () => {
  const [sw, setSw] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  console.log({ currentStep });

  const onStepChange = (stats) => {
    setCurrentStep(stats.activeStep);
  };

  return (
    <section className="text-gray-600">
      <div className="container px-5 py-16 mx-auto grid grid-cols-1 gap-6">
        <h2 className="text-gray-900">Получите свой план питания</h2>
        <Steps step={currentStep} />
        <StepWizard instance={setSw} onStepChange={onStepChange}>
          <div>Hello</div>
          <div>Hello2</div>
          <div>Hello3</div>
          <section>Lool</section>
        </StepWizard>

        {sw && (
          <Navigation {...sw} step={sw?.currentStep} total={sw?.totalSteps} />
        )}
      </div>
    </section>
  );
};

export default Plan;
