import { INavData } from '@coreui/angular';



export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    // badge: {
    //   color: 'info',
    //   text: 'NEW'
    // }
  },
  {
    title: true,
    name: ''
  },
  {
    name: 'Masters',
    title: true,
  },
  {
    name: 'Firm Master',
    url: '/firmMaster',
    iconComponent: { name: 'cil-house' }
  },
  {
    name: 'Bank Master',
    url: '/bankMaster',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-bank' }
  },
  
  {
    name: 'Branch Master',
    url: '/branchMaster',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cib-code-climate' }
  },
  
  {
    name: 'Tax Slab Master',
    url: '/taxMaster',
    iconComponent: { name: 'cil-puzzle' },
    
  },
  {
    name: 'Unit Master',
    url: '/unit',
    iconComponent: { name: 'cil-cursor' },
  },
  {
    name: 'Group Master',
    url: '/groupMaster',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Item Master',
    url: '/itemMaster',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    name: 'Transport Master',
    iconComponent: { name: 'cil-star' },
    url: '/transportMaster',
   
  },
  {
    name: 'Stock Master',
    iconComponent: { name: 'cil-star' },
    url: '/stockMaster',
   
  },
  {
    name: 'Party Master',
    iconComponent: { name: 'cil-star' },
    url: '/partyMaster',
   
  },
  {
    name: 'Purchase ',
    iconComponent: { name: 'cil-star' },
    url: '/purchase',
   
  },
  {
    name: 'Purchase Report ',
    iconComponent: { name: 'cil-star' },
    url: '/purchaseReport',
   
  },
  {
    name: 'Sales ',
    iconComponent: { name: 'cil-star' },
    url: '/sales',
   
  },
  {
    name: 'Sales Report',
    iconComponent: { name: 'cil-star' },
    url: '/saleReport',
   
  },
 
];
