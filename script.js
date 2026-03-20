// --- BASE DE DADOS DO CURSO ---

// Banco de Unidades Introdutórias - para permitir a atualização
const introUnitBank = [
  {
    // Unidade 0 - Versão 1: Calculadora de IMC (Original)
    id: 0,
    title: "Introdução: Desafio do IMC",
    theory: `
            <h2>O Compilador Mestre</h2>
            <p>Nesta seção, você vai montar, passo a passo, um sistema completo de cálculo de IMC. Cada exercício adicionará uma linha vital ao "Quadro Negro" do compilador.</p>
            
            <div class="blackboard-container" style="margin: 25px 0; width: 100%;">
                <div class="blackboard-header">
                    <span>Gabarito de Referência: Código Completo</span>
                </div>
                <div class="blackboard-content">
<span class="neon-k">#include</span> &lt;stdio.h&gt; <span class="neon-c">// Biblioteca de Entrada e Saída</span>

<span class="neon-k">int</span> <span class="neon-f">main</span>() {
    <span class="neon-c">// --- 1. Declaração de Variáveis ---</span>
    <span class="neon-k">int</span> idade;              <span class="neon-c">// Inteiro (números sem vírgula)</span>
    <span class="neon-k">float</span> altura, peso;     <span class="neon-c">// Float (números reais/decimais)</span>
    <span class="neon-k">char</span> inicial;           <span class="neon-c">// Char (um único caractere)</span>
    <span class="neon-k">char</span> nome[<span class="neon-n">100</span>];         <span class="neon-c">// String (texto longo para nomes/frases)</span>


    <span class="neon-c">// --- 2. Entrada de Dados (Interação) ---</span>
    <span class="neon-f">printf</span>(<span class="neon-s">"Digite seu primeiro nome: "</span>);
    <span class="neon-f">scanf</span>(<span class="neon-s">"%s"</span>, nome);      <span class="neon-c">// Lê texto simples</span>

    <span class="neon-f">printf</span>(<span class="neon-s">"Digite idade, altura (m) e peso (kg): "</span>);
    <span class="neon-f">scanf</span>(<span class="neon-s">"%d %f %f"</span>, &idade, &altura, &peso); <span class="neon-c">// Lê múltiplos valores</span>


    <span class="neon-c">// --- 3. Processamento (Cálculos Matemáticos) ---</span>
    <span class="neon-k">float</span> imc = peso / (altura * altura);      <span class="neon-c">// Cálculo do IMC</span>
    <span class="neon-k">float</span> altura_mm = altura * <span class="neon-n">1000</span>;           <span class="neon-c">// Conversão m -&gt; mm</span>
    <span class="neon-k">float</span> altura_km = altura / <span class="neon-n">1000</span>;           <span class="neon-c">// Conversão m -&gt; km</span>


    <span class="neon-c">// --- 4. Saída de Dados (Resultados) ---</span>
    <span class="neon-f">printf</span>(<span class="neon-s">"Relatório de %s (Idade: %d):"</span>, nome, idade);
    <span class="neon-f">printf</span>(<span class="neon-s">"Altura: %.0f mm ou %.3f km"</span>, altura_mm, altura_km);
    <span class="neon-f">printf</span>(<span class="neon-s">"IMC Calculado: %.2f"</span>, imc);


    <span class="neon-c">// --- 5. Lógica Condicional (Decisão) ---</span>
    <span class="neon-k">if</span> (imc < <span class="neon-n">18.5</span>) {
        <span class="neon-f">printf</span>(<span class="neon-s">"Status: Abaixo do peso"</span>);
    } <span class="neon-k">else</span> <span class="neon-k">if</span> (imc < <span class="neon-n">25</span>) {
        <span class="neon-f">printf</span>(<span class="neon-s">"Status: Peso Ideal"</span>);
    } <span class="neon-k">else</span> {
        <span class="neon-f">printf</span>(<span class="neon-s">"Status: Acima do peso"</span>);
    }

    <span class="neon-k">return</span> <span class="neon-n">0</span>;
}</div>
            </div>
        `,
    exercises: [
      {
        type: "fill",
        question: "Inclua a biblioteca padrão de entrada e saída.",
        codeSnippet: `#include &lt;___&gt; // Biblioteca de Entrada e Saída\n\nint main() {\n    // Início do programa\n    return 0;\n}`,
        answer: "stdio.h",
        feedback: "A biblioteca stdio.h é essencial para usar printf e scanf.",
      },
      {
        type: "fill",
        question: "Declare a variável 'nome' como um vetor de char (String).",
        codeSnippet: `int main() {\n    // --- 1. Declaração de Variáveis ---\n    int idade;\n    float altura, peso;\n    char inicial;\n    ___ nome[100]; // String (texto longo)\n\n    // Resto do código...\n}`,
        answer: "char",
        feedback: "Strings em C são arrays de 'char'.",
      },
      {
        type: "fill",
        question: "Complete o scanf para ler o nome do usuário.",
        codeSnippet: `    // --- 2. Entrada de Dados ---\n    printf("Digite seu primeiro nome: ");\n    scanf("%s", ___); // Lê texto simples\n`,
        answer: "nome",
        feedback:
          "Passamos o nome do vetor (que já é um endereço) para o scanf.",
      },
      {
        type: "fill",
        question: "Use o operador de endereço '&' para ler a idade.",
        codeSnippet: `    printf("Digite idade, altura (m) e peso (kg): ");\n    scanf("%d %f %f", ___idade, &altura, &peso); // Lê múltiplos valores\n`,
        answer: "&",
        feedback:
          "Para variáveis simples (int, float), o scanf precisa do endereço de memória (&).",
      },
      {
        type: "fill",
        question:
          "Complete a fórmula do IMC (peso dividido por altura ao quadrado).",
        codeSnippet: `    // --- 3. Processamento ---\n    float imc = peso / (altura * ___); // Cálculo do IMC\n    float altura_mm = altura * 1000;\n    float altura_km = altura / 1000;\n`,
        answer: "altura",
        feedback: "IMC = Peso / (Altura * Altura).",
      },
      {
        type: "fill",
        question:
          "No printf, use o especificador correto para imprimir a idade (inteiro).",
        codeSnippet: `    // --- 4. Saída de Dados ---\n    printf("Relatório de %s (Idade: %d):\\n", nome, idade);\n    printf("Altura: %.0f mm ou %.3f km\\n", altura_mm, altura_km);\n    printf("IMC Calculado: %.2f\\n", imc);\n`,
        answer: "%d",
        feedback: "%d é usado para inteiros decimais.",
      },
      {
        type: "fill",
        question: "Complete a lógica condicional 'else if'.",
        codeSnippet: `    // --- 5. Lógica Condicional ---\n    if (imc < 18.5) {\n        printf("Status: Abaixo do peso\\n");\n    } ___ if (imc < 25) {\n        printf("Status: Peso Ideal\\n");\n    }`,
        answer: "else",
        feedback:
          "Use 'else if' para testar uma nova condição se a anterior for falsa.",
      },
      {
        type: "fill",
        question: "Finalize a estrutura de decisão com o bloco padrão.",
        codeSnippet: `    } else if (imc < 25) {\n        printf("Status: Peso Ideal\\n");\n    } ___ {\n        printf("Status: Acima do peso\\n");\n    }\n    return 0;\n}`,
        answer: "else",
        feedback:
          "O 'else' final captura qualquer caso que não entrou nos 'if' anteriores.",
      },
    ],
  },
  {
    // Unidade 0 - Versão 2: Calculadora de Média
    id: 0,
    title: "Introdução: Desafio de Notas",
    theory: `
            <h2>O Compilador de Notas</h2>
            <p>Sua nova missão: construir um sistema que calcula a média de um aluno e decide seu status. Cada exercício adiciona uma peça ao quebra-cabeça no "Quadro Negro".</p>
            <p>Sua missão inicial: construir um sistema que calcula a média de um aluno e decide seu status dentro da função principal.</p>
            
            <div class="blackboard-container" style="margin: 25px 0; width: 100%;">
                <div class="blackboard-header">
                    <span>Gabarito de Referência: Código Completo</span>
                </div>
                <div class="blackboard-content">
<span class="neon-k">#include</span> &lt;stdio.h&gt;

<span class="neon-k">int</span> <span class="neon-f">main</span>() {
    <span class="neon-c">// --- 1. Variáveis ---</span>
    <span class="neon-k">float</span> nota1, nota2, nota3;
    <span class="neon-k">char</span> nome_aluno[<span class="neon-n">50</span>];

    <span class="neon-c">// --- 2. Entrada ---</span>
    <span class="neon-f">printf</span>(<span class="neon-s">"Nome do aluno: "</span>);
    <span class="neon-f">scanf</span>(<span class="neon-s">"%s"</span>, nome_aluno);
    <span class="neon-f">printf</span>(<span class="neon-s">"Digite as 3 notas: "</span>);
    <span class="neon-f">scanf</span>(<span class="neon-s">"%f %f %f"</span>, &nota1, &nota2, &nota3);

    <span class="neon-c">// --- 3. Processamento ---</span>
    <span class="neon-k">float</span> media = (nota1 + nota2 + nota3) / <span class="neon-n">3.0</span>;

    <span class="neon-c">// --- 4. Saída ---</span>
    <span class="neon-f">printf</span>(<span class="neon-s">"\\n--- Boletim de %s ---\\n"</span>, nome_aluno);
    <span class="neon-f">printf</span>(<span class="neon-s">"Média Final: %.1f\\n"</span>, media);

    <span class="neon-c">// --- 5. Decisão ---</span>
    <span class="neon-k">if</span> (media >= <span class="neon-n">7.0</span>) {
        <span class="neon-f">printf</span>(<span class="neon-s">"Status: Aprovado!\\n"</span>);
    } <span class="neon-k">else</span> <span class="neon-k">if</span> (media >= <span class="neon-n">5.0</span>) {
        <span class="neon-f">printf</span>(<span class="neon-s">"Status: Recuperação.\\n"</span>);
    } <span class="neon-k">else</span> {
        <span class="neon-f">printf</span>(<span class="neon-s">"Status: Reprovado.\\n"</span>);
    }

    <span class="neon-k">return</span> <span class="neon-n">0</span>;
}</div>
            </div>

            <hr style="border-color: #333; margin: 40px 0;">
            
            <h2>Nível 2: Modularizando com Funções</h2>
            <p>Agora vamos elevar o nível. Em códigos profissionais, separamos a lógica em <strong>Funções</strong> fora da main. Analise o gabarito abaixo antes de prosseguir.</p>

            <div class="blackboard-container" style="margin: 25px 0; width: 100%;">
                <div class="blackboard-header">
                    <span>Gabarito de Referência: Versão Modularizada</span>
                </div>
                <div class="blackboard-content">
<span class="neon-k">#include</span> &lt;stdio.h&gt;

<span class="neon-c">// --- Função Auxiliar ---</span>
<span class="neon-k">float</span> <span class="neon-f">calcular_media</span>(<span class="neon-k">float</span> a, <span class="neon-k">float</span> b, <span class="neon-k">float</span> c) {
    <span class="neon-k">return</span> (a + b + c) / <span class="neon-n">3.0</span>;
}

<span class="neon-k">int</span> <span class="neon-f">main</span>() {
    <span class="neon-k">float</span> n1, n2, n3;
    <span class="neon-f">scanf</span>(<span class="neon-s">"%f %f %f"</span>, &n1, &n2, &n3);
    
    <span class="neon-c">// Chamada da Função dentro da main</span>
    <span class="neon-k">float</span> final = <span class="neon-f">calcular_media</span>(n1, n2, n3);
    
    <span class="neon-f">printf</span>(<span class="neon-s">"Média: %.1f"</span>, final);
    <span class="neon-k">return</span> <span class="neon-n">0</span>;
}</div>
            </div>

            <hr style="border-color: #333; margin: 40px 0;">
            
            <h2>Nível 3: Funções com Retorno</h2>
            <p>Funções úteis geralmente processam dados e <strong>retornam</strong> um resultado para ser usado depois.</p>

            <div class="blackboard-container" style="margin: 25px 0; width: 100%;">
                <div class="blackboard-header">
                    <span>Gabarito: Retornando Valores</span>
                </div>
                <div class="blackboard-content">
<span class="neon-k">#include</span> &lt;stdio.h&gt;

<span class="neon-k">int</span> <span class="neon-f">dobro</span>(<span class="neon-k">int</span> x) {
    <span class="neon-k">return</span> x * <span class="neon-n">2</span>;
}

<span class="neon-k">int</span> <span class="neon-f">main</span>() {
    <span class="neon-k">int</span> d = <span class="neon-f">dobro</span>(<span class="neon-n">5</span>);
    <span class="neon-f">printf</span>(<span class="neon-s">"%d"</span>, d);
    <span class="neon-k">return</span> <span class="neon-n">0</span>;
}</div>
            </div>
        `,
    exercises: [
      {
        type: "fill",
        question: "Inclua a biblioteca padrão de entrada e saída.",
        codeSnippet: `#include &lt;___&gt; \n\nint main() {\n    return 0;\n}`,
        answer: "stdio.h",
        feedback: "A biblioteca stdio.h é essencial para usar printf e scanf.",
      },
      {
        type: "fill",
        question: "Declare três variáveis do tipo float para as notas.",
        codeSnippet: `int main() {\n    // --- 1. Variáveis ---\n    ___ nota1, nota2, nota3;\n    char nome_aluno[50];\n    // ...`,
        answer: "float",
        feedback:
          "Usamos 'float' para números com casas decimais, como as notas.",
      },
      {
        type: "fill",
        question: "Use scanf para ler o nome do aluno.",
        codeSnippet: `    printf("Nome do aluno: ");\n    scanf("%s", ___);`,
        answer: "nome_aluno",
        feedback:
          "Passamos o nome do vetor de char (que é um endereço) para o scanf ler a string.",
      },
      {
        type: "fill",
        question: "Complete o scanf para ler as três notas (float).",
        codeSnippet: `    printf("Digite as 3 notas: ");\n    scanf("%f %f %f", &nota1, ___ , &nota3);`,
        answer: "&nota2",
        feedback:
          "Precisamos passar o endereço de cada variável float para o scanf usando o operador '&'.",
      },
      {
        type: "fill",
        question:
          "Complete o cálculo da média. A soma das notas deve ser dividida por 3.",
        codeSnippet: `    // --- 3. Processamento ---\n    float media = (nota1 + nota2 + nota3) / ___;`,
        answer: "3.0",
        feedback:
          "Dividimos por 3.0 (um float) para garantir que o resultado da divisão seja também um float.",
      },
      {
        type: "fill",
        question:
          "Use o especificador correto para imprimir a média (um float com uma casa decimal).",
        codeSnippet: `    printf("Média Final: ___\\n", media);`,
        answer: "%.1f",
        feedback:
          "'%f' é para float, e '.1' especifica que queremos apenas uma casa decimal.",
      },
      {
        type: "fill",
        question:
          "Complete a primeira condição do 'if' para verificar se o aluno foi aprovado (média >= 7.0).",
        codeSnippet: `    // --- 5. Decisão ---\n    if (media >= ___) {\n        printf("Status: Aprovado!\\n");\n    }`,
        answer: "7.0",
        feedback:
          "A condição para aprovação é ter uma média maior ou igual a 7.0.",
      },
      {
        type: "fill",
        question:
          "Complete a condição 'else if' para verificar se o aluno está em recuperação (média >= 5.0).",
        codeSnippet: `    } else if (media >= ___) {\n        printf("Status: Recuperação.\\n");\n    } else {\n        printf("Status: Reprovado.\\n");\n    }`,
        answer: "5.0",
        feedback:
          "Se não foi aprovado, a próxima verificação é se a média é suficiente para recuperação (>= 5.0).",
      },
      // --- NOVOS EXERCÍCIOS DE FUNÇÕES ---
      {
        type: "fill",
        question: "Defina o tipo de retorno da função 'calcular_media' (ela retorna um número decimal).",
        codeSnippet: `// Definição da função fora da main\n___ calcular_media(float n1, float n2, float n3) {\n    return (n1 + n2 + n3) / 3.0;\n}`,
        answer: "float",
        feedback: "Como o resultado da média possui casas decimais, a função deve retornar 'float'.",
      },
      {
        type: "choice",
        question: "Qual a forma correta de CHAMAR essa função dentro da main?",
        options: ["float m = calcular_media(n1, n2, n3);", "calcular_media;", "float m = float calcular_media();", "main(calcular_media);"],
        answer: "float m = calcular_media(n1, n2, n3);",
        feedback: "Para chamar a função, usamos seu nome seguido dos argumentos entre parênteses e atribuímos o retorno a uma variável.",
      },
      {
        type: "code",
        question: "Escreva a função 'verificar' completa. Ela deve receber a média e imprimir 'Aprovado' se for maior ou igual a 7.",
        keywords: ["void", "verificar", "float", "if", "printf", "Aprovado"],
        codeSnippet: `#include <stdio.h>\n\n// --- ESCREVA SUA FUNÇÃO AQUI ---\n// Dica: Use void pois ela só imprime, não retorna valor.\n\n\n\n// --- FIM DA FUNÇÃO ---\n\nint main() {\n    float nota = 8.5;\n    verificar(nota); // Chamada de teste\n    return 0;\n}`,
        feedback: "Sua função deve começar com 'void verificar(float ...)' e conter um 'if' para o print.",
      },
      {
        type: "fill",
        question: "Qual palavra-chave usamos para devolver um valor de dentro da função?",
        codeSnippet: `int obter_numero() {\n    ___ 10;\n}`,
        answer: "return",
        feedback: "A instrução 'return' encerra a função e envia o valor de volta para quem chamou.",
      },
      {
        type: "choice",
        question: "Se uma função é declarada como 'int calcular()', o que ela deve retornar?",
        options: ["Um número inteiro", "Um número decimal (float)", "Nada (void)", "Um caractere"],
        answer: "Um número inteiro",
        feedback: "O tipo antes do nome da função ('int') define o tipo de dado que ela retorna.",
      },
      {
        type: "code",
        question: "Crie uma função chamada 'somar' que recebe dois inteiros (a, b) e retorna a soma deles.",
        keywords: ["int", "somar", "int", "return", "+"],
        codeSnippet: `#include <stdio.h>\n\n// --- CRIE A FUNÇÃO 'somar' AQUI ---\n\n\n\n// ----------------------------------\n\nint main() {\n    int resultado = somar(10, 20);\n    printf("Soma: %d", resultado);\n    return 0;\n}`,
        feedback: "Sua função deve ser 'int somar(int a, int b) { return a + b; }'.",
      },
    ],
  },
];

