

/**
 * 1. Algorithme de tri des bulles
 *  le tri par bulles fonctionne en créant une boucle qui compare chaque élément du tableau avec un autre élément.
 * Si l'article comparé est plus petit que celui en main, nous échangeons leurs places. 
 *  Cela continue jusqu'à ce que nous ayons un laissez-passer où aucun élément du tableau n'est plus grand que l'élément qui est à côté.
 * Bubble Sort a une complexité temporelle O (n 2 ) et une complexité spatiale O (n).
 *
 * on compare l'element de gauche a  celui de la droit si l'element de gauche est plus grand interveti et on compare l'element qu'on a bouger
 * en repetant jusqu'a la fin des elements. a la fin on aura un tableau trié;
 *
 * A note la methode native short permet de trier le tableai
 *
 *  return array.sort((a,b) => {return a-b }  )
 *
 */
 function bubbleSort(array) {
    // this is for make this fonction pear (Shallow copy of the array) fn (that mean not change the array params);
    const arr = array.slice();
    // arr.lenght - 1 , on compare un element si il a un suivant le dernier n'as pas de suivant (optimizaton code)
    for (let i = 0; i < arr.length -1 ; i++ ) {
        //  arr.lenght - 1 -i pas besoin de comparer les elements deja rangé a chaque boucle on renge lelement le plus petit (optimisation)
        for (let j = 0; j < arr.length  - 1 -i ; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
  }

  export default bubbleSort;
