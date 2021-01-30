import { useState } from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Menu from "../components/Menu";
import Informacoes from "../components/Informacoes";
import Formacoes from "../components/Formacoes";
import TimeLine from "../components/TimeLine";
import Habilidades from "../components/Habilidades";

const App = () => {
  document.title = "Curriculo e Portifolio de Daniel Vieira Dabés";
  const [hidden, setHidden] = useState(true);
  const { loading, error, data } = useQuery(gql`
    query {
      curriculos {
        id
        description
        name
        facebook
        linkedin
        title
      }
    }
  `);
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>encountered an error: {error}</div>;
  }

  const title = data.curriculos[0].name;
  return (
    <div className='container-fluid page-container'>
      <Menu title={title} />
      <div className='container-fluid'>
        {data.curriculos.map((info, index) => (
          <div key={index}>
            <div className='container-fluid top-card-primary-blue d-print-none'>
              <div className='social-media-top-right'>
                <a href={info.facebook} target='_blank' rel='noreferrer'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    enableBackground='new 0 0 24 24'
                    height='40'
                    viewBox='0 0 24 24'
                    width='40'>
                    <rect fill='none' height='40' width='40' />
                    <path
                      className='icon-white'
                      d='M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z'
                    />
                  </svg>
                </a>
                <br />
                <a href={info.linkedin} target='_blank' rel='noreferrer'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                    focusable='false'
                    width='40'
                    height='40'
                    style={{
                      msTransform: "rotate(360deg)",
                      WebkitTransform: "rotate(360deg)",
                      transform: "rotate(360deg)",
                    }}
                    preserveAspectRatio='xMidYMid meet'
                    viewBox='0 0 24 24'>
                    <path
                      className='icon-white'
                      d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z'
                      fill='#626262'
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className='card center'>
              <div className='card-body card-top-spacing-200 info'>
                <img
                  className='rounded-circle z-depth-2 rounded-circle-border d-print-none'
                  alt='profile'
                  src={"/assets/img/" + info.id + ".jpeg"}
                  data-holder-rendered='true'
                />
                <h5 className='card-title d-print-none'>{info.title}</h5>
                <h5 className='card-title hidden nome-print'>{info.name}</h5>
                <p className='card-text'>{info.description}</p>
                <p>
                  <button
                    className='btn d-print-none btn-primary my-2'
                    onClick={() => setHidden(!hidden)}>
                    Conheça mais no Curriculo
                  </button>
                  <a
                    className='btn d-print-none btn-secondary my-2'
                    href='portifolio/projetos'>
                    Ou no Portifolio
                  </a>
                  <button
                    className='btn d-print-none btn-secondary my-2'
                    onClick={() => {
                      window.print();
                    }}>
                    Ou Imprimir Curriculo
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id='CV' className={"CV " + (hidden ? "hidden" : "")}>
        {data.curriculos.map((info, index) => (
          <div key={index}>
            <Informacoes data={info} />
            <div style={{ height: 10 }}></div>
            <Formacoes data={info} />
            <TimeLine data={info} />
            <Habilidades data={info} />
          </div>
        ))}
      </div>
      <footer className='card-footer footer d-print-none'>
        <span className='text-muted'>
          <p className='foot-last'>
            © 2020-2021 Daniel Dabés Design. All rights reserved.
          </p>
        </span>
      </footer>
    </div>
  );
};

export default App;
