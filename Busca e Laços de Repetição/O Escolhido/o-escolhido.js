let n = parseInt(gets());

let arrMat = Array(n);
let arrNot = Array(n);

for (i = 0; i < n; i++) {
    
    let line = gets().split(' ');
    
    arrMat[i] = parseInt(line[0]);
    arrNot[i] = parseFloat(line[1]);

}

let maior = 0;

var max = arrNot.reduce(function(a, b) {
    
    return Math.max(a, b);

}); 

for (i = 0; i < n; i++) {
    
    if (max < 8) {
        
        console.log('Minimum note not reached'); 
        break;
    
    } else if (arrNot[i] === max) {
        
        console.log(arrMat[i]);
    
    }

}
___________________________
let n = parseInt(gets());

let arrayMat = Array(n);
let arrayNao = Array(n);

for(i = 0; i < n; i++){
  
  let linha = gets().split(' ');
  
  arrayMat[i] = parseInt(linha[0]);
  arrayNao[i] = parseFloat(linha[1]);
  
}

let maior = 0;

var maximo = arrayNao.reduce(function(a,b){
  
  return Math.max(a, b);
  
});

for (i = 0; i < n; i++){
  
  if (maximo < 8){
    
    console.log('Minimum note not reached');
    break;
    
  } else if (arrayNao[i] === maximo){
    
    console.log(arrayMat[i]);
    
  }
  
}




