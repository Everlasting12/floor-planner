import { Grid3x3 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useGridStore, type GridStoreStateType } from "@/stores/grid.store";

const GRID_SIZE_MIN = 50;
const GRID_SIZE_MAX = 100;
const GRID_SIZE_STEP = 10;

const GRID_DIVISION_MIN = 50;
const GRID_DIVISION_MAX = 100;
const GRID_DIVISION_STEP = 10;

const GridHelperConfigurationComponent = () => {
  const size = useGridStore((state: GridStoreStateType) => state.size);
  const division = useGridStore((state: GridStoreStateType) => state.division);
  const setSize = useGridStore((state: GridStoreStateType) => state.setSize);
  const setDivision = useGridStore(
    (state: GridStoreStateType) => state.setDivision
  );

  return (
    <div className="flex flex-col items-start justify-between gap-2">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-md bg-muted text-muted-foreground">
          <Grid3x3 className="w-4 h-4" />
        </div>
        <div>
          <div className="text-sm font-medium">Grid Helper</div>
          <div className="text-xs text-muted-foreground">
            Grid configuration
          </div>
        </div>
      </div>
      <div className="w-full p-2 bg-secondary rounded-xl flex flex-col gap-2">
        <div className="space-y-1">
          <Label htmlFor="size-slider" className="text-xs">
            Size ({GRID_SIZE_MIN} - {GRID_SIZE_MAX})
          </Label>
          <Slider
            id="size-slider"
            className="w-full"
            defaultValue={[size]}
            value={[size]}
            onValueChange={(value: number[]) => {
              setSize(value[0]);
            }}
            min={GRID_SIZE_MIN}
            max={GRID_SIZE_MAX}
            step={GRID_SIZE_STEP}
            trackClassName="bg-neutral-200 dark:bg-neutral-700"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="division-slider" className="text-xs">
            Division ({GRID_DIVISION_MIN} - {GRID_DIVISION_MAX})
          </Label>
          <Slider
            id="division-slider"
            defaultValue={[division]}
            max={GRID_DIVISION_MAX}
            min={GRID_DIVISION_MIN}
            value={[division]}
            onValueChange={(value: number[]) => {
              setDivision(value[0]);
            }}
            step={GRID_DIVISION_STEP}
            className="w-full"
            trackClassName="bg-neutral-200 dark:bg-neutral-700"
          />
        </div>
      </div>
    </div>
  );
};

export default GridHelperConfigurationComponent;
