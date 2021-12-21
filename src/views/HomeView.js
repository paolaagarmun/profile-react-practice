import './HomeView.css'

function HomeView () {
    const img = "https://aldianews.com/sites/default/files/articles/isabel_allende.jpg"
    return (
        <div className='homeview'>
            <img src={img} alt="" className='image'/>
            <div className='intro'>
                ¡Hola! Bienvenidos a una página donde compartimos la vida de la autora chilena Isabel Allende.
            </div>
        </div>
       
    )
}

export default HomeView;