// --- BASE DE DADOS DO CURSO ---
const courseData = [
  {
    id: 1,
    title: "Unidade 1: Fundamentos",
    theory: `
            <h2>Estrutura Básica e Tipos</h2>
            <p>Bem-vindo ao C! Todo programa começa com bibliotecas e uma função principal.</p>
            <pre><span class="c-keyword">#include</span> &lt;stdio.h&gt; <span class="c-comment">// Biblioteca de Entrada/Saída</span>

<span class="c-keyword">int</span> <span class="c-function">main</span>() {
    <span class="c-keyword">int</span> idade = <span class="c-number">25</span>;           <span class="c-comment">// Inteiro</span>
    <span class="c-keyword">float</span> altura = <span class="c-number">1.75</span>;      <span class="c-comment">// Decimal</span>
    <span class="c-keyword">char</span> letra = <span class="c-string">'A'</span>;         <span class="c-comment">// Caractere único</span>
    
    <span class="c-function">printf</span>(<span class="c-string">"Olá Mundo"</span>);
    <span class="c-keyword">return</span> <span class="c-number">0</span>;
}</pre>
            <p>Para ler dados do usuário, usamos o <code>scanf</code>. Note o uso do <code>&</code> para indicar o endereço da variável.</p>
        `,
    exercises: [
      {
        type: "fill",
        question:
          "Complete o código para ler um número inteiro na variável 'num':",
        codeSnippet: `scanf("%d", ___num);`,
        answer: "&",
        feedback:
          "No scanf, precisamos passar o endereço de memória da variável usando o operador '&'.",
      },
      {
        type: "choice",
        question: "Qual tipo de dado é ideal para armazenar o valor 3.14?",
        options: ["int", "char", "float", "void"],
        answer: "float",
        feedback:
          "O tipo 'float' (ponto flutuante) é usado para números com casas decimais.",
      },
      {
        type: "code",
        question:
          "Escreva uma linha de código para imprimir 'Ola' na tela usando printf.",
        keywords: ["printf", "Ola"],
        feedback: 'A sintaxe correta é printf("Ola");',
      },
      {
        type: "choice",
        question:
          "Qual a forma correta de declarar uma constante inteira em C?",
        options: [
          "constant int x = 10;",
          "int x = 10;",
          "const int x = 10;",
          "#define x 10",
        ],
        answer: "const int x = 10;",
        feedback:
          "A palavra-chave 'const' é usada antes do tipo para declarar uma variável cujo valor não pode ser alterado.",
      },
      {
        type: "code",
        question:
          "Declare uma variável do tipo char chamada 'inicial' e atribua a ela o valor 'J'.",
        keywords: ["char", "inicial", "=", "'J'", ";"],
        feedback: "A sintaxe é: char inicial = 'J';",
      },
      {
        type: "choice",
        question:
          "Qual especificador de formato é usado para imprimir um número inteiro (int)?",
        options: ["%f", "%c", "%d", "%s"],
        answer: "%d",
        feedback: "%d é usado para inteiros decimais.",
      },
      {
        type: "fill",
        question: "Qual é o tipo de retorno da função principal 'main'?",
        codeSnippet: `___ main() { ... return 0; }`,
        answer: "int",
        feedback:
          "A função main deve retornar um número inteiro (geralmente 0 para sucesso).",
      },
      {
        type: "code",
        question:
          "Declare uma variável inteira chamada 'idade' e atribua o valor 18.",
        keywords: ["int", "idade", "=", "18", ";"],
        feedback: "Sintaxe: int idade = 18;",
      },
      {
        type: "choice",
        question:
          "Qual sequência de caracteres representa uma quebra de linha em C?",
        options: ["\\t", "\\n", "\\r", "\\b"],
        answer: "\\n",
        feedback: "\\n (newline) move o cursor para o início da próxima linha.",
      },
      {
        type: "fill",
        question:
          "Complete o código para incluir a biblioteca padrão de entrada e saída.",
        codeSnippet: `#include <___>`,
        answer: "stdio.h",
        feedback:
          "stdio.h (Standard Input/Output) contém funções como printf e scanf.",
      },
      {
        type: "fill",
        question:
          "Complete o código para imprimir um número inteiro (int) usando printf.",
        codeSnippet: `printf("Idade: ___", idade);`,
        answer: "%d",
        feedback:
          "O especificador de formato `%d` é usado para imprimir valores do tipo `int` (inteiro decimal).",
      },
      {
        type: "fill",
        question:
          "Complete o código para imprimir um número de ponto flutuante (float) com printf.",
        codeSnippet: `printf("Altura: ___", altura);`,
        answer: "%f",
        feedback:
          "O especificador de formato `%f` é usado para imprimir valores do tipo `float` (ponto flutuante).",
      },
      {
        type: "fill",
        question:
          "Complete o código para imprimir um único caractere (char) com printf.",
        codeSnippet: `printf("Inicial: ___", letra);`,
        answer: "%c",
        feedback:
          "O especificador de formato `%c` é usado para imprimir valores do tipo `char` (caractere).",
      },
    ],
  },
  {
    id: 2,
    title: "Unidade 2: Decisões",
    theory: `
            <h2>Condicionais</h2>
            <p>Usamos <code>if</code> e <code>else</code> para tomar decisões baseadas em lógica booleana.</p>
            <pre><span class="c-keyword">if</span> (nota >= <span class="c-number">7</span>) {
    <span class="c-function">printf</span>(<span class="c-string">"Aprovado"</span>);
} <span class="c-keyword">else</span> {
    <span class="c-function">printf</span>(<span class="c-string">"Reprovado"</span>);
}</pre>
            <p>Para múltiplas escolhas de valores exatos, o <code>switch</code> é mais limpo.</p>
        `,
    exercises: [
      {
        type: "fill",
        question: "Complete a estrutura switch:",
        codeSnippet: `switch(opcao) { ___ 1: printf("Um"); break; }`,
        answer: "case",
        feedback:
          "Dentro do switch, usamos a palavra-chave 'case' para definir os cenários.",
      },
      {
        type: "choice",
        question: "Qual operador representa 'Diferente' em C?",
        options: ["==", "!=", "<>", "="],
        answer: "!=",
        feedback:
          "Em C, '!=' significa diferente. '==' é comparação de igualdade.",
      },
      {
        type: "code",
        question:
          "Escreva um if que verifica se a variável 'x' é maior que 10.",
        keywords: ["if", "x", ">", "10"],
        feedback: "Deve se parecer com: if (x > 10) { ... }",
      },
      {
        type: "fill",
        question:
          "Complete a condição para verificar se 'a' E 'b' são maiores que zero.",
        codeSnippet: `if (a > 0 ___ b > 0)`,
        answer: "&&",
        feedback: "O operador lógico 'E' em C é representado por '&&'.",
      },
      {
        type: "code",
        question:
          "Escreva uma estrutura if-else if-else para verificar se um número 'n' é positivo, negativo ou zero.",
        keywords: ["if", "else if", "else", "n > 0", "n < 0"],
        feedback:
          "A estrutura seria: if (n > 0) { ... } else if (n < 0) { ... } else { ... }",
      },
      {
        type: "fill",
        question:
          "Complete o operador ternário para atribuir 1 se 'a' for maior que 'b', senão 0.",
        codeSnippet: `int maior = (a > b) ___ 1 : 0;`,
        answer: "?",
        feedback:
          "O operador ternário usa '?' para a condição e ':' para separar os valores.",
      },
      {
        type: "choice",
        question:
          "Qual palavra-chave define o caso padrão em um switch, executado se nenhum case corresponder?",
        options: ["default", "else", "break", "standard"],
        answer: "default",
        feedback:
          "O bloco 'default' é executado quando nenhuma das opções 'case' é verdadeira.",
      },
      {
        type: "code",
        question:
          "Escreva um if para verificar se um número 'n' é par (resto da divisão por 2 é 0).",
        keywords: ["if", "n", "%", "2", "==", "0"],
        feedback: "Use o operador módulo: if (n % 2 == 0) { ... }",
      },
      {
        type: "fill",
        question:
          "Complete a condição para verificar se 'a' OU 'b' são iguais a zero.",
        codeSnippet: `if (a == 0 ___ b == 0)`,
        answer: "||",
        feedback: "O operador lógico 'OU' em C é representado por '||'.",
      },
      {
        type: "code",
        question:
          "Escreva um código que verifica se 'idade' é maior que 18. Se sim, imprima 'Adulto'.",
        keywords: ["if", "idade", ">", "18", "printf", "Adulto"],
        feedback: 'if (idade > 18) { printf("Adulto"); }',
      },
    ],
  },
  {
    id: 3,
    title: "Unidade 3: Repetição e Vetores",
    theory: `
            <h2>Laços e Arrays</h2>
            <p>O laço <code>for</code> é ideal quando sabemos o número de repetições.</p>
            <pre><span class="c-keyword">for</span>(<span class="c-keyword">int</span> i=<span class="c-number">0</span>; i < <span class="c-number">10</span>; i++) { ... }</pre>
            <p>Vetores (Arrays) armazenam múltiplos dados do mesmo tipo. Strings são vetores de <code>char</code>.</p>
        `,
    exercises: [
      {
        type: "fill",
        question: "Declare um vetor de inteiros com 5 posições:",
        codeSnippet: `int numeros[___];`,
        answer: "5",
        feedback: "O tamanho do vetor fica entre colchetes na declaração.",
      },
      {
        type: "choice",
        question: "Qual o índice do primeiro elemento de um vetor?",
        options: ["1", "0", "-1", "Depende"],
        answer: "0",
        feedback: "Em C, a indexação de arrays sempre começa em 0.",
      },
      {
        type: "code",
        question:
          "Escreva um laço while que roda enquanto 'x' for menor que 5.",
        keywords: ["while", "x", "<", "5"],
        feedback: "Estrutura: while(x < 5) { ... }",
      },
      {
        type: "fill",
        question: "Acesse o terceiro elemento (índice 2) de um vetor 'dados'.",
        codeSnippet: `int valor = dados[___];`,
        answer: "2",
        feedback:
          "Lembre-se que os índices começam em 0, então o terceiro elemento está no índice 2.",
      },
      {
        type: "code",
        question:
          "Declare e inicialize uma string (vetor de char) chamada 'cidade' com o valor \"Rio\".",
        keywords: ["char", "cidade", "[]", "=", '"Rio"', ";"],
        feedback: 'A sintaxe é: char cidade[] = "Rio";',
      },
      {
        type: "code",
        question:
          "Use um laço 'for' para imprimir todos os 3 elementos do vetor 'notas'.",
        keywords: ["for", "i", "notas", "printf"],
        feedback:
          'A estrutura do laço for é for(int i=0; i<3; i++) { printf("%d", notas[i]); }',
      },
      {
        type: "choice",
        question: "Qual a finalidade da instrução 'break' dentro de um laço?",
        options: [
          "Pular para a próxima iteração",
          "Terminar o programa",
          "Sair imediatamente do laço",
          "Retornar um valor",
        ],
        answer: "Sair imediatamente do laço",
        feedback:
          "O 'break' interrompe a execução do laço (for, while, do-while) e continua a execução do programa após o laço.",
      },
      {
        type: "fill",
        question:
          "Complete o laço 'do-while' para que ele imprima 'Teste' uma vez.",
        codeSnippet: `int i = 10; do { printf("Teste"); } while(i < ___);`,
        answer: "10",
        feedback:
          "O laço do-while executa o bloco e DEPOIS verifica a condição. Como i (10) não é menor que 10, o laço para após a primeira execução.",
      },
      {
        type: "code",
        question:
          "Declare uma matriz de inteiros 2x3 (2 linhas, 3 colunas) chamada 'matriz'.",
        keywords: ["int", "matriz", "[2]", "[3]", ";"],
        feedback: "A sintaxe para uma matriz 2D é: int matriz[2][3];",
      },
      {
        type: "choice",
        question:
          "Qual função da biblioteca <string.h> é usada para obter o comprimento de uma string?",
        options: ["length()", "sizeof()", "strlen()", "strlength()"],
        answer: "strlen()",
        feedback:
          "A função strlen() (string length) retorna o número de caracteres em uma string, sem contar o caractere nulo final '\\0'.",
      },
    ],
  },
  {
    id: 4,
    title: "Unidade 4: Ponteiros e Structs",
    theory: `
            <h2>Memória e Estruturas</h2>
            <p><strong>Ponteiros</strong> armazenam endereços de memória. Usamos <code>*</code> para declarar ou acessar o valor.</p>
            <pre><span class="c-keyword">int</span> x = <span class="c-number">10</span>;
<span class="c-keyword">int</span> *ptr = &x;</pre>
            <p><strong>Structs</strong> permitem agrupar variáveis de tipos diferentes.</p>
        `,
    exercises: [
      {
        type: "fill",
        question: "Para acessar o valor apontado por 'ptr', usamos:",
        codeSnippet: `printf("%d", ___ptr);`,
        answer: "*",
        feedback:
          "O operador '*' (dereferência) acessa o valor no endereço guardado pelo ponteiro.",
      },
      {
        type: "choice",
        question:
          "Como acessamos um campo 'idade' de uma struct chamada 'aluno'?",
        options: [
          "aluno->idade",
          "aluno.idade",
          "aluno[idade]",
          "aluno::idade",
        ],
        answer: "aluno.idade",
        feedback: "Para structs comuns (não ponteiros), usamos o ponto (.)",
      },
      {
        type: "code",
        question: "Declare um ponteiro de inteiro chamado 'p'.",
        keywords: ["int", "*", "p"],
        feedback: "Declaração: int *p;",
      },
      {
        type: "choice",
        question:
          "Se 'p_aluno' é um ponteiro para uma struct, como acessamos o campo 'nota'?",
        options: [
          "p_aluno.nota",
          "*p_aluno.nota",
          "p_aluno->nota",
          "p_aluno&nota",
        ],
        answer: "p_aluno->nota",
        feedback:
          "O operador '->' (seta) é usado para acessar membros de uma struct através de um ponteiro para ela.",
      },
      {
        type: "fill",
        question:
          "Complete o código para atribuir o endereço da variável 'valor' ao ponteiro 'ptr'.",
        codeSnippet: `ptr = ___valor;`,
        answer: "&",
        feedback: "O operador '&' obtém o endereço de memória de uma variável.",
      },
      {
        type: "code",
        question:
          "Defina uma struct chamada 'Ponto' com dois inteiros: 'x' e 'y'.",
        keywords: ["struct", "Ponto", "int", "x", "y", ";"],
        feedback: "struct Ponto { int x; int y; };",
      },
      {
        type: "choice",
        question:
          "O que acontece se incrementarmos um ponteiro de inteiro (ptr++) em uma arquitetura comum?",
        options: [
          "Aumenta o valor apontado em 1",
          "Avança 4 bytes na memória",
          "O ponteiro vira NULL",
          "Erro de compilação",
        ],
        answer: "Avança 4 bytes na memória",
        feedback:
          "Aritmética de ponteiros move o endereço baseada no tamanho do tipo de dado (int geralmente tem 4 bytes).",
      },
      {
        type: "fill",
        question:
          "Para garantir que um ponteiro não aponta para lixo de memória, inicializamos com ___.",
        codeSnippet: `int *ptr = ___;`,
        answer: "NULL",
        feedback:
          "NULL é uma macro que representa um ponteiro nulo (endereço 0), indicando que ele não aponta para nada válido.",
      },
      {
        type: "code",
        question:
          "Crie um alias (apelido) 'Inteiro' para o tipo 'int' usando typedef.",
        keywords: ["typedef", "int", "Inteiro", ";"],
        feedback: "Sintaxe: typedef int Inteiro;",
      },
    ],
  },
  {
    id: 5,
    title: "Unidade 5: Avançado",
    theory: `
            <h2>Alocação Dinâmica e Arquivos</h2>
            <p><code>malloc</code> reserva memória durante a execução. <code>free</code> libera.</p>
            <pre><span class="c-keyword">int</span> *v = (<span class="c-keyword">int</span>*) <span class="c-function">malloc</span>(<span class="c-number">5</span> * <span class="c-keyword">sizeof</span>(<span class="c-keyword">int</span>));
<span class="c-function">free</span>(v);</pre>
            <p>Para arquivos, usamos ponteiros do tipo <code>FILE*</code>.</p>
        `,
    exercises: [
      {
        type: "fill",
        question: "Qual função libera a memória alocada?",
        codeSnippet: `___(ponteiro);`,
        answer: "free",
        feedback: "Sempre use free() para evitar vazamento de memória.",
      },
      {
        type: "choice",
        question: "Qual modo de abertura de arquivo é para LEITURA?",
        options: ['"w"', '"r"', '"a"', '"w+"'],
        answer: '"r"',
        feedback: '"r" vem de Read (Ler). "w" é Write (Escrever).',
      },
      {
        type: "code",
        question: "Use malloc para alocar memória para 1 inteiro.",
        keywords: ["malloc", "sizeof", "int"],
        feedback: "Ex: ptr = (int*) malloc(sizeof(int));",
      },
      {
        type: "fill",
        question:
          "Complete o modo de abertura de arquivo para anexar dados ao final dele.",
        codeSnippet: `FILE *f = fopen("log.txt", "___");`,
        answer: "a",
        feedback:
          "O modo 'a' (append) abre o arquivo para escrita, posicionando o cursor no final. Se o arquivo não existir, ele é criado.",
      },
    ],
  },
  {
    id: 6,
    title: "Unidade 6: Funções",
    theory: `
            <h2>Organizando o Código</h2>
            <p>Funções são blocos de código reutilizáveis que realizam uma tarefa específica. Elas ajudam a organizar e modularizar seu programa.</p>
            <pre><span class="c-comment">// Protótipo da função (declaração)</span>
<span class="c-keyword">int</span> <span class="c-function">somar</span>(<span class="c-keyword">int</span> a, <span class="c-keyword">int</span> b);

<span class="c-keyword">int</span> <span class="c-function">main</span>() {
    <span class="c-keyword">int</span> resultado = <span class="c-function">somar</span>(<span class="c-number">5</span>, <span class="c-number">3</span>); <span class="c-comment">// Chamada</span>
    <span class="c-function">printf</span>(<span class="c-string">"Resultado: %d"</span>, resultado);
    <span class="c-keyword">return</span> <span class="c-number">0</span>;
}

<span class="c-comment">// Definição da função</span>
<span class="c-keyword">int</span> <span class="c-function">somar</span>(<span class="c-keyword">int</span> a, <span class="c-keyword">int</span> b) {
    <span class="c-keyword">return</span> a + b;
}</pre>
            <p>Uma função tem um tipo de retorno, um nome e pode receber parâmetros (entradas).</p>
        `,
    exercises: [
      {
        type: "fill",
        question: "Para uma função que não retorna valor, usamos o tipo ___.",
        codeSnippet: `___ saudacao() { printf("Ola"); }`,
        answer: "void",
        feedback: "O tipo 'void' indica que a função não tem valor de retorno.",
      },
      {
        type: "choice",
        question: "O que é o 'protótipo' de uma função?",
        options: [
          "O corpo da função",
          "A chamada da função",
          "A declaração da função antes do main",
          "O valor de retorno",
        ],
        answer: "A declaração da função antes do main",
        feedback:
          "O protótipo (ou declaração) informa ao compilador sobre a existência da função antes de ela ser definida, evitando erros.",
      },
      {
        type: "code",
        question:
          "Crie uma função chamada 'dobro' que recebe um inteiro e retorna o dobro dele.",
        keywords: ["int", "dobro", "return", "*", "2"],
        feedback:
          "A função deve ter a assinatura 'int dobro(int numero)' e usar 'return numero * 2;' no corpo.",
      },
      {
        type: "fill",
        question:
          "Complete a chamada da função 'calcular' passando as variáveis 'a' e 'b'.",
        codeSnippet: `resultado = calcular(___, ___);`,
        answer: "a, b",
        feedback:
          "Os argumentos passados na chamada da função devem corresponder aos parâmetros da sua definição.",
      },
      {
        type: "choice",
        question: "O que são 'parâmetros' de uma função?",
        options: [
          "Variáveis globais",
          "O valor que a função retorna",
          "Variáveis locais que recebem os valores na chamada da função",
          "O nome da função",
        ],
        answer: "Variáveis locais que recebem os valores na chamada da função",
        feedback:
          "Parâmetros são as 'entradas' que a função utiliza para realizar sua tarefa.",
      },
      {
        type: "code",
        question:
          "Escreva o protótipo de uma função chamada 'imprimir_msg' que não recebe parâmetros e não retorna valor.",
        keywords: ["void", "imprimir_msg", "(", ")", ";"],
        feedback:
          "A sintaxe do protótipo é: void imprimir_msg(void); ou void imprimir_msg();",
      },
      {
        type: "code",
        question:
          "Crie uma função 'soma_vetor' que recebe um vetor de inteiros e seu tamanho, e retorna a soma de seus elementos.",
        keywords: ["int", "soma_vetor", "int", "[]", "for", "return"],
        feedback:
          "A assinatura seria 'int soma_vetor(int vetor[], int tamanho)'. Dentro, um laço 'for' percorreria o vetor somando os valores.",
      },
    ],
  },
  {
    id: 7,
    title: "Unidade 7: Ponteiros na Prática",
    theory: `
            <h2>Aprofundando em Ponteiros</h2>
            <p>Ponteiros são variáveis poderosas que armazenam endereços de memória. Eles são essenciais para manipulação direta de dados e otimização.</p>
            <pre><span class="c-keyword">int</span> valor = <span class="c-number">50</span>;
<span class="c-keyword">int</span> *ptr = &valor; <span class="c-comment">// ptr aponta para valor</span>

<span class="c-function">printf</span>(<span class="c-string">"%d"</span>, *ptr); <span class="c-comment">// Exibe 50</span>
*ptr = <span class="c-number">100</span>;         <span class="c-comment">// Altera valor para 100</span></pre>
            <p>Além de apontar para variáveis simples, ponteiros são usados para percorrer arrays e passar dados por referência para funções.</p>
        `,
    exercises: [
      {
        type: "choice",
        question:
          "Se `int *p = &x;`, qual expressão representa o valor de `x`?",
        options: ["&p", "*p", "p", "*x"],
        answer: "*p",
        feedback: "O operador * acessa o conteúdo do endereço armazenado em p.",
      },
      {
        type: "fill",
        question:
          "Complete para declarar um ponteiro que aponta para um caractere.",
        codeSnippet: `___ *letra;`,
        answer: "char",
        feedback:
          "O tipo do ponteiro deve corresponder ao tipo da variável apontada.",
      },
      {
        type: "code",
        question:
          "Crie uma função 'reset' que recebe um ponteiro para inteiro e muda seu valor para 0.",
        keywords: ["void", "reset", "int", "*", "*", "=", "0"],
        feedback: "void reset(int *ptr) { *ptr = 0; }",
      },
      {
        type: "choice",
        question: "O que imprime `printf('%p', ptr)`?",
        options: [
          "O valor apontado",
          "O endereço de memória",
          "O tamanho do ponteiro",
          "Um erro",
        ],
        answer: "O endereço de memória",
        feedback:
          "%p é o especificador de formato para imprimir endereços (ponteiros) em hexadecimal.",
      },
      {
        type: "fill",
        question:
          "Em um vetor `v`, `v` é equivalente ao endereço do ___ elemento.",
        codeSnippet: `&v[___]`,
        answer: "0",
        feedback:
          "O nome do vetor representa o endereço do primeiro elemento (índice 0).",
      },
      {
        type: "choice",
        question: "Se `ptr` é um ponteiro para um inteiro, o que `ptr++` faz?",
        options: [
          "Incrementa o valor do inteiro apontado",
          "Avança o ponteiro para o próximo endereço de inteiro",
          "Causa um erro de compilação",
          "Nada",
        ],
        answer: "Avança o ponteiro para o próximo endereço de inteiro",
        feedback:
          "A aritmética de ponteiros move o endereço pelo tamanho do tipo de dado. Para um int (geralmente 4 bytes), o endereço avança 4 bytes.",
      },
      {
        type: "code",
        question:
          "Crie uma função 'troca' que recebe dois ponteiros para inteiros e troca os valores entre eles.",
        keywords: ["void", "troca", "int", "*a", "*b", "temp"],
        feedback:
          "void troca(int *a, int *b) { int temp = *a; *a = *b; *b = temp; }",
      },
      {
        type: "fill",
        question:
          "Para acessar o campo 'idade' de uma struct através de um ponteiro 'p_pessoa', usamos o operador ___.",
        codeSnippet: `int idade_pessoa = p_pessoa___idade;`,
        answer: "->",
        feedback:
          "O operador '->' (seta) é um atalho para desreferenciar o ponteiro da struct e acessar um de seus membros, equivalente a (*p_pessoa).idade.",
      },
      {
        type: "choice",
        question:
          "Qual é a maneira segura de inicializar um ponteiro que ainda não aponta para um endereço válido?",
        options: [
          "int *ptr = 0;",
          "int *ptr = NULL;",
          "int *ptr;",
          "Nenhuma das anteriores",
        ],
        answer: "int *ptr = NULL;",
        feedback:
          "Inicializar um ponteiro com NULL é a prática padrão para indicar que ele não aponta para uma localização de memória válida, evitando comportamento indefinido.",
      },
    ],
  },
  {
    id: 8,
    title: "Unidade 8: Vetores (Arrays) em Detalhes",
    theory: `
            <h2>Explorando Vetores (Arrays)</h2>
            <p>Vetores, ou arrays, são uma das estruturas de dados mais fundamentais. Eles permitem armazenar uma coleção de itens do mesmo tipo em um bloco contíguo de memória. O acesso a cada item é feito através de um índice numérico.</p>
            <pre><span class="c-comment">// Declaração de um vetor de 5 inteiros</span>
<span class="c-keyword">int</span> numeros[<span class="c-number">5</span>];

<span class="c-comment">// Inicialização na declaração</span>
<span class="c-keyword">float</span> notas[] = {<span class="c-number">7.5</span>, <span class="c-number">8.0</span>, <span class="c-number">9.5</span>};

<span class="c-comment">// Acessando e modificando elementos</span>
numeros[<span class="c-number">0</span>] = <span class="c-number">10</span>; <span class="c-comment">// O primeiro elemento está no índice 0</span>
numeros[<span class="c-number">4</span>] = <span class="c-number">50</span>; <span class="c-comment">// O último elemento está no índice 4</span>

<span class="c-function">printf</span>(<span class="c-string">"Primeiro número: %d"</span>, numeros[<span class="c-number">0</span>]);</pre>
            <p>É muito comum usar laços <code>for</code> para percorrer todos os elementos de um vetor.</p>
            <pre><span class="c-keyword">for</span> (<span class="c-keyword">int</span> i = <span class="c-number">0</span>; i < <span class="c-number">3</span>; i++) {
    <span class="c-function">printf</span>(<span class="c-string">"Nota %d: %.1f\\n"</span>, i + <span class="c-number">1</span>, notas[i]);
}</pre>
            <p>O nome de um vetor, como <code>numeros</code>, na verdade representa o endereço de memória do seu primeiro elemento. Por isso, vetores e ponteiros estão intimamente ligados em C.</p>
        `,
    exercises: [
      {
        type: "choice",
        question:
          "Em um vetor declarado como `int v[10];`, qual é o índice do último elemento acessível?",
        options: ["10", "9", "0", "11"],
        answer: "9",
        feedback:
          "Os índices de um vetor de tamanho N vão de 0 a N-1. Portanto, para um vetor de 10 elementos, os índices vão de 0 a 9.",
      },
      {
        type: "code",
        question: "Declare um vetor (array) de 10 floats chamado 'notas'.",
        keywords: ["float", "notas", "[10]", ";"],
        feedback: "A sintaxe é: float notas[10];",
      },
      {
        type: "fill",
        question:
          "Para acessar o quinto elemento de um vetor 'arr', você usa o índice ___.",
        codeSnippet: `valor = arr[___];`,
        answer: "4",
        feedback:
          "Lembre-se que a contagem de índices começa em 0. O primeiro elemento é arr[0], o segundo é arr[1], e assim por diante. O quinto é arr[4].",
      },
      {
        type: "code",
        question:
          "Use um laço 'for' para preencher um vetor de inteiros 'dados' de 5 posições com o valor de seu próprio índice (dados[0]=0, dados[1]=1, etc).",
        keywords: ["for", "int", "i", "< 5", "dados", "[i]", "=", "i"],
        feedback: "for(int i=0; i<5; i++) { dados[i] = i; }",
      },
      {
        type: "choice",
        question:
          "O que acontece se você tentar acessar um elemento fora dos limites de um vetor (ex: `arr[10]` em um vetor de 10 elementos)?",
        options: [
          "O programa sempre trava com um erro.",
          "O compilador impede que o código seja gerado.",
          "Ocorre um comportamento indefinido, podendo ler lixo de memória ou corromper dados.",
          "O valor retornado é sempre 0 ou NULL.",
        ],
        answer:
          "Ocorre um comportamento indefinido, podendo ler lixo de memória ou corromper dados.",
        feedback:
          "C não verifica os limites do vetor em tempo de execução. Acessar fora dos limites é um erro grave que leva a comportamento indefinido (undefined behavior).",
      },
      {
        type: "fill",
        question:
          "Complete a linha para declarar e inicializar um vetor com os valores 10, 20 e 30.",
        codeSnippet: `int valores[] = {___};`,
        answer: "10, 20, 30",
        feedback:
          "Você pode inicializar um vetor na declaração usando chaves {} e separando os valores por vírgula.",
      },
      {
        type: "code",
        question:
          "Declare uma matriz (vetor 2D) de caracteres 3x3 chamada 'jogo_da_velha'.",
        keywords: ["char", "jogo_da_velha", "[3]", "[3]", ";"],
        feedback:
          "Para matrizes, você especifica o tamanho de cada dimensão: char jogo_da_velha[3][3];",
      },
      {
        type: "choice",
        question: "Qual a principal vantagem de usar vetores?",
        options: [
          "Armazenar tipos de dados diferentes juntos",
          "Acessar elementos por um nome, em vez de um índice",
          "Armazenar múltiplos valores do mesmo tipo de forma organizada e acessá-los eficientemente",
          "Mudar de tamanho dinamicamente com facilidade",
        ],
        answer:
          "Armazenar múltiplos valores do mesmo tipo de forma organizada e acessá-los eficientemente",
        feedback:
          "Vetores são ideais para coleções de dados homogêneos (mesmo tipo) que podem ser acessados rapidamente por um índice.",
      },
      {
        type: "fill",
        question:
          "Para descobrir o tamanho total em bytes de um vetor 'arr', usamos o operador ___.",
        codeSnippet: `size_t tamanho = ___(arr);`,
        answer: "sizeof",
        feedback:
          "O operador sizeof retorna o tamanho em bytes do tipo ou variável passada.",
      },
      {
        type: "code",
        question:
          "Escreva um laço 'for' que imprime um vetor 'v' de 5 posições de trás para frente (índices 4 a 0).",
        keywords: ["for", "i", "4", ">=", "0", "i--", "printf"],
        feedback: 'for(int i=4; i>=0; i--) { printf("%d", v[i]); }',
      },
      {
        type: "choice",
        question:
          "Em C, strings são vetores de char terminados por qual caractere especial?",
        options: ["\\n", "\\0", "\\t", "EOF"],
        answer: "\\0",
        feedback:
          "O caractere nulo (\\0) indica o fim de uma string na memória.",
      },
      {
        type: "code",
        question:
          "Declare um vetor de inteiros 'nums' com 3 elementos e inicialize-o com zeros.",
        keywords: ["int", "nums", "[3]", "{0}", ";"],
        feedback: "int nums[3] = {0}; ou int nums[3] = {0, 0, 0};",
      },
    ],
  },
];

