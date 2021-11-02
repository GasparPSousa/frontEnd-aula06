import Video from '../Video';
import './style.css'


const Galeria = () => {

  return(
    <section id="galeria">
      <div className="grid">
        <Video url="https://www.youtube.com/embed/WmopcSXDQa8" title="Bossa Nova Covers 2021 - Cool Music" />
        <Video url='https://www.youtube.com/embed/F2IyttjjPfM' title='Reggae Covers Popular Songs 2021' />
        <Video url='https://www.youtube.com/embed/QtXby3twMmI' title='Coldplay - Adventure Of A Lifetime (Official Video)' />        
      </div>
    </section>
  )
}

export default Galeria;