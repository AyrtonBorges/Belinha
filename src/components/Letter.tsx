import { motion } from 'motion/react';
import { MemoryBlock } from './MemoryBlock';

export function Letter() {
  return (
    <section id="carta" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">A Carta</h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full" />
        </motion.div>

        {/* Letter Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8"
        >
          <p>
            Eu não sei explicar direito o tamanho da saudade, porque ela não parece caber em palavra nenhuma. Às vezes ela vem como silêncio, às vezes como lembrança, e quase sempre como vontade de te contar alguma coisa simples do dia. Você foi daquelas pessoas que deixaram marca sem precisar forçar nada — só sendo você, do seu jeito, com seus cuidados, suas manias, seus conselhos e até suas broncas que hoje fazem falta.
          </p>

          <MemoryBlock
            type="photo"
            content="Esse dia foi um dos mais felizes."
            imageUrl="https://images.unsplash.com/photo-1760348082270-3a46a3512850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBoYXBweSUyMG1vbWVudHxlbnwxfHx8fDE3NjYyNTM0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          />

          <p>
            Tem momentos que eu fecho os olhos e lembro do teu sorriso como se eu ainda estivesse aí perto, ouvindo sua voz e sentindo aquele jeito único que você tinha de deixar as coisas mais leves. Você me ensinou coisas que eu só entendi com o tempo: que amor não é só presença, é atitude; que família é mais que sobrenome; que carinho mora nos detalhes.
          </p>

          <MemoryBlock
            type="audio"
            title="O jeito que sua voz acalmava"
            content="Uma gravação que guardo com todo carinho, daquelas que a gente ouve quando precisa se sentir perto de novo."
            audioUrl="#"
          />

          <p>
            Eu guardo você nos lugares onde a gente foi, nas músicas que do nada me fazem lembrar, nos cheiros que atravessam o tempo, e em cada pedacinho de mim que você ajudou a construir. E mesmo quando dói, eu prefiro sentir do que esquecer, porque lembrar de você é um jeito de manter vivo tudo o que foi verdadeiro.
          </p>

          <MemoryBlock
            type="message"
            content="Eu reli isso mil vezes. 'Cuida bem de você, tá? E não esquece que eu sempre vou estar aqui, do meu jeitinho, torcendo por tudo que você é.'"
          />

          <p>
            As lembranças vêm em ondas. Às vezes são suaves, como uma brisa que traz um sorriso. Outras vezes são fortes, como uma tempestade que nos faz parar e respirar fundo. Mas todas elas, sem exceção, são preciosas. Cada uma carrega um pedaço de quem você foi, do que compartilhamos, e do amor que nunca vai ter fim.
          </p>

          <MemoryBlock
            type="place"
            title="Aquele lugar especial"
            content="A praia onde passamos tantos verões, onde o tempo parecia passar mais devagar e tudo era mais simples."
            imageUrl="https://images.unsplash.com/photo-1603197911928-3bf0eaafea32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBwZWFjZWZ1bCUyMG5hdHVyZXxlbnwxfHx8fDE3NjYyNTM0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          />

          <p>
            Você me ensinou a ver beleza nas coisas pequenas. Uma flor no jardim, o cheiro do café pela manhã, o silêncio confortável de quem está em boa companhia. Essas lições ficaram comigo, e agora são parte de quem eu sou. Você continua me ensinando, mesmo de longe, mesmo em saudade.
          </p>

          <MemoryBlock
            type="lesson"
            title="Coisas que aprendi com você"
            content="Que gentileza é uma força. Que paciência é sabedoria. Que amar de verdade é estar presente, mesmo nos dias difíceis. Que a vida é feita de momentos, não de coisas."
          />

          <p>
            Se eu pudesse te dizer algo hoje, eu diria obrigado. Obrigado por ter existido na minha vida de um jeito tão grande. E mesmo que a saudade fique, eu vou seguir cuidando das suas memórias, porque elas são parte do que eu sou. Você vai continuar aqui — nas histórias, nas risadas que a gente lembra, e no amor que não vai embora.
          </p>

          <MemoryBlock
            type="moment"
            title="Momentos inesquecíveis"
            content="Aquela tarde em que dançamos na sala de estar sem motivo algum. Você ria tanto que chorava, e eu percebi que aqueles eram os momentos que realmente importam."
            imageUrl="https://images.unsplash.com/photo-1604452824399-0da61251ce3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMGpveXxlbnwxfHx8fDE3NjYyNTM0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          />

          <p>
            E assim vou seguindo, carregando você comigo. No jeito que eu sorrio, nas escolhas que faço, nas palavras que uso. Você está aqui, presente de uma forma que transcende o físico. Você é eterno nas marcas que deixou, no amor que plantou, na luz que trouxe.
          </p>

          <p className="pt-12 text-center italic text-2xl text-stone-600">
            Até nos encontrarmos de novo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
