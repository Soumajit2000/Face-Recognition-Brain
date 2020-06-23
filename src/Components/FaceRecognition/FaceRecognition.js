import React from 'react';
import './FaceRecognition.css'


const FaceRecognition = ({ imageUrl , box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        <div className = 'bounding-box' style = {{ bottom : box.bottomRow, left : box.leftCol, top : box.topRow, right: box.rightCol }}></div>
       </div>
    </div>
  );
}

export default FaceRecognition;