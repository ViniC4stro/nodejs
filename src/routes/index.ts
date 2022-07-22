import { Router, Request, Response } from "express"

const router = Router()

//  CRIAR A ROTA HOME
router.get('/',(req:Request, res:Response) =>{
    let idade: number = 18
    let exibirIdade: boolean = false

    if(idade >= 18){
        exibirIdade = true
    }

    res.render("pages/home",{
        nome: 'Vinicius',
        exibirIdade    
    })
})



// CRIAR A ROTA CONTATO
router.get('/contato',(req:Request, res:Response) =>{
    res.render("pages/contato")
})



// CRIAR A ROTA SOBRE
router.get('/sobre',(req:Request, res:Response) =>{
    res.render("pages/sobre")
})



// CRIAR A ROTA NOME   
router.get('/nome',(req:Request, res:Response) =>{

    let nome: string = req.query.nome as string

    res.render("pages/nome", {
        nome
    })
})

router.get('/form',(req:Request, res:Response) =>{

    let name: string = req.query.nome as string
    let idade = req.query.age
    let telefone = req.query.tell
    let address: string = req.query.address as string
    let exibir: Boolean = true

    res.render("pages/form", {
        name,
        idade,
        telefone,
        address,
        exibir
    })
})



// CRIANDO A ROTA IDADE     
router.get('/idade',(req:Request, res:Response) =>{
    res.render('pages/idade')
})


router.post('/idade-resultado',(req:Request, res:Response) =>{

    
    let exibirResul: boolean = false
    let idade: number = 0

    if(req.body.anoNascimento){

    let anoNascimento: number = parseInt(req.body.anoNascimento as string)
    let anoAtual: number = new Date().getFullYear()
    idade = anoAtual - anoNascimento
    exibirResul = true
    }

    res.render("pages/idade",{
         idade,
         exibirResul
    
    })
})


router.get('/login',(req:Request, res:Response) =>{
    res.render("pages/login")
})

router.post('/login-acesso',(req:Request, res:Response) =>{
    let email: string = req.body.email
    let senha: string = req.body.password

    res.render("pages/login-acesso",{
        email,
        senha
    })
})


export default router