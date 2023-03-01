export function changeSlidePosition(slides: Array<HTMLDivElement>) {
  slides.map((slide) => {
    const currentSlidePosition = parseInt(slide.getAttribute('data-position')!);
    slide.setAttribute(
      'data-position',
      (currentSlidePosition === 1 ? 5 : currentSlidePosition - 1).toString()
    );
  });
}
