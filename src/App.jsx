import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HomeSection from './components/HomeSection'
import ContexteSection from './components/ContexteSection'
import CauseSection from './components/CauseSection'
import DonneesSection from './components/DonneesSection'
import MenacesSection from './components/MenacesSection'
import SolutionsSection from './components/SolutionsSection'

const navItems = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'contexte', label: 'I. Contexte & chronologie' },
  { id: 'cause', label: 'II. Causes & vulnérabilités' },
  { id: 'donnees', label: 'III. Données exposées' },
  { id: 'menaces', label: 'IV. Menaces & conséquences' },
  { id: 'solutions', label: 'V. Protections' },
]

function App() {
  const [activeSection, setActiveSection] = useState('accueil')

  const renderSection = () => {
    switch (activeSection) {
      case 'contexte':
        return <ContexteSection />
      case 'cause':
        return <CauseSection />
      case 'donnees':
        return <DonneesSection />
      case 'menaces':
        return <MenacesSection />
      case 'solutions':
        return <SolutionsSection />
      case 'accueil':
      default:
        return <HomeSection />
    }
  }

  return (
    <div className="conteneur-principal">
      <Header navItems={navItems} activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="conteneur-section pb-5">{renderSection()}</main>
    </div>
  )
}

export default App
