import { getAllGoods } from "../database"

export const findGoodResult = async (ctx: any) => {
  const goods = await getAllGoods();
  console.log(goods, "-------------");
  ctx.body = {
    code: 200,
    goods,
  }
}