




const dbMock = {
    produtos: [
        {
            id: 9,
            nome: 'WD 2TB Elements Portable External Hard Drive - USB 3.0',
            descricao: 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
            preco: 'R$64,00',
            avaliacao: 3.3,
            categoria: 'HD',
            imagem: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg'
        },
        {   id: 10, 
            nome: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
            descricao: 'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
            preco: 'R$109,00',
            avaliacao: 2.9,
            categoria: 'SSD',
            imagem: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg'
        },
        {   id: 11, 
            nome: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
            descricao: '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
            preco: 'R$109,00',
            avaliacao: 4.8,
            categoria: 'SSD',
            imagem: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg'
        },
        {
            id: 12, 
            nome: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
            descricao: 'Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturers limited warranty',
            preco: 'R$114,00',
            avaliacao: 4.8,
            categoria: 'HD',
            imagem: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg'
            
        },
        {   id: 13, 
            nome: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
            descricao: '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
            preco: 'R$599,00',
            avaliacao: 2.9,
            categoria: 'Monitores',
            imagem: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg'
        },
        {   id: 14, 
            nome: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED',
            descricao: '"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
            preco: 'R$999,00',
            avaliacao: 2.2,
            categoria: 'Monitores',
            imagem: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg'
        }
    ],

    tipo: [
        { id: 1, descricao: 'PS4' },
        { id: 2, descricao: 'PC' },

    ]


}

let FILTRO_TIPO = 0
let FILTRO_CATEGORIA = ""

let db = JSON.parse (localStorage.getItem('dbProdutos'))
if (!db) {
    db = dbMock
}

function getDescricaoProduto (id) {
    let idx = db.produtos.findIndex (elem => elem.id == id)
    if (idx != -1)
        return db.produtos[idx].descricao
    else    
        return 'Não identificado'
}


       

function exibeProdutos () {
    fetch('https://fakestoreapi.com/products/category/electronics')
    .then(res => res.json())
    .then(data => {
        let str = ''
        for (let i = 0; i < data.length; i++) {
            let produto = data[i]
            str += `<div class="card" style="width: 25rem;">
         <img src="${produto.image}" class="card-img-top" alt="..." style="margin-top: 10px; width: 50%">
       <div class="card-body">
       <h5 class="card-title">${produto.title}</h5>
           <p class="card-text">${produto.description}</p>
            <p><span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span> (20)
            </p>
            <p>De <s>R$1699,99</s> por R$${produto.price},00 </p>
            <a href="detalhes.html?id=${produto.id}" target="_blank" class="btn btn-primary">Veja mais</a>

        </div>
    </div>`

        }
        document.getElementById('tela').innerHTML = str
    })

}

function exibeProduto (id) {
    let idx = db.produtos.findIndex (elem => elem.id == id)
    if (idx != -1) {
        let produto = db.produtos[idx]
        let str = `<div class="card col-md" >
            <img src="${produto.imagem}" class="card-img-top" alt="..." style="width: 20%">
            <div class="card-body">
                <h5 class="card-title">${produto.nome}</h5>
                <p class="card-text">${produto.descricao}</p>
                <p class="card-text">Categoria: ${produto.categoria}</p>
                <p>Avaliação: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
              </svg> ${produto.avaliacao}</p>
                <p>De <s>R$1699,99</s> por R$${produto.preco}</p>
            </div>
            </div>`
    
        document.querySelector('#tela').innerHTML = str    
    }
    else {
        document.querySelector('#tela').innerHTML = '<h1>Produto não encontrado</h1>'    
    }

}


