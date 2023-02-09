import PostModelo from "componentes/PostModelo";
import React from "react";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";
import styles from "./SobreMim.module.css";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Marco</h3>
      <img
        src={fotoSobreMim}
        alt="Foto do Marco sorrindo"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou estudante de Front-end na Alura e estou feliz de te
        ver por aqui.
      </p>
      <p className={styles.paragrafo}>
        Minha história com programação começou no meio de 2021, quando comecei a faculdade de Ciência da Computação, após trancar a faculdade de Biotecnologia. Comecei vendo lógica de programação em C e um pouco de programação WEB usando PHP e HTML. Foi algo bem novo para mim, pois foi meu primeiro contato com algo do tipo, e inicialmente ja fui gostando.
      </p>
      <p className={styles.paragrafo}>
        No passar do tempo, fui avançando de periodos, tive contato com tópicos como estrutura de dados, banco de dados, alguns assuntos de matemática. Porém, no início de 2022 comecei a estudar mais voltado para o Front-End. E nessa época decidi entrar para a comunidade da Alura!
      </p>
      <p className={styles.paragrafo}>
        Com isso tive a oportunidade de realizar a Formação Front-End, onde aprendi muito sobre o HTML e o CSS, principalmente, mas também aprendi um pouco de JavaScript. Porém, achei que devia aprimorar meu JavaScript, e decidi fazer a Formação de JavaScript para Front-End.
      </p>
      <p className={styles.paragrafo}>
        E com o fim dessas duas formações, decidi iniciar meus estudos em uma nova tecnologia do Front-End, e escolhi o React! Estou no início dos meus estudos nessa biblioteca, mas estou, há cada dia mais, me familiarizando e entendendo melhor o React.
      </p>
      <p className={styles.paragrafo}>
      Desde que entrei na Alura, foram muitos aprendizados. A plataforma foi algo que me auxiliou muito, pois existem cursos de tudo que você imaginar dentro desse universo da programação. E agora, com um conhecimento sobre algumas tecnologias utilizadas no Front-End, estou em busca do meu primeiro estágio na área. Todo dia estudando algo novo, e desenvolvendo projetos para colocar no meu portifólio. Espero conseguir essa oportunidade!
      </p>
    </PostModelo>
  );
}
