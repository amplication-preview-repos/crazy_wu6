import { JsonValue } from "type-fest";

export type Event = {
  banner: JsonValue;
  category: string | null;
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  location: string | null;
  startDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
