
/* 1 */
let phrase = "Bonjour tout le monde         ";
/* 2 */
console.log(phrase.length);

/* 3 */
let clean = phrase.trim()
console.log(clean);

/* 4 */
console.log(clean.length);

/* 5 */
console.log(clean.substring(20));

/* 6 */
let nsm = clean.substring(7,21);
console.log(nsm);

/* 7 */
let plusnsm = "Bonjour" + nsm;
console.log(plusnsm)

/* 8 */
let bonjour2 = phrase.substring(0,7); 
console.log(bonjour2);

/* 9 */
let replace = "string" + nsm;
console.log(replace);

/*10 */
console.log( 5*Math.random());

/* 11 */
let upper4 = phrase[4].toUpperCase();
let upper8 = phrase[8].toUpperCase();
let pHraSe = phrase.substring(0,4)+ upper4+phrase.substring(5,8)+upper8+ phrase.substring(9,30);
console.log(pHraSe);

/* 12 */
console.log(bonjour2.lastIndexOf("o"));

/* 13 */
let nom = "blistein"
let up1 = nom[0].toUpperCase();
let up7 = nom[7].toUpperCase();
let BlisteiN = up1 + nom.substring(1,7) + up7;
console.log(BlisteiN);
