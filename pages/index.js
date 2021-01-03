import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowRight, FaArrowLeft } from 'react-icons/fa'

import GitHubCard from '../components/GithubCard'

function HomePage(props) {  
  return (
    <>
      <Head>
        <title>Irwing Testone Guarnieri</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Michroma&display=swap" rel="stylesheet" />
      </Head>
      <header className="flex items-center justify-center bg-gray-500 px-10 py-5">
        <img src={props.avatar} alt="Irwing" className="rounded-full h-36 md:h-40 mr-5" />
        <div className="flex flex-col">
          <p className="text-xl md:text-3xl font-serif">Irwing Testone Guarnieri, 23</p>
          <div className="flex sm:flex-col text-3xl sm:text-base ">
            <Link href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=irwingtguarnieri@gmail.com" >
              <a className="flex items-center hover:text-gray-600 pr-5" target="_blank"> 
                <FaEnvelope /> 
                  <p className="ml-2 hidden  sm:inline-flex">
                    irwingtguarnieri@gmail.com
                  </p> 
              </a>
            </Link>

            <Link href="https://www.linkedin.com/in/irwing-testone-763b26137/" >
            <a className="flex items-center  hover:text-gray-600 pr-5" target="_blank"> 
              <FaLinkedinIn /> 
                <p className="ml-2 hidden  sm:inline-flex">
                  irwing-testone-763b26137
                </p> 
            </a>
            </Link>
            
            <Link href="https://github.com/irwiing">
              <a className="flex items-center hover:text-gray-600" target="_blank"> 
                <FaGithub /> 
                <p className="ml-2 hidden  sm:inline-flex">
                  Irwiing
                </p> 
              </a>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex flex-col min-h-full ">      
        <section className="bg-gray-300 flex justify-center text-justify p-5 font-sans">
          <div className="flex justify-center px-10 max-w-4xl">
            <p>
              Desde pequeno aficionado por computação, conheci a programação no fim do colegio,
              e desde então, me apaixonei. Passei por alguns 'hello world's até conhecer JavaScript,
              dentre elas ['C', 'C#', 'Python', 'Java'], porém, só ao fim da faculdade foi que entrei
              no desenvolvimento a fundo, quando estava em meu primeiro estágio eu tive a oportunidade
              de utilizar Java para web, mantendo um e-commerce para deliveries. E foi quando eu comecei a
              pegar intimidade com Linux.
              <br /> <br />
              Em paralelo ao estágio, comecei a estudar sobre a tecnologia que está ganhando espaço no
              mercado, o famoso NodeJS, com o qual eu desenvolvi uma API Rest usando TypeScript e alguns 
              frameworks como Express e TypeORM.
            </p>
          </div>
        </section>
        
        <section className="bg-gray-500 p-10 select-none flex flex-col justify-center items-center min-w-full">
          <div className="pb-5">
            <p className="text-3xl font-serif"> Meus Repositórios do  GitHub</p>
          </div>
          <div className="max-w-full h-auto">
            <div className="flex w-full h-auto items-center">
              <div className="hidden md:block w-auto h-auto mx-2">
                <span 
                  className="flex bg-gray-100 rounded-full p-4  opacity-50 transition duration-500 hover:border-gray-50 hover:opacity-100 "
                  onClick={() => {
                    document.getElementById('carrousel').scrollLeft -= 50              
                  }}
                >
                  <FaArrowLeft />
                </span>
              </div>
              <div id="carrousel" className="flex flex-row rel overflow-x-auto md:overflow-x-hidden max-w-3xl">
                {props.repoData.map((repo)=>{                
                  return(
                    <a key={`https://github.com/${repo.owner}/${repo.repo}`}  href={`https://github.com/${repo.owner}/${repo.repo}`} target="_blank" className="transition duration-500 hover:border-gray-500 hover:opacity-50">
                      <GitHubCard repo={repo}/>
                    </a>
                  )
                })}
              </div>
              <div className="hidden md:block w-auto h-auto mx-2">
                <span 
                  className="flex bg-gray-100 rounded-full p-4 opacity-50 transition duration-500 hover:border-gray-50 hover:opacity-100 z-10"
                  onClick={() => {
                    document.getElementById('carrousel').scrollLeft += 50
                  }}
                >
                  <FaArrowRight />
                </span>
              </div>
            </div> 
          </div>
        </section>     
        <section className="bg-gray-300 m-4 flex justify-center flex-col md:flex-row">
          <div className="py-2 md:mx-10 max-w-sm md:py-0">
            <p className="text-3xl font-serif border-b border-gray-500 flex justify-center">Formação</p>
            <p className="text-xl pb-1">UNIARA - Universidade de araraquara</p>
            <p className="text-md pb-1">Engenharia da computação</p>
            <p className="text-md">2016 - cursando</p>
          </div>
          <div className="max-w-sm">
            <p className="text-3xl font-serif border-b border-gray-500 flex justify-center">Experiência</p>
            <p className="text-xl pb-1">Delivoro - Estágio</p>
            <p className="text-sm pb-1">Minha principal atividade foi manter uma aplicação web para deliveries, utilizando Java com SpringBoot.</p>
            <p className="text-md">2019 - 2020</p>
          </div>
        </section>
      </main>
     
    </>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('https://api.github.com/users/irwiing')
  const data = await res.json()

  const repoRes = await fetch('https://gh-pinned-repos.now.sh/?username=Irwiing')
  const repoData = await repoRes.json()

  return {
    props: {
      avatar: data.avatar_url,
      repoData
    },
    revalidate: 10
  }
}
export default HomePage