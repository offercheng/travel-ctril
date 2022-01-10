import { insertUserResult } from '../service/insert'

export default {
  async insert(ctx: any, next: any) {
    await insertUserResult(ctx);
    await next()
  }
}