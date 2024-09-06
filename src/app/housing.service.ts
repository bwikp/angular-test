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

  getTotalRent(monthlyRent:any,agencyFees:any) {
     return   monthlyRent * parseFloat(`1.${agencyFees}`)
  }
}
