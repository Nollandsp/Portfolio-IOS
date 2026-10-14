import DeviceShell from "../components/device-shell";
import IphoneNotifDispo from "../components/notif-dispo";
import IphoneNotifProject from "../components/notif-project";
import IphoneNotifTerminal from "../components/notif-terminal";
import { Accueil } from "./Accueil/accueil";

export default function Home() {
  return (
    <DeviceShell home={<Accueil />}>
      <IphoneNotifDispo />
      <IphoneNotifProject />
      <IphoneNotifTerminal />
    </DeviceShell>
  );
}
