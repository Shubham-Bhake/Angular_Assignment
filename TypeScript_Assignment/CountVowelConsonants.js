var TestVowelConsonants = /** @class */ (function () {
    function TestVowelConsonants() {
        this.statment = "ashubham";
    }
    Object.defineProperty(TestVowelConsonants.prototype, "statment1", {
        //split1:String;
        //vowels:string ;
        set: function (value) {
            this._statment1 = value;
        },
        enumerable: false,
        configurable: true
    });
    // public countVowel:()=>{  
    // }
    TestVowelConsonants.prototype.countVowel = function (statment) {
        // initialize count
        var vowels = ["a", "e", "i", "o", "u"];
        var Vcount = 0;
        // loop through string to test if each character is a vowel
        for (var _i = 0, statment_1 = statment; _i < statment_1.length; _i++) {
            var character = statment_1[_i];
            if (vowels.includes(character)) {
                Vcount++;
            }
        }
        // return number of vowels
        return Vcount;
        console.log("" + Vcount);
    };
    TestVowelConsonants.prototype.countConsinant = function (statment) {
        // initialize count
        var vowels = ["a", "e", "i", "o", "u"];
        var Ccount = 0;
        for (var _i = 0, statment_2 = statment; _i < statment_2.length; _i++) {
            var character = statment_2[_i];
            if (!vowels.includes(character)) {
                Ccount++;
            }
        }
        return Ccount;
        console.log("" + Ccount);
    };
    return TestVowelConsonants;
}());
