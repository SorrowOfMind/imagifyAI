import preview from "../assets/preview.svg"
import Loader from "./Loader";

interface ImageProps {
  photo?: string,
  isGenerating: boolean
}

const Image = ({photo, isGenerating}: ImageProps) => {
  return (
    <div className="bg-gray-50 relative border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus-border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
      {
        photo ? 
        <img src={photo} className="w-full h-full object-contain"/> :
        <img src={preview} className="w-9/12 h-9/12 object-contain opacity-40"/>
      }

      {
        isGenerating &&
        <div className="absolute inset-0 z-0 flex justify-center items-center rounded-lg">
          <Loader/>
        </div>
      }
    </div>
  )
}

export default Image