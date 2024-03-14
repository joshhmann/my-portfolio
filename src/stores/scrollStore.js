import { writable } from 'svelte/store';

export const activeSection = writable('home');

export function initializeScrollSpy() {
    const sections = document.querySelectorAll('section');
    window.onscroll = () => {
        let current = 'home';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 60;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        activeSection.set(current);
    };
}
