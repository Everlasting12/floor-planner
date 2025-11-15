import * as THREE from "three";

export type ID = string;

export type Vector2 = THREE.Vector2;

export type Vector3 = THREE.Vector3;

export type EntityType =
  | "wall"
  | "node"
  | "opening"
  | "furniture"
  | "annotation"
  | "structural"
  | "shape"
  | "zone"
  | "asset";

export interface IBaseEntity {
  id: ID;
  type: EntityType;
  createdAt: Date;
  updatedAt: Date;
  meta?: Record<string, any>;
}

export type WallType = "line" | "polyline" | "arc" | "bezier";

export interface IWall extends IBaseEntity {
  type: "wall";
  wallType: WallType;
  height: number;
  thickness: number;
  properties?: Record<string, any>;
}

export interface ILineWall extends IWall {
  wallType: "line";
  points: [Vector2, Vector2];
}
export interface IPolylineWall extends IWall {
  wallType: "polyline";
  points: Vector2[];
}

export interface IArcWall extends IWall {
  wallType: "arc";
  center: Vector2;
  radius: number;
  startAngle: number;
  endAngle: number;
  clockwise: boolean;
}

export interface IBezierWall extends IWall {
  wallType: "bezier";
  controlPoints: Vector2[];
}

export interface INodeEntity extends IBaseEntity {
  type: "node";
  pos: Vector2;
  connectedIds: ID[]; // walls/openings attached
}

export interface Project {
  id: ID;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  entities: Record<ID, IBaseEntity | IWall | INodeEntity>;
  units: "m" | "mm" | "ft";
  createdById: ID;
  version: string;
  meta?: {
    thumbnail?: string;
  };
}
