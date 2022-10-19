
picChange = () => {
    let elem = document.getElementById("random");
    console.log(elem);
    var Pix = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg","img9.jpg","img10.jpg","img11.jpg","img12.jpg","img13.jpg","img14.jpg","img15.jpg","img16.jpg"];
    let a=1 , b = 17;
    let randomNum = Math.trunc(a + (b-a) * Math.random());
    console.log(randomNum);
    while (elem.hasChildNodes()) {
        elem.removeChild(elem.lastChild);
    }  
    const img = document.createElement('img');
    img.src = `${Pix[randomNum-1]}`;
    document.getElementById('random').appendChild(img);
    
};
