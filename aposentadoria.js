const nome = "Lucas"
const sexo = "M"
const idade = 20
const contri = 3
const tempo = (idade+contri)
if(sexo === "M"){
    if(tempo>=95){
        console.log(`Seu tempo é de:${tempo}. Você já pode se aposentar!`)
    }
    else{
        console.log(`Seu tempo é de:${tempo}. Você ainda não pode se aposentar`)
    }
}
if(sexo === "F"){
    if(tempo>=85){
        console.log(`Seu tempo é de:${tempo}. Você já pode se aposentar!`)
    }
    else{
        console.log(`Seu tempo é de:${tempo}. Você ainda não pode se aposentar`)
    }
}
