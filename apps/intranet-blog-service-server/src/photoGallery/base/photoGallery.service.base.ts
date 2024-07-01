/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PhotoGallery as PrismaPhotoGallery } from "@prisma/client";

export class PhotoGalleryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PhotoGalleryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.photoGallery.count(args);
  }

  async photoGalleries(
    args: Prisma.PhotoGalleryFindManyArgs
  ): Promise<PrismaPhotoGallery[]> {
    return this.prisma.photoGallery.findMany(args);
  }
  async photoGallery(
    args: Prisma.PhotoGalleryFindUniqueArgs
  ): Promise<PrismaPhotoGallery | null> {
    return this.prisma.photoGallery.findUnique(args);
  }
  async createPhotoGallery(
    args: Prisma.PhotoGalleryCreateArgs
  ): Promise<PrismaPhotoGallery> {
    return this.prisma.photoGallery.create(args);
  }
  async updatePhotoGallery(
    args: Prisma.PhotoGalleryUpdateArgs
  ): Promise<PrismaPhotoGallery> {
    return this.prisma.photoGallery.update(args);
  }
  async deletePhotoGallery(
    args: Prisma.PhotoGalleryDeleteArgs
  ): Promise<PrismaPhotoGallery> {
    return this.prisma.photoGallery.delete(args);
  }
}
