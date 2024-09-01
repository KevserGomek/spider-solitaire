const shuffle = (array) => { //Fisher-yates shuffle alg.
    for (let i = array.length - 1; i > 0; i--) { //dizinin son elemanından eksilterek başla
        const j = Math.floor(Math.random() * (i + 1)); //rastgele tam sayı j üret (0 ile i arasında)
        [array[i], array[j]] = [array[j], array[i]]; //dizi elemanlarının yerlerini değiştirir
    }
    return array; //karılmış diziyi döner
};

export default shuffle;