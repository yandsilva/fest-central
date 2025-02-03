import { useState } from "react";
import Navbar from "../components/Navbar";
import CreateEvent from "../components/CreateEvent";
import Footer from "../components/Footer";
import CreateEvent1 from "../components/CreateEvent1";
import CreateEvent2 from "../components/CreateEvent2";
import CreateEvent3 from "../components/CreateEvent3";

// Tipos para os dados de cada etapa
interface Step1Data {
  eventName: string;
  category: string;
  date: string;
  time: string;
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  description: string;
}

interface Step2Data {
  image: File | null;
}

interface Step3Data {
  ticketType: "paid" | "free";
  ticketName: string;
  ticketPrice: string;
}

interface Step4Data {
  // Adicione propriedades específicas da etapa 4 se necessário
}

// Tipo combinado para todos os dados do evento
interface EventData {
  step1: Step1Data;
  step2: Step2Data;
  step3: Step3Data;
  step4: Step4Data;
}

// Tipos para as props dos componentes
interface CreateEventProps {
  onContinue: () => void;
  updateData: (data: Step1Data) => void;
}

interface CreateEvent1Props {
  onContinue: () => void;
  onBack: () => void;
  updateData: (data: Step2Data) => void;
}

interface CreateEvent2Props {
  onContinue: () => void;
  onBack: () => void;
  updateData: (data: Step3Data) => void;
}

interface CreateEvent3Props {
  onBack: () => void;
  updateData: (data: Step4Data) => void;
  onSubmit: () => void;
}

export default function NewEvent(): JSX.Element {
  const [step, setStep] = useState<number>(1);
  const [eventData, setEventData] = useState<EventData>({
    step1: {
      eventName: "",
      category: "",
      date: "",
      time: "",
      cep: "",
      street: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
      description: "",
    },
    step2: {
      image: null,
    },
    step3: {
      ticketType: "free",
      ticketName: "",
      ticketPrice: "",
    },
    step4: {},
  });
  console.log(eventData);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const updateEventData = <T extends keyof EventData>(
    step: T,
    data: EventData[T],
  ) => {
    setEventData((prev) => ({
      ...prev,
      [step]: data,
    }));
  };

  const handleSubmit = async () => {
    // Tipo combinado para envio final
    type FinalData = Step1Data & Step2Data & Step3Data & Step4Data;

    const finalData: FinalData = {
      ...eventData.step1,
      ...eventData.step2,
      ...eventData.step3,
      ...eventData.step4,
    };

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        alert("Event created successfully!");
      } else {
        alert("Failed to create event.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the event.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="m-auto mt-10 w-[95%]">
        {step === 1 && (
          <CreateEvent
            onContinue={handleNextStep}
            updateData={(data) => updateEventData("step1", data)}
          />
        )}
        {step === 2 && (
          <CreateEvent1
            onContinue={handleNextStep}
            onBack={handlePrevStep}
            updateData={(data) => updateEventData("step2", data)}
          />
        )}
        {step === 3 && (
          <CreateEvent2
            onContinue={handleNextStep}
            onBack={handlePrevStep}
            updateData={(data) => updateEventData("step3", data)}
          />
        )}
        {step === 4 && (
          <CreateEvent3
            onBack={handlePrevStep}
            onSubmit={handleSubmit}
            eventData={{
              title: "Meu Evento",
              date: "27/01/2025",
              time: "14:00",
              location: {
                cep: "12345-678",
                street: "Rua Principal",
                number: "123",
                neighborhood: "Centro",
                city: "São Paulo",
                state: "SP",
              },
              ticketType: "paid",
              ticketPrice: "50,00",
              description: "Descrição completa do evento...",
              image: "url-da-imagem.jpg",
              hostName: "Organizador X",
            }}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
