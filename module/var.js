const odd = '홀수';
const even = '짝수';

// module.exports = {
//     odd,
//     even, // 키와 값이면 생략해도됨 odd : odd
// }; // 외부에 쓰고싶은 변수들을 지정

module.exports = [odd, even]; //배열도됨

module.exports = {odd, even}; //한두개넘길때는 객체로 넘겨줌 보통