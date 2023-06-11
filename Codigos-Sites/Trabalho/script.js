


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
            <a href="https://fakestoreapi.com/products/${produto.id}" target="_blank" class="btn btn-primary">Veja mais</a>

        </div>
    </div>`

        }
        document.getElementById('tela').innerHTML = str
    })

const dbMock = {
    pets: [
        {
            id: 9,
            nome: 'WD 2TB Elements Portable External Hard Drive - USB 3.0',
            descricao: 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
            preco: 'R$64,00',
            avaliacao: 3.3,
            imagem: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg'
        },
        {   id: 10, 
            nome: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
            descricao: 'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
            preco: 'R$109,00',
            avaliacao: 2.9,
            imagem: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg'
        },
        {   id: 11, 
            nome: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
            descricao: '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
            preco: 'R$109,00',
            avaliacao: 4.8,
            imagem: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg'
        },
        {
            id: 12, 
            nome: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
            descricao: 'Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturers limited warranty',
            preco: 'R$114,00',
            avaliacao: 4.8,
            imagem: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg'
            
        },
        {   id: 13, 
            nome: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
            descricao: '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
            preco: 'R$599,00',
            avaliacao: 2.9,
            imagem: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg'
        },
        {   id: 14, 
            nome: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
            descricao: '"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
            preco: 'R$999,00',
            avaliacao: 2.2,
            imagem: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg'
        }
    ],


}






