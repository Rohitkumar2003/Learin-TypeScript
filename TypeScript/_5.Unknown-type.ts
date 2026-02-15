// ! Unknown

let notSure:unknown;
    notSure = 'a';

    if(typeof notSure === 'number') notSure.toFixed(2);
    if(typeof notSure === 'string') notSure.length;