import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Mail } from './mail';

export class InMemoryDataService implements InMemoryDbService{

  createDb() {

        let menus = [
            {name: 'Dashboard', icon: 'fa fa-dashboard',location: '#',isLeaf: false,children: [
                {name: 'Dashboard v1', icon: 'fa fa-circle-o', location: 'dash'},
                {name: 'Dashboard v2', icon: 'fa fa-circle-o', location: 'dashboard'}
            ]},
            {name: 'Layout Options', icon: 'fa fa-files-o',location: '#',isLeaf: false,children: [
                {name: 'Top Navigation', icon: 'fa fa-circle-o', location: 'pages/layout/top-nav.html'},
                {name: 'Boxed', icon: 'fa fa-circle-o', location: 'pages/layout/boxed.html'},
                {name: 'Fixed', icon: 'fa fa-circle-o', location: 'pages/layout/fixed.html'},
                {name: 'Collapsed Sidebar', icon: 'fa fa-circle-o', location: 'pages/layout/collapsed-sidebar.html'}
            ]},
            {name: 'Widgets',icon: 'fa fa-th',location:'widgets',isLeaf: true,labels:[
                {text: 'new',style:'bg-green'},
            ]},
            {name: 'Charts', icon: 'fa fa-pie-chart',location: '#',isLeaf: false,children: [
                {name: 'ChartJS', icon: 'fa fa-circle-o', location: 'pages/charts/chartjs.html'},
                {name: 'Morris', icon: 'fa fa-circle-o', location: 'pages/charts/morris.html'},
                {name: 'Flot', icon: 'fa fa-circle-o', location: 'pages/charts/flot.html'},
                {name: 'Inline charts', icon: 'fa fa-circle-o', location: 'pages/charts/inline.html'}
            ]},
            {name: 'UI Elements', icon: 'fa fa-laptop',location: '#',isLeaf: false,children: [
                {name: 'General', icon: 'fa fa-circle-o', location: 'ui/general'},
                {name: 'Icons', icon: 'fa fa-circle-o', location: 'ui/icons'},
                {name: 'Buttons', icon: 'fa fa-circle-o', location: 'ui/buttons'},
                {name: 'Sliders', icon: 'fa fa-circle-o', location: 'ui/sliders'},
                {name: 'Timeline', icon: 'fa fa-circle-o', location: 'ui/timeline'},
                {name: 'Modals', icon: 'fa fa-circle-o', location: 'ui/modals'}
            ]},
            {name: 'Forms', icon: 'fa fa-edit',location: '#',isLeaf: false,children: [
                {name: 'General Elements', icon: 'fa fa-circle-o', location: 'forms/general'},
                {name: 'Advanced Elements', icon: 'fa fa-circle-o', location: 'forms/advanced'},
                {name: 'Editors', icon: 'fa fa-circle-o', location: 'home/pages/forms/editors.html'}
            ]},
            {name: 'Tables', icon: 'fa fa-table',location: '#',isLeaf: false,children: [
                {name: 'Simple tables', icon: 'fa fa-circle-o', location: 'home/pages/tables/simple.html'},
                {name: 'Data tables', icon: 'fa fa-circle-o', location: 'home/pages/tables/data.html'}
            ]},
            {name: 'Calendar',icon: 'fa fa-calendar',location:'calendar',isLeaf: true,labels:[
                {text: '3',style:'bg-red'},
                {text: '17',style:'bg-blue'}
            ]},
            {name: 'Mailbox',icon: 'fa fa-envelope',location:'mailbox',isLeaf: true,labels:[
                {text: '12',style:'bg-yellow'},
                {text: '16',style:'bg-green'},
                {text: '5',style:'bg-red'}
            ]},
            {name: 'Examples', icon: 'fa fa-folder',location: '#',isLeaf: false,children: [
                {name: 'Invoice', icon: 'fa fa-circle-o', location: 'examples/invoice'},
                {name: 'Profile', icon: 'fa fa-circle-o', location: 'examples/profile'},
                {name: '404 Error', icon: 'fa fa-circle-o', location: 'examples/404'},
                {name: '500 Error', icon: 'fa fa-circle-o', location: 'examples/500'},
                {name: 'Blank Page', icon: 'fa fa-circle-o', location: 'examples/blank'},
                {name: 'Pace Page', icon: 'fa fa-circle-o', location: 'examples/pace'}
            ]},
            {name: 'Documentation',icon: 'fa fa-book',location:'documentation/index.html',isLeaf: true}
        ];

        let mail = {
            id:1,
            isStar:false,
            sender: "Alexander Pierce",
            subject: "<b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...",
            time:new Date("2016-11-10 9:22:00")
        };
        let mails  = new Array<Mail>();
        for(let i =0 ;i<100; i++){

            mail.id = i +mail.id;

            mails.push(mail as Mail);
        }

        let users = [
            {
                userName:'admin',
                password:"adminT1000"
            }
        ];


        return {menus,mails,users};
    }
}
