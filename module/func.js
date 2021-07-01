const value = require('./var') //..은보모 .은 현재폴더노드에서 알아서 제공 require

const {odd, even} = require('./var'); // 바로 이렇게 구조분해로 줄수도 있음

function checkodd(value){
    if(value % 2){
       return odd;
    } 
    else{
        return even;
    }

}

module.exports = checkodd;
//export default checkodd;
// module.exports = {
//     checkodd,
//     odd,
//     even,
// }; // 단 한번만 쓸 수 있다.

console.log(checkodd(value));
