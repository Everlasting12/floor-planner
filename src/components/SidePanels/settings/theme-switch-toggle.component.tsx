import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/contexts/theme-context";
import { Moon, Sun } from "lucide-react";

export type ThemeSwitchToggleProps = {};
const ThemeSwitchToggleComponent = ({}: ThemeSwitchToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-md bg-muted text-muted-foreground">
          {theme === "dark" ? (
            <Moon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4" />
          )}
        </div>
        <div>
          <div className="text-sm font-medium">Theme</div>
          <div className="text-xs text-muted-foreground">
            Toggle light / dark
          </div>
        </div>
      </div>

      <div>
        {/* Using your Switch component */}
        <Switch
          checked={theme === "dark"}
          onCheckedChange={() => toggleTheme()}
          aria-label="Toggle theme"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ThemeSwitchToggleComponent;
