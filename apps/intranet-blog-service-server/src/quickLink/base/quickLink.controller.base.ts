/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { QuickLinkService } from "../quickLink.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { QuickLinkCreateInput } from "./QuickLinkCreateInput";
import { QuickLink } from "./QuickLink";
import { QuickLinkFindManyArgs } from "./QuickLinkFindManyArgs";
import { QuickLinkWhereUniqueInput } from "./QuickLinkWhereUniqueInput";
import { QuickLinkUpdateInput } from "./QuickLinkUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class QuickLinkControllerBase {
  constructor(
    protected readonly service: QuickLinkService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuickLink })
  @nestAccessControl.UseRoles({
    resource: "QuickLink",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createQuickLink(
    @common.Body() data: QuickLinkCreateInput
  ): Promise<QuickLink> {
    return await this.service.createQuickLink({
      data: data,
      select: {
        backgroundColor: true,
        createdAt: true,
        id: true,
        text: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [QuickLink] })
  @ApiNestedQuery(QuickLinkFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "QuickLink",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async quickLinks(@common.Req() request: Request): Promise<QuickLink[]> {
    const args = plainToClass(QuickLinkFindManyArgs, request.query);
    return this.service.quickLinks({
      ...args,
      select: {
        backgroundColor: true,
        createdAt: true,
        id: true,
        text: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QuickLink })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuickLink",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async quickLink(
    @common.Param() params: QuickLinkWhereUniqueInput
  ): Promise<QuickLink | null> {
    const result = await this.service.quickLink({
      where: params,
      select: {
        backgroundColor: true,
        createdAt: true,
        id: true,
        text: true,
        updatedAt: true,
        url: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: QuickLink })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuickLink",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateQuickLink(
    @common.Param() params: QuickLinkWhereUniqueInput,
    @common.Body() data: QuickLinkUpdateInput
  ): Promise<QuickLink | null> {
    try {
      return await this.service.updateQuickLink({
        where: params,
        data: data,
        select: {
          backgroundColor: true,
          createdAt: true,
          id: true,
          text: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: QuickLink })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuickLink",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteQuickLink(
    @common.Param() params: QuickLinkWhereUniqueInput
  ): Promise<QuickLink | null> {
    try {
      return await this.service.deleteQuickLink({
        where: params,
        select: {
          backgroundColor: true,
          createdAt: true,
          id: true,
          text: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
