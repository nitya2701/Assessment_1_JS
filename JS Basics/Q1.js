/*Display date and time 
Sample Output : Today is : Friday.
Current time is : 4 PM : 50 : 22  */

function getDateGiven()
{
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const now = new Date();

    const day = days[now.getDay()];  //to take out the day from given list of days
    const min = now.getMinutes();    //to take out the minutes
    const sec = now.getSeconds();    //to take out the seconds
    let hr = now.getHours();         //to take out the hours required

    let Pd = "PM";

    if(hr>=12){           //condition to calculate AM or PM for Hour
        Pd = "PM"; 
        if (hr > 12) {
            hr = hr - 12;
        }
    }

    const currT = `${hr} ${Pd} : ${min} : ${sec}`;
    const output = `Today is : ${day} \nCurrent time is : ${currT}`
    console.log(output);
    
}
getDateGiven();
