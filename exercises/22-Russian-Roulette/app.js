

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (spinnerPosition) => {
    
    if (spinChamber()===spinnerPosition) return ("You're dead!");
    else return ("Keep playing!");
};

var bulletPosition = 4;
console.log(fireGun(bulletPosition));