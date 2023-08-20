function calcular(){
    var Ini = Number(document.getElementById('inicio').value)
    var Fin = Number(document.getElementById('final').value)
    var Pas = Number(document.getElementById('passo').value)
    if (Pas == 0) {Pas = 1}
    let Passos = [Ini]
    var Per = Ini
    var Res = document.getElementById('Res')

    if (Ini == 0 && Fin == 0 || Ini == Fin){
        window.alert('[ERRO] Por favor, confira os valores usados.')
    } else if (Ini < Fin) {
        do{
            Per = Per + Pas
            Passos.push(`👉 ${Per}`)
        } while (Per < Fin)
        Passos[Passos.length - 1] = `🚩 ${Fin}`
    } else if (Ini > Fin) {
        do{
            Per = Per - Pas
            Passos.push(`👈 ${Per}`)
        } while (Per > Fin)
        Passos[Passos.length - 1] = `🚩 ${Fin}`
        Passos.reverse()
    }
    Res.innerHTML = `${Passos}`
}
