import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Loan } from '../loan-details/loan.model';

@Component({
  selector: 'app-loan-dialog',
  templateUrl: './loan-dialog.component.html',
  styleUrls: ['./loan-dialog.component.scss']
})
export class LoanDialogComponent {
  loanForm!: FormGroup;
  isFormSubmitted = false;

  constructor(
    public dialogRef: MatDialogRef<LoanDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { loan: Loan },
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.loanForm = this.formBuilder.group({
      loanNumber: [this.data.loan.loanNumber, Validators.required],
      borrowerName: [this.data.loan.borrowerName, Validators.required],
      loanType: [this.data.loan.loanType, Validators.required],
      amount: [this.data.loan.amount, Validators.required],
      bdoName: [this.data.loan.bdoName, Validators.required],
      reviewerName: [this.data.loan.reviewerName, Validators.required],
      reviewerName1: [this.data.loan.loanCloser, Validators.required],
      loanCloser: [this.data.loan.reviewerName1, Validators.required],
      loanStatus: [this.data.loan.loanStatus, Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.isFormSubmitted = true;
    if (this.loanForm.valid) {
      const updatedLoan: Loan = { ...this.data.loan, ...this.loanForm.value };
      this.dialogRef.close(updatedLoan);
    }
  }

  getErrorMessage(controlName: string): string {
    if (this.loanForm.get(controlName)?.hasError('required')) {
      return 'This field is required';
    }
    return '';
  }
}
