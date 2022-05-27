import lozad from 'lozad';

export function initLazyLoading() {
    const el = document.querySelectorAll('[data-lazy-load]');
    if (typeof el != "undefined" && el != null)  {
        const observer = lozad(el, {
            loaded: function(el) {
                // Custom implementation on a loaded element
                el.parentNode.classList.add('loaded');
            }
        });

        observer.observe();
    }
}