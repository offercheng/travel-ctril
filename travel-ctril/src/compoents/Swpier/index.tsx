import React from 'react'
import 'swiper/css'
// import { Navigation, Autoplay, Mousewheel, Zoom } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel'
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/zoom';
import SwiperCore, {
	Zoom, Navigation, Autoplay,
	Mousewheel
} from 'swiper';
import { Gobal } from './index.layout';
import { Menu } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import creneryImage from '../../assets/image/14.jpg'

// 使用 IconFont 组件库 优化界面
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2708880_i8cxw5pe82k.js',
});



SwiperCore.use([Zoom, Navigation, Autoplay, Mousewheel]);

const Swipers:React.FC = () => {
	return (
		<Gobal>
			<Menu 
			  className="swiper-menu"
				style={{ width: 170 }}
			>
				<Menu.Item style={{fontSize: 15}} icon={<IconFont type='icon-PCbofangye_remen' style={{fontSize: 15}}  />} key="1"> 爆款推荐  </Menu.Item>
				<Menu.Item style={{fontSize: 15}} icon={<IconFont type='icon-PCbofangye_remen' style={{fontSize: 15}}  />} key="2"> 新品上市 </Menu.Item>
				<Menu.Item style={{fontSize: 15}} icon={<IconFont type='icon-PCbofangye_remen' style={{fontSize: 15}}  />} key="3"> 周边活动 </Menu.Item>
				<Menu.Item style={{fontSize: 15}} icon={<IconFont type='icon-PCbofangye_remen' style={{fontSize: 15}}  />} key="4"> 当地游玩 </Menu.Item>
			</Menu>
			<Swiper
				className='swiper-context'
				loop={true}
				grabCursor={true}
				navigation
				zoom={true}
				speed={1500}
				autoplay={{
					delay: 300,
					stopOnLastSlide: false,
					disableOnInteraction: true
				}}
				mousewheel={{
					invert: true,
					releaseOnEdges: true,
					sensitivity: 10
				}}
				autoHeight={true}
				// onSlideChange={() => console.log('slide change')}
			>
				{
					Array(5).fill(undefined).map((item,index) => {
						return (
							<SwiperSlide key={index}>
								<div className="img_div">
									<img src={creneryImage} width="100%" height="100%" alt="推荐" />
									<div className="mask">
									</div>
								</div>
							</SwiperSlide>
						)
					})
				}
			</Swiper>
		</Gobal>
	)
}

export default Swipers