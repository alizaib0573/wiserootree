import Header from './components/Header'
import HeroDarkVeil from './components/HeroDarkVeil'
import Statement from './components/Statement'
import Services from './components/Services'
import TypographyEffect from './components/TypographyEffect'
import Scroll3DGridSection from './components/Scroll3DGridSection'
import HorizontalScrollSection from './components/HorizontalScrollSection'
import CTAWithIridescence from './components/CTAWithIridescence'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip">
        {/* Order mirrors your Figma red-box page; comments are NOT included */}
        <HeroDarkVeil />
        <Statement />
        <Services />
        <TypographyEffect />
        <Scroll3DGridSection />
        <HorizontalScrollSection />
        <CTAWithIridescence />
      </main>
      <Footer />
    </>
  )
}
