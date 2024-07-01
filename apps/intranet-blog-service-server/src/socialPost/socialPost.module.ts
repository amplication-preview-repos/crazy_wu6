import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SocialPostModuleBase } from "./base/socialPost.module.base";
import { SocialPostService } from "./socialPost.service";
import { SocialPostController } from "./socialPost.controller";
import { SocialPostResolver } from "./socialPost.resolver";

@Module({
  imports: [SocialPostModuleBase, forwardRef(() => AuthModule)],
  controllers: [SocialPostController],
  providers: [SocialPostService, SocialPostResolver],
  exports: [SocialPostService],
})
export class SocialPostModule {}
