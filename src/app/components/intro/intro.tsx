import React from "react";
import dynamic from "next/dynamic";

const ClientOnlyCursor = dynamic(
  () => import("@/app/components/core/cursor").then((mod) => mod.Cursor),
  { ssr: false }
);

const Intro: React.FC = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:py-20 md:max-w-screen-lg md:px-8 md:pt-32 sm:grid-cols-1 sm:px-4 sm:pt-32">
      <div>
        <p className="text-sm text-slate-800 mb-2">
          Nací en{" "}
          <span className="relative inline-block">
            <ClientOnlyCursor
              attachToParent
              variants={{
                initial: { height: 0, opacity: 0, scale: 0.3 },
                animate: { height: "auto", opacity: 1, scale: 1 },
                exit: { height: 0, opacity: 0, scale: 0.3 },
              }}
              transition={{
                type: "spring",
                duration: 0.3,
                bounce: 0.1,
              }}
              className="overflow-hidden"
              springConfig={{
                bounce: 0.01,
              }}
            >
              <div className="text-2xl">🇵🇾</div>
            </ClientOnlyCursor>
            <span className="relative z-10">Paraguay</span>
          </span>{" "}
          en 1985 y desde temprana edad aprendí con mi padre el oficio de la
          construcción. Desde entonces me fui perfeccionando y ampliando mis
          conocimientos desde la carpitería, albañeria, sanitaria, electricidad
          y colocación de diferentes materiales. Disfruto de los detalles y la
          satisfacción de un trabajo bien terminado.
        </p>
        <p className="text-sm text-slate-800">
          Desde el año 2023 vivo en la ciudad de Maldonado desempeñandome en
          obras de Jose Ignacio, la Barra, Manantiales y Pueblo San Vicente.
          Whatsapp: +54 9 11 2485-8558 Email:
        </p>
      </div>
    </div>
  );
};

export default Intro;
