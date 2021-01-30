import Menu from "../components/Menu";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const Projects = (props) => {
  document.title = "Curriculo e Portifolio de Daniel Vieira Dabés";
  const { loading, error, data } = useQuery(gql`
    query {
      projetos {
        id
        title
        image
        description
        link
      }
    }
  `);
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>encountered an error: {error}</div>;
  }
  return (
    <div className='container-fluid'>
      <Menu />
      <div className='row'>
        {data.projetos.map((item, index) => {
          return (
            <div className='col-sm-3 mb-3 d-flex align-items-stretch'>
              <div className='card' style={{ width: "100%" }}>
                <img className='card-img-top' src={item.image} alt='Card cap' />
                <div className='card-body'>
                  <h5 className='card-title'>{item.title}</h5>
                  <p className='card-text'>{item.description}</p>
                </div>
                <div className='card-footer'>
                  <a href={item.link} className='btn btn-primary'>
                    Ver mais
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
