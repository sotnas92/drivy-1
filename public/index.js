'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);



//Exercice 1 

/* Convert a string to a date 
** @param (string) str
** @return (date)
*/
function convertDate(str)
{
	var re = /[0-9]+/g;
	var result = re[Symbol.match](str);
	var dateLoc = new Date(result[0],result[1],result[2]);

	return dateLoc;
}


/* return the price per km with carId and distance
**@param (string) carId
**@param (double) distance
**@return (double) 
*/
function rentalsPricePerKm(carId,distance)
{
	var priceKm = 0;
	for(var i =0;i<cars.length;i++)
	{
		if (carId == cars[i].id)
		{
			priceKm = distance * cars[i].pricePerKm;
		}
	}
	return priceKm;

}
/* return the price per day with carId and numbersDays
**@param (string) carId
**@param (integer) distance
**@return (integer) 
*/
function rentalsPricePerDay(carId,numberDays)
{
	var priceDay = 0;
	for(var i =0;i<cars.length;i++)
	{
		if (carId == cars[i].id)
		{
			priceDay = numberDays * cars[i].pricePerDay;
		}
	}
	return priceDay;
}

/* numbers of days between 2 dates
**@param (string) beginDate
**@param (string) endedDate
**@return (integer) */
function getDays(beginDate,endDate)
{
	var numberDays =0;
	numberDays = convertDate(endDate).getDate() - convertDate(beginDate).getDate() + 1 ;// "+1" because we pay all the day include the first day and the last day 
	return numberDays;
}
/* Modify the price in the array rentals
** @param (array) rentals
** @return (array) 
*/
function resolvePrice(rentals)
{
	var numberDays =0;
	for(var i =0;i<rentals.length;i++)
	{
		numberDays = getDays(rentals[i].pickupDate,rentals[i].returnDate);
		rentals[i].price = rentalsPricePerDay(rentals[i].carId,numberDays) + rentalsPricePerKm(rentals[i].carId,rentals[i].distance);

	}

	return rentals;
}

/* Display all the object of the array
**@param (array) array
**@return nothing
*/
function displayArray(array)
{
	for(var i = 0; i<array.length;i++)
	{
		console.log(array[i]);
	}
}

//Exercice 2 


/*Solved the price with decrease for one rental
**@param (integer) i
**@return (integer) price*/
function priceDecreasePerRental(i)
{
	var priceDecreased =0;
	var rentalsPricekm = rentalsPricePerKm(rentals[i].carId,rentals[i].distance);
	var numberDays = getDays(rentals[i].pickupDate,rentals[i].returnDate);
	var priceAfter1day =  rentalsPricePerDay(rentals[i].carId,numberDays - 1)*0.9; // For every day after 1 day the price decrease by 10%
	var priceAfter4days = rentalsPricePerDay(rentals[i].carId,numberDays -4)*0.7 ;// For every day after 4 days the price decrease by 30%
	var priceAfter10days = rentalsPricePerDay(rentals[i].carId,numberDays -10)*0.5 ;// For every day after 10 days the price decrease by 50%
	if(numberDays<=4)
	{
		
		priceDecreased = rentalsPricekm + priceAfter1day + rentalsPricePerDay(rentals[i].carId,1); 

	}
	else 
	{
		if (numberDays<=10)
		{
			
			priceDecreased = rentalsPricekm + priceAfter4days +  rentalsPricePerDay(rentals[i].carId,3)*0.9  + rentalsPricePerDay(rentals[i].carId,1); 
		}
		else
		{
			priceDecreased = rentalsPricekm + rentalsPricePerDay(rentals[i].carId,6)*0.7 + rentalsPricePerDay(rentals[i].carId,3)*0.9+ rentalsPricePerDay(rentals[i].carId,1); 
			
		}
	}
	return priceDecreased
}
/* Modify the price in the array rentals with the reductions
** @param (array) rentals
** @return (array) 
*/
function priceDecrease(rentals)
{
	for(var i =0;i<rentals.length;i++)
	{
		rentals[i].price = priceDecreasePerRental(i);
	}
	return rentals;
}

//Exercice 3

function commissionInsurance(i)
{
	var priceCommission = priceDecreasePerRental(i)*0.3;	// 30% commission on the rental price
	var numbersDays = getDays(rentals[i].pickupDate,rentals[i].returnDate);
	var commissionInsurance = priceCommission*0.5; // 50% of commission for the insurance
	return commissionInsurance;
}
function commissionAssistance(i)
{
	var numbersDays = getDays(rentals[i].pickupDate,rentals[i].returnDate);
	var commissionAssistance = numbersDays; //1€ per day
	return commissionAssistance;
}
function commissionDrivy(i)
{
	var priceCommission = priceDecreasePerRental(i)*0.3;	// 30% commission on the rental price
	var numbersDays = getDays(rentals[i].pickupDate,rentals[i].returnDate);
	var commissionDrivy = priceCommission - commissionAssistance(i) - commissionInsurance(i)
	return commissionDrivy;
}
/* Solved the commission for each element
**@param (array) rentals
**@return (array)
*/
function commission(rentals)
{
  	for(var i = 0; i<rentals.length;i++)
  	{		
  		rentals[i].commission.insurance = commissionInsurance(i);
  		rentals[i].commission.assistance = commissionAssistance(i);
  		rentals[i].commission.drivy = commissionDrivy(i);

    }

  return rentals;
}

//Exercice 4 
/* Solved the price of the option 
**@param (integer) i 
**@return (integer) priceOption
*/
function priceWithOptionsPerRental(i)
{
	var priceOptions = 0;
	var numberDays = getDays(rentals[i].pickupDate,rentals[i].returnDate);
  rentals[i].price = priceDecreasePerRental(i); 
  if(rentals[i].options.deductibleReduction)
	{
    priceOptions = priceDecreasePerRental(i)  + 4 *numberDays;
  }

	return priceOptions;
}

/* Solved the price of the option 
**@param (array) rentals
**@return (array)
*/
function priceWithOptions(rentals)
{
	
	for(var i = 0; i<rentals.length;i++) 
	{
		rentals[i].price = priceDecreasePerRental(i); 
		if(rentals[i].options.deductibleReduction)
		{
			rentals[i].price = priceWithOptionsPerRental(i); 
		}
	}
	return rentals;
}

//Exercice 5 hfghj
function payActorPerRentals()
{

	for(var i = 0; i<actors.length;i++)
	{
		for(var j = 0; j<rentals.length;j++)
		{
			if(actors[i].rentalId == rentals[j].id)
			{
					actors[i].payment[0].amount = priceWithOptionsPerRental(j)  ;  //amount of driver
					actors[i].payment[1].amount = priceDecreasePerRental(j) - commission(rentals) ;//amount of owner
					actors[i].payment[2].amount = commissionInsurance(j); //amount insurance
					actors[i].payment[3].amount = commissionAssistance(j); //amount assistance
					actors[i].payment[4].amount = commissionDrivy(j) + priceWithOptionsPerRental(j) - priceDecreasePerRental(j); // amountDrivy
			}
		}
	}

}
