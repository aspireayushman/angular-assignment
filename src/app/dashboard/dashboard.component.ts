import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  cards = [
    {
      title: 'e-Mail to Borrower',
      icon: 'mail',
      number: 134,
      trend: '47.86%',
      trendText: 'from last week',
      badgeColor: 'blue',
    },
    {
      title: 'Registered Borrowers',
      icon: 'person_check',
      number: 22,
      trend: '47.86%',
      trendText: 'from last week',
      badgeColor: 'purple',
    },
    {
      title: 'Pending for Submission',
      icon: 'schedule',
      number: 38,
      trend: '47.86%',
      trendText: 'from last week',
      badgeColor: 'orange',
    },
    {
      title: 'Submitted to Lender',
      icon: 'check_box',
      number: 51,
      trend: '47.86%',
      trendText: 'from last week',
      badgeColor: 'green',
    },
    {
      title: 'Ready for App Boarding',
      icon: 'send',
      number: 15,
      trend: '47.86%',
      trendText: 'from last week',
      badgeColor: 'yellow',
    },
    {
      title: 'Ready for Loan Boarding',
      icon: 'monetization_on',
      number: 7,
      trend: '47.86%',
      trendText: 'from last week',
      badgeColor: 'red',
    },
    
  ];
  getPosition(index: number): { x: number, y: number } {
    const radius = 100;
    const angle = (360 / this.cards.length) * index;
    const x = 150 + Math.sin(angle * Math.PI / 180) * radius;
    const y = 150 - Math.cos(angle * Math.PI / 180) * radius;
    return { x, y };
  }

  getStrokeColor(badgeColor: string): string {
    switch (badgeColor) {
      case 'blue':
        return '#2786FF';
      case 'purple':
        return '#800080'; 
      case 'orange':
        return '#FFA500'; 
      case 'green':
        return '#008000'; 
      case 'yellow':
        return '#FFFF00'; 
      case 'red':
        return '#FF0000';
      default:
        return 'black'; 
    }
  }

  getLineWidth(badgeColor: string): number {
    switch (badgeColor) {
      case 'blue':
        return 3;
      case 'purple':
        return 2; 
      case 'orange':
        return 4;
      case 'green':
        return 2;
      case 'yellow':
        return 3; 
      case 'red':
        return 5;
      default:
        return 1; // Default thickness
    }
  }
  
  total: number;

  constructor() {
    this.total = this.cards.reduce((acc, curr) => acc + curr.number, 0);
  }

  calculateDashArray(number: number): string {
    const gapLength = 50;
    const blockLength = (628 - (this.cards.length * gapLength)) / this.total;
    return `${number * blockLength - gapLength} ${gapLength}`;
  }
  
  calculateDashOffset(number: number): number {
    const gapLength = 5; 
    const blockLength = (628 - (this.cards.length * gapLength)) / this.total;
    return (628 - (number * blockLength + (this.cards.length - 1) * gapLength)) / 3;
  }
  
  selectedTabIndex: number = 0;

  onTabChange(index: number) {
    this.selectedTabIndex = index;
  }
  rulerSteps = Array.from({length: 21}, (_, i) => i * 10); 

  calculateProgress(number: number): number {
    return (number / 200) * 100;
  }
}
