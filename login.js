let masuk = confirm("Anda Ingin Mendafar? ya/tidak")

if (masuk) {

// Mulai dan Meminta Input dari Pengguna
    let name = prompt("Inputkan Username Anda").trim()
    let age = parseInt(prompt("Inputkan Umur Anda"))
    let status

// Memeriksa Apakah Pengguna Boleh Masuk
    if (isNaN(age)) {
        document.writeln("<h1>Tolong Inputkan Sebuah Angka</h1>")
    } else if (age >= 18) {
        document.writeln("<h1>Access Accepted</h1>")
        status = true
    } else if (age < 0) {
        document.writeln("<h1>Umur Tidak Boleh Minus</h1>")
    } else {
        document.writeln("<h1>Access Denied</h1>")
        status = false
    }

// Menyimpan Data pengguna
    if (!isNaN(age) && age >= 0) {
        let objectData = {
            Nama: name,
            Umur: age,
            Status: status
        }

        let daftarPengguna = []
// Menampilkan Hasil ke Pengguna
        if (status === true) {
            alert(`Selamat datang, ${objectData.Nama}! Anda diizinkan masuk.`)
            document.writeln(`Selamat datang, ${objectData.Nama}! Anda diizinkan masuk.`)
        } else {
            alert(`Maaf, ${objectData.Nama}. Anda belum cukup umur untuk masuk.`)
            document.writeln(`Maaf, ${objectData.Nama}. Anda belum cukup umur untuk masuk.`)
        }
        daftarPengguna.push(objectData.Nama)

// Menampilkan Hasil ke Console
        console.log(daftarPengguna)
        console.table(daftarPengguna)
        localStorage.setItem("Nama", daftarPengguna)
        document.writeln(localStorage.getItem("Nama"));
    } else {
        document.writeln("<h1>END</h1>")
    }
}