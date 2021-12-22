import works from '../data.json'
import './WorksView.css'

function WorksView () {
    console.log(works)
    return (
        <div className='worksview'>
            
            <h3 className='header'>Trabajos mas conocidos de Isabel Allende:</h3>
            
            <div className='works'>
            { works.map((work, i) => (

                <p key={i}>{work.titulo}</p>
            ))}
            </div>
        </div>
    
    )
}

export default WorksView;