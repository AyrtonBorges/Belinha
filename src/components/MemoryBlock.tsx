import { motion } from 'motion/react';
import { Image, Music, Mail, MapPin, Sparkles, Star } from 'lucide-react';
import { useState } from 'react';

type MemoryType = 'photo' | 'audio' | 'message' | 'place' | 'lesson' | 'moment';

interface MemoryBlockProps {
  type: MemoryType;
  title?: string;
  content: string;
  imageUrl?: string;
  audioUrl?: string;
}

const iconMap = {
  photo: Image,
  audio: Music,
  message: Mail,
  place: MapPin,
  lesson: Sparkles,
  moment: Star,
};

export function MemoryBlock({ type, title, content, imageUrl, audioUrl }: MemoryBlockProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const Icon = iconMap[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="my-16 mx-auto max-w-2xl"
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-200">
        {/* Photo Type */}
        {type === 'photo' && imageUrl && (
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={imageUrl}
              alt={content}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <Icon className="w-5 h-5 text-amber-700" />
            </div>
            {title && <h4 className="text-xl text-stone-800">{title}</h4>}
          </div>

          <p className="text-stone-700 italic">{content}</p>

          {/* Audio Player */}
          {type === 'audio' && audioUrl && (
            <div className="mt-6">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-6 py-3 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-colors"
              >
                {isPlaying ? 'Pausar' : 'Ouvir'}
              </button>
            </div>
          )}

          {/* Message Box */}
          {type === 'message' && (
            <div className="mt-6 p-6 bg-amber-50 rounded-lg border-l-4 border-amber-700">
              <p className="text-stone-600 font-mono text-base">{content}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
