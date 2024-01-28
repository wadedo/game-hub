const getCroppedImageUrl = (url:string)=>{
  if (!url) return '';// 返回一个空的图片，此为临时过渡
  const target = 'media/';  
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' +url.slice(index);
}

export default getCroppedImageUrl;
