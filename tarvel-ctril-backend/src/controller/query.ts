import { findQueryResult } from '../service/query'

export default {
  async query(ctx: any, next: any) {
    await findQueryResult(ctx);
    await next();
  }
}


