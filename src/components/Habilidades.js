import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const ItemHabilidade = (props) => {
  return props.data.map((item, key) => {
    return (
      <div className='mb-3' key={key}>
        <div className='row'>
          <div className='col-sm-9 text-left'>{item.name}</div>
          <div className='col-sm-3 text-right'>{item.percent}%</div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='progress'>
              <div
                className='progress-bar'
                role='progressbar'
                aria-valuenow={item.percent}
                aria-valuemax='100'
                style={{ width: item.percent + "%" }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

const Habilidades = (props) => {
  const { loading, error, data } = useQuery(gql`
    query {
        habilidades (curriculo: "${props.data.id}") {
        id
        name
        curriculo
        percent
        type
      }
    }
  `);
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>encountered an error: {error}</div>;
  }
  var avancado = [];
  var intermediario = [];
  var pessoal = [];
  for (var [, items] of Object.entries(data.habilidades)) {
    if (items.type === "avancado") {
      avancado.push(items);
    } else if (items.type === "intermediario") {
      intermediario.push(items);
    } else pessoal.push(items);
  }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-12'>
          <div className='card-body formacao'>
            <h5
              className='card-title'
              style={{ fontSize: "1.5rem", fontWeight: 300 }}>
              <img
                className='hidden img-print'
                src='/assets/img/coding.png'
                alt='print-img'
              />
              Habilidades
            </h5>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-4 mb-3'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Avançados</h5>
              <ItemHabilidade data={avancado} />
            </div>
          </div>
        </div>
        <div className='col-sm-4 mb-3'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Intermediário</h5>
              <ItemHabilidade data={intermediario} />
            </div>
          </div>
        </div>
        <div className='col-sm-4 mb-3'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Pessoal</h5>
              <ItemHabilidade data={pessoal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
