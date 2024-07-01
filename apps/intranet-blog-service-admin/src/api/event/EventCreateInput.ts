import { InputJsonValue } from "../../types";

export type EventCreateInput = {
  banner?: InputJsonValue;
  category?: string | null;
  description?: string | null;
  endDate?: Date | null;
  location?: string | null;
  startDate?: Date | null;
  title?: string | null;
};
