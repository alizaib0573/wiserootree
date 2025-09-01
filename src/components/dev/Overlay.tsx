export default function Overlay() {
  // Put your exported Figma PNG at /figma/red-box.png
  const src = '/figma/red-box.png'
  return <img src={src} alt="" className="overlay-img" />
}