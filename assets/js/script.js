let image_border= document.querySelector(".image-border");
let span = document.querySelectorAll("span");

let a = [
  "/assets/images/slide-01.jpg",
  "/assets/images/slide-02.jpg",
  "/assets/images/slide-03.jpg",
];
let index=0
span.forEach((element) => {
  element.addEventListener("click", () => {
    console.log( image_border.style.backgroundImage)
    let imgLink=image_border.style.backgroundImage;
    let src=imgLink.toString()
    let image_src=src.substring(5,src.length-2)

for(let i=0;i<a.length;i++)
    {
        if(a[i]==image_src){
        index=i
        }
    }


    if (element.className === "previous") {
      console.log("Previous",index);
      if(index==0){
        index=a.length
      }
      image_border.style.background=`url(${a[index-1]})`;
      index--
    } else if (element.className === "next") {
      console.log("Next",index);
     if(index==a.length-1){
       index=-1
     }
        image_border.style. background=`url(${a[index+1]})`;
      index++

    }
  });
});
