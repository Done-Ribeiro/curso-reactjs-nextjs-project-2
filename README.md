# React Hooks

## Links Úteis

- Ciclos de vida: [https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

- Manipulando eventos: [https://pt-br.reactjs.org/docs/handling-events.html](https://pt-br.reactjs.org/docs/handling-events.html)

- SyntheticEvent: [https://pt-br.reactjs.org/docs/events.html](https://pt-br.reactjs.org/docs/events.html)

- Regras dos Hooks: [https://pt-br.reactjs.org/docs/hooks-rules.html](https://pt-br.reactjs.org/docs/hooks-rules.html)

### `useState`

- utilizado para controlar um estado

[https://pt-br.reactjs.org/docs/hooks-state.html](https://pt-br.reactjs.org/docs/hooks-state.html)

### `useEffect`

- utilizado para causar um efeito...
- pode ser usado para qualquer desses efeitos:
  - componentDidMount
  - componentDidUpdate
  - componentWillUmount

[https://pt-br.reactjs.org/docs/hooks-effect.html](https://pt-br.reactjs.org/docs/hooks-effect.html)

### `useCallback`

- É pra memorizar um callback (uma função de callback)

<code>Precisa salvar a sua função (fn) em algum lugar...
Em alguns casos, criar a fn é mais barato que salvar a fn em memória</code>

[https://pt-br.reactjs.org/docs/hooks-reference.html#usecallback](https://pt-br.reactjs.org/docs/hooks-reference.html#usecallback)

### `useMemo`

- Pode utilizar um componente em si
- Pode utilizar um valor em si para ser memorizado
- Pode utilizar useMemo ou React.memo... tanto faz

<code>sempre checa pra ver se tem o problema...
e se é realmente necessário o uso dele useMemo...</code>

[https://pt-br.reactjs.org/docs/hooks-reference.html#usecallback](https://pt-br.reactjs.org/docs/hooks-reference.html#usecallback)

### `useRef`

- Pra pegar alguma coisa que está na tela (um elemento mesmo -> da DOM)
- Não causa re-renderização...
- Pode ser usado para atualizar valores

[https://pt-br.reactjs.org/docs/hooks-reference.html#useref](https://pt-br.reactjs.org/docs/hooks-reference.html#useref)

### `useContext`

- Utilizado para criar estados globais da aplicação

[https://pt-br.reactjs.org/docs/hooks-reference.html#usecontext](https://pt-br.reactjs.org/docs/hooks-reference.html#usecontext)

### `useReducer`

- Utilizado com estados mais complexos que requerem alguma lógica
- 1º param -> uma fn | 2º param -> estado inicial
- Ele retorna o estado e uma fn de `dispatch`

  - o <i>dispatch</i> por padrão utiliza estas duas chaves (com estes nomes por padrão):
    - `type ->` nome da ação que será realizada
    - `payload ->` conteúdo da ação (dados) `[OPCIONAL]`
  - SEMPRE: retorne um estado default no `reducer` (caso contrário o programa vai quebrar)

Exemplo 1 (somente default do reducer): `return { ...state } ->` retornando o estado anterior

```js
const reducer = (state, action) => {
  return { ...state };
};
```

Exemplo 2 (action + default do reducer):

```js
const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      return { ...state, title: action.payload };
    }

  return { ...state };
};
```

[https://pt-br.reactjs.org/docs/hooks-reference.html#usereducer](https://pt-br.reactjs.org/docs/hooks-reference.html#usereducer)
