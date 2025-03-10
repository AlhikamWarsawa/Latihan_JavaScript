let angka1 = prompt("Inputkan Angka Pertama")
let angka2 = prompt("Inputkan Angka Kedua")
let operator = prompt("jumlah, kurang, kali, atau bagi")
operator = operator.toLowerCase()

let a = (Number(angka1))
let b = (Number(angka2))
let hitung

document.write(a)
if (operator === "jumlah") {
    document.write(" + ")
    hitung = a + b
} else if (operator === "kurang") {
    document.write(" - ")
    hitung = a - b
} else if (operator === "kali") {
    document.write(" * ")
    hitung = a * b
} else if (operator === "bagi") {
    document.write(" / ")
    hitung = a / b
} else {
    document.write(" !(Anda Salah Menginputkan Operator)! ")
}
document.write(b)
document.write(` = ${hitung}`)

alert(`Hasilnya Adalah ${hitung}`)