// --- LÓGICA DA APLICAÇÃO ---

let userXP = 0;
let userLevel = 1;
const xpPerLevel = 100; // XP necessário para o próximo nível
let currentUnitIndex = 0;

function init() {
  // Adiciona um estado 'completed' para cada exercício para evitar XP duplicado
  courseData.forEach((unit) => {
    unit.exercises.forEach((ex) => {
      ex.completed = false;
      ex.incorrectAttempts = 0;
    });
  });

  loadProgress();
  renderMenu();
  loadUnit(0);
  updateUserStats();

  // Configuração do Menu Hambúrguer
  const menuBtn = document.getElementById("menu-toggle");
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      document.body.classList.toggle("menu-hidden");
    });
  }
  // Opcional: Começar com menu fechado em telas pequenas
  if (window.innerWidth <= 768) {
    document.body.classList.add("menu-hidden");
  }
}

function updateUserStats() {
  const levelEl = document.getElementById("user-level");
  const xpEl = document.getElementById("user-xp");

  // Calcula o nível atual e o XP para o próximo nível
  userLevel = Math.floor(userXP / xpPerLevel) + 1;
  const xpForCurrentLevel = userXP % xpPerLevel;

  levelEl.innerText = `Nível: ${userLevel}`;
  xpEl.innerText = `XP: ${xpForCurrentLevel} / ${xpPerLevel}`;
}

