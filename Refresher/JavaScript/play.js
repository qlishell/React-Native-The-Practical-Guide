var name = "Max";
var age = 29;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
    return "Name is " + userName + ", age is " + userAge + " and the user has hobbies: " + userHasHobby;
}

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data");
        }, 1500);
    });
}

async function fetchDataAndLog() {
    const data = await fetchData();
    console.log(data);
    const moreData = await fetchData();
    console.log(moreData);
}

console.log(summarizeUser(name, age, hasHobbies));
console.log("object");
fetchDataAndLog();
