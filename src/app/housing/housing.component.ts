import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-housing',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './housing.component.html',
  styleUrl: './housing.component.css',
})
export class HousingComponent {
  housingService = inject(HousingService);
  housingForm = new FormGroup({
    buyingPrice: new FormControl(0),
    monthlyRent: new FormControl(0),
    annualCharges: new FormControl(0),
    agencyFees: new FormControl(0),
  });

  totalRentMonth = 0;
  agencyfee = 0;
  totalfee3year = 0;
  totalrent3year = 0;
  totalyear1 = 0;
  totalyear2 = 0;
  totalyear3 = 0;
  rentYear1 = 0;
  rentYear2 = 0;
  rentYear3 = 0;
  AnnualCharge = 0;
  buildingPrice = 0;
  MontlyCharge = 0;
  totalSpentY1 = 0;
  totalSpentY2 = 0;
  totalSpentY3 = 0;
  netIncomeMonthYear1 = 0;
  netIncomeMonthYear2 = 0; 
  netIncomeMonthYear3 = 0;
  yield1 = 0;
  yield2 = 0;
  yield3 = 0;
  submitHouseValues() {
    this.housingService.submitHouseValues(
      this.housingForm.value.buyingPrice ?? 0,
      this.housingForm.value.monthlyRent ?? 0,
      this.housingForm.value.annualCharges ?? 0,
      this.housingForm.value.agencyFees ?? 0
    );
    this.totalfee3year = this.housingService.get3yearFeeTotal(
      this.housingForm.value.monthlyRent,
      this.housingForm.value.agencyFees
    );
    this.totalrent3year = this.housingService.get3yearRentTotal(
      this.housingForm.value.monthlyRent,
      this.housingForm.value.agencyFees
    );
    this.totalyear1 = this.housingService.getYearTotal(
      this.housingForm.value.monthlyRent,
      this.housingForm.value.agencyFees,
      1
    );
    this.totalyear2 = this.housingService.getYearTotal(
      this.housingForm.value.monthlyRent,
      this.housingForm.value.agencyFees,
      2
    );
    this.totalyear3 = this.housingService.getYearTotal(
      this.housingForm.value.monthlyRent,
      this.housingForm.value.agencyFees,
      3
    );
    this.AnnualCharge = this.housingService.getAnnualCharge(
      this.housingForm.value.annualCharges
    );
    this.buildingPrice = this.housingService.getBuildingPrice(
      this.housingForm.value.buyingPrice
    );
    this.MontlyCharge = this.housingService.getMonthlyCharge(
      this.housingForm.value.annualCharges
    );
    this.totalSpentY1 = this.housingService.getTotalSpent(
      this.housingForm.value.buyingPrice,
      this.housingForm.value.annualCharges,
      1
    );
    this.totalSpentY2 = this.housingService.getTotalSpent(
      this.housingForm.value.buyingPrice,
      this.housingForm.value.annualCharges,
      2
    );
    this.totalSpentY3 = this.housingService.getTotalSpent(
      this.housingForm.value.buyingPrice,
      this.housingForm.value.annualCharges,
      3
    );
    this.yield1 = this.housingService.getYield(
      this.housingForm.value.buyingPrice,
      this.housingForm.value.annualCharges,
      this.housingForm.value.monthlyRent,
      1,
      this.housingForm.value.agencyFees
    );
    this.yield2 = this.housingService.getYield(
      this.housingForm.value.buyingPrice,
      this.housingForm.value.annualCharges,
      this.housingForm.value.monthlyRent,
      2,
      this.housingForm.value.agencyFees
    );
    this.yield3 = this.housingService.getYield(
      this.housingForm.value.buyingPrice,
      this.housingForm.value.annualCharges,
      this.housingForm.value.monthlyRent,
      3,
      this.housingForm.value.agencyFees
    );
    this.rentYear1 = this.housingService.getMonthByYear(
      this.housingForm.value.monthlyRent,
      this.housingForm.value.agencyFees,
      1
    )
    this.rentYear2 = this.housingService.getMonthByYear(
      this.housingForm.value.monthlyRent,
      this.housingForm.value.agencyFees,
      2
    )
    this.rentYear3 = this.housingService.getMonthByYear(
      this.housingForm.value.monthlyRent,
      this.housingForm.value.agencyFees,
      3
    )
    this.netIncomeMonthYear1 = this.housingService.getNetInCome(
      this.housingForm.value.monthlyRent,
      this.housingForm.value.agencyFees,
      1,
      this.housingForm.value.annualCharges
    )
    this.netIncomeMonthYear2 = this.housingService.getNetInCome(
      this.housingForm.value.monthlyRent,
      this.housingForm.value.agencyFees,
      2,
      this.housingForm.value.annualCharges
    )
    this.netIncomeMonthYear3 = this.housingService.getNetInCome(
      this.housingForm.value.monthlyRent,
      this.housingForm.value.agencyFees,
      3,
      this.housingForm.value.annualCharges
    )
  }
}
