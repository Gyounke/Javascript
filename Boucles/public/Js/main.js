// // 1. Exo 1 Boucles FOR
// //     - Creer une variable de type array et inserez toutes les personnes de la classe
// let classe = ["Aleks","Amanda","Elias","Eliot","Gursel","Imane","Jade","Kevin","Louis","Marcyl","Mich","Samy","Ilias","Adil","Isma","Nicola","Batou","Calvin","Momo"]
// //     - A l'aide d'une boucle for, dites `bonjour + prenom` à chaque personne du tableau



// for ( i =0; i<classe.length; i++) {
//     console.log(`Bonjour ${classe[i]} !`);
// }
// 2. Exo 2 Boucles FOR (let)
//     - Dans un prompt inserés un nombre 

// let nombreCool = +prompt("Balance un chiffre");

// //     - A l'aide d'une boucle for, affichez les nombres de 0 jusqu'au nombre que vous avez choisi.

// for ( i = 0; i < nombreCool +1; i++) {
//     console.log(i);
// }

// // 3. Exo 3 Boucles FOREACH
// //      - Creer une varaible de type array et inserez toutes les personnes de la classe

// let classe = ["Aleks","Amanda","Elias","Eliot","Gursel","Imane","Jade","Kevin","Louis","Marcyl","Mich","Samy","Ilias","Adil","Isma","Nicola","Batou","Calvin","Momo"];

// //      - A l'aide d'une boucle foreach, dites bonjour + prenom à chaque personne du tableau
// classe.forEach (Element =>{
//     console.log(Element);
// }); 
// 4. Exo 4 Boucle FOREACH
//     - Créez un un array qui contient 5 éléments
//     - Affichez touts les éléments a l'aide d'une boucle foreach

// Exercice 2 Boucles

// // 1. Exo 1 
// //     ## Déclarer une variable qui se nomme 'multiplicateur' valant 5

// let multiplicateur = 5;
// let choix = +prompt("Jusqu'à cb va la multiplication?")

// //     ## Utiliser une boucle for pour créer une table de multiplication allant jusqu'a 9 et apparaissant dans la console sous le format 5 x 1 = 5 etc.

// // for (i = 0; i<choix +1; i++) {
// //     console.log(`${i} multiplié par ${multiplicateur} valent ${i*multiplicateur}`);
// // }

// // 2. Exo 2
// //     ## La même chose sauf qu'on incrémente par deux
// for (i = 0; i<choix +1;) {
//     console.log(`${i} multiplié par ${multiplicateur} valent ${i*multiplicateur}`);
//     i=i+2;
// }

// 3. Exo 3
//    - Faire une boucle décendante pour les nombres pairs de 20 à 0
//         // Ex: 20-18-16, ect.

// for (let i=20; i>0; i-2) {
//     console.log(i);   
// }

// // 4. Exo 4
// //     - Créer un tableau avec les prénoms des gens de la classe
// let classe = ["Aleks","Amanda","Elias","Eliot","Gursel","Imane","Jade","Kevin","Louis","Marcyl","Mich","Samy","Ilias","Adil","Isma","Nicola","Batou","Calvin","Momo"];

// //     - Avec l'aide d'une boucle, mettre les prénoms ayant plus de 5 caractères dans un second tableau qui se nomme 'longPrenoms'
// let prenomsLongs = [];
// let prenomsCourts = [];
// for (i=0; i<classe.length ; i++) {
//     if(classe[i].length>5) {
//         prenomsLongs.push(classe[i]);
//     } else {
//         prenomsCourts.push(classe[i]);
//     }
// }
// console.log(prenomsCourts, prenomsLongs);

// // 5. Exo 5
// //     - Créer un tableau qui se nomme 'sommes' avec une multitude de valeurs numérique
//     let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];
// //     - créer un tableau qui se nomme 'grossesSommes'. Si la valeur excède 60, pousser les dans ce tableau et les retirer du tableau sommes
//     let grossesSommes = [];

