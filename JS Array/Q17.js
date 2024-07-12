//Write a JavaScript program to shuffle an array

function shuffleArray(array)
{
    for (var i = array.length - 1; i > 0; i--) { 
  
        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));
                   
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
       
    return array;
}

function show() {
    var arr = [1, 2, 3, 4, 5, 6, 7];
    var arr1 = shuffleArray(arr);
    console.log(arr1);
}

show();