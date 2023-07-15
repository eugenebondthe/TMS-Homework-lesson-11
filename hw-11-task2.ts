const basicURL = "https://jsonplaceholder.typicode.com/todos";

async function getTodos() {
  const response = await fetch(basicURL);
  return await response.json();
}

async function printTodos() {
  let arr: object[] = [];
  await getTodos().then((res) => {
    for (let i = 0; i < res.length; i++) {
      arr.push({
        id: res[i].id,
        title: res[i].title,
      });
    }
  });
  return arr;
}

console.log(printTodos().then((arr) => console.log(arr)));
