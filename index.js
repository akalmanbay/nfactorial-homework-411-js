// 1
const user = {};
user['name'] = prompt("Как Вас зовут?");
user['name'] = prompt("Ваш возраст?");
user['name'] = prompt("Ваш пол?");
console.log(user);

//2
isNumber = !isNaN(Number(prompt('Напишите число')));
if (isNumber) {
    alert('Numeric!')
}

//3
let a = +prompt('a?', '');
switch (a) {
    case 0:
        alert(0);
    case 1:
        alert(1);
    case 2:
        alert('2,3');
        break;
    case 3:
        alert('2,3')
        break;

}

//4
sum = 0
for (let i = 0; i <= 100; i += 2) {
    sum += i
}
console.log(sum)

let i = 0
while (i < 3) {
    alert(`number ${i}!`);
    i++
}