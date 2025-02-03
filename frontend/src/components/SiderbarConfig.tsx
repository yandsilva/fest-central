import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";
import AccountSettings from "../pages/AccountConfig/AccountSettings";
import ChangeEmail from "../pages/AccountConfig/ChangeEmail";
import Password from "../pages/AccountConfig/Password";

export default function SiderbarConfig() {
  const [active, setActive] = useState("settings");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-col md:flex-row">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="bg-gray-200 p-4 font-montserrat font-bold text-darker md:hidden"
          >
            {isSidebarOpen ? "Fechar Menu" : "Abrir Menu"}
          </button>

          {/* Sidebar */}
          <div
            className={`bg-lightGray h-screen w-full flex-col gap-10 md:w-[20%] ${
              isSidebarOpen ? "flex" : "hidden md:flex"
            }`}
          >
            <div className="mt-10 flex flex-col pl-10">
              <p className="font-montserrat text-xl font-bold text-darker">
                Config da Conta
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <Link
                className={`w-full py-3 ${
                  active === "settings" ? "bg-white" : ""
                }`}
                onClick={() => {
                  setActive("settings");
                  setIsSidebarOpen(false);
                }}
              >
                <p className="w-full pl-10 font-montserrat text-sm font-medium text-darker">
                  Info da Conta
                </p>
              </Link>
              <Link
                className={`w-full py-3 ${active === "email" ? "bg-white" : ""}`}
                onClick={() => {
                  setActive("email");
                  setIsSidebarOpen(false);
                }}
              >
                <p className="w-full pl-10 font-montserrat text-sm font-medium text-darker">
                  Email
                </p>
              </Link>
              <Link
                className={`w-full py-3 ${
                  active === "senha" ? "bg-white" : ""
                }`}
                onClick={() => {
                  setActive("senha");
                  setIsSidebarOpen(false);
                }}
              >
                <p className="w-full pl-10 font-montserrat text-sm font-medium text-darker">
                  Senha
                </p>
              </Link>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="flex-1 p-4">
            {(() => {
              switch (active) {
                case "settings":
                  return <AccountSettings />;
                case "email":
                  return <ChangeEmail />;
                case "senha":
                  return <Password />;
                default:
                  return <AccountSettings />;
              }
            })()}
          </div>
        </div>
      </div>
    </>
  );
}