const courseData = [
  JSON.parse(JSON.stringify(introUnitBank[0])), // Começa com uma cópia da primeira unidade de introdução
  {
    id: "func_basics",
    title: "Funções",
    theory: `
            <h2>O Poder das Funções</h2>
            <p>Até agora, escrevemos tudo dentro da <code>main</code>. Mas programas profissionais são divididos em <strong>Funções</strong> (sub-rotinas).</p>
            <p>Uma função agrupa um bloco de código sob um nome, permitindo que você o chame quantas vezes precisar sem reescrever.</p>
            
            <div class="blackboard-container" style="margin: 25px 0; width: 100%;">
                <div class="blackboard-header"><span>Exemplo: Função Simples (Void)</span></div>
                <div class="blackboard-content">
<span class="neon-k">void</span> <span class="neon-f">saudacao</span>() {
    <span class="neon-f">printf</span>(<span class="neon-s">"Olá, Dev!\\n"</span>);
}

<span class="neon-k">int</span> <span class="neon-f">main</span>() {
    <span class="neon-f">saudacao</span>(); <span class="neon-c">// Chama a função</span>
    <span class="neon-f">saudacao</span>(); <span class="neon-c">// Chama de novo</span>
    <span class="neon-k">return</span> <span class="neon-n">0</span>;
}</div>
            </div>

            <hr style="border-color: #333; margin: 40px 0;">
            
            <h2>Nível 2: Parâmetros e Retorno</h2>
            <p>Funções se tornam poderosas quando podem receber dados (<strong>parâmetros</strong>) e devolver um resultado (<strong>retorno</strong>).</p>

            <div class="blackboard-container" style="margin: 25px 0; width: 100%;">
                <div class="blackboard-header">
                    <span>Gabarito: Função com Parâmetros</span>
                </div>
                <div class="blackboard-content">
<span class="neon-k">#include</span> &lt;stdio.h&gt;

<span class="neon-c">// Função que recebe dois inteiros e retorna a soma</span>
<span class="neon-k">int</span> <span class="neon-f">somar</span>(<span class="neon-k">int</span> a, <span class="neon-k">int</span> b) {
    <span class="neon-k">return</span> a + b;
}

<span class="neon-k">int</span> <span class="neon-f">main</span>() {
    <span class="neon-k">int</span> resultado = <span class="neon-f">somar</span>(<span class="neon-n">10</span>, <span class="neon-n">5</span>); <span class="neon-c">// Chama a função com os valores</span>
    <span class="neon-f">printf</span>(<span class="neon-s">"Soma: %d"</span>, resultado);
    <span class="neon-k">return</span> <span class="neon-n">0</span>;
}</div>
            </div>`,
    exercises: [
      {
        type: "fill",
        question: "Qual palavra-chave indica que a função NÃO retorna valor (apenas executa uma ação)?",
        codeSnippet: `___ mostrar_mensagem() { printf("Msg"); }`,
        answer: "void",
        feedback: "Void (vazio) é usado para funções que não devolvem um resultado numérico.",
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
        type: "fill",
        question:
          "Complete a chamada da função 'calcular' passando as variáveis 'a' e 'b'.",
        codeSnippet: `resultado = calcular(___, ___);`,
        answer: "a, b",
        feedback:
          "Os argumentos passados na chamada da função devem corresponder aos parâmetros da sua definição.",
      },
      {
        type: "code",
        question: "Crie uma função 'multiplicar' que recebe dois inteiros e retorna o produto deles.",
        keywords: ["int", "multiplicar", "return", "*"],
        codeSnippet: `#include <stdio.h>\n\n// --- CRIE SUA FUNÇÃO AQUI ---\n\n\n\n// ---------------------------\n\nint main() {\n    int produto = multiplicar(7, 3);\n    printf("Resultado: %d", produto);\n    return 0;\n}`,
        feedback: "A função deve ter a assinatura 'int multiplicar(int a, int b)' e usar 'return a * b;'.",
      },
      {
        type: "choice",
        question: "Qual é o escopo de uma variável declarada DENTRO de uma função?",
        options: ["Global (acessível em todo o arquivo)", "Local (acessível apenas dentro da função)", "Universal (acessível em outros arquivos)", "Estático (nunca morre)"],
        answer: "Local (acessível apenas dentro da função)",
        feedback: "Variáveis locais nascem e morrem junto com a execução da função onde foram criadas.",
      },
      {
        type: "fill",
        question: "Complete o protótipo de uma função que recebe dois números reais (float).",
        codeSnippet: `float dividir(float a, ___ b);`,
        answer: "float",
        feedback: "É necessário especificar o tipo de dado para cada parâmetro individualmente.",
      },
      {
        type: "fill",
        question: "Para chamar uma função que não recebe argumentos, devemos usar parênteses ___.",
        codeSnippet: `limpar_tela___;`,
        answer: "()",
        feedback: "Mesmo sem argumentos, os parênteses () são obrigatórios na chamada de função.",
      },
      {
        type: "choice",
        question: "O que acontece se uma função definida como 'void' tentar retornar um valor (ex: return 10;)?",
        options: ["O valor é ignorado", "Erro de compilação", "O programa fecha", "A função vira int"],
        answer: "Erro de compilação",
        feedback: "Funções void não podem retornar valores. O compilador apontará um erro.",
      },
      {
        type: "code",
        question: "Crie uma função 'maior' que recebe dois inteiros e retorna o maior deles.",
        keywords: ["int", "maior", "if", "return", ">"],
        codeSnippet: `#include <stdio.h>\n\n// --- CRIE SUA FUNÇÃO AQUI ---\n\n\n\n// ---------------------------\n\nint main() {\n    printf("Maior: %d", maior(10, 5));\n    return 0;\n}`,
        feedback: "Dica: Use um 'if' para comparar 'a' e 'b' e retornar o vencedor.",
      },
      {
        type: "fill",
        question: "Separe múltiplos parâmetros na definição da função usando ___.",
        codeSnippet: `void teste(int a___ int b) { }`,
        answer: ",",
        feedback: "A vírgula é usada para separar os argumentos na lista de parâmetros.",
      },
      {
        type: "choice",
        question: "Qual termo descreve quando uma função chama a si mesma?",
        options: ["Iteração", "Recursão", "Inversão", "Duplicação"],
        answer: "Recursão",
        feedback: "Recursão é uma técnica poderosa onde a função invoca a si própria para resolver subproblemas.",
      },
      {
        type: "fill",
        question: "Se quisermos deixar explícito que uma função NÃO aceita parâmetros, usamos ___ nos parênteses.",
        codeSnippet: `int obter_dado(___) { return 5; }`,
        answer: "void",
        feedback: "Colocar 'void' na lista de parâmetros indica estritamente que a função não recebe nada.",
      },
      // --- NOVOS EXERCÍCIOS DE CODIFICAÇÃO (PRÁTICA) ---
      {
        type: "code",
        question: "Crie uma função 'boas_vindas' que não recebe parâmetros e imprime 'Bem-vindo'.",
        keywords: ["void", "boas_vindas", "printf", "Bem-vindo"],
        codeSnippet: `#include <stdio.h>\n\n// --- Escreva sua função aqui ---\n\n\n\nint main() {\n    boas_vindas();\n    return 0;\n}`,
        feedback: "A função deve ser do tipo void e conter um printf com a mensagem exata.",
      },
      {
        type: "code",
        question: "Crie uma função 'subtrair' que recebe dois inteiros (a, b) e retorna a subtração de a - b.",
        keywords: ["int", "subtrair", "return", "-"],
        codeSnippet: `#include <stdio.h>\n\n// --- Escreva sua função aqui ---\n\n\n\nint main() {\n    int res = subtrair(10, 4);\n    printf("%d", res);\n    return 0;\n}`,
        feedback: "A assinatura deve ser 'int subtrair(int a, int b)' e deve retornar a diferença.",
      },
      {
        type: "code",
        question: "Implemente a função 'verificar_idade' que recebe um inteiro. Se for >= 18 imprima 'Maior', senão 'Menor'.",
        keywords: ["void", "verificar_idade", "if", "else", "printf"],
        codeSnippet: `#include <stdio.h>\n\n// --- Escreva sua função aqui ---\n\n\n\nint main() {\n    verificar_idade(20);\n    return 0;\n}`,
        feedback: "Use if/else para verificar a condição da idade.",
      },
      {
        type: "code",
        question: "Crie uma função 'contador' que recebe um número N e imprime de 1 até N usando um laço for.",
        keywords: ["void", "contador", "for", "printf"],
        codeSnippet: `#include <stdio.h>\n\n// --- Escreva sua função aqui ---\n\n\n\nint main() {\n    contador(5);\n    return 0;\n}`,
        feedback: "Use um laço for(int i=1; i<=n; i++) para contar.",
      },
      {
        type: "code",
        question: "Crie uma função 'area_retangulo' que recebe base e altura (int) e retorna a área.",
        keywords: ["int", "area_retangulo", "return", "*"],
        codeSnippet: `#include <stdio.h>\n\n// --- Escreva sua função aqui ---\n\n\n\nint main() {\n    int a = area_retangulo(10, 5);\n    printf("Area: %d", a);\n    return 0;\n}`,
        feedback: "Multiplique a base pela altura e retorne o resultado.",
      },
    ],
  },
  {
    id: 1,
    title: "Unidade 1: Fundamentos",
    theory: `
            <h2>Estrutura Básica e Tipos</h2>
            <p>Bem-vindo ao C! Todo programa começa com bibliotecas e uma função principal.</p>
            <pre style="background-color: var(--neon-bg);"><span class="neon-k">#include</span> &lt;stdio.h&gt; <span class="neon-c">// Biblioteca de Entrada/Saída</span>

<span class="neon-k">int</span> <span class="neon-f">main</span>() {
    <span class="neon-k">int</span> idade = <span class="neon-n">25</span>;           <span class="neon-c">// Inteiro</span>
    <span class="neon-k">float</span> altura = <span class="neon-n">1.75</span>;      <span class="neon-c">// Decimal</span>
    <span class="neon-k">char</span> letra = <span class="neon-s">'A'</span>;         <span class="neon-c">// Caractere único</span>
    
    <span class="neon-f">printf</span>(<span class="neon-s">"Olá Mundo"</span>);
    <span class="neon-k">return</span> <span class="neon-n">0</span>;
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
            <pre style="background-color: var(--neon-bg);"><span class="neon-k">if</span> (nota >= <span class="neon-n">7</span>) {
    <span class="neon-f">printf</span>(<span class="neon-s">"Aprovado"</span>);
} <span class="neon-k">else</span> {
    <span class="neon-f">printf</span>(<span class="neon-s">"Reprovado"</span>);
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
            <pre style="background-color: var(--neon-bg);"><span class="neon-k">for</span>(<span class="neon-k">int</span> i=<span class="neon-n">0</span>; i < <span class="neon-n">10</span>; i++) { ... }</pre>
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
            <pre style="background-color: var(--neon-bg);"><span class="neon-k">int</span> x = <span class="neon-n">10</span>;
<span class="neon-k">int</span> *ptr = &x;</pre>
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
            <pre style="background-color: var(--neon-bg);"><span class="neon-k">int</span> *v = (<span class="neon-k">int</span>*) <span class="neon-f">malloc</span>(<span class="neon-n">5</span> * <span class="neon-k">sizeof</span>(<span class="neon-k">int</span>));
<span class="neon-f">free</span>(v);</pre>
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
            <pre style="background-color: var(--neon-bg);"><span class="neon-c">// Protótipo da função (declaração)</span>
<span class="neon-k">int</span> <span class="neon-f">somar</span>(<span class="neon-k">int</span> a, <span class="neon-k">int</span> b);

<span class="neon-k">int</span> <span class="neon-f">main</span>() {
    <span class="neon-k">int</span> resultado = <span class="neon-f">somar</span>(<span class="neon-n">5</span>, <span class="neon-n">3</span>); <span class="neon-c">// Chamada</span>
    <span class="neon-f">printf</span>(<span class="neon-s">"Resultado: %d"</span>, resultado);
    <span class="neon-k">return</span> <span class="neon-n">0</span>;
}

<span class="neon-c">// Definição da função</span>
<span class="neon-k">int</span> <span class="neon-f">somar</span>(<span class="neon-k">int</span> a, <span class="neon-k">int</span> b) {
    <span class="neon-k">return</span> a + b;
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
            <pre style="background-color: var(--neon-bg);"><span class="neon-k">int</span> valor = <span class="neon-n">50</span>;
<span class="neon-k">int</span> *ptr = &valor; <span class="neon-c">// ptr aponta para valor</span>

<span class="neon-f">printf</span>(<span class="neon-s">"%d"</span>, *ptr); <span class="neon-c">// Exibe 50</span>
*ptr = <span class="neon-n">100</span>;         <span class="neon-c">// Altera valor para 100</span></pre>
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
            <pre style="background-color: var(--neon-bg);"><span class="neon-c">// Declaração de um vetor de 5 inteiros</span>
<span class="neon-k">int</span> numeros[<span class="neon-n">5</span>];

<span class="neon-c">// Inicialização na declaração</span>
<span class="neon-k">float</span> notas[] = {<span class="neon-n">7.5</span>, <span class="neon-n">8.0</span>, <span class="neon-n">9.5</span>};

<span class="neon-c">// Acessando e modificando elementos</span>
numeros[<span class="neon-n">0</span>] = <span class="neon-n">10</span>; <span class="neon-c">// O primeiro elemento está no índice 0</span>
numeros[<span class="neon-n">4</span>] = <span class="neon-n">50</span>; <span class="neon-c">// O último elemento está no índice 4</span>

<span class="neon-f">printf</span>(<span class="neon-s">"Primeiro número: %d"</span>, numeros[<span class="neon-n">0</span>]);</pre>
            <p>É muito comum usar laços <code>for</code> para percorrer todos os elementos de um vetor.</p>
            <pre style="background-color: var(--neon-bg);"><span class="neon-k">for</span> (<span class="neon-k">int</span> i = <span class="neon-n">0</span>; i < <span class="neon-n">3</span>; i++) {
    <span class="neon-f">printf</span>(<span class="neon-s">"Nota %d: %.1f\\n"</span>, i + <span class="neon-n">1</span>, notas[i]);
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
let currentIntroUnitIndex = 0;
let currentUnitIndex = 0;

function init() {
  // Adiciona um estado 'completed' para cada exercício para evitar XP duplicado
  courseData.forEach((unit) => {
    unit.exercises.forEach((ex) => {
      ex.completed = false;
      ex.incorrectAttempts = 0;
    });
  });

  // LÓGICA CORRIGIDA: Recupera qual unidade de introdução estava ativa
  // Se o usuário atualizou a página, ele deve ver o mesmo desafio que estava antes
  const savedIntroIndex = localStorage.getItem("currentIntroUnitIndex");
  if (savedIntroIndex !== null) {
    const idx = parseInt(savedIntroIndex, 10);
    if (introUnitBank[idx]) {
      currentIntroUnitIndex = idx;
      courseData[0] = JSON.parse(JSON.stringify(introUnitBank[idx]));
    }
  }

  loadProgress();
  renderMenu();
  
  // CORREÇÃO: Carrega a última unidade acessada pelo aluno (ou a 0 se for a primeira vez)
  const lastUnit = localStorage.getItem("lastActiveUnit");
  loadUnit(lastUnit ? parseInt(lastUnit) : 0);
  createBlackboardModal(); // Cria a estrutura do modal
  updateUserStats();

  // Fechar modal com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeBlackboard();
  });
  
  createTimerWidget(); // Inicia o widget do despertador
  createAudioPlayer(); // Inicia o widget de música
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
    
    // Classes Bootstrap para item de lista interativo
    btn.className = "list-group-item list-group-item-action bg-transparent text-white border-0 py-3";
    btn.innerText = unit.title;
    btn.onclick = () => loadUnit(index);
    
    if (index === currentUnitIndex) {
      btn.classList.add("active"); // Bootstrap aplica estilo azul padrão
      btn.classList.add("fw-bold");
    }
    
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
  localStorage.setItem("lastActiveUnit", index); // Salva o estado para caso de refresh (F5)
  const unit = courseData[index];
  const content = document.getElementById("content-area");

  // Atualiza menu
  const buttons = document.querySelectorAll("#nav-menu button");
  buttons.forEach((b) => b.classList.remove("active", "fw-bold"));
  if (buttons[index]) {
    buttons[index].classList.add("active", "fw-bold");
  }

  updateProgress();

  // Gera HTML do conteúdo
  let html = `<h1>${unit.title}</h1>`;
  html += `<div class="theory-block">${unit.theory}</div>`;
  html += `<h2>Exercícios Práticos</h2>`;

  // Instrução Geral (Adaptada para o estilo unificado)
  if (index === 0) {
    html += `<p style="margin-bottom:20px; color: #888;">Complete os códigos no Compilador do Quadro Negro.</p>`;
  } else {
    html += `<p style="margin-bottom:20px; color: #888;">Resolva os desafios abaixo utilizando o Compilador.</p>`;
  }

  // Renderização Unificada dos Exercícios (Estilo Quadro Negro para todos)
    unit.exercises.forEach((ex, i) => {
      const isDone = ex.completed;
      const statusClass = isDone ? "correct-container" : "";
      const btnText = isDone
        ? "Revisar Resposta"
        : "Abrir Quadro Negro & Resolver";
      const btnColor = isDone
        ? "background-color: #28a745;"
        : "background-color: var(--accent);";

      html += `<div class="exercise-card ${statusClass}" id="ex-card-${i}">`;
      html += `<h3>Desafio ${i + 1}: ${ex.question}</h3>`;
      html += `<div class="input-group">
                    <button id="btn-open-bb-${i}" style="${btnColor} color: white; border: none; padding: 15px 30px; border-radius: 4px; cursor: pointer; font-weight: bold; font-family: 'Consolas'; font-size: 1rem; display: flex; align-items: center; gap: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
                        <span>💻</span> ${btnText}
                    </button>
                 </div>`;
      html += `<div id="feedback-${i}" class="feedback" style="display:${isDone ? "block" : "none"};">
                    ${isDone ? '<span class="status-correct">Desafio Concluído!</span>' : ""}
                 </div>`;
      html += `</div>`;
    });

  // Botão de Atualização/Reset para TODAS as unidades
  const btnLabel = index === 0 ? "Gerar Novo Desafio de Introdução" : "Gerar Novos Exercícios / Reiniciar";
  
  html += `
      <div style="text-align: right; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
          <button id="btn-refresh-unit" class="btn-refresh-intro">
              🔄 ${btnLabel}
          </button>
      </div>
  `;

  content.innerHTML = html;

  // Adiciona event listeners programaticamente
  unit.exercises.forEach((ex, i) => {
    const btn = document.getElementById(`btn-open-bb-${i}`);
    if (btn) {
      btn.onclick = () => openBlackboard(index, i);
    }
  });
  
  const refreshBtn = document.getElementById('btn-refresh-unit');
  if (refreshBtn) {
    refreshBtn.onclick = () => refreshUnit(index);
  }
}

function getExerciseTypeName(type) {
  if (type === "fill") return "Completar Código";
  if (type === "choice") return "Múltipla Escolha";
  if (type === "code") return "Desenvolvimento";
  return "";
}

function refreshUnit(index) {
  // Lógica Específica para Introdução (Troca de Banco de Questões)
  if (index === 0) {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * introUnitBank.length);
    } while (introUnitBank.length > 1 && newIndex === currentIntroUnitIndex);

    currentIntroUnitIndex = newIndex;
    localStorage.setItem("currentIntroUnitIndex", newIndex);
    
    // Carrega nova versão do banco
    courseData[0] = JSON.parse(JSON.stringify(introUnitBank[newIndex]));
  }
  
  // Lógica Geral (Resetar Progresso da Unidade Atual)
  // Isso permite refazer os exercícios de qualquer unidade
  const unit = courseData[index];
  unit.exercises.forEach((ex) => {
    ex.completed = false;
    ex.incorrectAttempts = 0;
  });
  
  // Salva e Recarrega
  saveProgress();
  loadUnit(index);
  
  // Feedback visual opcional
  if (index !== 0) {
      alert("Unidade reiniciada! Você pode praticar novamente.");
  }
}

// --- FUNÇÃO UTILITÁRIA PARA HIGHLIGHT NEON ---
function highlightNeonCode(text) {
  // A ordem é importante: strings primeiro, depois comentários, etc.
  return text
    .replace(/(".*?")/g, '<span class="neon-s">$1</span>') // 1. Strings
    .replace(/(\/\/.*)/g, '<span class="neon-c">$1</span>') // 2. Comentários
    .replace(
      /\b(int|float|char|void|if|else|return|printf|scanf|#include)\b/g,
      '<span class="neon-k">$1</span>',
    ) // 3. Keywords
    .replace(/(\b\d+\.?\d*\b)/g, '<span class="neon-n">$1</span>') // 4. Números
    .replace(/&(?!(?:lt|gt|amp|quot|apos);)/g, '<span class="neon-function">&</span>') // 5. Endereço (Ignora entities HTML)
    .replace(/(\(|\)|{|})/g, '<span style="color:white;">$1</span>'); // 6. Pontuação
}

// --- NOVA LÓGICA DO QUADRO NEGRO (BLACKBOARD) ---

function createBlackboardModal() {
  const modalHtml = `
    <div id="blackboard-modal" class="modal-overlay">
        <div class="blackboard-container">
            <div class="blackboard-header">
                <span id="bb-title">Compilador C - Modo Dev</span>
                <div>
                    <button id="bb-back-btn-header" style="background:#333; border:1px solid #555; color:#fff; cursor:pointer; font-size:0.9rem; padding: 5px 15px; border-radius: 4px; margin-right: 10px;">Voltar</button>
                    <button id="bb-close-btn" style="background:none; border:none; color:#fff; cursor:pointer; font-size:1.5rem;">&times;</button>
                </div>
            </div>
            <div class="blackboard-content" id="bb-content">
                <!-- Código injetado aqui -->
            </div>
            <div class="blackboard-footer">
                <button id="bb-back-btn-footer" style="margin-right: auto; background: transparent; border: 1px solid #444; color: #aaa; padding: 10px 15px; font-family: 'Consolas'; font-size: 0.9rem; cursor: pointer;">Voltar</button>
                <button class="btn-compile" id="bb-compile-btn">COMPILAR & EXECUTAR >_</button>
                <button class="btn-compile" id="bb-next-btn" style="display:none; background: var(--neon-keyword); margin-left: 15px;">PRÓXIMO >></button>
            </div>
        </div>
    </div>`;
  document.body.insertAdjacentHTML("beforeend", modalHtml);

  // Adiciona listeners para os botões do modal
  document.getElementById('bb-close-btn').onclick = closeBlackboard;
  
  // CORREÇÃO: Botões "Voltar" agora apenas fecham o modal, sem recarregar a página
  document.getElementById('bb-back-btn-header').onclick = closeBlackboard;
  document.getElementById('bb-back-btn-footer').onclick = closeBlackboard;

  // Botão "Próximo"
  document.getElementById('bb-next-btn').onclick = () => {
    if (courseData[currentBbUnit] && currentBbEx + 1 < courseData[currentBbUnit].exercises.length) {
      openBlackboard(currentBbUnit, currentBbEx + 1);
    } else {
      closeBlackboard();
    }
  };

  // Ao clicar fora do quadro (overlay), fecha o modal suavemente
  document
    .getElementById("blackboard-modal")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        closeBlackboard();
      }
    });
}

let currentBbUnit = 0;
let currentBbEx = 0;

function openBlackboard(unitIdx, exIdx) {
  currentBbUnit = unitIdx;
  currentBbEx = exIdx;
  const ex = courseData[unitIdx].exercises[exIdx];
  const modal = document.getElementById("blackboard-modal");
  const content = document.getElementById("bb-content");
  const btn = document.getElementById("bb-compile-btn");
  const nextBtn = document.getElementById("bb-next-btn");

  // Reset do botão Próximo
  if (nextBtn) nextBtn.style.display = "none";

  // Prepara o conteúdo do quadro
  let codeDisplay = "";

  // Transforma o snippet em algo visualmente impactante
  // Se for tipo 'fill', substitui ___ por input
  if (ex.type === "fill") {
    let parts = ex.codeSnippet.split("___");
    // Aplica cores neon nas partes estáticas (regex aprimorada para o quadro negro)

    codeDisplay += `<span>${highlightNeonCode(parts[0].replace(/</g, "&lt;").replace(/>/g, "&gt;"))}</span>`;
    codeDisplay += `<input type="text" id="bb-input" class="blackboard-input" autocomplete="off" placeholder="?" style="width: 80px; text-align: center;">`;
    if (parts[1])
      codeDisplay += `${highlightNeonCode(parts[1].replace(/</g, "&lt;").replace(/>/g, "&gt;"))}`;
    codeDisplay += `</span>`;
  } else if (ex.type === "code") {
    codeDisplay += `<div style="color: var(--neon-comment); margin-bottom: 10px;">// ${ex.question}</div>`;
    codeDisplay += `<textarea id="bb-input" class="blackboard-input" style="width:100%; height:150px; background:#050505;">${ex.completed ? localStorage.getItem(`bb-ans-${unitIdx}-${exIdx}`) || "" : ""}</textarea>`;
  } else if (ex.type === "choice") {
    codeDisplay += `<div style="color: var(--neon-comment); margin-bottom: 15px;">// ${ex.question}</div>`;
    codeDisplay += `<div style="display: flex; flex-direction: column; gap: 10px;">`;
    ex.options.forEach((opt, idx) => {
        const checked = ex.completed && ex.answer === opt ? "checked" : "";
        const disabled = ex.completed ? "disabled" : "";
        codeDisplay += `<label style="color: var(--text-main); cursor: pointer; display: flex; align-items: center; gap: 10px; padding: 10px; background: #1a1a1a; border: 1px solid #333; border-radius: 4px;"><input type="radio" name="bb-choice" value="${opt}" ${checked} ${disabled} style="accent-color: var(--accent);"> <span style="font-family: Consolas;">${opt}</span></label>`;
    });
    codeDisplay += `</div>`;
  }

  content.innerHTML = codeDisplay;

  // Se já completou, mostra o estado "Compilado"
  if (ex.completed) {
    simulateCompilationSuccess(
      content,
      (ex.codeSnippet || "").replace("___", ex.answer),
      true,
    );
  } else {
    content.parentElement.classList.remove("neon-bg-success");
    btn.style.display = "block";
    btn.onclick = () => runBlackboardCompiler();

    // Foco automático
    setTimeout(() => {
      const input = document.getElementById("bb-input");
      if (input) input.focus();
    }, 100);
  }

  modal.classList.add("active");
}

