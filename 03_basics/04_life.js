// Immediatly Invoked Function Expression (LIFE)


(function chai(){
    //named LIFE    
    console.log(`DB CONNECTED`)
})();

( (name) => {
    console.log(`Db CONNECTED TWO ${name}`);
}) ('hitesh')