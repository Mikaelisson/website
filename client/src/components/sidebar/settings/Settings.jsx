import { useState } from "react";
import { SettingsStyled } from "./SettingsStyled";
import { MdSettings } from "react-icons/md";
import Panel from "./panel/Panel";

const Settings = () => {
  const [settings, setSettings] = useState(false);

  const showSettings = () => {
    setSettings(!settings);
  };

  return (
    <div>
      <SettingsStyled onClick={() => showSettings()}>
        <MdSettings />
      </SettingsStyled>
      {settings ? <Panel showSettings={showSettings} /> : null}
    </div>
  );
};

export default Settings;
