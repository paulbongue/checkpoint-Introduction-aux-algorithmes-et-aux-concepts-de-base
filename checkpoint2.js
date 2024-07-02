function insertionSort(arr) {
    // Parcours du tableau à partir du deuxième élément
    for (let i = 1; i < arr.length; i++) {
        // Stocker la valeur actuelle pour insérer
        let current = arr[i];
        // Déplacer les éléments du sous-tableau trié qui sont plus grands que la valeur courante
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Insérer la valeur courante à sa position correcte
        arr[j + 1] = current;
    }
    return arr;
}

// Exemple d'utilisation
let array = [5, 2, 4, 6, 1, 3];
console.log("Avant le tri :", array);
insertionSort(array);
console.log("Après le tri :", array);


/*procedure insertionSort(arr: tableau d'entiers)
    pour i de 1 à longueur(arr) - 1 faire
        current = arr[i]
        j = i - 1
        tant que j >= 0 et arr[j] > current faire
            arr[j + 1] = arr[j]
            j = j - 1
        fin tant que
        arr[j + 1] = current
    fin pour
fin procedure
*/