const http=require('http');
const server=http.createServer((req,res)=>{
    console.log('Bir istek gönderildi');
    const url=req.url;
    if(url==='/'){
        res.writeHead(200,{"content-type":"text/html"});
        res.write('<h2> index sayfasına hoşgeldiniz </h2>');
    }else if(url==='/hakkimda'){
        res.writeHead(200,{"content-type":"text/html"});
        res.write('<h2> hakkimda sayfasına hoşgeldiniz </h2>');
    }else if(url==='/iletisim'){
        res.writeHead(200,{"content-type":"text/html"});
        res.write('<h2> iletisim sayfasına hoşgeldiniz </h2>');
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.write('<h2> sayfa bulunamadı </h2>');
    }
    res.end();
})

const port=5000;
server.listen(port,()=>{
    console.log(`Sunucu port ${port} de başlatıldı`);
});