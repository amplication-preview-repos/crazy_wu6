import { JsonValue } from "type-fest";

export type PhotoGallery = {
  createdAt: Date;
  description: string | null;
  id: string;
  photosAndVideos: JsonValue;
  title: string | null;
  updatedAt: Date;
};
