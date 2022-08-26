export default function Jsx() {
    const a = 1
    const b = 3
    const leitura =  console.log('resposta: ', a * b)

    const titulo = <h1>JSX é conceito central</h1>

    function subtitulo() {
        return <h2>{ "muito legal".toUpperCase() }</h2>
    }

    const obj = {nome: 'Joao', idade: 30}


    return (
        <div>
            <h1>JSX é conceito central</h1>

            {titulo}

            <h2>{ "muito legal".toUpperCase() }</h2>

            {subtitulo() }

            <p>
                {JSON.stringify({ nome: 'Joao', idade: 30})}
            </p>
            
        </div>
    ) 
}