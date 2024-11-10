import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  resumo_1: string = `Se você é um programador que ainda não tem experiência com expressões regulares, 
  este guia de fácil compreensão é um ótimo ponto de partida. Você aprenderá os conceitos fundamentais, 
  passo a passo, com o auxílio de inúmeros exemplos, descobrindo em primeira mão como associar, extrair e 
  transformar textos ao fazer correspondências usando palavras, caracteres e padrões específicos.`;

  resumo_2: string = `O livro Entendendo Algoritmos apresenta uma abordagem agradável para esse tópico essencial 
  da ciência da computação. Nele, você aprenderá como aplicar algoritmos comuns nos problemas de programação 
  enfrentados diariamente. Você começará com tarefas básicas como a ordenação e a pesquisa. Com a prática, 
  você enfrentará problemas mais complexos, como a compressão de dados e a inteligência artificial.`;

  resumo_3: string = `Livro que se caracteriza pela sua proposta singular: ensinar um assunto tão complexo 
  como este por meio de uma abordagem de cima para baixo, em camadas. O texto parte da camada lógica, 
  de aplicação, para a camada física, motivando os estudantes ao apresentar-lhes conceitos mais familiares 
  logo no início do estudo de redes.`;

  resumo_4: string = `De forma clara e divertida, os autores descrevem os conceitos que designers de sistema 
  operacional precisam dominar, tais como processos, threads, gerenciamento de memória, sistemas de arquivos, 
  E/S (entrada/saída), impasses, design de interface, multimídia, compensações de desempenho e tendências em 
  design de sistema operacional.`;

  resumo_5: string = `O objetivo deste livro é expor o funcionamento interno dos modernos computadores digitais 
  em um nível que desmistifica o que acontece dentro da máquina. O escopo do material foi escolhido para 
  cobrir normalmente encontrados em um primeiro curso em arquitetura de computadores ou organização de 
  computadores.`;

  livros: Array<Livro> = [
    { codigo: 0, codEditora: 0, titulo: "Introdução às Expressões Regulares", resumo: this.resumo_1, autores: ["Michael Fitzgerald"] },
    { codigo: 1, codEditora: 0, titulo: "Entendendo Algoritmos", resumo: this.resumo_2, autores: ["Aditya Y. Bhargava"] },
    { codigo: 2, codEditora: 1, titulo: "Redes de computadores e a Internet", resumo: this.resumo_3, autores: ["James F. Kurose", " Keith W. Ross"] },
    { codigo: 3, codEditora: 1, titulo: "Sistemas Operacionais Modernos", resumo: this.resumo_4, autores: ["Andrew S. Tanenbaum ", "Herbert Bos"] },
    { codigo: 4, codEditora: 2, titulo: "Introdução À Arquitetura De Computadores", resumo: this.resumo_5, autores: ["Miles J. Murdoca", "Vincent P. Heuring"] }
  ];
  
  tamanhoInicialLivros: number = 5;

    // Métodos de acesso

    public obterLivros(): Array<Livro> {
      return this.livros;
    }

    public incluir(livro: Livro): void {
        livro.codigo = this.tamanhoInicialLivros;
        this.tamanhoInicialLivros++;
        this.livros.push(livro);
    }

    public excluir(codigoLivro: number): void {
        const posicaoDoLivro = this.livros.findIndex((livro) => livro.codigo === codigoLivro);
        this.livros.splice(posicaoDoLivro, 1);
    }

  constructor() { }
}
