import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function Closing() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#faf9f7] to-amber-50">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <p className="text-2xl leading-relaxed">
            O amor verdadeiro não tem fim. Ele se transforma, se eterniza em cada lembrança, em cada ensinamento, em cada sorriso que nos faz pensar em você. Você não está mais aqui fisicamente, mas está em tudo — no vento que passa, nas estrelas que brilham, e especialmente dentro de nós.
          </p>

          <div className="flex justify-center gap-2 my-12">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Star
                  className="w-6 h-6 text-amber-600"
                  fill="currentColor"
                />
              </motion.div>
            ))}
          </div>

          <p className="text-3xl italic text-amber-800">
            Com todo amor e saudade,
          </p>

          <p className="text-2xl text-stone-600">
            [Seu Nome]
          </p>

          {/* Animated Stars */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 2 }}
            className="relative h-32 mt-16"
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute"
                style={{
                  left: `${(i * 12) + 5}%`,
                  top: `${Math.random() * 80}%`,
                }}
              >
                <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
