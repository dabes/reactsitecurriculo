import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const ItemTL = (props) => {
  const data = props.data;
  return data.carreiras.map((item, index) => {
    return (
      <li
        className={index % 2 === 0 ? "timeline-inverted" : "timeline"}
        key={index}>
        <div className='tl-circ d-print-none'></div>
        <div className='timeline-panel'>
          <div className='tl-heading'>
            <h4>{item.company}</h4>
            <p>
              <small className='text-muted'>
                <i className='glyphicon glyphicon-time'></i>
                {item.timefrom} até {item.timeto === "" ? "..." : item.timeto}
              </small>
            </p>
          </div>
          <hr />
          <div className='tl-body'>
            <h5>{item.position}</h5>
            <p>{item.description}</p>
          </div>
        </div>
      </li>
    );
  });
};

const TimeLine = (props) => {
  const { loading, error, data } = useQuery(gql`
    query {
        carreiras (curriculo: "${props.data.id}") {
        id
        company
        description
        position
        timefrom
        timeto
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
      <h5 className='card-title hidden nome-print' id='carreira'>
        <div style={{ height: 10 }}></div>
        <img
          className='hidden img-print'
          src='/assets/img/carreira.jpg'
          alt='print-img'
        />
        Carreira
      </h5>
      <ul className='timeline'>
        <ItemTL data={data} />
      </ul>
    </div>
  );
};

export default TimeLine;
