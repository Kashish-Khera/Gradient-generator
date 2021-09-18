function generatecolor() {

    // DOM

    let body = document.querySelector("body");
    var percentage = document.getElementById('percentage');
    var color1 = document.getElementById('color1');
    var color2 = document.getElementById('color2');

    // genrating hexdecimal color values

    let colorone = "";
    let colortwo = "";
    let Charset = "0123456789abcdefghijklmnopqrstuvwxyz";

    var randdegree = Math.floor(Math.random() * 360);

    // since there are 6 character in hex value(excluding #)

    for (i = 0; i < 6; i++) {
        colorone = colorone + Charset[Math.floor(Math.random() * 16)];
        colortwo = colortwo + Charset[Math.floor(Math.random() * 16)];
    }

    // displaying values in the browser

    percentage.innerHTML = randdegree + "deg";
    color1.innerHTML = "#" + colorone;
    color2.innerHTML = "#" + colortwo;
    

    var showper = randdegree + "deg";
    var showone = "#" + colorone;
    var showtwo = "#" + colortwo;

    body.style.backgroundImage = "linear-gradient(" + showper + " , " + showone + " , " + showtwo + ")";
}

