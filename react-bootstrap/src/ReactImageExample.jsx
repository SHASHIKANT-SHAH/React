import { Image } from "react-bootstrap";   
import  myImage  from "./Image.jpg";

function ReactImageExample() {
    return (
    <div>
       <label> Image Component </label>
       <img src={myImage} alt="Sample Image" width={200} height={200} />
      <Image src={myImage} rounded />
      <Image src={myImage} roundedCircle className="mx-3" />
      <Image src={myImage} thumbnail />
    </div>
);
}

export default ReactImageExample;