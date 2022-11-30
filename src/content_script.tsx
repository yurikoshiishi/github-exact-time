import { observeConfig, observeDOMChange } from "./lib/observe";

const main = document.querySelector<HTMLElement>(
  ".application-main, body main"
);

const updateTimeValue = () => {
  const timeElements = document.querySelectorAll<HTMLElement>(
    "relative-time, time-ago"
  );

  timeElements.forEach((el) => {
    const timeValue = el.getAttribute("title") || el.getAttribute("datetime");

    if (timeValue) {
      (el.shadowRoot ?? el).textContent = timeValue;
    }
  });
};

updateTimeValue();

if (main) {
  observeDOMChange(main, (_, observer) => {
    observer.disconnect();
    updateTimeValue();
    observer.observe(main, observeConfig);
  });
}
