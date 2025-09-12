import { useEffect } from 'react';

export const useRevealOnScroll = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    const observeReveals = (root: ParentNode) => {
      const elements = root.querySelectorAll?.('.reveal');
      elements?.forEach((el) => {
        // Avoid double-observing the same element
        if (!(el as HTMLElement).dataset.__revealObserved) {
          (el as HTMLElement).dataset.__revealObserved = 'true';
          io.observe(el);
        }
      });
    };

    // Observe initial .reveal elements
    observeReveals(document);

    // Observe future .reveal elements (for lazy-loaded sections)
    const mo = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.classList?.contains('reveal')) {
              io.observe(element);
              (element as HTMLElement).dataset.__revealObserved = 'true';
            }
            // Also scan descendants in case a container with many reveals is added
            observeReveals(element);
          }
        });
      }
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);
};