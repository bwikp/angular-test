import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  totalRent = 0
  constructor() { }
  submitHouseValues(buyingPrice:number,monthlyRent:number,annualCharges:number,agencyFees:any) {
    let totalRent = monthlyRent * agencyFees
    // console.log(buyingPrice,monthlyRent,annualCharges,agencyFees)
    console.log(totalRent)
     }

  getTotalRentMonth(monthlyRent:any,agencyFees:any) {
     return   monthlyRent * parseFloat(`1.${agencyFees}`)
  }

  getAgencyFee(monthlyRent:any,agencyFees:any){
    return monthlyRent * parseFloat(`0.${agencyFees}`)
  }
  get3yearFeeTotal(monthlyRent:any,agencyfee:any){

    let totalFee = 0
    let i = 0
        do {
          totalFee += monthlyRent * parseFloat(`0.${agencyfee}`)
          i++
        } while (i < 12 )
        
        do {
          totalFee += monthlyRent * parseFloat(`0.${agencyfee - 5}`)
          i++
        } while ( i < 24 )
          do {
            totalFee += monthlyRent * parseFloat(`0.${agencyfee - 10}`)
            i++
          } while ( i < 36 )
        
        return totalFee 
  }
  get3yearRentTotal(monthlyRent:any,agencyfee:any){

    let totalFee = 0
    let i = 0
        do {
          totalFee += monthlyRent * parseFloat(`1.${agencyfee}`)
          i++
        } while (i < 12 )
        
        do {
          totalFee += monthlyRent * parseFloat(`1.${agencyfee - 5}`)
          i++
        } while ( i < 24 )
          do {
            totalFee += monthlyRent * parseFloat(`1.${agencyfee - 10}`)
            i++
          } while ( i < 36 )
        
        return totalFee 
  }

  getYear1Total(monthlyRent:any,agencyfee:any,year:any) {
    let totalFee = 0
    let i = 0
    let j = 0
    let k = 0
      if (year == 1){
       
        do {
          totalFee += monthlyRent * parseFloat(`1.${agencyfee}`)
          i++
        } while (i < 12 )
          return totalFee
      }
      if ( year == 2){
        do {
          totalFee += monthlyRent * parseFloat(`1.${agencyfee - 5}`)
          j++
        } while (j < 12 )
          return totalFee

      }

      if ( year == 3){
        do {
          totalFee += monthlyRent * parseFloat(`1.${agencyfee - 10}`)
          k++
        } while (k < 12 )
          return totalFee
      }
      else {
        return 0
      }
}
}