import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Loan } from '../loan-details/loan.model';

@Component({
  selector: 'app-add-loans',
  templateUrl: './add-loans.component.html',
  styleUrl: './add-loans.component.scss'
})
export class AddLoansComponent {
  loanForm!: FormGroup;
  isFormSubmitted = false;

  constructor(
    public dialogRef: MatDialogRef<AddLoansComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { loan: Loan },
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.loanForm = this.formBuilder.group({
      loanNumber: ['', Validators.required],
      borrowerName: ['', Validators.required],
      loanType: ['', Validators.required],
      amount: ['', Validators.required],
      bdoName: ['', Validators.required],
      reviewerName: ['', Validators.required],
      reviewerName1: ['', Validators.required],
      loanCloser: [''],
      loanStatus: ['Yet To Be Boarded', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.isFormSubmitted = true;
    if (this.loanForm.valid) {
      const newLoan: Loan = this.loanForm.value;
      this.dialogRef.close(newLoan);
    }
  }

  getErrorMessage(controlName: string): string {
    if (this.loanForm.get(controlName)?.hasError('required')) {
      return 'This field is required';
    }
    return '';
  }
}
