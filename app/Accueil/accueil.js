"use client";

import { useState } from "react";
import Application from "../../components/application";
import { AboutWidget } from "../../components/aboutwidget";
import AppBottom from "../../components/appbottom";
import Project from "../Projets/project";
import Skills from "../Competences/skills";
import Parcours from "../Parcours/parcours";

export function Accueil() {
  const [screen, setScreen] = useState("home");

  if (screen === "projets") {
    return <Project onBack={() => setScreen("home")} />;
  }

  if (screen === "competences") {
    return <Skills onBack={() => setScreen("home")} />;
  }

  if (screen === "parcours") {
    return <Parcours onBack={() => setScreen("home")} />;
  }

  return (
    <div>
      <div className="mb-5">
        <AboutWidget />
      </div>
      <div className="grid grid-cols-4 gap-x-4 gap-y-[19px]">
        <Application
          onOpenProjects={() => setScreen("projets")}
          onOpenSkills={() => setScreen("competences")}
          onOpenParcours={() => setScreen("parcours")}
        />
      </div>

      <AppBottom />
    </div>
  );
}
