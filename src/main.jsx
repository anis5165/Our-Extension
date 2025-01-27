import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ObjectDetect from './components/ObjectDetection/ObjectDetect.jsx';
import HandPose from './components/HandGestures/HandPose.jsx';
import FacialLandmark from './components/FacialLandmarkDetection/FacialLandmark.jsx';

const rootEle = document.getElementById('root');

if (rootEle) {
  createRoot(rootEle).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}


const ObjectDetectElement = document.getElementById("object-detection");
const HandPoseElement = document.getElementById("hand-pose");
const FacialLandmarkElement = document.getElementById("facial-landmark");

if(ObjectDetectElement){
  createRoot(ObjectDetectElement).render(
      <ObjectDetect />
  )

}
else if(HandPoseElement){
  createRoot(HandPoseElement).render(
      <HandPose />
  )

}
else if(FacialLandmarkElement){
  createRoot(FacialLandmarkElement).render(
      <FacialLandmark />
  )

}
else {
  <div>No Extension loaded.</div>
}