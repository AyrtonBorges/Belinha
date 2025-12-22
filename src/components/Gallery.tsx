import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  url: string;
  caption: string;
  category: 'familia' | 'amigos' | 'viagens' | 'momentos';
}

const images: GalleryImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1760348082270-3a46a3512850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBoYXBweSUyMG1vbWVudHxlbnwxfHx8fDE3NjYyNTM0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Um momento especial em família',
    category: 'familia',
  },
  {
    url: 'https://images.unsplash.com/photo-1763154431744-67550662000d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwcGhvdG9ncmFwaCUyMG1lbW9yeXxlbnwxfHx8fDE3NjYyNTM0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Memórias que atravessam o tempo',
    category: 'momentos',
  },
  {
    url: 'https://images.unsplash.com/photo-1603197911928-3bf0eaafea32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBwZWFjZWZ1bCUyMG5hdHVyZXxlbnwxfHx8fDE3NjYyNTM0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'A viagem inesquecível',
    category: 'viagens',
  },
  {
    url: 'https://images.unsplash.com/photo-1613448245074-53f9ba617a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZGhvb2QlMjBtZW1vcmllc3xlbnwxfHx8fDE3NjYyNTM0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Infância cheia de sonhos',
    category: 'momentos',
  },
  {
    url: 'https://images.unsplash.com/photo-1604452824399-0da61251ce3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMGpveXxlbnwxfHx8fDE3NjYyNTM0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Celebrando a vida',
    category: 'familia',
  },
  {
    url: 'https://images.unsplash.com/photo-1650757707834-e9789d38823a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwbGlnaHQlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2NjI1MzQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Momentos de paz',
    category: 'momentos',
  },
];

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'familia', label: 'Família' },
  { id: 'amigos', label: 'Amigos' },
  { id: 'viagens', label: 'Viagens' },
  { id: 'momentos', label: 'Momentos' },
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === 'todos'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <section id="lembrancas" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Galeria de Lembranças</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full" />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-amber-700 text-white shadow-lg'
                  : 'bg-white text-stone-600 hover:bg-amber-50 border border-stone-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="max-w-4xl w-full"
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="w-full h-auto rounded-2xl"
              />
              <p className="text-white text-center mt-6 text-xl">
                {selectedImage.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
