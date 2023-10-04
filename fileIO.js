const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    const url=req.url
    const method=req.method
    if(url==='/'){
        const readData=fs.readFileSync('message.txt','utf8')
        res.write('<html>')
        res.write('<head><title>My Page</title>')
        res.write('</head>')
        res.write(`<body >${readData}<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form><body>`)
        res.write('</html>')
        return res.end()
    }
    if(url==='/message' && method==='POST'){
        const body=[]
        req.on('data',(chunk)=>{
            body.push(chunk)
        })
        req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            fs.writeFile('message.txt',parseBody.split('=')[1],err=>{
                res.statusCode=302
                res.setHeader('Location','/')
                return res.end()
            })
        })
       
    }
})

server.listen(3000)