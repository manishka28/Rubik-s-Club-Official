import { React } from "react";
import Images from "../component/Images"
import Video from "../component/Video"
import Header from "../component/Header"
import Footer from "../component/Footer"

function Gallery() {
    return (
      <div>
        {/* <Header></Header> */}
        <Images></Images>
        <Video></Video>
        {/* <Footer></Footer> */}
      </div>
    )
  }
  
  export default Gallery