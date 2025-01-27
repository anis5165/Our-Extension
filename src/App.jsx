import React from 'react'
import ObjectDetect from './components/ObjectDetection/ObjectDetect';
import  HandPose  from './components/HandGestures/HandPose';
import FacialLandmark from './components/FacialLandmarkDetection/FacialLandmark';


const App = () => {
  return (
    <div>
      <ObjectDetect />
      <HandPose/>
      <FacialLandmark />
    </div>
  )
}

export default App