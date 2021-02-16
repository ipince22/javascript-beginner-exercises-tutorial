
//fix this function:
function startCounting()
{
	var counter = 100;
	while(counter <= 100)
	{
        console.log(counter);
        if(counter===0){
            counter=0;        
            break;
        } 
        counter --;        
	}
	
	return counter;
}

startCounting();