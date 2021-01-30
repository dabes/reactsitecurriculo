import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const Formacoes = (props) => {
  const { loading, error, data } = useQuery(gql`
    query {
        formacoes (curriculo: "${props.data.id}") {
        curso
        estado
        grau
        inicio
        instituicao
        id
        curriculo
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
        <div className='card-body formacao'>
          <h5 className='card-title'>
            <img
              className='hidden img-print'
              src='/assets/img/formacao.png'
              alt='print-img'
            />
            Formação Acadêmica
          </h5>
          <p className='card-text text-left'>
            <font className='font-bolder'>Curso:</font>{" "}
            {data.formacoes[0].curso}
          </p>
          <p className='card-text text-left'>
            <font className='font-bolder'>Grau:</font> {data.formacoes[0].grau}
          </p>
          <p className='card-text text-left'>
            <font className='font-bolder'>Instituição:</font>{" "}
            {data.formacoes[0].instituicao}
          </p>
          <p className='card-text text-left'>
            <font className='font-bolder'>Início:</font>{" "}
            {data.formacoes[0].inicio}
          </p>
          <p className='card-text text-left'>
            <font className='font-bolder'>Estado:</font>{" "}
            {data.formacoes[0].estado}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Formacoes;
