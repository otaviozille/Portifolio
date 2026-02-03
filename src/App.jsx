import "./App.css";

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="container headerInner">
        <div className="logo">Otávio Zille Franco</div>

        <nav className="nav">
          <a href="#projetos">Projetos</a>
          <a href="#skills">Skills</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato" className="btnSmall">Contato</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero container">
      <div className="heroText">
        <p className="pill">Full Stack • PHP • MySQL • JavaScript</p>
        <h1>Desenvolvedor Full Stack focado em sistemas reais.</h1>
        <p className="sub">
            Técnico em Informática para Internet (SENAI) • 
            Graduando em Ciência da Computação (PUC)
       </p>

      <p className="sub">
         Construo aplicações web completas com autenticação, CRUD, dashboards,
             relatórios em PDF e integração com MySQL.</p>

        <p className="sub">
          Portfólio com projetos reais: autenticação, painéis administrativos, CRUD,
          dashboards e geração de PDF.
        </p>

        <div className="actions">
          <a className="btn" href="#projetos">Ver projetos</a>
          <a className="btnGhost" href="#contato">Falar comigo</a>
        </div>
      </div>

      <div className="heroCard">
        <h3>Destaques</h3>
        <ul>
          <li>Login + níveis de acesso</li>
          <li>CRUD completo</li>
          <li>Relatórios em PDF</li>
          <li>Integração com MySQL</li>
          <li>Deploy em produção</li>
        </ul>
      </div>
    </section>
  );
}

function Projects() {
  const projetos = [
    {
      title: "AssisTec",
      desc: "Painel administrativo com níveis de acesso, CRUD e relatórios PDF.",
      tech: "PHP • MySQL • JS • HTML • CSS",
      repo: "https://github.com/otaviozille/Assistencia-Tecnica",
    },
    {
      title: "Java Motos",
      desc: "SPA com publicações, likes/dislikes e comentários com sessão.",
      tech: "JS • PHP • MySQL",
      repo: "https://github.com/otaviozille/java-motos",
    },
    {
      title: "Desenvolvimento Comunitário",
      desc: "Dashboard com gráficos e filtros por cidade/indicadores.",
      tech: "JS • Chart.js • PHP • MySQL",
      repo: "https://github.com/otaviozille/projeto-inova-o-SENAI",
    },
    {
      title: "VALE-X Florestal",
      desc: "Site institucional publicado com domínio e layout profissional (repositório privado).",
      tech: "HTML • CSS • JS",
      link: "https://valexflorestal.com.br",
      // sem repo (privado)
    },
  ];

  return (
    <section id="projetos" className="section container">
      <h2>Projetos</h2>
      <p className="sectionSub">Projetos reais que provam minha experiência full stack.</p>

      <div className="grid">
        {projetos.map((p) => (
          <article key={p.title} className="card">
            <h3>{p.title}</h3>
            <p className="muted">{p.desc}</p>
            <p className="tag">{p.tech}</p>

            <div className="cardActions">
              {/* Ver online só quando existir link */}
              {p.link && (
                <a className="btnSmall" href={p.link} target="_blank" rel="noreferrer">
                  Ver online
                </a>
              )}

              {/* GitHub só quando existir repo */}
              {p.repo && (
                <a className="btnSmallGhost" href={p.repo} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


function Skills() {
  const front = ["HTML", "CSS", "JavaScript", "Responsividade", "UI/UX"];
  const back = ["PHP", "APIs REST", "Autenticação", "Sessões", "CRUD"];
  const db = ["MySQL", "Modelagem", "Relacionamentos", "Consultas SQL", "Índices (básico)"];

  return (
    <section id="skills" className="section container">
      <h2>Skills</h2>
      <p className="sectionSub">Tecnologias e competências que uso no dia a dia.</p>

      <div className="grid3">
        <SkillBox title="Front-end" items={front} />
        <SkillBox title="Back-end" items={back} />
        <SkillBox title="Banco de dados" items={db} />
      </div>
    </section>
  );
}

function SkillBox({ title, items }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <ul className="list">
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}

function About() {
  return (
    <section id="sobre" className="section container">
      <h2>Sobre</h2>
      <p className="muted">
        Sou desenvolvedor full stack com formação técnica em Informática para Internet 
        pelo SENAI e atualmente curso Ciência da Computação na PUC.
      </p>

      <p className="muted">
        Tenho experiência prática com sistemas reais envolvendo autenticação,
        CRUD completo, dashboards administrativos, geração de relatórios em PDF
        e integração com MySQL.
      </p>

      <p className="muted">
        Meu foco é construir aplicações organizadas, funcionais e prontas para produção.
      </p>

      <p className="muted">
        Busco oportunidades como desenvolvedor full stack júnior para aplicar
        meus conhecimentos em projetos reais e evoluir profissionalmente.
      </p>

    </section>
  );
}


function Contact() {
  return (
    <section id="contato" className="section container">
      <h2>Contato</h2>
      <p className="sectionSub">Vamos conversar sobre oportunidades e projetos.</p>

      <div className="contactCard">
        <a className="btn" href="mailto:otaviozille@yahoo.com.br">Enviar e-mail</a>
        <a className="btnGhost" href="https://github.com/otaviozille" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="btnGhost" href="https://www.linkedin.com/in/ot%C3%A1vio-zille-almeida-franco-73a27632a/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="btnGhost" href="https://wa.me/5538999498554" target="_blank" rel="noreferrer">
          WhatsApp
        </a>

      </div>

      
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <span>© {new Date().getFullYear()} Otávio Zille Franco</span>
        
      </div>
    </footer>
  );
}
