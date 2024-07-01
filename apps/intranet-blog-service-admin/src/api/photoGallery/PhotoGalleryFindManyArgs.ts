import { PhotoGalleryWhereInput } from "./PhotoGalleryWhereInput";
import { PhotoGalleryOrderByInput } from "./PhotoGalleryOrderByInput";

export type PhotoGalleryFindManyArgs = {
  where?: PhotoGalleryWhereInput;
  orderBy?: Array<PhotoGalleryOrderByInput>;
  skip?: number;
  take?: number;
};