function closeBlackboard() {
  document.getElementById("blackboard-modal").classList.remove("active");
}

function runBlackboardCompiler() {
  const input = document.getElementById("bb-input");
  const val = input.value.trim();
  const ex = courseData[currentBbUnit].exercises[currentBbEx];
  const contentDiv = document.getElementById("bb-content");

  let isCorrect = false;

  // Validação básica igual à original
  if (ex.type === "fill" && val === ex.answer) isCorrect = true;
  else if (ex.type === "code") {
    const missing = ex.keywords.filter((k) => !val.includes(k));
    if (missing.length === 0) isCorrect = true;
  } else if (ex.type === "choice") {
    const selected = document.querySelector('input[name="bb-choice"]:checked');
    const userChoice = selected ? selected.value : "";
    if (userChoice === ex.answer) isCorrect = true;
  }

  if (isCorrect) {
    // Animação de Compilação
    contentDiv.innerHTML = `<div style="color: var(--neon-number);">Compilando...</div>`;

    setTimeout(() => {
      // Mostra o código completo preenchido como se o usuário tivesse escrito
      let fullCode = ex.codeSnippet.replace("___", val);
      
      if (ex.type === "choice") {
          fullCode = `// Resposta selecionada:\n// ${ex.answer}\n// Opção Correta!`;
      }

      simulateCompilationSuccess(contentDiv, fullCode);

      // Salva progresso
      if (!ex.completed) {
        userXP += 50; // XP Bônus pelo modo Hardcore
        ex.completed = true;
        saveProgress();
        updateUserStats();
        // Salva o código digitado se for tipo 'code' para mostrar depois
        if (ex.type === "code")
          localStorage.setItem(`bb-ans-${currentBbUnit}-${currentBbEx}`, val);

        // Atualiza a UI da lista principal
        loadUnit(currentBbUnit);
      }
      // Efeito de confete neon
      startConfettiStorm();
      playSuccessAudio(); // Toca a frase de sucesso
      setTimeout(stopConfettiStorm, 3000);
    }, 800);
  } else {
    // Erro visual
    input.classList.add("shake-animation"); // Feedback visual de erro
    input.style.borderColor = "red";
    input.style.boxShadow = "0 0 15px red";
    
    if (input) {
        const originalPlaceholder = input.placeholder;
        input.value = "";
        input.placeholder = "Erro de Sintaxe. Tente novamente.";
        setTimeout(() => {
          input.style.borderColor = "#444";
          input.style.boxShadow = "none";
          input.placeholder = originalPlaceholder;
          input.classList.remove("shake-animation");
        }, 1500);
    }
  }
}

