import { initPageLoader } from './pageloader/pageloader';
import { initTheme } from './theme/theme';
import { initNavbar } from './navbar/navbar';
import { initSidebar } from './sidebar/sidebar';
import { initSidebarLeft } from './sidebar/sidebar-left';
import { initSidebarRight } from './sidebar/sidebar-right';

window.initTheme = initTheme;
window.initNavbar = initNavbar;
window.initSidebar = initSidebar;
window.initSidebarLeft = initSidebarLeft;
window.initSidebarRight = initSidebarRight;