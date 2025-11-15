import Dexie, { type Table } from "dexie";
import type { Project, ID } from "./models/types";
import { v4 as uuid } from "uuid";

export interface ProjectRecord {
  id: ID;
  name: string;
  createdAt: Date;
  updatedAt?: Date;
  data: Project; // full project JSON blob
}

// history snapshot for undo/redo
export interface Snapshot {
  id: ID;
  projectId: ID;
  timestamp: Date;
  data: Project;
  note?: string;
}
export class FloorPlannerDB extends Dexie {
  projects!: Table<ProjectRecord, ID>;
  snapshots!: Table<Snapshot, ID>;
  constructor(dbName = "planner-db") {
    super(dbName);

    this.version(1).stores({
      projects: "id, name, createdAt, updatedAt, data",
      snapshots: "++id, projectId, timestamp, data, note",
    });
  }

  async creactProject(
    name: string,
    opts: Partial<Project> = {}
  ): Promise<ProjectRecord> {
    const id = uuid();
    const now = new Date();
    const project: Project = {
      id,
      name,
      createdAt: now,
      updatedAt: now,
      units: opts.units ?? "m",
      entities: opts.entities ?? {},
      version: opts.version!,
      createdById: opts.createdById!,
      meta: opts.meta ?? {},
    };

    const rec: ProjectRecord = {
      id,
      name,
      createdAt: now,
      updatedAt: now,
      data: project,
    };

    await this.projects.add(rec);

    return rec;
  }

  async getProject(id: ID): Promise<ProjectRecord | undefined> {
    return await this.projects.get(id);
  }

  async saveProject(project: Project): Promise<void> {
    const now = new Date();
    project.updatedAt = now;
    await this.projects.put({
      id: project.id,
      name: project.name,
      createdAt: project.createdAt,
      updatedAt: now,
      data: project,
    });
  }

  async snapshotProject(projectId: ID, note?: string): Promise<ID> {
    const rec = await this.getProject(projectId);
    if (!rec) throw new Error("Project not found");
    const sid = uuid();
    const snap: Snapshot = {
      id: sid,
      projectId,
      timestamp: new Date(),
      data: rec.data,
      note,
    };
    await this.snapshots.add(snap);
    return sid;
  }

  async getSnapshots(projectId: ID): Promise<Snapshot[]> {
    return await this.snapshots
      .where("projectId")
      .equals(projectId)
      .reverse()
      .toArray();
  }

  async exportProjectJSON(projectId: ID): Promise<string> {
    const rec = await this.getProject(projectId);
    if (!rec) throw new Error("Not found");
    return JSON.stringify(rec.data);
  }

  async importProjectJSON(jsonString: string): Promise<ProjectRecord> {
    const parsed = JSON.parse(jsonString) as Project;
    // ensure id & timestamps
    const id = parsed.id ?? uuid();
    const now = new Date();
    parsed.id = id;
    parsed.createdAt = parsed.createdAt ?? now;
    parsed.updatedAt = now;
    const rec: ProjectRecord = {
      id,
      name: parsed.name ?? "Imported Project",
      createdAt: parsed.createdAt,
      updatedAt: now,
      data: parsed,
    };
    await this.projects.add(rec);
    return rec;
  }
}

// usage singleton
export const db = new FloorPlannerDB();