// Renderiza o código final com syntax highlighting
function simulateCompilationSuccess(container, userValue, skipAnim) {

  const html = `
    <div style="font-family:'Consolas'; color: white;">
        <div style="margin-bottom: 10px; color: var(--neon-function);">// COMPILAÇÃO BEM SUCEDIDA</div>
        <div style="white-space: pre-wrap; color: var(--neon-text); font-size: 10.5pt; font-weight:bold;">${highlightNeonCode(userValue.replace(/</g, "&lt;").replace(/>/g, "&gt;"))}</div>
        <div style="margin-top:20px; color: var(--neon-number); border-top: 1px dashed #333; padding-top:10px;">
            > Program exited with code 0.<br>
            > <span style="animation: blink 1s infinite;">_</span>
        </div>
    </div>`;

  container.innerHTML = html;
  document
    .querySelector(".blackboard-container")
    .classList.add("neon-bg-success");
  document.getElementById("bb-compile-btn").style.display = "none";

  // Mostra o botão Próximo se houver mais exercícios na unidade
  if (courseData[currentBbUnit] && currentBbEx + 1 < courseData[currentBbUnit].exercises.length) {
    document.getElementById("bb-next-btn").style.display = "block";
  }
}

// --- WIDGET DE ÁUDIO (MÚSICA) ---
function createAudioPlayer() {
  const audioHtml = `
    <div id="audio-widget">
        <span id="audio-drag-handle" title="Arraste para mover">🎵</span>
        <button id="audio-play" title="Tocar">▶</button>
        <button id="audio-pause" title="Pausar" style="display:none;">⏸</button>
        <input type="range" id="audio-vol-slider" min="0" max="1" step="0.1" value="0.5" title="Volume">
        <audio id="bg-audio" loop preload="none">
            <source src="videoplayback (1).m4a" type="audio/mp4">
            <source src="musica.m4a" type="audio/mp4">
        </audio>
    </div>`;

  document.body.insertAdjacentHTML("beforeend", audioHtml);

  const audio = document.getElementById("bg-audio");
  const btnPlay = document.getElementById("audio-play");
  const btnPause = document.getElementById("audio-pause");
  const slider = document.getElementById("audio-vol-slider");
  const audioWidget = document.getElementById("audio-widget");
  const dragHandle = document.getElementById("audio-drag-handle");

  // Volume inicial
  audio.volume = 0.5;

  // Tratamento de erro caso o arquivo não exista
  audio.addEventListener("error", (e) => {
    // O evento 'error' é disparado se o navegador não conseguir tocar nenhuma das fontes.
    // Não é possível saber qual falhou, então mostramos uma mensagem genérica no console.
    console.error("Erro ao carregar o áudio. Verifique se os arquivos de áudio (ex: 'musica.m4a') estão na pasta correta.");
  });

  // Eventos
  btnPlay.onclick = () => {
    audio
      .play()
      .then(() => {
        btnPlay.style.display = "none";
        btnPause.style.display = "inline-block";
      })
      .catch((e) => console.log("Interação necessária para tocar áudio:", e));
  };

  btnPause.onclick = () => {
    audio.pause();
    btnPause.style.display = "none";
    btnPlay.style.display = "inline-block";
  };

  slider.oninput = (e) => {
    audio.volume = e.target.value;
  };

  // Tornar arrastável usando o ícone como alça
  makeDraggable(audioWidget, dragHandle);
}

