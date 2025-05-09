
function formatString( input: string, toUpper: boolean = true ): string {
   return toUpper ? input.toUpperCase() : input.toLowerCase()

}


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

// const filter = filterByRating( phone )





function concatenateArrays<T>( ...arrays: T[][] ): T[] {
   return arrays.flat();
}

// const add = concatenateArrays( [30, 42], [5, 1], [2, 9] )



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
// const myCar = new Car( 'toyota', 'corolla', 2020 )




function prosessValue( input: number | string ): number | string {
   if ( typeof input === 'string' ) {
      return input.length
   } else {
      return input * 2;
   }

}

// const prosess = prosessValue( '' )

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
// const test = getDayType( Day.Sunday )


async function squareAfterDelay( num: number ): Promise<number> {
   return new Promise( async ( resolve, reject ) => {
      if ( num < 0 ) {
         reject( new Error( 'rejected' ) )
      } else {

         setTimeout( async () => {
            const mlt = await num * num;
            resolve( mlt )
         }, 1000 )
      }
   } )
}
const timeOut = async ( input: number ) => {
   try {
      const result = await squareAfterDelay( input )
      console.log( result );

   } catch ( error ) {
      console.log( 'reject');

   }
}
//  timeOut(-6)






