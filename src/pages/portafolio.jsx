import { Tabs, Tab } from "@nextui-org/react";
import Video from "../components/portafolio/portafolio.video.jsx";
import Fotografia from "../components/portafolio/portafolio.fotografia.jsx";
import Diseno from "../components/portafolio/portafolio.diseno.jsx";
import Web from "../components/portafolio/portafolio.web.jsx";

function portafolio() {
  const tabs = [
    {
      label: "Fotografía",
      content: <Fotografia />,
    },
    {
      label: "Video",
      content: <Video />,
    },
    // {
    //   label: "Diseno",
    //   content: <Diseno />,
    // },
    // {
    //   label: "Web",
    //   content: <Web />,
    // },
  ];

  return (
    <div>
      <div>
        <section className="text-center text-3xl">
          <Tabs
            className="mt-10 mb-0"
            aria-label="Options"
            color="default"
            variant="bordered"
            size="lg"
          >
            {tabs.map((tab) => (
              <Tab key={tab.label} title={tab.label}>
                {tab.content}
              </Tab>
            ))}
          </Tabs>
        </section>
      </div>
    </div>
  );
}

export default portafolio;
