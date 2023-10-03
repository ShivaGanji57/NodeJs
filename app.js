const http=require('http')

const server=http.createServer((req,res)=>{
    const url=req.url
    if(url==='/'){
        res.write('<html>')
        res.write('<head><title>My Page</title></head>')
        res.write('<body><h1>Welcome to the Page</h1></body>')
        res.write('</html>')
        res.end()
    }
    else if(url==='/home'){
        res.write('<html>')
    res.write('<head><title>My Home</title></head>')
    res.write('<body><h1>Welcome Home</h1></body>')
    res.write('</html>')
    res.end()
    }
    else if(url==='/about'){
        res.write('<html>')
    res.write('<head><title>My About</title></head>')
    res.write('<body><h1>Welcome to About Us page</h1></body>')
    res.write('</html>')
    res.end()
    }
    else if(url==='/node'){
        res.write('<html>')
    res.write('<head><title>My Node</title></head>')
    res.write('<body><h1> Welcome to my Node Js project</h1></body>')
    res.write('</html>')
    res.end()
    }
})

server.listen(4000)