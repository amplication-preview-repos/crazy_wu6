import { InputJsonValue } from "../../types";

export type PhotoGalleryCreateInput = {
  description?: string | null;
  photosAndVideos?: InputJsonValue;
  title?: string | null;
};
