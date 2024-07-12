//Write a JavaScript function to generate an array of specified length, filled with 
//integer numbers, increase by one from starting position.

  function arrayOfLength(n, items)
  {
    let arr = [];

    for(let i=0; i<n; i++)
    {
        arr.push(items +i);
    }
    console.log(arr);

  }
  arrayOfLength(5, 3);
