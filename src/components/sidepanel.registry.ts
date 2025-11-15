import DrawPanel from "@/components/SidePanels/draw-panel";
import SettingsPanel from "@/components/SidePanels/settings-panel";
import WallToolPanel from "./SidePanels/draw/wall-tool.panel";
import OpeningsToolPanel from "./SidePanels/draw/openings-tool.panel";
import StructuralToolPanel from "./SidePanels/draw/structural-tool.panel";
import MeasurementToolPanel from "./SidePanels/draw/measurement-tool.panel";
import AnnotationToolPanel from "./SidePanels/draw/annotation-tool.panel";
import FurnitureToolPanel from "./SidePanels/draw/furniture-tool.panel";
import ShapesAndDraftingToolPanel from "./SidePanels/draw/shapes-and-drafting-tool.panel";
import EditingOrManipulationToolPanel from "./SidePanels/draw/editing-or-manipulation-tool.panel";

export const sidePanelRegistry: Record<string, React.FC> = {
  draw: DrawPanel,
  settings: SettingsPanel,
};

export const subMenuRegistry: Record<string, React.FC> = {
  wall: WallToolPanel,
  opening: OpeningsToolPanel,
  structural: StructuralToolPanel,
  measurement: MeasurementToolPanel,
  annotation: AnnotationToolPanel,
  furniture: FurnitureToolPanel,
  shapes_drafting: ShapesAndDraftingToolPanel,
  editing_manipulation: EditingOrManipulationToolPanel,
};
