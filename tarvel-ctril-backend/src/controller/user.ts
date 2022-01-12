export default {
  user(ctx: any, next: any) {
    ctx.body = {
      code: 200,
      user: ctx.user || {}
    }
    next();
  }
}