import { initApexSupportPieChart } from '../charts/apexChartSupportPie';
import { initApexSupportBarChart } from '../charts/apexChartSupportBar';

export function initSupportDashboard() {
    return {
        pieChart: initApexSupportPieChart(),
        barChart: initApexSupportBarChart(),
        initAssignedTickets() {
            const leftShapes = document.querySelectorAll('.shape-left');
            const rightShapes = document.querySelectorAll('.shape-right');
            for (let l = 0; l < leftShapes.length; l++) {
                const stepNumber = leftShapes[l].getAttribute('data-step');
                const num = parseInt(stepNumber);
                const base = 3;
                if (stepNumber !== '0') {
                    let distance = num * base;
                    leftShapes[l].style.bottom = distance + 'px';
                }
            };

            for (let r = 0; r < rightShapes.length; r++) {
                const stepNumber = rightShapes[r].getAttribute('data-step');
                const num = parseInt(stepNumber);
                const base = 3;
                if (stepNumber !== '0') {
                    let distance = num * base;
                    rightShapes[r].style.bottom = distance + 'px';
                }
            };

        },

        activitySidebarOpen: false,
        toggleActivitySidebar() {
            this.activitySidebarOpen = !this.activitySidebarOpen;
        }
    }
}