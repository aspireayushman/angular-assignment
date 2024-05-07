// loan.model.ts
export interface Loan {
  id: number;
  loanNumber: string;
  createdDate: Date;
  borrowerName: string;
  loanType: string;
  amount: number;
  bdoName: string;
  reviewerName: string;
  reviewerName1: string;
  reviewer?: string;
  loanCloser?: string;
  loanStatus: 'Yet To Be Boarded' | 'Submitted' | 'Rejected';
  action?: string;
}
