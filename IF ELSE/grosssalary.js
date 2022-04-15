var basic_salary = int(input("Enter your basic salary: "))
var gross_salary = basic_salary + hra + da
if (basic_salary <= 10000){
    hra = 20* basic_salary/100
    da = 80 * basic_salary/100}
else if (basic_salary<=20000){
   hra = 25* basic_salary/100
   da = 90* basic_salary/100}
else if(Basic_Salary > 20000){
   hra = 30 * basic_salary/100
   da = 95 * basic_salary/100}
// gross_salary = basic_salary + hra + da
console.log(f,"The gross salary is gross_salary.");

