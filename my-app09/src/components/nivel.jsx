function Nivel(props){
    return(props.Nivel ===  "Iniciante"  
    ? "Bem-vindo Iniciante!" 
    : props.Nivel === "Intermediário"
    ? "Você está progredindo!"
    : props.Nivel === "Avançado" 
    ? "Parabéns Especialista!"
    : "Não possui nivel :( "

    )


}

export default Nivel
