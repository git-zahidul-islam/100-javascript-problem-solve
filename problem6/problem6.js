// How to flatten a multi-dimensional array


const smileys = ['🥹','😍',['hallo','hi','🦌','🥹'],'😍',['😍','😍'],'😍'];
const flatten = smileys.flat();
// console.log(flatten);

const smileys2 = ['😍',['🦌',['hallo','hi'],'🥹'],'😍',['😍','😍'],'😍'];

const flatten2 = smileys2.flat(Infinity);
console.log(flatten2);