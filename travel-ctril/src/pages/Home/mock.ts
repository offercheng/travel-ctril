/**
 * 首页推荐产品数据
 * */

import serverPath from '../../api';
import { IDataType } from '../../config/axios/axios.type';
import { hyRequest } from '../../service'

const arr = new Array(9);


export const goodsList = () => {
  hyRequest.get<IDataType>({
    url: serverPath.selectgoods,
  }).then((res: any) => {
    if(res.code === 200) {
      // console.log(res.goods);
      return res.goods      
    }
  })
}

// 爆款推荐
export const productList1 = []

// 新品上市
export const productList2 = [
  {
    id: 10,
    title:
      "南京3日2晚跟团游(4钻)·观中山陵+游总统府+览博物院『游六朝古都 听漫长历史』&逛秦淮河风光带+老门东『品美食 唤醒您的舌尖』&牛首山+报恩寺『诚心祈福 放空心灵』& 2晚连住4钻酒店",
    price: "11990",
    touristRoutePictures: [
      {
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F022620104202%2F200226104202-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644152128&t=5806019b5c6126c4a9ea436360dd4128",
      },
    ],
  },
  {
    id: 11,
    title: "摩洛哥撒哈拉沙漠+卡萨布兰卡+马拉喀什+舍夫沙...",
    price: "13290",
    touristRoutePictures: [
      {
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F022620104202%2F200226104202-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644152128&t=5806019b5c6126c4a9ea436360dd4128",
      },
    ],
  },
  {
    id: 12,
    title: "越南胡志明市+美奈+芽庄+河内7日6晚跟团游(4钻)...",
    price: "4000",
    touristRoutePictures: [
      {
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F022620104202%2F200226104202-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644152128&t=5806019b5c6126c4a9ea436360dd4128",
      },
    ],
  },
  {
    id: 13,
    title: "迪拜+阿布扎比6日跟团游(5钻)·【携程国旅纯玩...",
    price: "7399",
    touristRoutePictures: [
      {
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F022620104202%2F200226104202-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644152128&t=5806019b5c6126c4a9ea436360dd4128",
      },
    ],
  },
  {
    id: 14,
    title: "泰国曼谷+芭堤雅6日5晚跟团游(5钻)·【纯玩】『可...",
    price: "3499",
    touristRoutePictures: [
      {
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F022620104202%2F200226104202-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644152128&t=5806019b5c6126c4a9ea436360dd4128",
      },
    ],
  },
  {
    id: 15,
    title: "日本大阪+京都+箱根+东京6日5晚跟团游(4钻)·【浪...",
    price: "5999",
    touristRoutePictures: [
      {
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F022620104202%2F200226104202-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644152128&t=5806019b5c6126c4a9ea436360dd4128",
      },
    ],
  },
  {
    id: 16,
    title: "新加坡+马来西亚6日5晚跟团游(5钻)·【纯玩无购物...",
    price: "6199",
    touristRoutePictures: [
      {
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F022620104202%2F200226104202-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644152128&t=5806019b5c6126c4a9ea436360dd4128",
      },
    ],
  },
  {
    id: 17,
    title: "法国+德国+意大利+瑞士12日跟团游(4钻)·【匠心定...",
    price: "13699",
    touristRoutePictures: [
      {
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F022620104202%2F200226104202-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644152128&t=5806019b5c6126c4a9ea436360dd4128",
      },
    ],
  },
  {
    id: 18,
    title: "印度尼西亚巴厘岛7日5晚私家团(5钻)·A线独栋泳...",
    price: "5021",
    touristRoutePictures: [
      {
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F022620104202%2F200226104202-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644152128&t=5806019b5c6126c4a9ea436360dd4128",
      },
    ],
  },
];

// 国内游推荐
export const productList3 = [
  {
    id: 19,
    title:
      "埃及阿斯旺+卢克索+红海Red Sea+开罗+亚历山大12日跟团游(5钻)·【官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗...",
    price: "11990",
    touristRoutePictures: [
      {
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F022620104202%2F200226104202-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644152128&t=5806019b5c6126c4a9ea436360dd4128",
      },
    ],
  },
  {
    id: 20,
    title: "摩洛哥撒哈拉沙漠+卡萨布兰卡+马拉喀什+舍夫沙...",
    price: "13290",
    touristRoutePictures: [
      {
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F022620104202%2F200226104202-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644152128&t=5806019b5c6126c4a9ea436360dd4128",
      },
    ],
  },
  {
    id: 21,
    title: "越南胡志明市+美奈+芽庄+河内7日6晚跟团游(4钻)...",
    price: "4000",
    touristRoutePictures: [
      {
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F022620104202%2F200226104202-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644152128&t=5806019b5c6126c4a9ea436360dd4128",
      },
    ],
  },
  {
    id: 22,
    title: "迪拜+阿布扎比6日跟团游(5钻)·【携程国旅纯玩...",
    price: "7399",
    touristRoutePictures: [
      {
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F022620104202%2F200226104202-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644152128&t=5806019b5c6126c4a9ea436360dd4128",
      },
    ],
  },
  {
    id: 23,
    title: "泰国曼谷+芭堤雅6日5晚跟团游(5钻)·【纯玩】『可...",
    price: "3499",
    touristRoutePictures: [
      {
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F022620104202%2F200226104202-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644152128&t=5806019b5c6126c4a9ea436360dd4128",
      },
    ],
  },
  {
    id: 24,
    title: "日本大阪+京都+箱根+东京6日5晚跟团游(4钻)·【浪...",
    price: "5999",
    touristRoutePictures: [
      {
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F022620104202%2F200226104202-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644152128&t=5806019b5c6126c4a9ea436360dd4128",
      },
    ],
  },
  {
    id: 25,
    title: "新加坡+马来西亚6日5晚跟团游(5钻)·【纯玩无购物...",
    price: "6199",
    touristRoutePictures: [
      {
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F022620104202%2F200226104202-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644152128&t=5806019b5c6126c4a9ea436360dd4128",
      },
    ],
  },
  {
    id: 26,
    title: "法国+德国+意大利+瑞士12日跟团游(4钻)·【匠心定...",
    price: "13699",
    touristRoutePictures: [
      {
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F022620104202%2F200226104202-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644152128&t=5806019b5c6126c4a9ea436360dd4128",
      },
    ],
  },
  {
    id: 27,
    title: "印度尼西亚巴厘岛7日5晚私家团(5钻)·A线独栋泳...",
    price: "5021",
    touristRoutePictures: [
      {
        url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F022620104202%2F200226104202-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644152128&t=5806019b5c6126c4a9ea436360dd4128",
      },
    ],
  },
];

