import { motion } from 'motion/react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const events: TimelineEvent[] = [
  {
    year: '1950',
    title: 'Infância',
    description: 'Os primeiros anos cheios de descobertas e sonhos.',
    imageUrl: 'https://images.unsplash.com/photo-1613448245074-53f9ba617a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZGhvb2QlMjBtZW1vcmllc3xlbnwxfHx8fDE3NjYyNTM0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    year: '1975',
    title: 'Uma conquista',
    description: 'O momento em que tudo começou a fazer sentido.',
  },
  {
    year: '1985',
    title: 'A fase mais feliz',
    description: 'Anos de alegria plena e realizações.',
    imageUrl: 'https://images.unsplash.com/photo-1760348082270-3a46a3512850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBoYXBweSUyMG1vbWVudHxlbnwxfHx8fDE3NjYyNTM0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    year: '2000',
    title: 'O dia que mudou tudo',
    description: 'Um marco que transformou nossa história.',
  },
  {
    year: '2024',
    title: 'Última lembrança',
    description: 'O último abraço, o último sorriso que ficou guardado.',
  },
  {
    year: 'Hoje',
    title: 'Legado',
    description: 'Tudo que você deixou e que continua vivo em nós.',
  },
];

export function Timeline() {
  return (
    <section id="linha-do-tempo" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Linha do Tempo</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-amber-200" />

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-amber-700 rounded-full -ml-2 z-10 ring-4 ring-[#faf9f7]" />

                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
                  <div className="bg-amber-50 rounded-xl p-6 shadow-md border border-amber-100">
                    <div className="inline-block px-4 py-1 bg-amber-700 text-white rounded-full mb-3 text-base">
                      {event.year}
                    </div>
                    <h3 className="mb-2">{event.title}</h3>
                    <p className="text-base text-stone-600">{event.description}</p>
                    {event.imageUrl && (
                      <div className="mt-4 rounded-lg overflow-hidden">
                        <img
                          src={event.imageUrl}
                          alt={event.title}
                          className="w-full h-32 object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
