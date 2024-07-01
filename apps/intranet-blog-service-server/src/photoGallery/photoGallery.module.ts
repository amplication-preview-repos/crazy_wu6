import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PhotoGalleryModuleBase } from "./base/photoGallery.module.base";
import { PhotoGalleryService } from "./photoGallery.service";
import { PhotoGalleryController } from "./photoGallery.controller";
import { PhotoGalleryResolver } from "./photoGallery.resolver";

@Module({
  imports: [PhotoGalleryModuleBase, forwardRef(() => AuthModule)],
  controllers: [PhotoGalleryController],
  providers: [PhotoGalleryService, PhotoGalleryResolver],
  exports: [PhotoGalleryService],
})
export class PhotoGalleryModule {}