// for (i =0;  i< sommes.length;i++) {
//     if (sommes[i-1]> 60) {
//         grossesSommes.push(sommes[i-1]);
//         sommes.splice(i-1,1);
//         i--;
//     } else {
//         console.log ("ce chiffre peut rester dans sommes");
//     }
// }
// console.log(grossesSommes, sommes);

// // 6. Exo 6
// //     - Voici un tableau : 
//   let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];

// //     - Triez le contenu du tableau donnees en verifiant le type de chaque donnée
// let nature = [];
// for (i =1; i < donnees.length; i++){
//     nature.push(typeof donnees[i-1]);
// }
// console.log(nature);
// //     - Creez 4 Tableaux : 'typeString' , 'typeNumber' , 'typeObject' , 'typeAutre.

// // typeof arr[i] === 'string')

// let typeString = [];
// let typeNumber = [];
// let typeObject = [];
// let typeAutre = [];

// for (i =1; i < nature.length; i++){
//     if (nature[i] == "string") {
//     typeString.push(donnees[i]);
//     } else if (nature[i] == "number") {
//         typeNumber.push(donnees[i]);
//     } else if (nature[i] == "object") {
//         typeObject.push(donnees[i]);
//     } else {
//         typeAutre.push(donnees[i]);
//     }
// }
// console.log(typeNumber);
// console.log(typeString);
// console.log(typeObject);
// console.log(typeAutre);


//     - Videz le tableau "donnees" en redistribuant avec l'aide de condition et d'une function prédéfinie trouvé sur internet dans les bons tableaux.

// // 7. Exo 7
// //    - Créez un tableau avec les prénoms de toute la classe, et mettez leur première lettre en majuscule, la dernière lettre aussi, et le reste en minuscule
// let classe = ["Aleks","Amanda","Elias","Eliot","Gursel","Imane","Jade","Kevin","Louis","Marcyl","Mich","Samy","Ilias","Adil","Isma","Nicola","Batou","Calvin","Momo"];
// let premiere = [];
// let derniere = [];
// let centre= [];

// for (i=0; i<classe.length; i++) {
//     premiere[i] = classe[i].charAt(0).toUpperCase();
//     derniere [i] = classe[i].charAt(classe[i].length-1).toUpperCase();
//     centre[i] = classe[i].slice(1,classe[i].length-1);
//     classe[i]= premiere[i] + centre[i] + derniere[i];
// }
// console.log(premiere);
// console.log(derniere);
// console.log(centre);
// console.log(classe);

// // 8. Exo 8
// //    - Créez une variable avec cette valeur = "Bonjour à tous"
//   let phraseCool = "Bonjour à tous";
// //    - Vous devez faire en sorte d'avoir ce resultat à la fin : BoNjOuR A ToUs
// lettremaj = [];

// for (i=0; i < phraseCool.length;) {
//     lettremaj[i]= phraseCool[i].charAt().toUpperCase;
//     i=i+2;
// }
// console.log(lettremaj);
// console.log(phraseCool);
// 9. Exercice de puissance (Si vous le réussissez vous êtes des montres)

// Voici le tableau :

