import logo from "../assets/pires-code.png";
import ProfileCard from "../components/ProfileCard";
import courseData from "../couseData.json";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import "../globals.scss";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { BiBrain } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";

const CourseLandingPage = () => {
  useEffect(() => {
    document.title = "pires code - escola de programação";
  }, []);

  const horarios = [
    { dia: "Segunda", horario: "20:00 - 22:00" },
    { dia: "Terça", horario: "20:00 - 22:00" },
    { dia: "Quarta", horario: "20:00 - 22:00" },
    { dia: "Quinta", horario: "19:00 - 20:00" },
    { dia: "Sexta", horario: "19:00 - 20:00" },
  ];

  const userData = {
    login: "gabrielpirescamargo",
    id: 72245726,
    node_id: "MDQ6VXNlcjcyMjQ1NzI2",
    avatar_url: "https://avatars.githubusercontent.com/u/72245726?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/gabrielpirescamargo",
    html_url: "https://github.com/gabrielpirescamargo",
    followers_url: "https://api.github.com/users/gabrielpirescamargo/followers",
    following_url:
      "https://api.github.com/users/gabrielpirescamargo/following{/other_user}",
    gists_url:
      "https://api.github.com/users/gabrielpirescamargo/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/gabrielpirescamargo/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/gabrielpirescamargo/subscriptions",
    organizations_url: "https://api.github.com/users/gabrielpirescamargo/orgs",
    repos_url: "https://api.github.com/users/gabrielpirescamargo/repos",
    events_url:
      "https://api.github.com/users/gabrielpirescamargo/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/gabrielpirescamargo/received_events",
    type: "User",
    user_view_type: "public",
    site_admin: false,
    name: " Gabriel Pires de Camargo",
    company: "IBM",
    blog: "https://www.linkedin.com/in/gabrielpirescamargo",
    location: "Americana, SP",
    email: null,
    hireable: null,
    bio: "Front-end developer at IBM",
    twitter_username: null,
    public_repos: 43,
    public_gists: 1,
    followers: 2,
    following: 0,
    created_at: "2020-10-02T06:24:22Z",
    updated_at: "2025-03-11T01:38:24Z",
  };
  const skills = [
    { name: "Logica", icon: <BiBrain /> },
    { name: "Javascript", icon: <SiJavascript /> },
    { name: "Typescript", icon: <SiTypescript /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "SCSS", icon: <SiSass /> },
    { name: "Tailwind css", icon: <SiTailwindcss /> },
  ];
  console.log(courseData);
  return (
    <div>
      <header className="flex justify-between items-center py-4 px-6 bg-zinc-800 text-white">
        <div className="flex items-center">
          <img width={50} src={logo} alt="Logo" className="mr-4" />
          <h1 className="text-2xl font-extrabold">pires code</h1>
        </div>

        {/* <nav className="space-x-6">
          <a href="#" className="text-lg hover:text-gray-400">
            Início
          </a>
          <a href="#" className="text-lg hover:text-gray-400">
            Cursos
          </a>
          <a href="#" className="text-lg hover:text-gray-400">
            Sobre
          </a>
          <a href="#" className="text-lg hover:text-gray-400">
            Contato
          </a>
        </nav> */}
      </header>
      <div className=" bg-zinc-900 text-white p-6 ">
        <h1 className="mt-4 text-2xl font-medium text-white lg:mt-6 lg:text-5xl ml-6">
          Sua carreira em desenvolvimento web
          <span className="custom-gradient bg-clip-text text-transparent pl-2">
            do zero ao avançado
          </span>
        </h1>
        <section className="p-6    rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Conteúdo das aulas</h2>
          <p className="text-lg">
            As aulas abrangem desde os fundamentos da lógica de programação até
            o desenvolvimento completo de aplicações web com front-end e
            back-end. O tempo de duração de cada módulo pode variar de acordo
            com a evolução da turma, garantindo que todos os alunos absorvam os
            conteúdos de forma eficiente.
          </p>
        </section>

        <ul className="list-none flex flex-row ml-6 flex-wrap gap-2">
          {skills.map((skill) => {
            return (
              <li key={skill.name}>
                <a aria-label="">
                  <div className="group/tag w-fit border border-transparent bg-gradient-to-b from-gray-600 to-gray-600/30 bg-origin-border overflow-hidden rounded-full hover:from-rocketseat-light hover:to-rocketseat-light">
                    <div className="flex items-center bg-black w-fit p-2 max-h-8 lg:px-4 lg:h-9 rounded-full px-4 font-bold uppercase max-sm:whitespace-nowrap [&amp;>span]:font-inter [&amp;>span]:text-xs [&amp;>span]:font-bold">
                      <span className="text-xs lg:text-sm whitespace-nowrap font-medium font-mono">
                        <div className="flex items-center gap-2">
                          {skill.icon}
                          {skill.name}
                        </div>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {courseData.courses.map((course) => (
            <CourseCard course={course} key={course.id} />
          ))}
        </div>
        <section className="mb-10 flex flex-col gap-4 mx-6">
          <h2 className="text-3xl font-bold mb-6">Planos</h2>
          <div className="flex flex-col md:flex-row  gap-6 cursor-pointer">
            <div
              onClick={() =>
                (window.location.href =
                  "https://wa.me/5519999740273?text=Gostaria%20de%20iniciar%20o%20Plano%20Básico")
              }
              className="bg-zinc-800 p-6 rounded-lg shadow-lg w-full text-center flex flex-col justify-center items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-2">Mensal básico</h3>
              <p className="text-lg mb-4">1 aula por semana (1:00hr)</p>
              <span className="text-3xl font-extrabold">R$100</span>
              <button
                className=" cursor-pointer bg-[#00B7EA] hover:bg-[#007EC4] text-white py-2 px-4 rounded-lg w-40 mt-4"
                href=""
              >
                Escolher plano
              </button>
            </div>
            <div
              onClick={() =>
                (window.location.href =
                  "https://wa.me/5519999740273?text=Gostaria%20de%20iniciar%o%20Plano%20Premium")
              }
              className="bg-zinc-800 p-6 rounded-lg shadow-lg w-full text-center flex flex-col justify-center items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-2">Mensal premium</h3>
              <p className="text-lg mb-4">2 aulas por semana (1:00hr)</p>
              <span className="text-3xl font-extrabold">R$200</span>
              <button
                className=" cursor-pointer bg-[#00B7EA] hover:bg-[#007EC4] text-white py-2 px-4 rounded-lg w-40 mt-4"
                href=""
              >
                Escolher plano
              </button>
            </div>
          </div>
        </section>
        <section className="p-6    rounded-lg shadow-lg flex flex-row gap-4 flex-wrap">
          <div className="w-full  flex flex-col gap-2">
            <h2 className="text-3xl font-bold mb-4">Sobre as aulas</h2>
            <p className="text-lg">
              As aulas serao realizadas ao vivo via Discord, em um servidor
              proprio dos alunos.
            </p>
            <div className="max-w-md mt-6 p-4 border rounded-lg shadow-lg bg-zinc-900">
              <h2 className="text-xl font-semibold mb-4">
                Horários Disponíveis
              </h2>
              <table className="w-full border-collapse border border-zinc-800">
                <thead>
                  <tr className="bg-zinc-800">
                    <th className="border border-zinc-900 px-4 py-2 text-left">
                      Dia
                    </th>
                    <th className="border border-zinc-900 px-4 py-2 text-left">
                      Horário
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {horarios.map((item, index) => (
                    <tr key={index} className="hover:bg-zinc-800">
                      <td className="border border-zinc-900 px-4 py-2">
                        {item.dia}
                      </td>
                      <td className="border border-zinc-900 px-4 py-2">
                        {item.horario}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
           
          </div>
          <div className="w-full flex flex-col gap-2">
          <h2 className="text-3xl font-bold mb-4">Educador</h2>
            <p className="text-lg">
            Conheca o educador que ira ministrar as aulas, clique para saber mais
            </p>
              <Link to={"/"}>
                <div className="transform transition duration-300 hover:scale-105 hover:shadow-2xl mt-2">
                  <ProfileCard userData={userData} />
                </div>
              </Link>
            </div>
        </section>

        <footer className="text-center mt-10 text-lg"></footer>
      </div>
    </div>
  );
};

export default CourseLandingPage;