function saveProgress() {
  const completedMap = {};
  const attemptsMap = {};
  courseData.forEach((unit, uIdx) => {
    unit.exercises.forEach((ex, eIdx) => {
      if (ex.completed) {
        completedMap[`${uIdx}-${eIdx}`] = true;
      }
      if (ex.incorrectAttempts > 0) {
        attemptsMap[`${uIdx}-${eIdx}`] = ex.incorrectAttempts;
      }
    });
  });

  const progress = {
    xp: userXP,
    completed: completedMap,
    attempts: attemptsMap,
  };

  localStorage.setItem("cCourseProgress", JSON.stringify(progress));
}

function loadProgress() {
  const saved = localStorage.getItem("cCourseProgress");
  if (saved) {
    const progress = JSON.parse(saved);
    userXP = progress.xp || 0;

    if (progress.completed) {
      courseData.forEach((unit, uIdx) => {
        unit.exercises.forEach((ex, eIdx) => {
          if (progress.completed[`${uIdx}-${eIdx}`]) {
            ex.completed = true;
          }
        });
      });
    }

    if (progress.attempts) {
      courseData.forEach((unit, uIdx) => {
        unit.exercises.forEach((ex, eIdx) => {
          if (progress.attempts[`${uIdx}-${eIdx}`]) {
            ex.incorrectAttempts = progress.attempts[`${uIdx}-${eIdx}`];
          }
        });
      });
    }
  }
}

