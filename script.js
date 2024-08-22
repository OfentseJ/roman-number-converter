const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const convertToRomanNumeral = (num) => {
    const romans = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
      ];
      const collections = [];
    
      romans.forEach(function (arr) {
        while (num >= arr[1]) {
          collections.push(arr[0]);
          num -= arr[1];
        }
      });
    
      return collections.join('');
}


const isValidNum = (input) => {
    result.classList.remove("hidden")
    let errorMsg = "";

    if(!input){
        console.log(input)
        errorMsg = "Please enter a valid number";
   }else if(input < 0){
        errorMsg = "Please enter a number greater than or equal to 1";
   }else if(input >= 4000){
        errorMsg =  "Please enter a number less than or equal to 3999";
   }else{
        return true;
   }

   result.innerText = errorMsg;
}


convertBtn.addEventListener("click",()=>{
    updatePage();
});

input.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        updatePage();
   } 
});

const updatePage = () => {
    const inputInt = parseInt(input.value)
    console.log(inputInt);

    if(isValidNum(inputInt)){
        input.innerText = "";
        result.innerText = convertToRomanNumeral(inputInt);
    }
}