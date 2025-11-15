// src/components/Canvas/CanvasStageThree.tsx
import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  type RefObject,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrthographicCamera,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import ThemeGrid from "./theme-grid";

interface PlannerCanvasProps {
  is3D: boolean;
}

export const PlannerCanvas: React.FC<PlannerCanvasProps> = ({ is3D }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  return (
    <Canvas
      ref={canvasRef}
      className="w-full h-full"
      onPointerDown={(e) => {
        // onPointerDown handled in child via overlay; keep Canvas generic
      }}
    >
      {is3D ? (
        <PerspectiveCamera zoom={50} position={[0, 0, 100]} />
      ) : (
        <OrthographicCamera makeDefault zoom={50} position={[0, 0, 100]} />
      )}
      <ambientLight intensity={0.9} />
      <directionalLight position={[10, 10, 10]} intensity={0.6} />
      <OrbitControls enableRotate={is3D} enablePan={true} enableZoom={true} />
      <axesHelper args={[5]} />
      <ThemeGrid is3D={is3D} />
    </Canvas>
  );
};
