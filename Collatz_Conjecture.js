// Ganjil = n3+1, Genap = n/2
let angka = parseInt(prompt("Pilih Angka Apa Saja"))

angka = isNaN(angka) === true ? document.writeln("<h1>INPUTKAN ANGKA</h1>") : angka

if (angka !== undefined) {
    while (angka !== 1) {
        if (angka % 2 === 1) {
            angka = ((angka * 3) + 1)
        } else if (angka % 2 === 0) {
            angka = (angka / 2)
        }
        document.writeln(`<h1>${angka}</h1>`)
    }
}