//   let tab = [1440, 1511, 1731, 1400, 1542, 1571, 1768, 1730, 1959, 1342, 1744, 872, 1237, 1846, 1597, 1583, 1711, 1499, 1679, 1895, 1875, 1928, 1728, 1673, 481, 1934, 673, 1704, 1916, 1958, 1821, 1649, 1640, 1802, 1732, 121, 1924, 1438, 1748, 1046, 1905, 1566, 1152, 1964, 1518, 1603, 1414, 1785, 1993, 1594, 1761, 1455, 1738, 1699, 1507, 1483, 1450, 1653, 1644, 19, 1340, 1227, 1353, 2009, 1188, 1228, 1898, 1941, 1515, 1766, 1351, 1980, 1378, 1702, 1620, 1729, 1279, 1384, 1894, 1770, 1853, 1161, 1970, 1986, 1669, 1938, 1602, 1190, 1822, 425, 1750, 1632, 1613, 1805, 1718, 1990, 1762, 1242, 1485, 1598, 1893, 1995, 1823, 1786, 1506, 1464, 1467, 1639, 1674, 1903, 1961, 1478, 1847, 1760, 1997, 2010, 899, 2000, 1488, 1243, 1891, 1504, 1693, 1176, 1391, 1563, 692, 1497, 1428, 1745, 1368, 1723, 1989, 1930, 1171, 1840, 1372, 1987, 1952, 1842, 1967, 1759, 1929, 1945, 1919, 1333, 1692, 1811, 1221, 1520, 1920, 1093, 1618, 1795, 1686, 1369, 1820, 1857, 1356, 1562, 2004, 1519, 1628, 1831, 1687, 1792, 1948, 927, 1789, 1546, 1338, 1614, 1472, 1494, 1979, 1936, 1577, 1147, 1446, 1683, 1375, 856, 1787, 1517, 1724, 1334, 1642, 1496, 1668, 1725, 1800, 1708, 1814, 1585, 1827, 1801, 1208, 1839, 1596, 1925];
//  let i = 0; 
// let j = 0;
// //  -  Trouve la combinaison de deux nombres dont le résultat est “2020”.

// for (i = 0; i< tab.length; i++) {
//     for (j=0; j <tab.length; j++) {
//         if ((tab[i]+tab[j]) == 2020){
//             console.log(`La somme de ${tab[i]} et ${tab[j]} donne le nombre 2020`)
//         } else {

//         }
//     }
// }
//  -  Trouve la combinaison de trois nombres dont le résultat est “2020”.

// for (i = 0; i < tab.length; i++) {
//     for (j = 0; j < tab.length; j++) {
//         for (l = 0; l < tab.length; l++) {
//             if ((tab[i] + tab[j] + tab[l]) == 2020) {
//                 console.log(`La somme de ${tab[i]} et ${tab[j]} et ${tab[l]} donne le nombre 2020`)
                
//             } else {
//             }
//         }
//     }
// }

// 10.

// let pyramide = [];

// for (i=0 ; i<11; i++) {
//     pyramide.push(1);
//     console.log(pyramide);
// }

// 11.

// 11.
//     - Vous allez créer un tableau avec 10 prénoms

// let noms = ["Aleks","Amanda","Elias","Eliot","Gursel","Imane","Jade","Kevin","Louis","Marcyl"];
// //     - Vous allez créer un tableau avec 10 chiffres d'entre 0 et 20
// let chiffres = [8, 14 , 19, 16 , 7 , 15, 13, 12, 5, 10];
// //     - Vous devez combiner ces deux tableaux :
// for  (i =0 ; i < noms.length; i++) {
//     console.log(`${noms[i]} a eu ${chiffres[i]} en Math`);
// }
//      // console.log(`${lepremiereprenom} a eu ${lepremierchiffre}/20 en Math`


// Boucles
// 1. let question = prompt("Trois nains vont a la mine, l'un prend une pioche, le deuxième prend une pelle, que prend le troisième?" +"(Réponse : le nain ______") + "ATTENTION, tant que tu ne répond pas a la question, la question réaparait";


// 2. Créez un tableau avec les élèves de la classe, et faites les passer dans un autre tableau

// let classe = ["Aleks","Amanda","Elias","Eliot","Gursel","Imane","Jade","Kevin","Louis","Marcyl","Mich","Samy","Ilias","Adil","Isma","Nicola","Batou","Calvin","Momo"];
// let transfert = [];

// classe.forEach (element => {
// transfert.push(element);
// });

// alert(transfert);

// 3. Créez un tableau avec des fruits, et tant que la personne veut supprimer un fruit, vous lui demandez lequel et il se supprime



// 4. Faites la même chose que l'exercice 2 avec une boucle foreach