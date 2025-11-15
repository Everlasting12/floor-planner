import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { PlannerCanvas } from "./Canvas/planner-canvas";
import { useState } from "react";
import ViewToggle from "./ui/view-toggle-switch";
const PlannerWrapper = () => {
  const [is3D, setIs3D] = useState(false);

  return (
    <div className="flex w-full min-h-screen overflow-hidden">
      {" "}
      {/* <- critical */}
      <SidebarProvider
        style={
          {
            "--sidebar-width": "350px",
          } as React.CSSProperties
        }
      >
        <AppSidebar />
        <SidebarInset>
          <header className="bg-background sticky top-0 flex shrink-0 items-center gap-2 border-b p-4">
            <SidebarTrigger className="-ml-1 cursor-pointer" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />

            <ViewToggle checked={is3D} onChange={setIs3D} />
          </header>
          <div className="flex flex-1 p-4 min-w-0 min-h-0">
            <PlannerCanvas is3D={is3D} />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default PlannerWrapper;
