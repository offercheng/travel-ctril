import React from 'react';
import { Voices } from './index.layout';

const Loading = () => {
  return (
    <Voices>
      {
        Array(10).fill(undefined).map((item, index) => {
          return (
            <div key={index} className="bar"></div>
          )
        })
      }
    </Voices>
  )
}
export default Loading;