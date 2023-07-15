const baseUrl = "https://jsonplaceholder.typicode.com/posts";

async function getPost(num:number) {
    const response = await fetch(baseUrl);
    const json = await response.json();
    console.log(json[num].title);
    return json;
}


const showPosts = async () => {
    await getPost(15)
    .catch(() => {console.log(new Error("Error"))})
    await getPost(23)
    .catch(() => {console.log(new Error("Error"))})
    await getPost(7)
    .catch(() => {console.log(new Error("Error"))})
    await getPost(3)
    .catch(() => {console.log(new Error("Error"))})
}

showPosts();

//No await + .then() variant

const showPostRow = () => {
    getPost(13)
    .catch(() => {console.log(new Error("Error"))})
    .then(() => getPost(20))
    .catch(() => {console.log(new Error("Error"))})
    .then(() => getPost(5))
    .catch(() => {console.log(new Error("Error"))})
    .then(() => getPost(1))
    .catch(() => {console.log(new Error("Error"))})
}

showPostRow();