function randomcase(input)
{
    var text = "";
    var possible = input.value;
    var random;
    for( var i=0; i < possible.length; i++ ) {
        random = (Math.floor(10*Math.random()))%2;
        if (random==1)
            text += (possible.charAt(i)).toUpperCase();
        if (random==0)
            text += (possible.charAt(i)).toLowerCase();
    }
    console.log(input);
    return text;
}