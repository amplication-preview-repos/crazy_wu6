import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PhotoGalleryServiceBase } from "./base/photoGallery.service.base";

@Injectable()
export class PhotoGalleryService extends PhotoGalleryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
