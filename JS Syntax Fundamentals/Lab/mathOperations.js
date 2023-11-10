function solve(num1, num2, operator){
    if (operator == "+"){
        console.log(num1 + num2)
    }else if (operator == "-"){
        console.log(num1 - num2)
    }else if (operator == "*"){
        console.log(num1 * num2)
    }else if (operator == "/"){
        const result = num1 / num2;
        console.log(result.toFixed(2));
        

    }else if (operator == "**"){
        console.log(num1 ** num2);
    }else if (operator == "%"){
        console.log(num1 % num2);
    }
}


function solve2(num1, num2, operator){
    let result;
    switch (operator){
        case "+":result = num1 + num2; break;
        case "-":result = num1 - num2; break;
        case "/":result = num1 / num2; break;
        case "**":result = num1 ** num2; break;
        case "%":result = num1 % num2; break;
        case "*":result = num1 * num2; break;
        default:
            console.log("Invalid operator");
            return;
    }
    console.log(result)
}




solve2(5,6,"5");
solve2(5,6,"-");
solve2(5,6,"*");
solve2(5,6,"/");
solve2(5,6,"**");
solve2(5,6,"%");
solve2(5,3,"+");
solve2(5,5,"+");
solve2(5,8,"+");