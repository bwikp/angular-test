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

        total = 0
         submitHouseValues(){
          this.housingService.submitHouseValues(
            this.housingForm.value.buyingPrice ?? 0,
            this.housingForm.value.monthlyRent ?? 0,
            this.housingForm.value.annualCharges ?? 0,
            this.housingForm.value.agencyFees ?? 0
          ) 
        this.total =   this.housingService.getTotalRent(this.housingForm.value.monthlyRent,this.housingForm.value.agencyFees)
      }
    }
