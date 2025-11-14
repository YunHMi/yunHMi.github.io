// js/include-header.js
async function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    for (const el of elements) {
        const file = el.getAttribute('data-include');
        if(file) {
            const res = await fetch(file);
            if(res.ok) el.innerHTML = await res.text();
        }
    }
}
document.addEventListener('DOMContentLoaded', includeHTML);
