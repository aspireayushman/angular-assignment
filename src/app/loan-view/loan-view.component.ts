import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-view',
  templateUrl: './loan-view.component.html',
  styleUrls: ['./loan-view.component.scss']
})
export class LoanViewComponent {
  expanded: boolean = true;
  selectedTabIndex: number = 0;
  step = 0;
  panelOpenState = true;


  constructor(private formBuilder: FormBuilder) {}


  toggleMenu(event: Event): void {
    event.preventDefault();
    this.expanded = !this.expanded;
  }

  onTabChange(index: number) {
    this.selectedTabIndex = index;
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  applicantForm!: FormGroup;


  ngOnInit() {
    this.applicantForm = this.formBuilder.group({
      applicantName: ['', Validators.required],
      applicantShortName: ['', Validators.required],
      tradeName: ['', Validators.required]
    });
  }

  submitForm() {
    if (!this.applicantForm.value.applicantName || !this.applicantForm.value.applicantShortName || !this.applicantForm.value.tradeName) {
      alert('Please fill in all fields before submitting the form.');
      return; 
    }
  
    console.log('Form submitted!');
    console.log('Applicant Name:', this.applicantForm.value.applicantName);
    console.log('Applicant Short Name:', this.applicantForm.value.applicantShortName);
    console.log('Trade Name:', this.applicantForm.value.tradeName);
    this.applicantForm.reset(); 
  }
  
  
}
