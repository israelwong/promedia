import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div>
      <div
        className="
      text-center py-16 bg-gradient-to-t from-black to-gray-900
      align-middle
      "
      >
        <p
          className="
        font-Bebas-Neue text-2xl mb-0 pb-0
        md:text-3xl
        leading-none
        "
        >
          Si tu lo imaginas, <span className="text-cyan-600">nosotros lo </span>{" "}
          <span className="">
            <i
              className="
          animate-bounce 
          text-yellow-500 
          fas fa-hand-point-down
          text-md
          "
            ></i>
          </span>
        </p>

        <p
          className="
        bg-clip-text text-transparent 
        bg-gradient-to-r from-pink-500 to-purple-950
        text-6xl 
        md:text-8xl
        font-bold
        py-2
        "
        >
          {/* Animación para */}

          <TypeAnimation
            sequence={[
              "grabamos",
              1000,
              "editamos",
              1000,
              "fotografiamos",
              1000,
              "diseñamos",
              1000,
              "producimos",
              1000,
              "dgitaizamos",
              1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </p>
      </div>
    </div>
  );
}

export default Hero;
