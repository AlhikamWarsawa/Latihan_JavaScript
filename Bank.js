// Register
let name = prompt("Inputkan Nama Anda").trim()
localStorage.setItem("nama", name)
let balance = parseInt(prompt("Inputkan Saldo Anda"))
localStorage.setItem("saldo", balance)
balance = balance < 0 ? alert("Angka Tidak Boleh Negatif") : (isNaN(balance)) === true ? balance = null : balance
balance = balance ?? 0

if (balance >= 0) {
// Login
    balance = parseInt(localStorage.getItem("saldo"))
    name = localStorage.getItem("nama")
    let login = prompt("Silahkan Login Nama Anda").trim()
    if (login !== name) {
        alert("Pengguna Tidak Ditemukan")
    } else {
// Menu Utama
        while (true) {
            let menu = parseInt(prompt(`Menu Utama
1. Cek Saldo
2. Setor Uang
3. Tarik Uang
4. Logout`))
            let setor, tarik, logout
            switch (menu) {
                case 1:
                    alert(`Saldo Anda Adalah ${balance}`)
                    break;
                case 2:
                    setor = parseInt(prompt("Setor Uang Anda"))
                    setor = setor <= 0 ? alert("Angka Tidak Boleh Negatif") : setor
                    if (setor >= 0) {
                        balance += setor
                        alert(`Saldo Anda Sekarang Adalah ${balance}`)
                    }
                    break;
                case 3:
                    tarik = confirm(`Saldo Anda Adalah ${balance} Apakah Anda Ingin Tarik Uang?`)
                    if (tarik) {
                        tarik = parseInt(prompt("Tarik Uang Anda"))
                        tarik = tarik <= 0 ? alert("Angka Tidak Boleh Negatif") : tarik >= balance ? alert("Saldo Anda Tidak Cukup") : tarik
                        if (tarik >= 0 && tarik <= balance) {
                            balance -= tarik
                            alert(`Saldo Anda Sekarang Adalah ${balance}`)
                        }
                    }
                    break;
                case 4:
                    logout = confirm(`Apakah Anda Ingin Logout?`)
                    if (logout) {
                        alert("Anda Telah Logout")
                    }
                    break;
                default:
                    alert("Menu Tidak Ditemukan")
                    break;
            }
            if (menu === 4) {
                break;
            }
        }
    }
}
document.writeln(`<h1>Nama Anda Adalah : ${name}</h1>`)
document.writeln(`<h1>Saldo Anda Adalah : ${balance}</h1>`)