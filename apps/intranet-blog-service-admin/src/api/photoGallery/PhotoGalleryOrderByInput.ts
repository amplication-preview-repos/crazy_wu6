import { SortOrder } from "../../util/SortOrder";

export type PhotoGalleryOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  photosAndVideos?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
