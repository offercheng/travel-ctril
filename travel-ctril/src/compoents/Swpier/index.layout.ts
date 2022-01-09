import styled from 'styled-components';

export const Gobal = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
    .swiper-menu {
      margin-left: 40px;
      border: 3px solid #61dafb;
      height: 200px;
    }
    .swiper-context {
      margin-left: 40px;
      width: 1200px;
      height: 300px;
    }
    .img_div {
      display: block;
      position: relative;
    }
    img {
      height: 300px;
      object-fit: cover;
    }
    .mask {
      position: absolute;
      background: rgb(0, 0, 0);
      color: #ffffff;
      opacity: 0;
      top: 0;
      right: 0;
      border-radius: .625rem;
    }
    
`



//   .content {
//     background-color: rgb(245, 247, 250);

// margin - top: 1rem;
// }

// .contentmid {
//   display: flex;
//   justify - content: center;
// }

// img {
//   object - fit: cover;
// }

// .img_div {

//   display: block;
//   position: relative;
// }

// .mask {
//   position: absolute;
//   background: rgb(0, 0, 0);
//   color: #ffffff;
//   opacity: 0;
//   top: 0;
//   right: 0;
//   width: 100 %;
//   height: 100 %;
//   border - radius: .625rem;

// }

// .img_div: hover.mask {
//   opacity: 0.2;
//   transition: 0.5s;
// }