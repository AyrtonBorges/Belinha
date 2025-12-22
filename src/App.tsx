import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Letter } from './components/Letter';
import { Timeline } from './components/Timeline';
import { Gallery } from './components/Gallery';
import { Messages } from './components/Messages';
import { Closing } from './components/Closing';

export default function App() {
  const handleStartReading = () => {
    const letterSection = document.getElementById('carta');
    if (letterSection) {
      const offset = 80;
      const elementPosition = letterSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero onStartReading={handleStartReading} />
      <Letter />
      <Gallery />
      <Timeline />
      <Messages />
      <Closing />
    </div>
  );
}
