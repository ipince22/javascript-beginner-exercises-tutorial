function getColor(colorNumber=0)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(){
    //defino arreglo
    var array= [];
    //bucle recorre cantidad alumnos 10
    for (let index = 1; index <=10; index++) {
            //obtengo el color de manera aleatoria
            let color = getColor(Math.floor(Math.random()*5));    
            //defino un objeto: idalumno,color-asignado
            let obj={
                alumno: index,
                color: color
            }
            //adiciono cada iteraccion un elemento al objeto
            array.push(obj);
        
    }
    //return array
    console.log(array);
}

//call the function below with the number of students in the class and print on the 
getAllStudentColors();

