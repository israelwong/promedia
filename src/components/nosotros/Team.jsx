import React from "react";
import { Avatar, Divider } from "@nextui-org/react";

function Team() {
  return (
    <div>
      <div className="py-10">
        <Divider orientation="horizontal" />
      </div>

      <h1 className="font-Bebas-Neue text-3xl text-gray-700 text-center pb-10 tracking-wid">
        Dream team
      </h1>

      <section>
        <div
          className="
          grid 
          md:justify-items-center
          left-0
          md:items-center
          md:text-left
          md:grid-cols-4 
          space-y-5
          md:space-y-0
          gap-4 
          place-content-center
          align-middl
          "
        >
          <div className="flex space-x-4">
            {" "}
            <Avatar
              isBordered={true}
              src="./images/team/team_israel.jpg"
              size="lg"
            />
            <div>
              <h6 className="text-xl">Israel Wong</h6>
              <p className="text-sm text-gray-500">CEO</p>
            </div>
          </div>
          <div className="flex space-x-4">
            {" "}
            <Avatar
              isBordered={true}
              src="./images/team/team_jacob.jpg"
              size="lg"
            />
            <div>
              <h6 className="text-xl">Jacob Villatoro</h6>
              <p className="text-sm text-gray-500">Gerente de Producción</p>
            </div>
          </div>
          <div className="flex space-x-4">
            {" "}
            <Avatar isBordered={true} name="Lea" size="lg" />
            <div>
              <h6 className="text-xl">Lea Campos</h6>
              <p className="text-sm text-gray-500">Social Media</p>
            </div>
          </div>
          <div className="flex space-x-4">
            {" "}
            <Avatar isBordered={true} name="Fatima" size="lg" />
            <div>
              <h6 className="text-xl">Fatima Espinoza</h6>
              <p className="text-sm text-gray-500">Diseño gráfico</p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-10">
        <Divider orientation="horizontal" />
      </div>
    </div>
  );
}

export default Team;
