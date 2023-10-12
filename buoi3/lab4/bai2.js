function ptbac2(){
    var nghiem1 = document.getElementById("nghiem1");
    var nghiem2 = document.getElementById("nghiem2");
    var nghiem = document.getElementById("nghiem");
    var a 
    a = prompt(`Enter a `)
    var b
    b = prompt(`Enter b `)
    var c
    c = prompt(`Enter c `)
    var d = (b * b) - (4 * a * c)
    if(a == 0) {
        if(b == 0){
            if (c == 0) {
                nghiem.innerHTML = 'pt vo so nghiem'
              
            }
            else{
                nghiem.innerHTML = 'pt vo  nghiem'
            }
        }
        else{
            nghiem.innerHTML =  'x = '+ (-c/b)
        }
    }
else if (d >= 0) {
        nghiem1.innerHTML = `nghiem 1 la: `+ ((-b + Math.sqrt(d)) / (2 * a))
     
        nghiem2.innerHTML = `nghiem 2 la: ` + ((-b - Math.sqrt(d)) / (2 * a))
    } else {
        nghiem.innerHTML = 'pt vo nghiem'
    }
}