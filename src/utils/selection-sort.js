

/**
 * 2. Algorithme de tri de sélection
 * Nous nous concentrons sur la recherche de la plus petite valeur dans le tableau pour effectuer le tri.
 * Nous supposons que le premier élément du tableau est le plus petit.
 * Nous comparons cet élément à l'élément suivant du tableau.
 * Si l'élément suivant est plus petit que celui à portée de main, nous définissons l'élément suivant comme la nouvelle valeur la plus petite.
 * Nous continuons à répéter ces étapes jusqu'à ce que nous atteignions la fin du tableau.
 * Lorsque nous trouvons une valeur dans le tableau plus petite que celle avec laquelle nous avons commencé, nous échangeons leurs positions.
 * Nous continuons à faire les comparaisons et à passer au point suivant. Jusqu'à ce que l'ensemble du tableau soit trié.
 * Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list.
 */

 function selectionSort(array) {
    // this is for make this fonction pear (Shallow copy of the array) fn (that mean not change the array params);
    const arr = array.slice()
    //arr.lenght - 1 ==> makce the swap because the first one is orrdred
    for(let i = 0 ; i < arr.length - 1 ; i++) {
        let minIndex = i;
        // the second loop is once we have selecing the one is selecing with i and with j (second iteration) we  look for the must minimum value
        for(let j = i +1  ;  j < arr.length ; j++){
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }

        }

        // const temp = arr[i];
        // arr[i]= arr[minIndex];
        // arr[minIndex]= temp

        [arr[i], arr[minIndex]]= [arr[minIndex], arr[i]];

    }

    return arr;

}

export default selectionSort;
