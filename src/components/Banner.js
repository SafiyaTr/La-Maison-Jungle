import '../styles/Banner.css'

function Banner({children}){
    const title = 'La Maison Jungle'

    return (
            <div className='lmj-banner'>
                {children}
            </div>
    )
}

export default Banner