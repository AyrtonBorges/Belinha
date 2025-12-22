import { motion } from 'motion/react';
import { Heart, ChevronDown } from 'lucide-react';

interface HeroProps {
  onStartReading: () => void;
}

export function Hero({ onStartReading }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1650757707834-e9789d38823a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwbGlnaHQlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2NjI1MzQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f7]/80 via-[#faf9f7]/60 to-[#faf9f7]" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
          className="flex justify-center mb-8"
        >
          <div className="w-16 h-16 rounded-full bg-amber-100/50 flex items-center justify-center backdrop-blur-sm">
            <Heart className="w-8 h-8 text-amber-700" fill="currentColor" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-6"
        >
          [Nome Completo]
        </motion.h1>

        {/* Dates */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-xl md:text-2xl text-stone-600 mb-8"
        >
          01/01/1950 — 20/12/2024
        </motion.p>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-2xl md:text-3xl italic text-stone-700 mb-12"
        >
          Para sempre em nós
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          onClick={onStartReading}
          className="group px-8 py-4 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Começar a ler
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-8 h-8 text-stone-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
