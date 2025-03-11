// 3 dan kelipatan = Fizz
// 5 dan kelipatan = Buzz

let ronde = parseInt(prompt("Masukkan Ronde (Angka)"))
// let ronde = 30

ronde = isNaN(ronde) === true ? document.writeln("<h1>Masukkan Angka</h1>") : ronde

if (!isNaN(ronde) && ronde > 0) {
    for(let index = 1;index <= ronde;index++) {
        if(index % 3 === 0 && index % 5 === 0) {
            document.writeln("<h1>FizzBuzz</h1>")
            // console.log("FizzBuzz")
        } else if(index % 3 === 0) {
            document.writeln("<h1>Fizz</h1>")
            // console.log("Fizz")
        } else if (index % 5 === 0) {
            document.writeln("<h1>Buzz</h1>")
            // console.log("Buzz")
        }
        if(index % 3 !== 0 && index % 5 !==0) {
            document.writeln(`<h1>${index}</h1>`)
            console.log(index)
        }
    }
}