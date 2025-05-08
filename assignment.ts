
function formatString( input: string, toUpper: boolean = true ): string {
   return toUpper ? input.toUpperCase() : input.toLowerCase()

}
// console.log(formatString('Tahmid',false));


// problem 2
const phone = [
   { name: "iphone", rating: 3 },
   { name: "vivo", rating: 5 },
   { name: "samsung", rating: 4 },
   { name: "redmi", rating: 2 }
];

type Phone = {
   name: string;
   rating: number;

};

function filterByRating( input: Phone[] ): Phone[] {
   return input.filter( item => item.rating >= 4 );
}

const filter = filterByRating( phone )
// console.log( filter );

//problem 3


function concatenateArrays<T>( ...arrays: T[][] ): T[] {
   return arrays.flat();
}

const add = concatenateArrays( [30, 42], [5, 1], [2, 9] )



class Vehicle {
   private make: string;
   private year: number;

   constructor( model: string, year: number ) {
      this.make = model;
      this.year = year
   }
   getInfo() {
      return `make:${this.make} Year${this.year}`
   }
}

class Car extends Vehicle {
   private model: string;

   constructor( model: string, make: string, year: number ) {
      super( make, year )
      this.model = model
   }

   getModel() {
      return `Model: ${this.model}`
   }
}
const myCar = new Car( 'toyta', 'corolla', 2020 )

// console.log( myCar );

function prosessValue( input: number | string ): number | string {
   if ( typeof input === 'string' ) {
      return input.length
   } else {
      return input * 2;
   }

}

const prosess = prosessValue( 'tahmid rahman' )
// console.log(prosess);
enum Day {
   Sunday,
   Monday,
   Tuesday,
   Wednesday,
   Thursday,
   Friday,
   Saturday
}

function getDayType( day: Day ): string {
   if ( day === Day.Sunday ) {
      return 'Weekend'
   } else {
      return 'Weekday'
   }

}
const test = getDayType( Day.Sunday )

async function squareAfterDelay( num: number ): Promise<number> {
   return new Promise( async ( resolve, reject ) => {
      if ( num < 0 ) {
         reject( new Error( 'rejected' ) )
      } else {

         setTimeout( async () => {
            const maltify = await num * num;
            resolve( maltify )
         }, 1000 )
      }
   } )
}

const timeOut = async () => {
   try {
      const result = await squareAfterDelay(23)
      console.log( result );

   } catch ( error ) {
      console.log( 'reject');

   }
}
console.log( timeOut() );






