import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ObjectDetect from './components/ObjectDetection/ObjectDetect.jsx';

const rootEle = document.getElementById('root');

if (rootEle) {
  createRoot(rootEle).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}


const ObjectDetectElement = document.getElementById("object-detection");

if(ObjectDetectElement){
  createRoot(ObjectDetectElement).render(
      <ObjectDetect />
  )

}