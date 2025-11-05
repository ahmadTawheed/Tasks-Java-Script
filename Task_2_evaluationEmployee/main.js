
/* # == Title
- ES6
- compare => var , let , const
- overide | redeclare
- line by line
 - concatenation
 - `` and ${}
 - arthemtric operation
 - prompt()
 - example => calcluator
 - comparison
 - condetions
 - function
*/
console.log("By Ahmed Tawheed");
console.log("------------------");


// let product =  String(prompt(`product must be 99`));
// let respect =  String(prompt(`product must be 95`));
// let teamWork = String(prompt(`product must be 10`));

const product = prompt("product must be 99:");
const productValue = Number(product);

const respect = prompt("product must be 95:");
const respectValue = Number(respect);

const teamWork = prompt("product must be 10:");
const teamWorkValue = Number(teamWork);

let result = (productValue + respectValue + teamWorkValue) / 3;
// console.log(productValue);
// console.log(typeof productValue);
let final;


if (result > 90 ) {
    final = "ممتاز جداً";
} else if (result < 90 && result >= 75) {
    final = "جيد جدا";
} else if (result < 75 && result >= 60) {
    final = "مقبول";
}else if (result < 60 && result >= 50){
    final = "ضعيف";
} else{
    final = "راسب";
}


document.write(`

    
   <h1>نظام تقييم أداء الموظفين</h1>
    <h1>أدخل درجات الموظف للحصول على تقييم شامل</h1>

    <div>
        <div class="partOne">
            <div class="cardOne">
                <h2>الانتاجية</h2>
                <h2>${productValue}</h2>
            </div>
            <div class="cardTwo">
                <h2>الالتزام</h2>
                <h2>${respectValue}</h2>
            </div>
            <div class="cardThree">
                <h2>روح التعاون مع الفريق</h2>
                <h2>${teamWorkValue}</h2>
            </div>
            <div class="cardFour">
                <h2>المتوسط</h2>
                <h2>${result}</h2>
            </div>
        </div>

        <div class="partTwo">
            <div class="cardG">
                <h2>المتوسط العام</h2>
                <h2>${result}</h2>
            </div>
            
            <div class="cardG">
                <h2>نتيجة التقييم</h2>
                <h2>${final}</h2>
            </div>
            
        </div>

    </div>
    
`);
