import React from "react";
import { useState, useEffect } from "react";

const ImageGen = () => {
  const[item, setItem] = useState();
  const [imgs, setImgs]= useState();
  const [imgName, setImgName] = useState();

  console.log("one")



  useEffect(()=>{
    console.log('useeffct')
  fetchData();
  },[])
  
const fetchData = async ()=>{
 const images = await fetch('https://api.imgflip.com/get_memes');
 const datass = await images.json();
 console.log('newjson', datass);
 setItem(datass.data.memes)
}




const handleImage = ()=>{
  const randomNumber =Math.floor(Math.random()*item.length); 
const imageName= item[randomNumber].name;
//console.log('imageName', imageName)
  const imageUrl = item[randomNumber].url;
//  console.log('imageUrl', imageUrl)
  setImgs(imageUrl);
  setImgName(imageName);
}

console.log('two')
  return (
    <div className='condRendering'>
      <h1>This is Image generator</h1>
      <button onClick={handleImage}>Get new image</button>
      <img src={imgs} />
      <h2>{imgName}</h2>
    </div>
  );
};

export default ImageGen;
