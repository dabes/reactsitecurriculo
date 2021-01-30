import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const Informacoes = (props) => {
  const { loading, error, data } = useQuery(gql`
    query {
        informacoes (curriculo: "${props.data.id}") {
        email
        estadoCivil
        idade
        sexo
        id
        curriculo
        dataNascimento
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
      <div className='card left'>
        <div className='card-body info'>
          <h5 className='card-title'>
            <img
              className='hidden img-print'
              src='/assets/img/identidade.jpg'
              alt='incon-print'
            />
            Informações Pessoais
          </h5>
          <p className='card-font text-left'>
            <font className='font-bolder'>E-mail:</font>
            {data.informacoes[0].email}
          </p>
          <p className='card-font text-left'>
            <font className='font-bolder'>Idade:</font>{" "}
            {data.informacoes[0].idade}
          </p>
          <p className='card-font text-left'>
            <font className='font-bolder'>Sexo:</font>{" "}
            {data.informacoes[0].sexo}
          </p>
          <p className='card-font text-left'>
            <font className='font-bolder'>Estado Civil:</font>{" "}
            {data.informacoes[0].estadoCivil}
          </p>
          <p className='card-font text-left hidden nome-print'>
            <font className='font-bolder'>Linkedin:</font>{" "}
            {decodeURIComponent(props.data.linkedin)}
          </p>
          <p className='card-font text-left hidden nome-print'>
            <font className='font-bolder'>Facebook:</font>{" "}
            {decodeURIComponent(props.data.facebook)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Informacoes;
