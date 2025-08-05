// เริ่มเขียนโค้ดตรงนี้
// fetch.. + then +(map? filter?)// อย่าลืมแปลง json*
//มีกรองK fil + ดึง . 
//

async function getUsers() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
  
      const longName = users
        .map(user => user.name)
        .filter(name => name.length > 17);
  
      console.log(longName);
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  }
  
  getUsers(); 