import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuickLinkService } from "./quickLink.service";
import { QuickLinkControllerBase } from "./base/quickLink.controller.base";

@swagger.ApiTags("quickLinks")
@common.Controller("quickLinks")
export class QuickLinkController extends QuickLinkControllerBase {
  constructor(
    protected readonly service: QuickLinkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
