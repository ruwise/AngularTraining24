class Calculator {

    add = (x:number, y:number) => x + y;
    
    sub = (x:number, y:number) => x - y;

    mul = (x:number, y:number) => x * y;

    div = (x:number, y:number) => x / y;
}

enum Constants {
    DegToRad = Math.PI / 180
}

class SciCalc extends Calculator {

   getSinValue = (x: number): number => Math.sin(x * Constants.DegToRad);

   getCosValue = (x: number): number => Math.cos(x * Constants.DegToRad);
   
}

let cal = new SciCalc();
console.log(cal.add(10, 20))
console.log(cal.getSinValue(30))

