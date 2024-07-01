import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PhotoGalleryResolverBase } from "./base/photoGallery.resolver.base";
import { PhotoGallery } from "./base/PhotoGallery";
import { PhotoGalleryService } from "./photoGallery.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PhotoGallery)
export class PhotoGalleryResolver extends PhotoGalleryResolverBase {
  constructor(
    protected readonly service: PhotoGalleryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
