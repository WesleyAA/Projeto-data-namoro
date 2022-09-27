    
        
    var dias = window.document.getElementById('dias')
    var dias1 = window.document.getElementById('dias1')
    var hoje = window.document.getElementById('hoje')
    var dataH = dataAtualFormatada()
    var res = document.getElementById('res')

    function dataAtualFormatada(){
        var data = new Date(),
            dia = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = data.getFullYear();
        return anoF+"/"+mesF+"/"+diaF;
    }

    function verificar(){

        var dataf = document.getElementById('txt')

        const d1 = '2022-07-03'
        const d4 = dataf.value
        const DDDms = new Date(d4) - new Date(d1)
        const DD3 = DDDms / (1000 * 60 * 60 * 24)

        res.innerHTML = `Nessa data irá fazer ${DD3} dias!`

    }
    
    const d1 = '2022-07-03'
    const d2 = dataH
    const Dms = new Date(d2) - new Date(d1)
    const DD1 = Dms / (1000 * 60 * 60 * 24)

    const d3 = '2022-04-01'
    const DDms = new Date(d2) - new Date(d3)
    const DD2 = DDms / (1000 * 60 * 60 * 24)

    dias.innerText = `Fazem exatamente ${Number.parseInt(DD1)} dias que estamos namorando <3`
    dias1.innerText = `Fazem exatamente ${Number.parseInt(DD2)} dias que voltamos a nos falar`
    hoje.innerHTML = `Hoje é dia <strong>${dataH}</strong>`
    
    //res.innerHTML = `${dataAtualFormatada()}` 