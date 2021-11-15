import Video from '../Video';
import './style.css'


const Galeria = () => {

  return(
    <section id="galeria">
      <h2>Vídeos</h2>
      <div className="grid">
        <Video url='https://www.youtube.com/embed/_5cPRJ8sK_o' title="O ALTO NÍVEL DO RADIANTE É INSANO!! - VALORANT" />
        <Video url='https://www.youtube.com/embed/8FXXZnvUUYY' title='VALORANT Last Chance Qualifier - Grande Final' />
        <Video url='https://www.youtube.com/embed/qwfiFwfnGP8' title='9 Minutos De 1v5 Insanos no Valorant...'/>
        <Video url='https://www.youtube.com/embed/_-qhH0qkFx4' title='12 MINUTOS de Sorte ou Habilidade?' />       
      </div>
    </section>
  )
}

export default Galeria;