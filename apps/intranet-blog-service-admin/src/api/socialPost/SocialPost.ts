import { JsonValue } from "type-fest";

export type SocialPost = {
  createdAt: Date;
  id: string;
  image: JsonValue;
  shortDescription: string | null;
  title: string | null;
  updatedAt: Date;
};
