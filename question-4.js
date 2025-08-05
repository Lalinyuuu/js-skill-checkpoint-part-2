//แก้ debug มี


const alphaTech = [
    { name: 'Alice', age: 23, department: 'Engineering' },
    { name: 'Bob', age: 19, department: 'Design' }
  ];
  
  const betaSoft = [
    { name: 'Charlie', age: 28, department: 'Engineering' },
    { name: 'David', age: 17, department: 'Support' }
  ];
  
  const gammaDev = [
    { name: 'Eve', age: 25, department: 'Marketing' },
    { name: 'Faythe', age: 18, department: 'Engineering' },
    { name: 'Grace', age: 20, department: 'Engineering' }
  ];
  
  //เพิ้ม บ
const alpha = alphaTech.map(employ => ({ ...employ, company: 'alphaTech' }));
const beta = betaSoft.map(employ => ({ ...employ, company: 'betaSoft' }));
const gamma = gammaDev.map(employ => ({ ...employ, company: 'gammaDev' }));

//const allEmployees = alphaTech.concat(betaSoft, gammaDev);  << concat?
const allEmployees = alpha.concat(beta, gamma);

// const result = allEmployees.filter((employee) => {
//   return employee.department === 'Enginering'*< ผิด && employee.age > 20;
// }).map((employee) => {
//   return {
//     name: employee.name,
//     company: '' 
//   };
// });

//  กรอง +แปลง
const result = allEmployees
  .filter((employee) => {
    return employee.department === 'Engineering' && employee.age >= 20;
  })
  .map((employee) => {
    return {
      name: employee.name,
      company: employee.company
    };
  });



console.log(result);
// [
//     { name: 'Alice', company: 'alphaTech' },
//     { name: 'Charlie', company: 'betaSoft' },
//     { name: 'Grace', company: 'gammaDev' }
// ]
  