// --- WIDGET DE DESPERTADOR ---

let timerInterval;
let timerMinutes = 25;
let timerSeconds = timerMinutes * 60;
let isTimerRunning = false;
let timerWidget;
let timerDisplay;

function createTimerWidget() {
  // Widget HTML
  const widgetHtml = `
    <div id="timer-widget">
        <div id="timer-display" title="Arraste para mover">25:00</div>
        <div class="timer-controls">
            <button id="timer-play" title="Iniciar">▶️</button>
            <button id="timer-pause" title="Pausar">⏸️</button>
            <button id="timer-reset" title="Resetar">🔄</button>
        </div>
    </div>`;
  document.body.insertAdjacentHTML("beforeend", widgetHtml);

  // Popup de Alarme HTML
  const popupHtml = `
    <div id="alarm-modal-overlay" class="modal-overlay">
        <div class="alarm-popup">
            <h2>Pausa para respirar.</h2>
            <button id="close-alarm-popup">Fechar</button>
        </div>
    </div>`;
  document.body.insertAdjacentHTML("beforeend", popupHtml);

  // Elementos do DOM
  timerWidget = document.getElementById("timer-widget");
  timerDisplay = document.getElementById("timer-display");
  const playBtn = document.getElementById("timer-play");
  const pauseBtn = document.getElementById("timer-pause");
  const resetBtn = document.getElementById("timer-reset");
  const closePopupBtn = document.getElementById("close-alarm-popup");
  const alarmOverlay = document.getElementById("alarm-modal-overlay");

  updateTimerDisplay();

  // Event Listeners
  playBtn.onclick = startTimer;
  pauseBtn.onclick = pauseTimer;
  resetBtn.onclick = resetTimer;
  closePopupBtn.onclick = closeAlarmPopup;
  alarmOverlay.addEventListener("click", (e) => {
    if (e.target === alarmOverlay) {
      closeAlarmPopup();
    }
  });

  // Lógica de arrastar
  makeDraggable(timerWidget, timerDisplay);
}

