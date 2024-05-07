import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoanDialogComponent } from '../loan-dialog/loan-dialog.component';
import { Loan } from './loan.model';
import { LoanService } from './loan.service';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss']
})
export class LoanDetailsComponent implements OnInit {
  loans: Loan[] = [];
  displayedColumns: string[] = ['select', 'id', 'createdDate', 'borrowerName', 'loanType', 'amount', 'bdoName', 'reviewerName', 'loanCloser', 'loanStatus', 'actions'];
  selection = new SelectionModel<Loan>(true, []);
  searchTerm: string = '';
  searchControl = new FormControl<string | null>(null);
  dataSource!: MatTableDataSource<Loan>;
  pageSize: number = 5; // Initial page size
  totalItems!: number; // Total number of items

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private loanService: LoanService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadLoans();
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.selection.select(...this.loans);
  }
  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.loans.length;
    return numSelected === numRows;
  }

  editLoan(loan: Loan) {
    const dialogRef = this.dialog.open(LoanDialogComponent, {
      width: '500px',
      data: { loan }
    });

    dialogRef.afterClosed().subscribe(updatedLoan => {
      if (updatedLoan) {
        this.loanService.updateLoan(updatedLoan).subscribe(() => {
          this.loadLoans();
        });
      }
    });
  }

  loadLoans() {
    this.loanService.getLoans().subscribe(loans => {
      this.loans = loans;
      this.dataSource = new MatTableDataSource(this.loans);
      this.dataSource.paginator = this.paginator;
    });
  }
  
  deleteLoan(loan: Loan) {
    if (confirm('Are you sure you want to delete this loan?')) {
      this.loanService.deleteLoan(loan.id).subscribe(() => {
        this.loadLoans();
      });
    }
  }

  applyFilter() {
    const searchTerm = this.searchTerm.toLowerCase().trim();
  
    if (!searchTerm) {
      this.loadLoans(); // Reset to load all loans
      return;
    }
  
    this.dataSource.filter = searchTerm;
  }

  getStatusClass(loanStatus: string): string {
    switch (loanStatus) {
      case 'Yet To Be Boarded':
        return 'pending';
      case 'Rejected':
        return 'rejected';
      case 'Submitted':
        return 'green';
      default:
        return '';
    }
  }
}
