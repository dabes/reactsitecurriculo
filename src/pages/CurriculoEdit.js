import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../components/Menu";
import { Input, TextArea, Cancel, Save } from "../utils/formUtils";

const CurriculoEdit = () => {
  const params = useParams();
  const [formData, setFormData] = useState({});
  const [render, setRender] = useState(false);
  document.title = "Curriculo e Portifolio de Daniel Vieira Dabés";
  const { loading, error, data } = useQuery(gql`
    query {
      curriculo (id : "${params.id}") {
        id
        description
        name
        facebook
        linkedin
        title
      }
    }
  `);

  useEffect(() => {
    if (!loading && !error) {
      setFormData(data.curriculo);
      setRender(true);
    }
  }, [data, loading, error]);

  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>encountered an error: {error}</div>;
  }

  const title = data.curriculo.name;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFormData(data.curriculo);
  };

  if (render)
    return (
      <div className='container-fluid page-container'>
        <Menu title={title} />
        <div className='container-fluid'>
          <form id='curriculo'>
            <Input
              data={formData}
              name='name'
              label='Nome Completo'
              setData={setFormData}
              type='text'
            />
            <Input
              data={formData}
              name='title'
              label='Titulo'
              setData={setFormData}
              type='text'
            />
            <Input
              data={formData}
              name='facebook'
              label='Facebook'
              setData={setFormData}
              type='text'
            />
            <Input
              data={formData}
              name='linkedin'
              label='Linkedin'
              setData={setFormData}
              type='text'
            />
            <TextArea
              data={formData}
              name='description'
              label='Descrição'
              setData={setFormData}
              rows='10'
            />
            <div className='form-group bmd-form-group'>
              <Cancel callback={handleCancel} />
              <Save callback={handleSubmit} />
            </div>
          </form>
        </div>
        <div className='clear' style={{ height: 50 }}></div>
        <footer className='card-footer footer d-print-none'>
          <span className='text-muted'>
            <p className='foot-last'>
              © 2020-2021 Daniel Dabés Design. All rights reserved.
            </p>
          </span>
        </footer>
      </div>
    );
  else return <div></div>;
};

export default CurriculoEdit;
