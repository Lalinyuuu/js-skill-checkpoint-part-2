const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
// 1. ให้กรองข้อมูลนักเรียนที่มีคะแนนมากกว่า 50 filter
// 2. ให้เพิ่มคะแนนนักเรียนแต่ละคนที่ผ่านการกรองในข้อหนึ่ง 10% map
// 3. ให้หาผลรวมของคะแนนทั้งหมดจากข้อ 2 red
// 4. ให้นำคะแนนที่รวมแล้ว มาแสดงบนหน้าจอ Console ในรูปแบบ

const pass = students.filter(student => student.score > 50 );
const updated = pass.map(student => student.score * 1.10);
const total = updated.reduce((sum, score) => sum + score, 0);


console.log(`Total score is ${total}`); //ไม่ปัด
console.log("Total score is " + total.toFixed(1)); //ปัดเศษ