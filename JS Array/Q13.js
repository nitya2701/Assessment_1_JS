//Write a JavaScript program to add items in an blank array and display items

let arr=[];
function addElem(add)
{
    
    arr.push(add);

}
function display()
{
    for(let i =0; i<arr.length; i++)
        {
            console.log("Element "+ i + " is " + arr[i]);
        }   
}
display(10);
display(11);
display(12);
