# Exercícios React Resolvidos

## Exercício 1

```jsx
import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'

function Exercicio1 () {
  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")
  const [resultado, setResultado] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    const valor = parseFloat(preco)

    setResultado(`O produto ${nome} custa R$ ${valor.toFixed(2)}`)
  }

  return (
    <>
      <h2>Produto e preço</h2>

      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>Preço</label>
        <input
          type="number"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>

      <p>{resultado}</p>

      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  )
}

export default Exercicio1
```

---

## Exercício 2

```jsx
import { useState } from 'react'

function Exercicio2() {

  const [comprimento, setComprimento] = useState("")
  const [largura, setLargura] = useState("")
  const [resultado, setResultado] = useState("")

  function calcular(event) {
    event.preventDefault()

    const area = Number(comprimento) * Number(largura)

    setResultado(`O terreno possui ${area} m²`)
  }

  return (
    <>
      <h2>Área do terreno</h2>

      <form onSubmit={calcular}>
        <input
          type="number"
          placeholder="Comprimento"
          value={comprimento}
          onChange={(e) => setComprimento(e.target.value)}
        />

        <input
          type="number"
          placeholder="Largura"
          value={largura}
          onChange={(e) => setLargura(e.target.value)}
        />

        <button type="submit">Calcular</button>
      </form>

      <p>{resultado}</p>
    </>
  )
}

export default Exercicio2
```

---

## Exercício 3

```jsx
import { useState } from 'react'

function Exercicio3() {

  const [valor, setValor] = useState("")
  const [parcelas, setParcelas] = useState("")
  const [resultado, setResultado] = useState("")

  function calcular(event) {
    event.preventDefault()

    const total = Number(valor) / Number(parcelas)

    setResultado(`Cada parcela custa R$ ${total.toFixed(2)}`)
  }

  return (
    <>
      <h2>Parcelas</h2>

      <form onSubmit={calcular}>
        <input
          type="number"
          placeholder="Valor da compra"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />

        <input
          type="number"
          placeholder="Número de parcelas"
          value={parcelas}
          onChange={(e) => setParcelas(e.target.value)}
        />

        <button type="submit">Calcular</button>
      </form>

      <p>{resultado}</p>
    </>
  )
}

export default Exercicio3
```

---

## Exercício 4

```jsx
import { useState } from 'react'

function Exercicio4() {

  const [dias, setDias] = useState("")
  const [resultado, setResultado] = useState("")

  function calcular(event) {
    event.preventDefault()

    const horas = Number(dias) * 24

    setResultado(`A viagem teve ${horas} horas`)
  }

  return (
    <>
      <h2>Viagem</h2>

      <form onSubmit={calcular}>
        <input
          type="number"
          placeholder="Dias"
          value={dias}
          onChange={(e) => setDias(e.target.value)}
        />

        <button type="submit">Calcular</button>
      </form>

      <p>{resultado}</p>
    </>
  )
}

export default Exercicio4
```

---

## Exercício 5

```jsx
import { useState } from 'react'

function Exercicio5() {

  const [deposito, setDeposito] = useState("")
  const [resultado, setResultado] = useState("")

  function calcular(event) {
    event.preventDefault()

    const saldo = Number(deposito) + (Number(deposito) * 0.02)

    setResultado(`Saldo final: R$ ${saldo.toFixed(2)}`)
  }

  return (
    <>
      <h2>Depósito</h2>

      <form onSubmit={calcular}>
        <input
          type="number"
          placeholder="Valor do depósito"
          value={deposito}
          onChange={(e) => setDeposito(e.target.value)}
        />

        <button type="submit">Calcular</button>
      </form>

      <p>{resultado}</p>
    </>
  )
}

export default Exercicio5
```

---

## Exercício 6