function startTimer() {
  if (isTimerRunning || timerSeconds <= 0) return;
  isTimerRunning = true;
  timerInterval = setInterval(() => {
    timerSeconds--;
    updateTimerDisplay();
    if (timerSeconds <= 0) {
      triggerAlarm();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
}

function resetTimer() {
  pauseTimer();
  timerSeconds = timerMinutes * 60;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const minutes = Math.floor(timerSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timerSeconds % 60).toString().padStart(2, "0");
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function triggerAlarm() {
  pauseTimer();
  startConfettiStorm();
  document.getElementById("alarm-modal-overlay").classList.add("active");

  // Interrompe a animação de confetes após 3 segundos
  setTimeout(() => {
    stopConfettiStorm();
  }, 3000);
}

function closeAlarmPopup() {
  stopConfettiStorm();
  document.getElementById("alarm-modal-overlay").classList.remove("active");
  resetTimer(); // Reseta o timer ao fechar o popup
}

function makeDraggable(widget, handle) {
  let offsetX,
    offsetY,
    isDragging = false;

  handle.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - widget.getBoundingClientRect().left;
    offsetY = e.clientY - widget.getBoundingClientRect().top;
    widget.style.cursor = "grabbing";
    document.body.style.userSelect = "none"; // Impede seleção de texto
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    const maxX = window.innerWidth - widget.offsetWidth;
    const maxY = window.innerHeight - widget.offsetHeight;

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    widget.style.left = `${newX}px`;
    widget.style.top = `${newY}px`;
    widget.style.bottom = "auto";
    widget.style.right = "auto";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    widget.style.cursor = "move";
    document.body.style.userSelect = "";
  });
}

// --- SISTEMA DE PARTÍCULAS (ANIME DE CONFETES) ---
let confettiAnimId;

function startConfettiStorm() {
  const canvas = document.createElement("canvas");
  canvas.id = "confetti-canvas";
  Object.assign(canvas.style, {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 9999,
  });
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // --- LÓGICA DE RESPONSIVIDADE ---
  // Fator de escala baseado na largura da tela, com limites para não ficar nem muito grande, nem muito pequeno.
  const scale = Math.max(0.5, Math.min(canvas.width / 1200, 1.2));

  // Número de partículas é proporcional ao fator de escala.
  const particleCount = Math.floor(400 * scale);

  const particles = [];
  // Cores Neon
  const colors = [
    "#39FF14", // Verde Neon
    "#FF00FF", // Magenta
    "#00FFFF", // Ciano
    "#FFFF00", // Amarelo
    "#FF4500", // Laranja avermelhado
    "#9D00FF", // Roxo Neon
    "#FF1493", // Rosa choque
  ];

  // Criar partículas
  for (let i = 0; i < particleCount; i++) {
    particles.push(createParticle(canvas.width, canvas.height, colors, false, scale));
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      // Efeito de brilho (glow)
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 15;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;

      if (p.type === "confetti") {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      } else if (p.type === "serpentine") {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      } else if (p.type === "glitter") {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      // Reseta o brilho para não afetar outras partículas
      ctx.shadowBlur = 0;

      // Física
      p.y += p.speedY;
      p.x += Math.sin(p.oscillation) * 2;
      p.rotation += p.rotationSpeed;
      p.oscillation += 0.1;

      // Reset ao sair da tela
      if (p.y > canvas.height) {
        Object.assign(
          p,
          createParticle(canvas.width, canvas.height, colors, true, scale),
        );
      }
    });

    confettiAnimId = requestAnimationFrame(render);
  }
  render();
}

function createParticle(w, h, colors, top = false, scale = 1) {
  const typeRand = Math.random();
  let type = "confetti"; // Quadrados
  if (typeRand > 0.7)
    type = "serpentine"; // Retângulos longos
  else if (typeRand > 0.9) type = "glitter"; // Círculos pequenos

  return {
    x: Math.random() * w,
    y: top ? -20 : Math.random() * h - h,
    type: type,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: (Math.random() * 10 + 5) * scale,
    w: (Math.random() * 5 + 3) * scale,
    h: (Math.random() * 30 + 10) * scale,
    speedY: (Math.random() * 5 + 2) * scale,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 10,
    oscillation: Math.random() * Math.PI * 2,
  };
}

function stopConfettiStorm() {
  cancelAnimationFrame(confettiAnimId);
  const c = document.getElementById("confetti-canvas");
  if (c) c.remove();
}

// --- SINTETIZADOR DE VOZ (RESPOSTA CORRETA) ---
function playSuccessAudio() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel(); // Interrompe falas anteriores para não encavalar
    
    const msg = new SpeechSynthesisUtterance("Resposta correta! Veja o próximo.");
    msg.lang = "pt-BR"; // Define o idioma para Português do Brasil
    msg.rate = 1.21;    // Velocidade corrigida para +10% (Base 1.1 -> 1.21)
    
    window.speechSynthesis.speak(msg);
  }
}

// Inicializa
document.addEventListener("DOMContentLoaded", () => {
  init();
});
