
//We have Declared a function that that calculatesDemeritPoints then 
//Takes in an input speed as a parameter to recieve arguments being passed by a function
function  calculateDemeritPoints(speed){
    
    
    const speedLimit  = 70;
    //Here we have a  variable speedlimit and is being initialised with a value of 70 
    const  kmPerDemeritPoint = 5;
    //Here we have a  variable kmPerDemeritPoint and is being initialised with a value of 5

    if(speed <= speedLimit){

    //an if statement compares speed if its less than or equal to value of variable speedlimit
        console.log("ok");
        // outputs if the comparison is true
       

        return;
        // method helps to return  output after an if statement has executed
    }


    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

    // Here we have Declared  a variable demeritPoints then assigned it to a math function to take values of parameter
    // speed and variable speedlimit the subtract it and divide with demerit points

    if(demeritPoints >= 12){
       
    //Here we use an  if statement  to perform logical comparison between variable demeritpoints and 12
    // if its true it outputs a message of license suspended using console.log

        console.log("License Suspended");
    }else{
   

        // Here if condition is true outputs the points using a sting interpolation method 
        console.log(`points: ${demeritPoints}`);


    }

}




calculateDemeritPoints(100);

//Lastyly we callback our function and pass to it an argument 