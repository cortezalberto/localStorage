

btnGuardar.addEventListener('click', () => {

    alert("Hice click guardar")
    let val = document.getElementById("valorInput").value

    alert(val)
 sessionStorage.setItem("valorLS", val)
    // limpiamos el campo
    document.getElementById("valorInput").value = ""

})

btnCargar.addEventListener('click', () => {

    // Me tarigo el valor desde la local
    let val = sessionStorage.getItem("valorLS")

    alert(val)
    // limpiamos el campo
    document.getElementById("valorDesdeLs").innerHTML = val
})

btnBorrar.addEventListener('click', () => {

    // Me tarigo el valor desde la local
    sessionStorage.removeItem("valorLS")

})