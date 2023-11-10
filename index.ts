// class student{
//     name: string;
//     readonly email:string;
//     private age?: number;
//     protected height?:number = 7;
//     // set:string = "08" 
//     static total: number = 0

//     constructor( name:string, email: string, age?:number,height?:number ) {
//         this.name = name;
//         this.email = email; 
//         this.age = age;
//         this.height = height;   
//         student.total++     
//      }

//      get getstudent(){
//         return{name:this.name, email:this.email, age:this.age }
//      }

//      set changeAge(value:number){
//          this.age = value;
//      }
// }


// class studentSet extends student {
//     set: number
//     constructor(name:string, email:string, height:number, set:number){
//         super(name, email, height)
//         this.set = set;
//     }

//     get getstudentSet() {
//         return{name:this.name, email:this.email, height:this.height}
//     }
// }
 
// let studentA = new student("Isaac" , "isaac@test.com", 20, 10)
// let studentB = new student("mbappe" , "mbappe@test.com", 19, 9)
// console.log()
// console.log(studentB.getstudent);
// console.log((studentB.changeAge = 50));
// console.log(studentB.getstudent);
// console.log(studentB)
// console.log("reading total student Entry:", student.total)


// const counter = (value:number) => {
//    value++;
//    return value;
// }
// console.log("reading:", counter(2))








// interface int{
//     name:string
//     hPoint:number
//     vPoint:number
// }
// interface all{
//     nameA:string
//     nameB:string
//     point:number

// }

// class students{
//     name:string
//     hPoint:number
//     vPoint:number
//     constructor(name:string, hPoint:number, vPoint:number){
//         this.name = name
//         this.hPoint = hPoint
//         this.vPoint = vPoint
//     }

//     get getstu(){
//         return this.name
//     }

//     static dStuPoints(stuA:int, stuB:int){
//         let newh = stuA.hPoint - stuB.hPoint
//         let newv = stuB.vPoint - stuB.vPoint
        
//         let point = Math.sqrt(Math.pow(newh, 2) + Math.pow(newv, 2))

//         return{nameA:stuA.name, nameB:stuB.name, point}
//     }
// }


//  let tobi = new students("Tobi", 2, 9)
//  let stanley = new students("Stanley", 1, 7)
//  let draxler = new students("Draxler", 6, 9)
//  let zion = new students("Zion", 4, 7)
//  let regina = new students("Regina", 5, 6)
//  let jemima = new students("Jemima", 3, 8)

// // console.log(students.dStuPoints(stanley, draxler).point)
// let info:all = students.dStuPoints(stanley, draxler)
// console.log(`${info.point}m is the distance between ${info.nameA} and ${info.nameB}`)
// let mes:all = students.dStuPoints(zion, regina)
// console.log(`${mes.point}m is the distance between ${mes.nameA} and ${mes.nameB}`)

// console.log(`if i want to pass a message i'll pass it through ${tobi.getstu} the class rep`)



// console.clear();

// interface ipoint {
//     name:string;
//     xPoint:number;
//     yPoint:number;
// }
// interface iResult {
//     nameA:string;
//     nameB:string;
//     point:number;
// }


// class studentPoint {
//     name:string;
//     xPoint:number;
//     yPoint:number;
//     static total: number = 0
//     constructor(name:string, xPoint:number, yPoint:number){
//       this.name = name;
//       this.xPoint = xPoint;
//       this.yPoint = yPoint;
//       studentPoint.total++
//     }

//     get getStudent() {
//         return{name:this.name, xPoint:this.xPoint, yPoint:this.yPoint}
//     }

//     set changeXpoint(value:number){
//         this.xPoint = value
//     }

//     set changeYpoint(value:number){
//         this.yPoint = value
//     }

//     static getStudentDistance(studentA:ipoint, studentB:ipoint) {
//        let newPointX = studentA.xPoint - studentB.xPoint
//        let newPointY = studentA.yPoint - studentB.yPoint

//        let point = Math.sqrt(Math.pow(newPointX, 2) + Math.pow(newPointY, 2));

//        return {nameA: studentA.name, nameB: studentB.name, point};

//     }
// }

// let isaac = new studentPoint("Isaac", 3 , 6)
// let ekene = new studentPoint("ekene", 5 , 8)
// let frank = new studentPoint("frank", 2 , 7)
// let emma = new studentPoint("Emma", 4 , 9)
// let jemima = new studentPoint("jemima", 1 , 8)

// console.log(isaac.getStudent);
// console.log(studentPoint.total)

// let result: iResult = studentPoint.getStudentDistance(isaac, ekene)
// console.log(`The Distance between ${result.nameA} and ${result.nameB} is ${result.point.toFixed(2)}m`)

//1
// console.log(`${result.point.toFixed(2)}m is the distance of ${result.nameA} from ${result.nameB}`)


