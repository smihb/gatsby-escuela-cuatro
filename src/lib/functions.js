export const monto = (valor, cambio = 1, moneda = '$') =>{
    if(!isFinite(valor)) return valor
    else return `${moneda} ${(valor * cambio).toFixed(2)}`
}