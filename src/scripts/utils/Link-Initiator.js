const LinkInitiator = {
  init() {
    const LinkElems = document.querySelectorAll('a.link');
    LinkElems.forEach((linkElem) => {
      linkElem.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();

        const href = linkElem.getAttribute('href');

        window.history.pushState({}, '', href);
        window.dispatchEvent(new Event('popstate'));
      });
    });
  },
};

export default LinkInitiator;