```jsx
import { useState } from 'react'

function Exercicio6() {

  const [litros, setLitros] = useState("")
  const [distancia, setDistancia] = useState("")
  const [resultado, setResultado] = useState("")

  function calcular(event) {
    event.preventDefault()

    const consumo = Number(distancia) / Number(litros)

    setResultado(`Consumo médio: ${consumo.toFixed(2)} km/l`)
  }

  return (
    <>
      <h2>Consumo médio</h2>

      <form onSubmit={calcular}>
        <input
          type="number"
          placeholder="Litros"
          value={litros}
          onChange={(e) => setLitros(e.target.value)}
        />

        <input
          type="number"
          placeholder="Distância"
          value={distancia}
          onChange={(e) => setDistancia(e.target.value)}
        />

        <button type="submit">Calcular</button>
      </form>

      <p>{resultado}</p>
    </>
  )
}

export default Exercicio6
```

---

## Exercício 7

```jsx
import { useState } from 'react'

function Exercicio7() {

  const [numero, setNumero] = useState("")
  const [resultado, setResultado] = useState("")

  function calcular(event) {
    event.preventDefault()

    const anterior = Number(numero) - 1
    const proximo = Number(numero) + 1

    setResultado(`Antecessor: ${anterior} | Sucessor: ${proximo}`)
  }

  return (
    <>
      <h2>Antecessor e sucessor</h2>

      <form onSubmit={calcular}>
        <input
          type="number"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />

        <button type="submit">Mostrar</button>
      </form>

      <p>{resultado}</p>
    </>
  )
}

export default Exercicio7
```

---

## Exercício 8

```jsx
import { useState } from 'react'

function Exercicio8() {

  const [idade, setIdade] = useState("")
  const [resultado, setResultado] = useState("")

  function calcular(event) {
    event.preventDefault()

    const semanas = Number(idade) * 52

    setResultado(`Você viveu aproximadamente ${semanas} semanas`)
  }

  return (
    <>
      <h2>Semanas vividas</h2>

      <form onSubmit={calcular}>
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />

        <button type="submit">Calcular</button>
      </form>

      <p>{resultado}</p>
    </>
  )
}

export default Exercicio8
```

---

## Exercício 9

```jsx
import { useState } from 'react'

function Exercicio9() {

  const [idade, setIdade] = useState("")
  const [resultado, setResultado] = useState("")

  function verificar(event) {
    event.preventDefault()

    if (idade < 16) {
      setResultado("Não pode votar")
    }
    else if (idade <= 17) {
      setResultado("Voto opcional")
    }
    else {
      setResultado("Voto obrigatório")
    }
  }

  return (
    <>
      <h2>Votação</h2>

      <form onSubmit={verificar}>
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />

        <button type="submit">Verificar</button>
      </form>

      <p>{resultado}</p>
    </>
  )
}

export default Exercicio9
```

---

## Exercício 10

```jsx
import { useState } from 'react'

function Exercicio10() {

  const [valor, setValor] = useState("")
  const [resultado, setResultado] = useState("")

  function calcular(event) {
    event.preventDefault()

    let total = Number(valor)

    if (total > 100) {
      total = total - (total * 0.05)
    }

    setResultado(`Valor final: R$ ${total.toFixed(2)}`)
  }

  return (
    <>
      <h2>Desconto</h2>

      <form onSubmit={calcular}>
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />

        <button type="submit">Calcular</button>
      </form>

      <p>{resultado}</p>
    </>
  )
}

export default Exercicio10
```

---

## Exercício 11

```jsx
import { useState } from 'react'

function Exercicio11() {

  const [temperatura, setTemperatura] = useState("")
  const [resultado, setResultado] = useState("")

  function verificar(event) {
    event.preventDefault()

    if (temperatura < 15) {
      setResultado("Frio")
    }
    else if (temperatura <= 25) {
      setResultado("Agradável")
    }
    else {
      setResultado("Quente")
    }
  }

  return (
    <>
      <h2>Temperatura</h2>

      <form onSubmit={verificar}>
        <input
          type="number"
          value={temperatura}
          onChange={(e) => setTemperatura(e.target.value)}
        />

        <button type="submit">Verificar</button>
      </form>

      <p>{resultado}</p>
    </>
  )
}

export default Exercicio11
```

---

## Exercício 12

