export interface ILane {
  key: string;
  arr: number;
  dep: number;
  dlv: number;
  customs: number;
  lmd: number;
  e2eSla: number;
  lane: string;
}

export interface IUrgency {
  urgency: string;
  lateDay: number;
  key: string;
}

export interface IConfigResponse {
  configs: Record<string, ILane>;
  urgency: Record<string, IUrgency>;
  updatedBy: string;
  updatedAt: string;
}

export interface IConfigResponseMapped {
  configs: ILane[];
  urgency: IUrgency[];
  updatedBy: string;
  updatedAt: string;
}