function renderMenu() {
  const nav = document.getElementById("nav-menu");
  nav.innerHTML = "";
  courseData.forEach((unit, index) => {
    const btn = document.createElement("button");
    btn.innerText = unit.title;
    btn.onclick = () => loadUnit(index);
    if (index === currentUnitIndex) btn.classList.add("active");
    nav.appendChild(btn);
  });
}

function updateProgress() {
  const bar = document.getElementById("progress-bar");
  // Simples lógica de progresso baseada na navegação atual para demonstração
  const percentage = ((currentUnitIndex + 1) / courseData.length) * 100;
  bar.style.width = percentage + "%";
}

function loadUnit(index) {
  currentUnitIndex = index;
  const unit = courseData[index];
  const content = document.getElementById("content-area");

  // Atualiza menu
  const buttons = document.querySelectorAll("nav button");
  buttons.forEach((b) => b.classList.remove("active"));
  buttons[index].classList.add("active");

  updateProgress();

  // Gera HTML do conteúdo
  let html = `<h1>${unit.title}</h1>`;
  html += `<div class="theory-block">${unit.theory}</div>`;
  html += `<h2>Exercícios Práticos</h2>`;

  unit.exercises.forEach((ex, i) => {
    const completedClass = ex.completed ? " correct-container" : "";
    const isDisabled = ex.completed ? "disabled" : "";
    let showAnswerBtnHtml = "";
    if (ex.incorrectAttempts >= 3 && !ex.completed) {
      showAnswerBtnHtml = `<button class="btn-show-answer" onclick="showAnswer(${index}, ${i})">Mostrar Resposta</button>`;
    }

    html += `<div class="exercise-card${completedClass}" id="ex-card-${i}">`;
    html += `<h3>Desafio ${i + 1} (${getExerciseTypeName(ex.type)})</h3>`;
    html += `<p>${ex.question}</p>`;

    // Renderiza input baseado no tipo
    if (ex.type === "fill") {
      const parts = ex.codeSnippet.split("___");
      html += `<div class="code-fill">
                        <code>${parts[0]}</code>
                        <input type="text" id="input-${i}" style="width: 80px; display:inline-block;" ${isDisabled}>
                        <code>${parts[1] || ""}</code>
                        </div>`;
    } else if (ex.type === "choice") {
      html += `<select id="input-${i}" ${isDisabled}>
                        <option value="">Selecione...</option>
                        ${ex.options.map((opt) => `<option value="${opt}">${opt}</option>`).join("")}
                        </select>`;
    } else if (ex.type === "code") {
      html += `<textarea id="input-${i}" placeholder="// Digite seu código C aqui..." ${isDisabled}></textarea>`;
    }

    html += `<div class="input-group">
                    <button class="btn-check" id="btn-check-${i}" onclick="checkAnswer(${index}, ${i})" ${isDisabled}>Verificar Resposta</button>
                    <span id="show-answer-container-${i}">${showAnswerBtnHtml}</span>
                    </div>`;

    html += `<div id="feedback-${i}" class="feedback"></div>`;
    html += `</div>`;
  });

  content.innerHTML = html;
}

