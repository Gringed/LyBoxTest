//Fonction Calc
function calc (arr , n1, n2) {
    let sum = 0;
    for (let i =0; i < arr.length  ; i++ ) {
      if(i >= n1 && i<= n2){
         sum = sum + arr[i];
      }
    }
    return sum;
  }
let arr = [0,1,2,3,4,5,6];
console.log(calc(arr,0,5));



//Fonction ExtractRent
function ExtractRent (content) {
    content = "Loyer en cours de 430 €/mois hors charges";
    let matches = content.match(/\d+/g);
    if(matches){
      let number1 = parseInt(matches[0])
      if(matches[1]){
        let number2 = parseInt(matches[1])
        console.log((number1 + number2) * 12);
      }
      else console.log(number1 * 12)  
  }
  }
  ExtractRent()



//Fonction ComputeJointPoint (INCOMPLET)
  function ComputeJointPoint (s1, s2){
    s1 = "46"
    s2 = ""
    let decompNumber = s1.split('')
    console.log(decompNumber)
    let number2 = parseInt(decompNumber[1]) + parseInt(decompNumber[0])
    let total = parseInt(s1) + number2
    console.log(total)
    // Première partie 
    // suite du code théorique ici
}
ComputeJointPoint()
