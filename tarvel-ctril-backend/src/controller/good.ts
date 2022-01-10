import { findGoodResult } from "../service/good"

export default {
  async good (ctx :any, next: any) {
    await findGoodResult(ctx);
    await next();
  }
}