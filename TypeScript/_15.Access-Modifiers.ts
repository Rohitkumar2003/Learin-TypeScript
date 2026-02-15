// ! Access modifiers

class vechiles {
    VechileType:string;
   private VechileModelNumber:string;
    VechileManufactoringDate:number;
    VechileEngineType:string;

    constructor( VechileType:string,
                 VechileModelNumber:string,
                 VechileManufactoringDate:number,
                 VechileEngineType:string,
                ) {
                this.VechileType=VechileType;
                this.VechileModelNumber=VechileModelNumber;
                this.VechileManufactoringDate=VechileManufactoringDate;
                this.VechileEngineType=VechileEngineType
             }

        getVechileType():string {
            return `Vechile Type:${this.VechileType}`
        }
        getVechileModelNumber() {
            return `Vechile model:${this.VechileModelNumber}`
        }
        getVechileManufactoringDate() {
            return `Vehile Manufactoring:${this.VechileManufactoringDate}`
        }
        getVechileEngineType() {
            return `Vechile Engine Type:${this.VechileEngineType}`
        }
}

const newVechile = new vechiles('Bike','Bu0xx',2026,'Petrol');
// console.log('\n');
// console.log(newVechile.getVechileType());
// console.log(newVechile.getVechileModelNumber());
// console.log(newVechile.getVechileManufactoringDate());
// console.log(newVechile.getVechileEngineType());

// console.log(newVechile.VechileEngineType);
