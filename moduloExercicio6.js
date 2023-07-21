import promptSync from "prompt-sync"

let prompt = promptSync()


export function exercicio6() {

console.log("Exercício 10");

let contador = parseInt(prompt("Digite um número: "))


while (contador != 0)  {
 contador = parseInt(prompt("Digite um número: "))
}
console.log ("Ok!!")
}