```jsx
import { useState } from 'react'

function Exercicio12() {

  const [numero, setNumero] = useState("")
  const [resultado, setResultado] = useState("")

  function verificar(event) {
    event.preventDefault()

    if (Number(numero) % 5 === 0) {
      setResultado("É múltiplo de 5")
    } else {
      setResultado("Não é múltiplo de 5")
    }
  }

  return (
    <>
      <h2>Múltiplo de 5</h2>

      <form onSubmit={verificar}>
        <input
          type="number"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />

        <button type="submit">Verificar</button>
      </form>

      <p>{resultado}</p>
    </>
  )
}

export default Exercicio12
```

---

## Exercício 13

```jsx
import { useState } from 'react'

function Exercicio13() {

  const [n1, setN1] = useState("")
  const [n2, setN2] = useState("")
  const [resultado, setResultado] = useState("")

  function verificar(event) {
    event.preventDefault()

    if (Number(n1) % Number(n2) === 0) {
      setResultado("É divisível")
    } else {
      setResultado("Não é divisível")
    }
  }

  return (
    <>
      <h2>Divisível</h2>

      <form onSubmit={verificar}>
        <input
          type="number"
          placeholder="Primeiro número"
          value={n1}
          onChange={(e) => setN1(e.target.value)}
        />

        <input
          type="number"
          placeholder="Segundo número"
          value={n2}
          onChange={(e) => setN2(e.target.value)}
        />

        <button type="submit">Verificar</button>
      </form>

      <p>{resultado}</p>
    </>
  )
}

export default Exercicio13
```

---

## Exercício 14

```jsx
import { useState } from 'react'

function Exercicio14() {

  const [hora, setHora] = useState("")
  const [resultado, setResultado] = useState("")

  function verificar(event) {
    event.preventDefault()

    const h = Number(hora)

    if (h >= 5 && h <= 11) {
      setResultado("Bom dia")
    }
    else if (h >= 12 && h <= 17) {
      setResultado("Boa tarde")
    }
    else {
      setResultado("Boa noite")
    }
  }

  return (
    <>
      <h2>Horário</h2>

      <form onSubmit={verificar}>
        <input
          type="number"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />

        <button type="submit">Verificar</button>
      </form>

      <p>{resultado}</p>
    </>
  )
}

export default Exercicio14
```

---

## Exercício 15

```jsx
import { useState } from 'react'

function Exercicio15() {

  const [baseMaior, setBaseMaior] = useState("")
  const [baseMenor, setBaseMenor] = useState("")
  const [altura, setAltura] = useState("")
  const [resultado, setResultado] = useState("")

  function calcular(event) {
    event.preventDefault()

    const area = ((Number(baseMaior) + Number(baseMenor)) * Number(altura)) / 2

    setResultado(`Área: ${area}`)
  }

  return (
    <>
      <h2>Trapézio</h2>

      <form onSubmit={calcular}>
        <input type="number" placeholder="Base maior" value={baseMaior} onChange={(e) => setBaseMaior(e.target.value)} />

        <input type="number" placeholder="Base menor" value={baseMenor} onChange={(e) => setBaseMenor(e.target.value)} />

        <input type="number" placeholder="Altura" value={altura} onChange={(e) => setAltura(e.target.value)} />

        <button type="submit">Calcular</button>
      </form>

      <p>{resultado}</p>
    </>
  )
}

export default Exercicio15
```

---

## Exercício 16

```jsx
import { useState } from 'react'

function Exercicio16() {

  const [raio, setRaio] = useState("")
  const [resultado, setResultado] = useState("")

  function calcular(event) {
    event.preventDefault()

    const area = Math.PI * (Number(raio) * Number(raio))
    const circunferencia = 2 * Math.PI * Number(raio)

    setResultado(`Área: ${area.toFixed(2)} | Circunferência: ${circunferencia.toFixed(2)}`)
  }

  return (
    <>
      <h2>Círculo</h2>

      <form onSubmit={calcular}>
        <input
          type="number"
          value={raio}
          onChange={(e) => setRaio(e.target.value)}
        />

        <button type="submit">Calcular</button>
      </form>

      <p>{resultado}</p>
    </>
  )
}

export default Exercicio16
```
