/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { PhotoGallery } from "./PhotoGallery";
import { PhotoGalleryCountArgs } from "./PhotoGalleryCountArgs";
import { PhotoGalleryFindManyArgs } from "./PhotoGalleryFindManyArgs";
import { PhotoGalleryFindUniqueArgs } from "./PhotoGalleryFindUniqueArgs";
import { CreatePhotoGalleryArgs } from "./CreatePhotoGalleryArgs";
import { UpdatePhotoGalleryArgs } from "./UpdatePhotoGalleryArgs";
import { DeletePhotoGalleryArgs } from "./DeletePhotoGalleryArgs";
import { PhotoGalleryService } from "../photoGallery.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PhotoGallery)
export class PhotoGalleryResolverBase {
  constructor(
    protected readonly service: PhotoGalleryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PhotoGallery",
    action: "read",
    possession: "any",
  })
  async _photoGalleriesMeta(
    @graphql.Args() args: PhotoGalleryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PhotoGallery])
  @nestAccessControl.UseRoles({
    resource: "PhotoGallery",
    action: "read",
    possession: "any",
  })
  async photoGalleries(
    @graphql.Args() args: PhotoGalleryFindManyArgs
  ): Promise<PhotoGallery[]> {
    return this.service.photoGalleries(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PhotoGallery, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PhotoGallery",
    action: "read",
    possession: "own",
  })
  async photoGallery(
    @graphql.Args() args: PhotoGalleryFindUniqueArgs
  ): Promise<PhotoGallery | null> {
    const result = await this.service.photoGallery(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PhotoGallery)
  @nestAccessControl.UseRoles({
    resource: "PhotoGallery",
    action: "create",
    possession: "any",
  })
  async createPhotoGallery(
    @graphql.Args() args: CreatePhotoGalleryArgs
  ): Promise<PhotoGallery> {
    return await this.service.createPhotoGallery({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PhotoGallery)
  @nestAccessControl.UseRoles({
    resource: "PhotoGallery",
    action: "update",
    possession: "any",
  })
  async updatePhotoGallery(
    @graphql.Args() args: UpdatePhotoGalleryArgs
  ): Promise<PhotoGallery | null> {
    try {
      return await this.service.updatePhotoGallery({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PhotoGallery)
  @nestAccessControl.UseRoles({
    resource: "PhotoGallery",
    action: "delete",
    possession: "any",
  })
  async deletePhotoGallery(
    @graphql.Args() args: DeletePhotoGalleryArgs
  ): Promise<PhotoGallery | null> {
    try {
      return await this.service.deletePhotoGallery(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}