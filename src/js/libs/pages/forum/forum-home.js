export function initForumHome() {
    return {
        annoucementStatsOpen: false,
        hrStatsOpen: false,
        paymentsStatsOpen: false,

        toggleAnnoucements(e) {
            e.target.classList.toggle('is-active');
            this.annoucementStatsOpen = !this.annoucementStatsOpen;
        },
        toggleHr(e) {
            e.target.classList.toggle('is-active');
            this.hrStatsOpen = !this.hrStatsOpen;
        },
        togglePayments(e) {
            e.target.classList.toggle('is-active');
            this.paymentsStatsOpen = !this.paymentsStatsOpen;
        }
    }
}