
/* HeadTitle Job Search Placeholder */
function addToPlaceholder(toAdd, el) {
    el.attr('placeholder', el.attr('placeholder') + toAdd);
    // Delay between symbols "typing" 
    return new Promise(resolve => setTimeout(resolve, 100));
}

function clearPlaceholder(el) {
    el.attr("placeholder", "");
}

function printPhrase(phrase, el) {
    return new Promise(resolve => {
        // Clear placeholder before typing next phrase
        clearPlaceholder(el);
        let letters = phrase.split('');
        // For each letter in phrase
        letters.reduce(
            (promise, letter, index) => promise.then(_ => {
                // Resolve promise when all letters are typed
                if (index === letters.length - 1) {
                    // Delay before start next phrase "typing"
                    setTimeout(resolve, 2000);
                }
                return addToPlaceholder(letter, el);
            }),
            Promise.resolve()
        );
    });
}

function headtitlejobsearch(){
    let phrases = [
        "Aradığınız Pozisyonu veya Sektörü Yazın...",
        "Frontend Developer",
        "Muhasebe",
        "Satış Temsilcisi",
        "İstanbul Anadolu Yakası",
        "Moda Tasarımcısı",
        "Finans ve Mali İşler",
        "Backend Developer"
    ];

    printPhrases(phrases, $('.headtitlejobsearch'));
}

function printPhrases(phrases, el) {
    phrases.reduce(
        (promise, phrase) => promise.then(_ => printPhrase(phrase, el)),
        Promise.resolve()
    );
}

headtitlejobsearch();
/* HeadTitle Job Search Placeholder */




