import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({ images, alt }: { images: string[]; alt: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useState(() => {
    if (emblaApi) emblaApi.on("select", onSelect);
  });

  if (images.length === 1) {
    return (
      <div className="h-64 md:h-80 overflow-hidden rounded-t-lg">
        <img src={images[0]} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div className="relative group">
      <div ref={emblaRef} className="overflow-hidden rounded-t-lg">
        <div className="flex">
          {images.map((img, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0">
              <img src={img} alt={`${alt} - Image ${i + 1}`} className="w-full h-64 md:h-80 object-cover" />
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === selected ? "bg-primary" : "bg-foreground/30"}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
