const angka1 = document.getElementById("angka1")
const angka2 = document.getElementById("angka2")    
let hasil  = document.getElementById("hasil")
const tambah  = document.getElementById("tambah")
const kurang  = document.getElementById("kurang")
const bagi  = document.getElementById("bagi")
const kali  = document.getElementById("kali")



function  selesai(){
    angka1.value = null
    angka2.value = null
}

function aritmatika(){
    tambah.addEventListener("click", function(){
    hasil.textContent = Number(angka1.value) + Number(angka2.value)
    selesai()})
    kurang.addEventListener("click", function(){
    hasil.textContent = Number(angka1.value) - Number(angka2.value)
    selesai()})
    kali.addEventListener("click", function(){
    hasil.textContent = Number(angka1.value) * Number(angka2.value)
    selesai()})
    bagi.addEventListener("click", function(){
    hasil.textContent = Number(angka1.value) / Number(angka2.value)
    selesai()})
    
    return hasil
}
aritmatika()
























// function tambahan (){
//     tambah.addEventListener("click", function(){
//         hasil.textContent = Number(angka1.value) + Number(angka2.value)
//         selesai()        
//         return hasil
//     })
// }
// function kurangan (){
//     kurang.addEventListener("click", function(){
//         hasil.textContent = Number(angka1.value) - Number(angka2.value)
//         selesai()
//         return hasil
//     })
// }
// function kalian (){
//     kali.addEventListener("click", function(){
//         hasil.textContent = Number(angka1.value) * Number(angka2.value)
//         selesai()
//         return hasil
//     })}
// function bagian (){
//     bagi.addEventListener("click", function(){
//         hasil.textContent = Number(angka1.value) / Number(angka2.value)
//         selesai()
//         return hasil
//     })
// }
// tambahan()
// kurangan()
// kalian()
// bagian()