window.onload = () => {
    const slowShow = document.querySelectorAll('[data-slow-show]');

    if (slowShow.length) {
        const options = {
            root: null,
            rootMargin: '35px',
            threshold: 0,
        };

        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classList.add('element-show');
                }
            });
        }

        const observer = new IntersectionObserver(onEntry, options);

        slowShow.forEach(block => {
            observer.observe(block);
        });
    }
};
