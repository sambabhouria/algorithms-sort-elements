

/**
 *  Algorithme de tri rapide
 * Quicksort est l'un des moyens les plus efficaces de trier les éléments dans les systèmes informatiques.
 * Quicksort fonctionne sur l'algorithme de division et de conquête
 *  Dans ce document, nous trouvons un élément pivot dans le tableau pour comparer tous les autres tableaux d'éléments,
 *  puis nous déplaçons les éléments d'une manière où tous les éléments avant nos éléments pivot sélectionnés
 *  sont plus petits et tous les éléments après l'élément pivot sont plus grands.
 * Une fois que nous avons fait cela, la clé est de continuer à le faire à plusieurs reprises et nous aurons notre tableau trié.
 *
 * Explication : on aun array [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
 * on prend la dernière valeur de l'arret comme pivet met a gauche les petit a droit les grands
 * A     note valeur pivot toujours la derniere valuer du tableau et on continue
 *

  Cette fonction est une fonction recursive
 */

 function quickSort(array) {

    // if(array.length === 1){
    //     return array;
    // }

    if(array.length <= 1){
        return array;
    }

    const pivot =  array[array.length -1] ;

    const leftArray = [];

    const rightArray = [];

    for (const el  of array.slice(0, array.length -1)) {
        el < pivot? leftArray.push(el) : rightArray.push(el);
    }
    return [...quickSort(leftArray), pivot , ...quickSort(rightArray)];

    // for(let i = 0 ; i < array.length - 1 ; i++) {
    //     if(array[i] < pivot) {
    //         leftArray.push(array[i])
    //     } else{
    //         rightArray.push(array[i]);
    //     }
    // }

    // if(leftArray.length > 0  &&  rightArray.length > 0 ) {
    //     return [...quickSort(leftArray), pivot , ...quickSort(rightArray)];

    // } else if(leftArray.length > 0) {

    //     return [...quickSort(leftArray), pivot]

    // } else {
    //     return [pivot, ...quickSort(rightArray)];
    // }

}

export default quickSort;
