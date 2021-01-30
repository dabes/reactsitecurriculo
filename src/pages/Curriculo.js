import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Menu from "../components/Menu";

const Curriculo = () => {
  console.log("b");
  document.title = "Curriculo e Portifolio de Daniel Vieira Dabés";
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
        <table className='table table-striped table-hover table-sm'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col'>Nome</th>
              <th scope='col'>Titulo</th>
              <th scope='col'>Linkedin</th>
              <th scope='col'>Facebook</th>
              <th scope='col'>Descrição</th>
              <th scope='col'>Ação</th>
            </tr>
          </thead>
          <tbody>
            {data.curriculos.map((info, index) => (
              <tr key={index}>
                <td>{info.name}</td>
                <td>{info.title}</td>
                <td>{decodeURIComponent(info.linkedin)}</td>
                <td>{decodeURIComponent(info.facebook)}</td>
                <td className='ellipsis'>{info.description}</td>
                <td>
                  <a className='btn btn-primary' href={"/curriculo/" + info.id}>
                    Editar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default Curriculo;
