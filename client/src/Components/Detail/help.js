 export function num(num){
   if (num<10){
    var Num = num/10
   }else if(num>10){
    var seg = num*0.10
    var Num = seg.toFixed(2)
   }else if(num>10){
    var seg = num*0.100
    var Num = seg.toFixed(2)
   }
   return Num
}


export function Peso (peso){
    if(peso<100){
        var val = peso/10
    }else if(peso>100){
        var val = peso/10
    }
    return val
}
// 


export function Porcentaje(val){
    const value = val/250*100
    return value+'%'
}



console.log(Porcentaje(12));