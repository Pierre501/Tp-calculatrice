function transformArrayToString(array)
{
    let display = "";
    for(let i = 0; i < array.length; i++)
    {
        display += array[i];
    }
    return display;
}

function pushElement(array, element)
{
    if(array.length == 1 && array[0] == "0")
    {
        array.pop();
        array.push(element);
    }
    else
    {
        array.push(element);
    }
}

function deleteElement(array)
{
    if(array.length >= 2)
    {
        array.pop();
    }
    else
    {
        array.pop();
        array.push("0");
    }
}

function formatTableau(array)
{
    let arrayFormat = [];
    let index = 0;
    let format = "";
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] == " &times; " || array[i] == " + " || array[i] == " - " || array[i] == " &divide; ")
        {
            arrayFormat[index++] = format;
            arrayFormat[index++] = array[i];
            format = "";
            continue;
        }
        format += array[i];
    }
    arrayFormat[index] = format;
    return arrayFormat;
}

function getMessageError(somme)
{
    let display = somme.toString();
    if(display == "Infinity" || display == "NaN")
    {
        display = "Math error";
    }
    return display;
}

function getResultatCalcul(array)
{
    let arrayFormat = formatTableau(array)
    let somme = parseFloat(arrayFormat[0]);
    for(let i = 1; i < arrayFormat.length; i++)
    {
        if(arrayFormat[i] == " &times; ")
        {
            somme *= parseFloat(arrayFormat[i+1]);
        }
        else if(arrayFormat[i] == " + ")
        {
            somme += parseFloat(arrayFormat[i+1]);
        }
        else if(arrayFormat[i] == " - ")
        {
            somme -= parseFloat(arrayFormat[i+1]);
        }
        else if(arrayFormat[i] == " &divide; ")
        {
            somme /= parseFloat(arrayFormat[i+1]);
        }
    }
    return getMessageError(somme);
}

function addElementSign(array, element)
{
    if(array[array.length-1] != " + " && array[array.length-1] != " - " && array[array.length-1] != " &times; " && array[array.length-1] != " &divide; ")
    {
        array.push(element);
    }
}

