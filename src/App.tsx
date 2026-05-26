/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CustomCursor from './components/CustomCursor';
import FloatingParticles from './components/FloatingParticles';
import AudioPlayer from './components/AudioPlayer';
import Hero from './components/Hero';
import LoveTimer from './components/LoveTimer';
import MemoryGallery from './components/MemoryGallery';
import Handbook from './components/Handbook';
import Reasons from './components/Reasons';
import LoveLetter from './components/LoveLetter';
import Timeline from './components/Timeline';
import FinalSection from './components/FinalSection';

export default function App() {
  return (
    <main className="relative min-h-screen w-full bg-love-50 selection:bg-love-200 selection:text-love-900 overflow-x-hidden text-gray-900">
      {/* Global Decorators */}
      <CustomCursor />
      <FloatingParticles />
      <AudioPlayer />
      
      {/* Sections */}
      <Hero />
      <LoveTimer />
      <MemoryGallery />
      <Handbook />
      <Reasons />
      <LoveLetter />
      <Timeline />
      <FinalSection />
    </main>
  );
}
