import { G, Y } from '@angular/cdk/keycodes';
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

  // getTotalRentMonth(monthlyRent:any,agencyFee:any) {
  //   agencyFee =  agencyFee.replace(/\D/g,'')
  //   monthlyRent = monthlyRent.replace(/\D/g,'')
  //    return   Number((monthlyRent * parseFloat(`1.${agencyFee}`)).toFixed(2))
  // }

  getAgencyFee(monthlyRent:any,agencyFee:any){
    agencyFee =  agencyFee.replace(/\D/g,'')
    monthlyRent = monthlyRent.replace(/\D/g,'')
    return Number((monthlyRent * parseFloat(`0.${agencyFee}`)).toFixed(2))
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
        
        return Number(totalFee.toFixed(2))
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
        
        return Number(totalFee.toFixed(2))
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
          return Number(totalFee.toFixed(2))
      }
      if ( year == 2){
        do {
          totalFee += monthlyRent * parseFloat(`1.${agencyfee - 5}`)
          j++
        } while (j < 12 )
          return Number(totalFee.toFixed(2))

      }

      if ( year == 3){
        do {
          totalFee += monthlyRent * parseFloat(`1.${agencyfee - 10}`)
          k++
        } while (k < 12 )
          return Number(totalFee.toFixed(2))
      }
      else {
        return 0
      }
}

  getMonthByYear(monthlyRent:any,agencyfee:any,year:any){
    agencyfee =  agencyfee.replace(/\D/g,'')
    monthlyRent = monthlyRent.replace(/\D/g,'')
    let month = this.getYearTotal(monthlyRent,agencyfee,year)
    return Number((month/12).toFixed(2))
  }
  getAnnualCharge(annualCharges:any){
      return annualCharges.replace(/\D/g, '');
  }
  
  getBuildingPrice(buildingPrice:any){
    return parseFloat(buildingPrice.replace(/\D/g,'')) 
  }
  getMonthlyCharge(annualCharges:any){
    
    return parseFloat(( annualCharges.replace(/\D/g, '') / 12 ).toFixed(2)) 
  }
  getTotalSpent(buildingPrice:any,annualCharges:any,year:any){
     annualCharges = annualCharges.replace(/\D/g, '')
     buildingPrice =  buildingPrice.replace(/\D/g, '')
     console.log( Number(annualCharges) + Number(buildingPrice))
    return  Number((annualCharges * year).toFixed(2))

  }
  getYield(buildingPrice:any,annualCharges:any,monthlyRent:any,year:any,agencyFee:any){
    buildingPrice = buildingPrice.replace(/\D/g, '')
    annualCharges = annualCharges.replace(/\D/g, '')
    agencyFee = agencyFee.replace(/\D/g,'')
    monthlyRent = monthlyRent.replace(/\D/g,'')
     let  totalYear = this.getYearTotal(monthlyRent,agencyFee,year)
     return Number(( (totalYear - annualCharges)/ (buildingPrice)* 100 ).toFixed(2))
  }

  getNetInCome(monthlyRent:any,agencyfee:any,year:any,annualCharges:any){
    agencyfee =  agencyfee.replace(/\D/g,'')
    monthlyRent = monthlyRent.replace(/\D/g,'')
    annualCharges = annualCharges.replace(/\D/g,'') 
    let month = this.getMonthByYear(monthlyRent,agencyfee,year)
    let charge = this.getMonthlyCharge(annualCharges)
    return Number(( month - charge).toFixed(2))
  }
}