function getExerciseTypeName(type) {
  if (type === "fill") return "Completar Código";
  if (type === "choice") return "Múltipla Escolha";
  if (type === "code") return "Desenvolvimento";
  return "";
}

// Função Global para validar respostas
window.checkAnswer = function (unitIdx, exIdx) {
  const exercise = courseData[unitIdx].exercises[exIdx];
  const inputEl = document.getElementById(`input-${exIdx}`);
  const feedbackEl = document.getElementById(`feedback-${exIdx}`);
  const cardEl = document.getElementById(`ex-card-${exIdx}`);

  let userVal = inputEl.value.trim();
  let isCorrect = false;

  // Lógica de Validação
  if (exercise.type === "fill") {
    if (userVal === exercise.answer) isCorrect = true;
  } else if (exercise.type === "choice") {
    if (userVal === exercise.answer) isCorrect = true;
  } else if (exercise.type === "code") {
    // Validação "Soft" procurando palavras-chave
    const missingKeywords = exercise.keywords.filter(
      (k) => !userVal.includes(k),
    );
    if (missingKeywords.length === 0) isCorrect = true;
  }

  // Atualiza UI
  feedbackEl.style.display = "block";
  feedbackEl.className = "feedback " + (isCorrect ? "correct" : "incorrect");

  // Atualiza cor do Container (Requisito: Verde/Vermelho no container)
  cardEl.classList.remove("correct-container", "incorrect-container");
  cardEl.classList.add(isCorrect ? "correct-container" : "incorrect-container");

  if (isCorrect) {
    // Adiciona XP apenas se o exercício ainda não foi completado
    if (!exercise.completed) {
      userXP += 25; // Ganha 25 XP por resposta correta
      exercise.completed = true; // Marca o exercício como concluído
      saveProgress();
      updateUserStats();
    }
    feedbackEl.innerHTML = `<span class="status-correct">Correto!</span> Muito bem.`;
  } else {
    exercise.incorrectAttempts++;
    if (exercise.incorrectAttempts >= 3 && !exercise.completed) {
      const container = document.getElementById(
        `show-answer-container-${exIdx}`,
      );
      if (container) {
        container.innerHTML = `<button class="btn-show-answer" onclick="showAnswer(${unitIdx}, ${exIdx})">Mostrar Resposta</button>`;
      }
    }
    saveProgress();

    // Box de Gabarito Comentado
    let msg = `<span class="status-incorrect">Gabarito Comentado:</span> <br>`;
    msg += `<p style="margin-top:5px; margin-bottom:5px;">${exercise.feedback}</p>`;

    if (exercise.type !== "code") {
      msg += `<strong>Resposta Correta:</strong> <code>${exercise.answer}</code>`;
    }
    feedbackEl.innerHTML = msg;
  }
};

