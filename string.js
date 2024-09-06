// let str1 = 'minhaj uddin';
// let str2 = 'minhaj uddin';
// let str3 = `minhaj uddin`;
// let str4 = new String('minhaj uddin'); //object type
// let str5 = String('minhaj uddin'); //string type
// console.log(str1, str2, str3, str4, str5);

//immutable
// let string1 = 'minhaj tapader';
// string1[3] = 'jk'; //not changing the value cause immutable
// console.log(string1);

//case change
// let caseValue = 'minu';
// console.log(caseValue.toUpperCase());
// let caseValue1 = ',mMinu';
// console.log(caseValue1.toUpperCase());

//string methods
// let str = 'min haj ';
// console.log(str.trim());
// console.log(str.startsWith('n'));
// console.log(str.slice(1, 2));
// console.log(str.substring(0, 2));
// console.log(str.split(' '));
// console.log(str.split(' ').join(''));
// console.log(str.concat(' ').concat('uddin'));
// console.log(str.includes('k'));

//reverse string
//1
// let str = 'min haj';
// let ans = [];
// for (let index = 0; index < str.length; index++) {
//   ans.unshift(str[index]);
// }
// console.log(ans.join(''));

//2
// let str = 'min haj';
// let ans = '';
// for (let index = 0; index < str.length; index++) {
//   ans = str[index] + ans;
// }
// console.log(ans);

//3
// let str = 'min haj';
// let i = 0;
// let j = str.length - 1;
// str = str.split('');
// while (i < j) {
//   let temp = str[i];
//   str[i] = str[j];
//   str[j] = temp;
//   i++;
//   j--;
// }
// console.log(str.join(''));

//check a string contain all vowel or not
//1
// let str2 = 'minazelot';
// let ans2 =
//   str2.includes('a') &&
//   str2.includes('e') &&
//   str2.includes('i') &&
//   str2.includes('o') &&
//   str2.includes('u');
// console.log(ans2);

//2
// let str2 = 'minazelotou';
// let ans2 = [];
// for (let i = 0; i < str2.length; i++) {
//   if (
//     str2[i] === 'a' ||
//     str2[i] === 'e' ||
//     str2[i] === 'i' ||
//     str2[i] === 'o' ||
//     str2[i] === 'u'
//   )
//     if (ans2.includes(str2[i]) === false) {
//       ans2.push(str2[i]);
//     }
// }
// let res = ans2.join('').length === 5 ? true : false;
// console.log(res);
