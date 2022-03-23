import React from "react";

const Navigation = ({
  currentStep,
  firstStep,
  goToStep,
  lastStep,
  nextStep,
  previousStep,
  totalSteps,
	step,
	total
}) => {
	console.log(step, total);

  return (
    <div>
      {step > 1 && (
        <button className="btn btn-default btn-block" onClick={previousStep}>
          Go Back
        </button>
      )}
      {step < total ? (
        <button className="btn btn-primary btn-block" onClick={nextStep}>
          Continue
        </button>
      ) : (
        <button className="btn btn-success btn-block" onClick={nextStep}>
          Finish
        </button>
      )}
      <hr />
      <h4>Other Functions</h4>
      <div>Current Step: {currentStep}</div>
      <div>Total Steps: {totalSteps}</div>
    </div>
  );
};

export default Navigation;
