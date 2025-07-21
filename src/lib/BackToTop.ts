export default function BackToTop(value: string): void {
  const result = document.querySelector<HTMLElement>(value);

  if (result) {
    document.addEventListener("scroll", () => {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (scrollTop > window.innerHeight) {
        result.style.display = "block";
      } else {
        result.style.display = "none";
      }
    });

    result.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
