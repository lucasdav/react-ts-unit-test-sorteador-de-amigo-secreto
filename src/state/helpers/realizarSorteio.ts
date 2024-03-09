import shuffle from "just-shuffle";

export function realizarSorteio (participantes: string[]) {
    // npm i just-shuffle para embaralhar dados
    const embaralhado = shuffle(participantes)
    //uso do Map para agrupar
    const resultado = new Map<string, string>()
    const totalDeParticipantes = participantes.length

    for (let index = 0; index < totalDeParticipantes; index++) {        
        const indiceDoAmigo = index === (totalDeParticipantes - 1) ? 0 : index + 1;
        resultado.set(embaralhado[index], embaralhado[indiceDoAmigo])
    }
    return resultado
}