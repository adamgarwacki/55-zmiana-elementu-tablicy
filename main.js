function zmianaElementu(Arr) {
    for (i = 0; i < Arr.length; i++) {
        if (Arr[i] > 10) {
            Arr[i] = 5;
            console.log(Arr[i]);
        } else {
            console.log(Arr[i]);
        }
    }
}

let Arr = [3, 15, 14];

zmianaElementu(Arr);