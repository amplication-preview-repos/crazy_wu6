import { InputJsonValue } from "../../types";

export type SocialPostCreateInput = {
  image?: InputJsonValue;
  shortDescription?: string | null;
  title?: string | null;
};
