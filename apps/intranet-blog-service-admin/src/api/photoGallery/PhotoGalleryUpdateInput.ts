import { InputJsonValue } from "../../types";

export type PhotoGalleryUpdateInput = {
  description?: string | null;
  photosAndVideos?: InputJsonValue;
  title?: string | null;
};
