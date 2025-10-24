import  myImage  from "./Image.jpg";

function Image() {
    return (
    <div>
       <label> Image Component </label>
       <img src={myImage} alt="Sample Image" width={200} height={200} />
    </div>
);
}

export default Image;