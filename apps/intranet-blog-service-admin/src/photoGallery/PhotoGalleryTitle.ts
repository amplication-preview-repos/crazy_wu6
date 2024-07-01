import { PhotoGallery as TPhotoGallery } from "../api/photoGallery/PhotoGallery";

export const PHOTOGALLERY_TITLE_FIELD = "title";

export const PhotoGalleryTitle = (record: TPhotoGallery): string => {
  return record.title?.toString() || String(record.id);
};
