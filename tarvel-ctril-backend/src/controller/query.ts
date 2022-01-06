import { findQueryResult } from '../service'

export default {
  async query(ctx, next) {
    // console.log(ctx);
    // ctx.set('Content-Type', 'application/x-www-form-urlencoded')
    // ctx.type = 'text/html';
    // console.log(ctx.request.body);
    await findQueryResult(ctx);
    await next();
  }
}


      