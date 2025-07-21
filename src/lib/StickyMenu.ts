export default function StickyMenu(selector: string = ""): void {
  document.addEventListener("scroll", () => {
    const element = document.querySelector<HTMLElement>(selector);

    if (element) {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (scrollTop > 100) {
        element.classList.add("fixed-header");
      } else {
        element.classList.remove("fixed-header");
      }
    }
  });
}
