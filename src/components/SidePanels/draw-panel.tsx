import {
  Armchair,
  BrickWall,
  DoorOpen,
  NotebookPen,
  Pyramid,
  RulerDimensionLine,
  Shapes,
  SquarePen,
} from "lucide-react";
import { useState } from "react";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

const drawMenu = [
  {
    title: "Wall Tool",
    id: "wall",
    url: "#",
    icon: BrickWall,
    isActive: true,
  },
  {
    title: "Openings Tool",
    id: "opening",
    url: "#",
    icon: DoorOpen,
    isActive: false,
  },
  {
    title: "Structural Tool",
    id: "structural",
    url: "#",
    icon: Pyramid,
    isActive: false,
  },
  {
    title: "Measurement Tool",
    id: "measurement",
    url: "#",
    icon: RulerDimensionLine,
    isActive: false,
  },
  {
    title: "Annotation Tool",
    id: "annotation",
    url: "#",
    icon: NotebookPen,
    isActive: false,
  },
  {
    title: "Furniture Tool",
    id: "furniture",
    url: "#",
    icon: Armchair,
    isActive: false,
  },
  {
    title: "Shapes & Drafting Tool",
    id: "shapes_drafting",
    url: "#",
    icon: Shapes,
    isActive: false,
  },
  {
    title: "Editing / Manipulation Tool",
    id: "editing_manipulation",
    url: "#",
    icon: SquarePen,
    isActive: false,
  },
];
const DrawPanel = () => {
  const [activeItem, setActiveItem] = useState(drawMenu[0]);
  return (
    <div className="w-full h-full">
      <SidebarMenu className="p-2 h-full w-fit flex flex-col border-r">
        {drawMenu.map((item) => (
          <SidebarMenuItem key={item.title} className="">
            <SidebarMenuButton
              tooltip={{
                children: item.title,
                hidden: false,
              }}
              onClick={() => {
                setActiveItem(item);
              }}
              isActive={activeItem?.title === item.title}
              className="px-2.5 md:px-2 data-[active=true]:bg-neutral-200 dark:data-[active=true]:bg-neutral-800 cursor-pointer"
            >
              <item.icon />
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </div>
  );
};

export default DrawPanel;