// let x = 4.1503
// console.log(Math.floor(x))
// console.log( x.toFixed(2))
// console.log()







interface all{
    name:string
    hPoint:number
    vPoint:number
}
interface int{
    nameA:string
    nameB:string
    point:number
}
interface iResult{
    myName:string;
    yourName:string;
    point:any
}

class assgn {
    name:string
    hPoint:number
    vPoint:number
    static total:number = 0
    static totalStudent:Array<assgn> = []


    constructor(name:string, hPoint:number, vPoint:number){
      this.name = name;
      this.hPoint = hPoint;
      this.vPoint = vPoint;
      assgn.total++
      assgn.totalStudent.push(this)
    }

    set changeName (value:string){
      this.name = value
    }

    get getNames(){
       return this.name
    }

    static getStuDis (stuA:all, stuB:all){
        let newPointH = stuA.hPoint - stuB.hPoint
        let newPointV = stuA.vPoint - stuB.vPoint

        let point = Math.sqrt (Math.pow(newPointH, 2) + Math.pow(newPointV, 2))

        return {nameA:stuA.name , nameB:stuB.name , point}
    }

     static getMyPoFrmSt(){
        const myDataSample = assgn.totalStudent;
        let result : iResult[] = []
        for(let i of myDataSample){
            let newPointH = assgn.totalStudent[0].hPoint - i.hPoint
            let newPointV = assgn.totalStudent[0].vPoint - i.vPoint           
            let point = Math.sqrt (Math.pow(newPointH, 2) + Math.pow(newPointV, 2))            
            result.push({myName: assgn.totalStudent[0].name, yourName:i.name, point: parseFloat(point.toFixed(2)) })
        }   
        return result 
      }
      
      
      static getFarthestSudent(){
        const myDataSample = assgn.totalStudent;
        let result : iResult[] = []
        for(let i of myDataSample){
            let newPointH = assgn.totalStudent[0].hPoint - i.hPoint
            let newPointV = assgn.totalStudent[0].vPoint - i.vPoint           
            let point = Math.sqrt (Math.pow(newPointH, 2) + Math.pow(newPointV, 2))            
            result.push({myName: assgn.totalStudent[0].name, yourName:i.name, point: parseFloat(point.toFixed(2)) })
        }
        let main = result.sort((a, b)=>{
            return b.point - a.point
          })[0]
        let mainResult = `${main.yourName} is the farthest student from ${main.myName} the distace between us is ${main.point}m`
        return mainResult
      }

      static getNearestSudent(){
        const myDataSample = assgn.totalStudent;
        let result : iResult[] = []
        for(let i of myDataSample){
            let newPointH = assgn.totalStudent[0].hPoint - i.hPoint
            let newPointV = assgn.totalStudent[0].vPoint - i.vPoint           
            let point = Math.sqrt (Math.pow(newPointH, 2) + Math.pow(newPointV, 2))            
            result.push({myName: assgn.totalStudent[0].name, yourName:i.name, point: parseFloat(point.toFixed(2)) })
        }
        let main = result.sort((a, b)=>{
            return b.point - a.point
          })[4]
        let mainResult = `${main.yourName} is the nearest student from ${main.myName} the distace between us is ${main.point}m`
        return mainResult
      }

}


let me = new assgn("Me", 2, 9)
let khalid = new assgn("Khalid", 3, 8)
let joan = new assgn("Joan", 4, 7)
let jesica = new assgn("Jesica", 5, 6)
let ayo = new assgn("Ayo", 1, 7)
let tobi = new assgn("Tobi", 6, 9)
console.log();

console.log(assgn.getFarthestSudent());
console.log();

console.log(assgn.getNearestSudent());
console.log();

console.log(`If i want to pass a message i'll pass it through ${tobi.getNames} the class rep`)




//2
// let outcome: int  =  assgn.getStuDis(me, jesica)
// console.log(`'${outcome.point.toFixed(2)}m' is the distance between ${outcome.nameA} and ${outcome.nameB} and it's the longest distance from me `)

// console.log()

// //3
// let info: int = assgn.getStuDis(me, khalid)
// console.log(`'${info.point.toFixed(2)}m' is the distance between ${info.nameA} and ${info.nameB} and it's the shortest distance from me `)

// console.log()

// //4
// console.log(`if i want to pass a message i'll pass it through '${tobi.getNames}' the class representative`)


























let arr:{name:string, age:number, score:number}[] = [
    {
        name:"ebuka",
        age: 60,
        score:10
    },
    {
        name:"ebuka",
        age: 20,
        score:9
    },
    {
        name:"ebuka",
        age: 40,
        score:8
    },
    {
        name:"ebuka",
        age: 40,
        score:7
    },
    {
        name:"ebuka",
        age: 50,
        score:8
    }
]

for(let i of arr){
  if(i.age === 60){
    // console.log("sharp")
  }else{
    // console.log("still young")
  }
}

