const obj = {
    name: 'arafat',
    id: 20212203007,
    intake: 38
};
console.log(obj);
const str = JSON.stringify(obj);
console.log(str);
const parse = JSON.parse(str);
console.log(parse);