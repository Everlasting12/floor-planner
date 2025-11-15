import GridHelperConfigurationComponent from "./settings/grid-helper-configuration.component";
import ThemeSwitchToggleComponent from "./settings/theme-switch-toggle.component";

const SettingsPanel = () => {
  return (
    <div className="w-full h-full p-5 flex flex-col gap-4">
      <GridHelperConfigurationComponent />
      <ThemeSwitchToggleComponent />
    </div>
  );
};

export default SettingsPanel;
