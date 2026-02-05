import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  console.log({images});
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images?.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images?.length) % images?.length);
  };

  // Get 3 visible images (previous, current, next)
  const getVisibleImages = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + images?.length) % images?.length;
      visible.push({ image: images?.[index], index, position: i });
    }
    return visible;
  };

  return (
    <div className="relative w-full">
      {/* Gallery Container */}
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F8FAFB] to-white">
        <div className="relative w-full max-w-7xl mx-auto px-6">
          {/* Images Display */}
          <div className="relative flex items-center justify-center gap-6 h-[500px]">
            {getVisibleImages().map(({ image, index, position }) => (
              <motion.div
                key={position}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: position === 0 ? 1 : 0.4,
                  scale: position === 0 ? 1 : 0.75,
                  x: position * 420,
                  zIndex: position === 0 ? 10 : 1,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute"
              >
                <div 
                  className={`relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer group ${
                    position === 0 
                      ? 'w-[750px] h-[500px] shadow-2xl' 
                      : 'w-[600px] h-[400px] shadow-xl'
                  }`}
                  onClick={() => position === 0 && setZoomedImage(image)}
                >
                  {/* Gradient border */}
                  <div className="absolute inset-0 p-[2px] bg-gradient-to-br from-[#3BA9FF]/50 via-[#6FB7FF]/30 to-[#3BA9FF]/50 rounded-2xl">
                    <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden">
                      <Image
                      key={currentIndex}
                      width={500}
                      height={500}
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Hover overlay for center image */}
                      {position === 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-[#0a0e1a]/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300"
                        >
                          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                            <ZoomIn className="w-5 h-5 text-white" />
                            <span className="text-white">Click to Zoom</span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Glow effect for center image */}
                  {position === 0 && (
                    <div className="absolute -inset-4 bg-gradient-to-br from-[#3BA9FF]/20 via-[#6FB7FF]/10 to-transparent blur-2xl opacity-60 -z-10 rounded-3xl" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white shadow-xl border border-[#3BA9FF]/20 hover:border-[#3BA9FF]/50 hover:bg-[#F3F7FF] transition-all duration-300 group z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-[#3BA9FF]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white shadow-xl border border-[#3BA9FF]/20 hover:border-[#3BA9FF]/50 hover:bg-[#F3F7FF] transition-all duration-300 group z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-[#3BA9FF]" />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-gradient-to-r from-[#3BA9FF] to-[#6FB7FF]'
                  : 'w-2 bg-[#3BA9FF]/30 hover:bg-[#3BA9FF]/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0e1a]/95 backdrop-blur-md p-6"
            onClick={() => setZoomedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-8 right-8 p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
              onClick={() => setZoomedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-7xl max-h-[90vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative p-[2px] bg-gradient-to-br from-[#3BA9FF] via-[#6FB7FF] to-[#3BA9FF]">
                <Image
                          width={500}
                      height={500}
                  src={zoomedImage}
                  alt="Zoomed image"
                  className="max-w-full max-h-[90vh] object-contain bg-white rounded-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
