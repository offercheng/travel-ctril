import React  from "react";
import {Divider,Col,Row,} from 'antd'
import {ProductImage} from './ProductImage'
import { Gobal } from './index.layout'

interface PropsTYpe {
  title:JSX.Element,
  sideImage:string,
  products:any[],

}

const ProductCollection:React.FC<PropsTYpe> = ({title,sideImage,products})=>{
  return(
    <Gobal>
      <Divider orientation="left">{title}</Divider>
      <Row>
        <Col span={4}>
          <img src={sideImage} className="side-image" alt="" />
        </Col>
        <Col span={20}>
          <Row>
            <Col span={12}>
              <ProductImage
                id={products ? products[0].id : ""}
                size={"large"}
                title={products ? products[0].title : ""}
                imageSrc={products ? products[0].touristRoutePictures: ""}
                price={products ? products[0].price: ""}
              />
            </Col>
            <Col span={12}>
              <Row>
                <Col span={12}>
                  <ProductImage
                    id={products ? products[1].id : ""}
                    size="small"
                    title={products ? products[1].title : ""}
                    imageSrc={products ? products[1].touristRoutePictures: ""}
                    price={products ? products[1].price: ""}
                  />
                </Col>
                <Col span={12}>
                  <ProductImage
                    id={products ? products[2].id : ""}
                    size="small"
                    title={products ? products[2].title : ""}
                    imageSrc={products ? products[2].touristRoutePictures: ""}
                    price={products ? products[2].price: ""}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <ProductImage
                    id={products ? products[3].id : ""}
                    size="small"
                    title={products ? products[3].title : ""}
                    imageSrc={products ? products[3].touristRoutePictures: ""}
                    price={products ? products[3].price: ""}
                  />
                </Col>
                <Col span={12}>
                  <ProductImage
                    id={products ? products[4].id : ""}
                    size="small"
                    title={products ? products[4].title : ""}
                    imageSrc={products ? products[4].touristRoutePictures: ""}
                    price={products ? products[4].price: ""}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <ProductImage
                id={products ? products[5].id : ""}
                size="small"
                title={products ? products[5].title : ""}
                imageSrc={products ? products[5].touristRoutePictures: ""}
                price={products ? products[5].price: ""}
              />
            </Col>
            <Col span={6}>
              <ProductImage
                id={products ? products[6].id : ""}
                size="small"
                title={products ? products[6].title : ""}
                imageSrc={products ? products[6].touristRoutePictures: ""}
                price={products ? products[6].price: ""}
              />
            </Col>
            <Col span={6}>
              <ProductImage
                id={products ? products[7].id : ""}
                size="small"
                title={products ? products[7].title : ""}
                imageSrc={products ? products[7].touristRoutePictures: ""}
                price={products ? products[7].price: ""}
              />
            </Col>
            <Col span={6}>
              <ProductImage
                id={products ? products[8].id : ""}
                size="small"
                title={products ? products[8].title : ""}
                imageSrc={products ? products[8].touristRoutePictures: ""}
                price={products ? products[8].price: ""}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Gobal>

  )
}

export default ProductCollection;