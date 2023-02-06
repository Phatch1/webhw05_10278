const calArea = () => {
    let radius = parseFloat(prompt('input radius'))
    let area = Math.PI*radius**2
    let circumference = 2*Math.PI*radius
    document.getElementById('area').innerHTML = `area: ${area}`
    document.getElementById('circumference').innerHTML = `circumference: ${circumference}`
}