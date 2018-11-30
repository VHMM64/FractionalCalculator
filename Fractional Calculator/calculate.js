
/* Function is activated whe the "Calculate" button is pressed */
function calculate(){

    /* The .split method, well, splits the numbers wheres there's a "/" and puts them into an arrey */
    /* Here we get the number that was typed and split it */
    var x = (document.getElementById('n1').value).split("/");

        /* Get the separeted numbers */
        /* We parse them into Float so that the calculation can be done, until this point, the "x" variable was undefined */
        var x1 = parseFloat(x[0]);
        var x2 = parseFloat(x[1]);

    /* Same thing with the other input */    
    var y = (document.getElementById('n2').value).split("/");
        var y1 = parseFloat(y[0]);
        var y2 = parseFloat(y[1]);

    /* The calculation is made and its result is stored in "z" */    
    var z = (x1/x2) + (y1/y2);

    /* Transform into integer for simplification purposes */
    parseInt(z,10);

    /* Validates if "z" is a Number or not */
    if(isNaN(z)){
        alert('type in only numbers')
    }

    /* The result is shown as a alert on the page */
    else{
        alert(z); 
    }

}