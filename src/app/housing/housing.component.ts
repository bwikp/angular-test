import { Component, inject } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-housing',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './housing.component.html',
  styleUrl: './housing.component.css'
})
export class HousingComponent {
    housingService = inject(HousingService)
        housingForm = new FormGroup({
            buyingPrice: new FormControl(0),
            monthlyRent: new FormControl(0),
            annualCharges: new FormControl(0),
            agencyFees: new FormControl(0)
        })

        totalRentMonth = 0
        agencyfee = 0
        totalfee3year = 0
        totalrent3year = 0
        totalyear1 = 0
        totalyear2 = 0
        totalyear3 = 0
         submitHouseValues(){
          this.housingService.submitHouseValues(
            this.housingForm.value.buyingPrice ?? 0,
            this.housingForm.value.monthlyRent ?? 0,
            this.housingForm.value.annualCharges ?? 0,
            this.housingForm.value.agencyFees ?? 0
          ) 
          this.totalRentMonth =   this.housingService.getTotalRentMonth(
                                  this.housingForm.value.monthlyRent,
                                  this.housingForm.value.agencyFees)
          this.agencyfee = this.housingService.getAgencyFee(
                                  this.housingForm.value.monthlyRent,
                                  this.housingForm.value.agencyFees
          )
          this.totalfee3year = this.housingService.get3yearFeeTotal(
                                  this.housingForm.value.monthlyRent,
                                  this.housingForm.value.agencyFees
          )
          this.totalrent3year = this.housingService.get3yearRentTotal(
                                  this.housingForm.value.monthlyRent,
                                  this.housingForm.value.agencyFees
          )
          this.totalyear1 = this.housingService.getYear1Total(
                                  this.housingForm.value.monthlyRent,
                                  this.housingForm.value.agencyFees,
                                  1
          )
          this.totalyear2 = this.housingService.getYear1Total(
                                  this.housingForm.value.monthlyRent,
                                  this.housingForm.value.agencyFees,
                                  2
          )
          this.totalyear3 = this.housingService.getYear1Total(
                                  this.housingForm.value.monthlyRent,
                                  this.housingForm.value.agencyFees,
                                  3
          )
      }
    }
