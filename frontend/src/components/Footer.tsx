import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import NewsLetter from "./NewsLetter";

interface LinkItem {
  label: string;
  to: string;
}

interface FooterSection {
  title: string;
  links: LinkItem[];
}

export default function Footer() {
  const footerLinks: FooterSection[] = [
    {
      title: "Empresa Info",
      links: [
        { label: "Sobre", to: "#" },
        { label: "Contatos", to: "#" },
        { label: "Trabalhe Conosco", to: "#" },
        { label: "FAQs", to: "#" },
        { label: "Termos de Serviços", to: "#" },
        { label: "Política de Privacidade", to: "#" },
      ],
    },
    {
      title: "Ajuda",
      links: [
        { label: "Suporte a Conta", to: "#" },
        { label: "Lista de Eventos", to: "#" },
        { label: "Ingresso para Eventos", to: "#" },
        { label: "Termos e Condições", to: "#" },
        { label: "Compra de Ingressos", to: "#" },
      ],
    },
    {
      title: "Categorias",
      links: [
        { label: "Concertos e Shows", to: "#" },
        { label: "Festivais & Lifestyle", to: "#" },
        { label: "Negócios & Networking", to: "#" },
        { label: "Comida & Bebidas", to: "#" },
        { label: "Artes Performáticas", to: "#" },
        { label: "Esportes ao ar Livre", to: "#" },
        { label: "Exposições", to: "#" },
        { label: "Workshops & Conferências", to: "#" },
      ],
    },
  ];

  const renderLinksSection = (section: FooterSection) => (
    <div className="flex flex-col gap-4">
      <p className="font-montserrat text-xl font-semibold">{section.title}</p>
      <div className="flex flex-col gap-2 font-opensans text-sm text-gray-400">
        {section.links.map((link, index) => (
          <Link
            key={index}
            className="hover:underline"
            to={link.to}
            aria-label={`Navegar para ${link.label}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <NewsLetter />
      <div className="bg-dark text-white">
        <div className="container mx-auto flex flex-wrap justify-between gap-8 px-6 py-10 md:w-[80%]">
          {footerLinks.map((section) => renderLinksSection(section))}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="font-montserrat text-xl font-semibold">
                Aplicativos
              </p>
              <div className="flex flex-col gap-4">
                <Link to="/">
                  <div className="flex items-center gap-4 rounded-md border px-3 py-2">
                    <img
                      className="w-10"
                      src={assets.play_store}
                      alt="Google Play"
                    />
                    <div>
                      <p>Get it on</p>
                      <p>Google Play</p>
                    </div>
                  </div>
                </Link>
                <Link to="/">
                  <div className="flex items-center gap-4 rounded-md border px-3 py-2">
                    <img
                      className="w-10"
                      src={assets.apple_store}
                      alt="App Store"
                    />
                    <div>
                      <p>Download on the</p>
                      <p>App Store</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-montserrat text-xl font-semibold">
                Redes Sociais
              </p>
              <div className="flex items-center gap-4 text-gray-400">
                <Link to="#" aria-label="Facebook">
                  <img
                    className="w-8"
                    src={assets.facebook_icon}
                    alt="Facebook"
                  />
                </Link>
                <Link to="#" aria-label="Instagram">
                  <img
                    className="w-8"
                    src={assets.instagram_icon}
                    alt="Instagram"
                  />
                </Link>
                <Link to="#" aria-label="Twitter">
                  <img
                    className="w-8"
                    src={assets.twitter_icon}
                    alt="Twitter"
                  />
                </Link>
                <Link to="#" aria-label="YouTube">
                  <img
                    className="w-8"
                    src={assets.youtube_icon}
                    alt="YouTube"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center border-t border-gray-600 py-5">
          <p className="font-opensans text-sm text-gray-400">
            © 2025 FestCentral. Todos o direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
}
