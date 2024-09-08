import { G } from '@angular/cdk/keycodes';
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
    // console.log(totalRent)
     }

  getTotalRentMonth(monthlyRent:any,agencyFee:any) {
    agencyFee =  agencyFee.replace(/\D/g,'')
    monthlyRent = monthlyRent.replace(/\D/g,'')
     return   monthlyRent * parseFloat(`1.${agencyFee}`)
  }

  getAgencyFee(monthlyRent:any,agencyFee:any){
    agencyFee =  agencyFee.replace(/\D/g,'')
    monthlyRent = monthlyRent.replace(/\D/g,'')
    return monthlyRent * parseFloat(`0.${agencyFee}`)
  }
  get3yearFeeTotal(monthlyRent:any,agencyfee:any){
    agencyfee =  agencyfee.replace(/\D/g,'')
    monthlyRent = monthlyRent.replace(/\D/g,'')
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
    agencyfee =  agencyfee.replace(/\D/g,'')
    monthlyRent = monthlyRent.replace(/\D/g,'')
    
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

  getYearTotal(monthlyRent:any,agencyfee:any,year:any) {
    agencyfee =  agencyfee.replace(/\D/g,'')
    monthlyRent = monthlyRent.replace(/\D/g,'')
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
  getAnnualCharge(annualCharges:any){
      return annualCharges.replace(/\D/g, '');
  }
  
  getBuildingPrice(buildingPrice:any){
    return parseFloat(buildingPrice.replace(/\D/g,'')) 
  }
  getMonthlyCharge(annualCharges:any){

    return parseFloat(( annualCharges.replace(/\s/g, '') / 12 ).toFixed(2)) 
  }
  getTotalSpent(buildingPrice:any,annualCharges:any){
     annualCharges = annualCharges.replace(/\s/g, '')
     buildingPrice =  buildingPrice.replace(/\s/g, '')
     console.log( Number(annualCharges) + Number(buildingPrice))
    return  Number(annualCharges) + Number(buildingPrice)

  }
}