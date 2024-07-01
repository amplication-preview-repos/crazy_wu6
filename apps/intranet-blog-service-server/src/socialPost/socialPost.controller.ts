import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SocialPostService } from "./socialPost.service";
import { SocialPostControllerBase } from "./base/socialPost.controller.base";

@swagger.ApiTags("socialPosts")
@common.Controller("socialPosts")
export class SocialPostController extends SocialPostControllerBase {
  constructor(
    protected readonly service: SocialPostService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}