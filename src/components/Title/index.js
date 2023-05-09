import './styles.css'

export function Title( {name, surname} ) {

    const parsedName = name.toUpperCase()
    const parsedSurname = surname ? surname.toUpperCase() : ''

    return (
        <div id='title'>
            <h1 className='title'>Bem vindo {parsedName} {parsedSurname}</h1>

            <hr />
        </div>
    )
}