window.showAnswer = function (unitIdx, exIdx) {
  const exercise = courseData[unitIdx].exercises[exIdx];
  const inputEl = document.getElementById(`input-${exIdx}`);
  const feedbackEl = document.getElementById(`feedback-${exIdx}`);
  const cardEl = document.getElementById(`ex-card-${exIdx}`);
  const checkBtn = document.getElementById(`btn-check-${exIdx}`);
  const showAnswerContainer = document.getElementById(
    `show-answer-container-${exIdx}`,
  );

  exercise.completed = true;
  saveProgress();

  cardEl.classList.remove("incorrect-container");
  cardEl.classList.add("correct-container");

  feedbackEl.style.display = "block";
  feedbackEl.className = "feedback correct";
  let msg = `<span class="status-correct">Resposta Revelada:</span> <br>`;
  msg += `<p style="margin-top:5px; margin-bottom:5px;">${exercise.feedback}</p>`;
  if (exercise.type !== "code") {
    msg += `<strong>Resposta Correta:</strong> <code>${exercise.answer}</code>`;
  }
  msg += `<p style="margin-top:10px; font-size: 0.8rem; opacity: 0.7;">Nenhum XP foi ganho por usar esta opção.</p>`;
  feedbackEl.innerHTML = msg;

  if (inputEl) inputEl.disabled = true;
  if (checkBtn) checkBtn.disabled = true;
  if (showAnswerContainer) showAnswerContainer.innerHTML = "";
};

// Inicializa
init();
