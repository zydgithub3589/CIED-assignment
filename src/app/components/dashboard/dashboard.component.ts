import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  public activeButton = 1;
  public activeMenu = 1;

  ngOnInit(): void {
  }

  graphData = [
    { description: 'High probability to win', value: 10, color: '#C9ECDC', lead: '03' },
    { description: 'Medium probability to win', value: 50, color: '#F9D8F8', lead: '15' },
    { description: 'Low probability to win', value: 40, color: '#F8CDD9', lead: '12' },
  ];

  barGraph = [
    { description: 'Contact made', value: 100, color: '#D3DFFB' },
    { description: 'Initial interest', value: 85, color: '#A7BFF4' },
    { description: 'First intro meeting', value: 60, color: '#7C9EF2' },
    { description: 'Follow up meeting', value: 50, color: '#507EEC' },
    { description: 'Workshop stage', value: 30, color: '#3454CF' },
  ];

  activeLeads = [
    {
      leadLogo: '../../../assets/icons/lead1.svg',
      leadName: 'Apple Inc.',
      dateAdded: '28 NOV 2022',
      currentState: 'Contact made',
      probability: 'Medium',
      probabilityColor: '#F9D8F8',
      teamSize: '100-250 people',
      location: 'Netherlands',
      revenue: '1-5 Million',
      category: 'Agriculture'
    },
    {
      leadLogo: '../../../assets/icons/lead2.svg',
      leadName: 'Samsung',
      dateAdded: '28 NOV 2022',
      currentState: 'Contact made',
      probability: 'Low',
      probabilityColor: '#F8CDD9',
      teamSize: '100-250 people',
      location: 'Netherlands',
      revenue: '1-5 Million',
      category: 'Agriculture'
    },
    {
      leadLogo: '../../../assets/icons/lead3.svg',
      leadName: 'Facebook',
      dateAdded: '28 NOV 2022',
      currentState: 'Contact made',
      probability: 'High',
      probabilityColor: '#C9ECDC',
      teamSize: '100-250 people',
      location: 'Netherlands',
      revenue: '1-5 Million',
      category: 'Agriculture'
    },
    {
      leadLogo: '../../../assets/icons/lead4.svg',
      leadName: 'Xiaomi',
      dateAdded: '28 NOV 2022',
      currentState: 'Contact made',
      probability: 'Medium',
      probabilityColor: '#F9D8F8',
      teamSize: '100-250 people',
      location: 'Netherlands',
      revenue: '1-5 Million',
      category: 'Agriculture'
    },
    {
      leadLogo: '../../../assets/icons/lead5.svg',
      leadName: 'Chanel',
      dateAdded: '28 NOV 2022',
      currentState: 'Contact made',
      probability: 'Low',
      probabilityColor: '#F8CDD9',
      teamSize: '100-250 people',
      location: 'Netherlands',
      revenue: '1-5 Million',
      category: 'Agriculture'
    }
  ]


  setActiveButton(buttonNumber: number) {
    this.activeButton = buttonNumber;
  }

}


