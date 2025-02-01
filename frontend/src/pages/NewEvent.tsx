import Navbar from "../components/Navbar";
import CreateEvent from "../components/CreateEvent";
import Footer from "../components/Footer";
import CreateEvent1 from "../components/CreateEvent1";
import { useState } from "react";
import CreateEvent2 from "../components/CreateEvent2";
import CreateEvent3 from "../components/CreateEvent3";

export default function NewEvent(): JSX.Element {
  const [step, setStep] = useState<number>(1);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div>
      <Navbar />
      <div className="m-auto mt-10 w-[95%]">
        {step === 1 && <CreateEvent onContinue={handleNextStep} />}
        {step === 2 && (
          <CreateEvent1 onContinue={handleNextStep} onBack={handlePrevStep} />
        )}
        {step === 3 && (
          <CreateEvent2 onContinue={handleNextStep} onBack={handlePrevStep} />
        )}
        {step === 4 && <CreateEvent3 onBack={handlePrevStep} />}
      </div>
      <Footer />
    </div>
  );
}
