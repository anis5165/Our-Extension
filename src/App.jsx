import React from 'react'
import ObjectDetect from './components/ObjectDetection/ObjectDetect';
import  HandPose  from './components/HandPose/HandPose';
import FacialLandmark from './components/FacialLandmarkDetection/FacialLandmark';
import PosenetRealTime from './components/PosenetRealTime/Pose';


const App = () => {
  return (
    <div>
      <ObjectDetect />
      <HandPose/>
      <FacialLandmark />
      <PosenetRealTime/>
    </div>
  )
}

export default App