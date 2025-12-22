import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { useState } from 'react';

interface Message {
  name: string;
  relationship: string;
  message: string;
}

const existingMessages: Message[] = [
  {
    name: 'Maria Silva',
    relationship: 'Amiga',
    message:
      'Você foi luz na minha vida. Sua generosidade e alegria vão sempre viver no meu coração. Sinto sua falta todos os dias.',
  },
  {
    name: 'João Santos',
    relationship: 'Primo',
    message:
      'Obrigado por todos os momentos que compartilhamos. Você me ensinou o verdadeiro significado de família.',
  },
  {
    name: 'Ana Costa',
    relationship: 'Vizinha',
    message:
      'Sua bondade tocou tantas vidas. O bairro não é mais o mesmo sem você. Que Deus te guarde em paz.',
  },
];

export function Messages() {
  const [messages] = useState<Message[]>(existingMessages);

  return (
    <section id="mensagens" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Mensagens</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full" />
          <p className="mt-6 text-stone-600">
            Palavras de carinho de pessoas que também guardam você no coração
          </p>
        </motion.div>

        {/* Messages Grid */}
        <div className="space-y-8">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-amber-50 rounded-2xl p-8 border border-amber-100 shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" fill="currentColor" />
                </div>
                <div className="flex-1">
                  <div className="mb-3">
                    <h4 className="text-xl mb-1">{message.name}</h4>
                    <p className="text-sm text-amber-700">{message.relationship}</p>
                  </div>
                  <p className="text-stone-700 italic leading-relaxed">
                    "{message.message}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add Message CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-stone-600 mb-6">
            Quer deixar uma mensagem? Entre em contato com a família.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
