const showcase = document.querySelector(".livros")
const btn = document.querySelector("#btn")
const t = document.querySelector("#nome")
btn.addEventListener("click", () => {
    console.log(t.value)
    fetch("/search", {
        method:'POST',
        body: JSON.stringify({
            nome:t.value
        })
    }).then(res => JSON.parse(res)).then(obj => {
        if (obj.livros.length === 0) {
            alert('Não foram encontrados livros com esse nome.')
        } else {
            for (x of obj.livros) {
                let d = document.createElement('div')
                d.style.width='200px'
                d.style.height='200px'
                showcase.appendChild(d)
                let p = document.createElement('p')
                p.textContent='Nome: '+x.nome
                let p2 = document.createElement('p')
                p.textContent='Autor: '+x.autor
                let p3 = document.createElement('p')
                p.textContent='Ano de lançamento: '+x.ano_de_lancamento
                d.appendChild(p)
                d.appendChild(p2)
                d.appendChild(p3)
            }
        }
    })
})