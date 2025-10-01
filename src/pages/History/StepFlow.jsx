import React, { useState } from "react";
import "./StepFlow.scss";

const steps = [
  { title: "Step 1", text: "Introduction to the process. This section explains the overview." },
  { title: "Step 2", text: "Detailed description of step two. Add more info here." },
  { title: "Step 3", text: "This step provides guidance and explanation for users." },
  { title: "Step 4", text: "Final step: wrapping things up and conclusion." },
];

const StepFlow = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="stepflow-container">
      {/* Left - Vertical Steps */}
      <div className="steps">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${activeStep === index ? "active" : ""}`}
            onClick={() => setActiveStep(index)}
          >
            <div className="arrow-shape"></div>
            <span>{step.title}</span>
          </div>
        ))}
      </div>

      {/* Right - Content */}
      <div className="step-content">
        <h3>{steps[activeStep].title}</h3>
        <p>{steps[activeStep].text}</p>
      </div>
    </div>
  );
};

export default StepFlow;
