
let studentName: string=
 "Rufai Samuel Tobi Prince-John Isaac Victor Francis Habeeb Joan Daniel Ekene  Zion Wisdom Delight Stanley Jessica Ayomide Regina Jemima Khalid Franklin Dennis Emmanuel Chinedu";
  

interface iData{
    name:string;
    score:number;
} 
interface fann{
    school:string;
    Average:number;
}
 
class school{
    branch:string;
    static count:number = 0;
    static mySchool:Array<school> = [];

    constructor(branch:string){
     this.branch = branch;
     school.count++;
     school.mySchool.push(this);
    }
    
    registerStudents():any {
     let numb:number = Math.floor(Math.random() * (20 - 5 +1)) + 5;
      
     return Array.from({length:numb}, () => {
        let studentArr:string[] = studentName.split(" ");
    
        let randNumb:number = Math.floor(Math.random() * studentArr.length);
    
        let score:number = Math.floor(Math.random() * (100 - 45 +1)) +45;
    
        return {name:studentArr[randNumb], score}
    })
  }
  
  
     getTopInstanceResult(...args: any[]) {
        let res = args.flat();
        return res.sort((a, b)=>{
          return b.score - a.score;
        })[0];
     }

     static getTopResult(...args: school[][]) {
        let data: iData[] = []
        for(let i of args){
          
         let x:any =  i.sort((a:any, b:any)=>{
              return b.score - a.score
           }) [0]
           data.push(x);
        }
        return data.sort((a, b)=>{
            return b.score - a.score
        })
     }
      //4
     static getHiStuFrD3Sc (...args:school[][]){
        let data: iData[] = []
        for(let i of args){

            let y:any = i.sort((a:any, b:any)=>{
                return b.score - a.score
            })[0]
            data.push(y)
        }
         let final:any =  data
         
         
         if (final[0].score > final[1].score && final[0].score > final[2].score){
            console.log(`${final[0].name} is from 'schoolA' he/she is the smartest student in the three schools, this student got '${final[0].score}'`)
         }else if(final[1].score > final[0].score && final[1].score > final[2].score){
            console.log(`${final[1].name} is from 'schoolB' he/she is the smartest student in the three schools, this student got '${final[1].score}'`)
         }else if(final[2].score > final[0].score && final[2].score > final[1].score){
            console.log(`${final[2].name} is from 'schoolC' he/she is the smartest student in the three schools, this student got '${final[2].score}'`)
         }
        
     }


     //5
     static scNedChngOfTeach(...args: any[]) {
        let data: iData[] = [];
        for(let i of args){
         // console.log(i)
         let res: any = i 

         .map((el:any)=>{
            return el.score
        }).reduce((a, b)=>{
            return a + b;
        })/ i.length;

        data.push(res);
        }
         let ave: any = data
    
        if(ave[0] < ave[1] && ave[0] < ave[2]){
            console.log(`SchoolA needs a change of Teachers their average score '${ave[0].toFixed(2)}' it's lower compared to SchoolB and SchoolC `)
         }else if(ave[1] < ave[0] && ave[1] < ave[2]){
            console.log(`SchoolB needs a change of Teachers their average score '${ave[1].toFixed(2)}' it's lower compared to SchoolA and SchoolC `)
         }else if(ave[2] < ave[0] && ave[2] < ave[1]){
            console.log(`SchoolC needs a change of Teachers their average score '${ave[2].toFixed(2)}' it's lower compared to SchoolA and SchoolB `)
         }
     }


     
     static getSchoolAverageResult(...args:any[]) {
        let data:any []= [];
        for(let i of args){
            // console.log(i)
         let res: number = i.Average 
         .map((el:any)=>{
            return el.score
        }).reduce((a, b)=>{
            return a + b;
        })/ i.Average.length

        data.push({school:i.school, res})
        
        // return data
        const goodPoint = data.filter((el)=>{return el.res > 70})
        const badPoint = data.filter((el)=>{return el.res < 70})
        return{badPoint, goodPoint}
     }
      }
} 

let schoolA = new school("Tolu");
let schoolB = new school("Wilma");
let schoolC = new school("OjoSc");

console.log(
school.getSchoolAverageResult(
 {school:schoolA.branch, Average:schoolA.registerStudents()},
 {school:schoolB.branch, Average:schoolB.registerStudents()},
 {school:schoolC.branch, Average:schoolC.registerStudents()}
 )
 )

// console.log(school.scNedChngOfTeach(
//     schoolA.registerStudents(),
//     schoolB.registerStudents(),
//     schoolC.registerStudents()
//    ))


//    console.log(school.getTopResult(
//     schoolA.registerStudents(),
//     schoolB.registerStudents(),
//     schoolC.registerStudents()
//    ))

//  console.log(schoolA.getTopInstanceResult());


// console.log(schoolA.startPlaying("guess"))

// let smartA = schoolA.registerStudents()
// let ansA = smartA.sort((a, b)=>{
//     return b.score - a.score
// })
// console.log(smartA[0])

// let smartB = schoolB.registerStudents()
// let ansB = smartB.sort((a, b)=>{
//     return b.score - a.score
// })
// console.log(smartB[0])

// let smartC = schoolC.registerStudents()
// let ansC = smartC.sort((a, b)=>{
//     return b.score - a.score
// })
// console.log(smartC[0])




// let studentArr:string[] = studentName.split(" ");

//
//  let randNumb:number = Math.floor(Math.random() * 100);

//  console.log(randNumb)
// console.log(studentArr[randNumb])



// let numb:number = Math.floor(Math.random() * (20 - 5 +1)) + 5;


// let newData = Array.from({length:numb}, () => {
//     let studentArr:string[] = studentName.split(" ");

//     let randNumb:number = Math.floor(Math.random() * studentArr.length);

//     let score:number = Math.floor(Math.random() * (100 - 45 +1)) +45;

//     return {name:studentArr[randNumb], score}
// })

// console.log(newData);
// console.log(newData.length);



// const getNumb = (max: number, min: number) =>{
//     let rand  = Math.floor(Math.random() * (max - min + 1 ) ) + min;
//     return rand
// }

// console.log(getNumb(100, 45));
// console.clear()

const getFunct = (...args) => {
//   console.log(args)
}
// getFunct(2, 6)

// const arrData = [
//     { name: 'Stanley', score: 45 },
//     { name: 'Ekene', score: 87 },
//     { name: 'Ayomide', score: 97 },
//     { name: '', score: 51 },
//     { name: 'Jemima', score: 47 }
//   ]

// console.log(
//     arrData.map((el)=>{
//         return el.score
//     }).reduce((a, b)=>{
//         return a + b
//     })/ arrData.length
// )























