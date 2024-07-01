import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuickLinkServiceBase } from "./base/quickLink.service.base";

@Injectable()
export class QuickLinkService extends QuickLinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
