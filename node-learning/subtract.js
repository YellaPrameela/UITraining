function subtraction(a,b)
{
    return a-b;
}

function dummySubtraction(a,b)
{
    return a-b;
}

module.exports.subtractionFunc= {
    subtraction,
    dummySubtraction
}

// For "require" statement we need to give the file name that we want/require.


/* The var that acquires the required file using "require" statement can call the exposed variables and 
   functions using the name of module <>  that we used in "module.exports.<this name>" like
   <this name>.<var_name> (OR) <this name>.<function_name>

*/

/* To export multiple functions and variables from a file using one exports statement.
   do it as follows:
   module.exports.<name used by acquired variables>= {
                                <var_1>,
                                <var_2>,
                                .
                                .
                                .
                                <var_n>,
                                <function_1>,
                                .
                                .
                                .
                                <function_n> 
                            }

    *** To use them, use it as follows:  
                                        <name used by acquired variables>.<your required var (OR) function>
*/

