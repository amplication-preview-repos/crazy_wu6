import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PhotoGalleryService } from "./photoGallery.service";
import { PhotoGalleryControllerBase } from "./base/photoGallery.controller.base";

@swagger.ApiTags("photoGalleries")
@common.Controller("photoGalleries")
export class PhotoGalleryController extends PhotoGalleryControllerBase {
  constructor(
    protected readonly service: PhotoGalleryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
