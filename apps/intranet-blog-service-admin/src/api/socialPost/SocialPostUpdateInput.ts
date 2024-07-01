import { InputJsonValue } from "../../types";

export type SocialPostUpdateInput = {
  image?: InputJsonValue;
  shortDescription?: string | null;
  title?: string | null;
};
