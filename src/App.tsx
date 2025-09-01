import Header from './components/Header'
import HeroDarkVeil from './components/HeroDarkVeil'
import Statement from './components/Statement'
import Services from './components/Services'
import OnScrollTypography from './components/OnScrollTypography'
import Scroll3DGrid from './components/Scroll3DGrid'
import HorizontalScrollProjects from './components/HorizontalScrollProjects'
import CTAWithIridescence from './components/CTAWithIridescence'
import Footer from './components/Footer'
import Overlay from './components/dev/Overlay' // optional, if you created it earlier

export default function App() {
  const showOverlay =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('overlay') === '1'

  return (
    <>
      {showOverlay && <Overlay />}
      <Header />
      <main className="overflow-x-clip">
        <HeroDarkVeil />
        <Statement />
        <Services />
        <OnScrollTypography />
        <Scroll3DGrid />
        <HorizontalScrollProjects />
        <CTAWithIridescence />
      </main>
      <Footer />
    </>
  )
}