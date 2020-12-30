"use strict";

//Set environment variable
const env = 'development';

//Core imports
import './store/store';
import 'alpinejs';
//Components
import { 
    initPageLoader, 
    initNavbar, 
    initSidebar, 
    initSidebarLeft, 
    initSidebarRight, 
    initVideoPlayers, 
    initMapBox  
} from './libs';
//Utilities
import { 
    switchDemoImages, 
    insertBgImages, 
    initRipple 
} from './libs';
//Pages
import { 
    initBlank, 
    initDashboard, 
    initApexCharts, 
    initBillboardCharts, 
    initWidgetsData, 
    initDocumentList,
    initDocumentDetails,
    initProjectList,
    initProjectDetails,
    initProjectMyTasks,
    initProjectTask,
    initEvents,
    initContactList,
    initContactGrid,
    initContactDetails,
    initCrmDeal,
    initCrmKanban,
    initSupportDashboard,
    initSupportTicket,
    initSupportTickets,
    initDatatableBasic,
    initDatatableVariations,
    initDatatableAdvanced,
    initChat,
    initInbox,
    initForumHome,
    initForumChannel,
    initForumTopic 
} from './libs';

const feather = require('feather-icons');

window.initNavbar = initNavbar;
window.initSidebar = initSidebar;
window.initSidebarLeft = initSidebarLeft;
window.initSidebarRight = initSidebarRight;
window.initBlank = initBlank;
window.initDashboard = initDashboard;
window.initApexCharts = initApexCharts;
window.initBillboardCharts = initBillboardCharts;
window.initWidgetsData = initWidgetsData;
window.initDocumentList = initDocumentList;
window.initDocumentDetails = initDocumentDetails;
window.initProjectList = initProjectList;
window.initProjectDetails = initProjectDetails;
window.initProjectMyTasks = initProjectMyTasks;
window.initProjectTask = initProjectTask;
window.initEvents = initEvents;
window.initContactList = initContactList;
window.initContactGrid = initContactGrid;
window.initContactDetails = initContactDetails;
window.initCrmDeal = initCrmDeal;
window.initCrmKanban = initCrmKanban;
window.initSupportDashboard = initSupportDashboard;
window.initSupportTicket = initSupportTicket;
window.initSupportTickets = initSupportTickets;
window.initDatatableBasic = initDatatableBasic;
window.initDatatableVariations = initDatatableVariations;
window.initDatatableAdvanced = initDatatableAdvanced;
window.initChat = initChat;
window.initInbox = initInbox;
window.initForumHome = initForumHome;
window.initForumChannel = initForumChannel;
window.initForumTopic = initForumTopic;

const showPageloader = initPageLoader();

document.onreadystatechange = function () {
    if (document.readyState == 'complete') {

        //Switch demo images
        const changeImages = switchDemoImages(env);

        //Switch backgrounds
        const changeBackgrounds = insertBgImages();

        //Feather Icons
        const featherIcons = feather.replace();

        //Ripple effect
        const ripples = initRipple();

        //Video Players
        const players = initVideoPlayers(env);

        //Maps
        const maps = initMapBox();
        
    }
}

