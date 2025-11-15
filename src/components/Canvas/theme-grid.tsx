import { useTheme } from "@/contexts/theme-context";
import { useGridStore, type GridStoreStateType } from "@/stores/grid.store";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface ThemeGridProps {
  is3D: boolean;
}
const ThemeGrid = ({ is3D }: ThemeGridProps) => {
  const { theme } = useTheme();
  const [colors, setColors] = useState(["#C9C9C9", "#E0E0E0"]);
  const gridRef = useRef<THREE.GridHelper>(null);
  const size = useGridStore((state: GridStoreStateType) => state.size);
  const division = useGridStore((state: GridStoreStateType) => state.division);

  useEffect(() => {
    if (theme === "dark") {
      setColors(["#404040", "#212121"]); // dark colors
    } else {
      setColors(["#BFBFBF", "#E0E0E0"]); // light colors
    }
  }, [theme]);

  return (
    <gridHelper
      ref={gridRef}
      args={[size, division, colors[0], colors[1]]}
      rotation={is3D ? [0, 0, 0] : [Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
    />
  );
};
export default ThemeGrid;
