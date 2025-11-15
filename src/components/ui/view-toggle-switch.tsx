import React, { useEffect, useState } from "react";
import { Toggle } from "@/components/ui/toggle"; // shadcn toggle

export interface ViewToggleProps {
  /** controlled checked state (true = 3D, false = 2D) */
  checked?: boolean;
  /** change callback */
  onChange?: (checked: boolean) => void;
  /** optional accessible label */
  ariaLabel?: string;
  /** additional wrapper classname */
  className?: string;
}

/**
 * ViewToggle
 *
 * A simple component using shadcn's Toggle to switch between 2D and 3D view.
 * Displays the active state as text inside the toggle.
 */
export default function ViewToggle({
  checked: checkedProp,
  onChange,
  ariaLabel = "Toggle between 2D and 3D view",
  className = "",
}: ViewToggleProps) {
  const isControlled = typeof checkedProp === "boolean";
  const [internalChecked, setInternalChecked] = useState<boolean>(
    !!checkedProp
  );

  useEffect(() => {
    if (isControlled) setInternalChecked(Boolean(checkedProp));
  }, [checkedProp, isControlled]);

  const setChecked = (next: boolean) => {
    if (!isControlled) setInternalChecked(next);
    onChange?.(next);
  };

  const checked = internalChecked;

  return (
    <Toggle
      pressed={checked}
      onPressedChange={(v) => setChecked(Boolean(v))}
      aria-label={ariaLabel}
      className={`px-4 py-2 text-sm font-medium rounded-md ${className}`}
    >
      {checked ? "3D" : "2D"}
    </Toggle>
  );
}
