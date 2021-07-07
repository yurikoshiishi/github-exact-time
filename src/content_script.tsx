import {observeConfig, observeDOMChange} from './lib/observe';

const main = document.querySelector<HTMLElement>('.application-main');

const updateTimeValue = () => {
  const timeElements = [
    ...document.querySelectorAll<HTMLElement>('relative-time'),
  ];

  timeElements.forEach((el) => {
    const timeValue = el.getAttribute('title') ?? el.getAttribute('datetime');

    if (timeValue) {
      el.textContent = timeValue;
    }
  });
};

if (main) {
  observeDOMChange(main, (mutationList, observer) => {
    observer.disconnect();
    updateTimeValue();
    observer.observe(main, observeConfig);
  });
}
