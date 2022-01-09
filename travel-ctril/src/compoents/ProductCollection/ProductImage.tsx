import React  from "react";
import {Typography,Image} from 'antd'

interface PropsType{
  id:boolean | string,
  size:'large' | 'small',
  imageSrc:string,
  title:string,
  price?:number | string
}
export const ProductImage:React.FC<PropsType> = ({id,size,imageSrc,title,price})=>{
  return (
    <div>
      {size === "large" ? (
        <Image src={imageSrc} height={285} width={490} />
      ) : (
        <Image src={imageSrc} height={120} width={240} />
      )}
      <div>
        <Typography.Text type="secondary">
          {title.slice(0, 25)}
        </Typography.Text>
        <Typography.Text type="danger" strong>
          ¥ {price} 起
        </Typography.Text>
      </div>
    </div>
  );

}