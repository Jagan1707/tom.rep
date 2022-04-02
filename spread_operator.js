
var real_arr =[1,2,3,5,6];
real_arr.push(7);
var copy_arrr=[...real_arr];
console.log(real_arr);
console.log(copy_arrr);

const studentId ={
    name : "virat",
    age : 22,
    std : "Bsc"
}
const copy_studentId = {...studentId};
studentId.name ="dhoni";
console.log(copy_studentId);
console.log(studentId);

const student_details={
    1:{
        name :"kapil_dev",
        age : "22",
        std : "EEE"
    },
    2:{
        name : "Ricky_ponting",
        age : 23,
        std : "ECE"

    },
    3 :{
        name : "sahin_Tendulkar",
        age :  21,
        std : "B.Tech"
    }

}

console.log(student_details);
const copy_studentDetails ={...student_details};
student_details[1].name="dhoni";
console.log(copy_studentDetails);


