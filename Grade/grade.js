
// let score = 100;
// let grade;
// if(score >=0 && score <= 100){
//     if(score >= 90){
//         grade ='A'
//         console.log(grade);
//     }
//     else if(score >= 80){
//         grade ='B'
//     }
//     else if(score => 70){
//         grade = 'C'
//     }
//     else if(score >= 60){
//         grade ='D'
//     }
//     else(score <40)
//         grade ='E'
//     }
//     print('score:',score ,"and your Grade is"&{grade}) 
function studentGrading(){
let score =prompt("Enter score")
let grade;
// const msg= function(grade){
    // return `you Grade is'{grade}`
// }
if(score >=0 && score <= 100){
    if(score >= 79){
        grade ='A'
    }
    else if(score >59 && score <79){
        grade ='B'
    }
    else if(score >39 && score <49){
        grade ='C'
    }
    else if(score <40){
        grade ='D'
    }
    else{
        grade ='E'
    }
    
document.body.innerHTML=`you Grade is ${grade}`
}
else {
    document.body.innerHTML="invalid Score"
}
}
studentGrading()

