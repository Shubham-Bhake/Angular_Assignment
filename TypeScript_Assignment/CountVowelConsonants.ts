class TestVowelConsonants{

   statment: String= "ashubham";
    private _statment1: String; 


    
   
    //split1:String;
    //vowels:string ;

 public set statment1(value: String) {
        this._statment1= value;
    }
 
// public countVowel:()=>{  


// }

countVowel(statment:string) {
   
    // initialize count
    const vowels = ["a", "e", "i", "o", "u"]
    let Vcount = 0;

    // loop through string to test if each character is a vowel
    for (let character of statment) {
        if (vowels.includes(character)) {
            Vcount++;
        }
    }

    // return number of vowels
    return Vcount
    
console.log(""+Vcount);
 
}


countConsinant(statment:string) {
    // initialize count
    const vowels = ["a", "e", "i", "o", "u"]
  
    let Ccount = 0;

    
    for (let character of statment) {
     if (!vowels.includes(character)) {
            Ccount++;
        }
    }

   
    return Ccount
    console.log(""+Ccount);

}}
