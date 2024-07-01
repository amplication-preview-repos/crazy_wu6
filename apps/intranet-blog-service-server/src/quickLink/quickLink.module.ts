import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuickLinkModuleBase } from "./base/quickLink.module.base";
import { QuickLinkService } from "./quickLink.service";
import { QuickLinkController } from "./quickLink.controller";
import { QuickLinkResolver } from "./quickLink.resolver";

@Module({
  imports: [QuickLinkModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuickLinkController],
  providers: [QuickLinkService, QuickLinkResolver],
  exports: [QuickLinkService],
})
export class QuickLinkModule {}
