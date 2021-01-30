export const setFocus = (element) => {
  const parent = element.target.parentElement;
  parent.className =
    parent.className.replace(" is-focused", "") + " is-focused";
};

export const unsetFocus = (element) => {
  const parent = element.target.parentElement;
  parent.className = parent.className.replace(" is-focused", "");
};

export const setFilled = (element) => {
  const parent = element.target.parentElement;
  if (element.target.value === "") {
    parent.className = parent.className.replace(" is-filled", "");
  } else {
    parent.className =
      parent.className.replace(" is-filled", "") + " is-filled";
  }
};

export const Input = (props) => {
  const data = props.data;
  const name = props.name;
  const label = props.label;
  const setData = props.setData;
  const type = props.type;
  return (
    <div
      className={
        "form-group bmd-form-group" + (data[name] !== null ? " is-filled" : "")
      }>
      <label htmlFor={name} className='bmd-label-floating'>
        {label}
      </label>
      <input
        type={type}
        className='form-control'
        id={name}
        value={data[name]}
        onChange={(e) => {
          var obj = {};
          obj = { ...data };
          obj[name] = e.target.value;
          setData(obj);
          setFilled(e);
        }}
        onFocus={(e) => setFocus(e)}
        onBlur={(e) => unsetFocus(e)}
      />
    </div>
  );
};

export const TextArea = (props) => {
  const data = props.data;
  const name = props.name;
  const label = props.label;
  const setData = props.setData;
  const rows = props.rows;
  return (
    <div
      className={
        "form-group bmd-form-group" + (data[name] !== null ? " is-filled" : "")
      }>
      <label htmlFor={name} className='bmd-label-floating'>
        {label}
      </label>
      <textarea
        rows={rows}
        className='form-control'
        id={name}
        value={data[name]}
        onChange={(e) => {
          var obj = {};
          obj = { ...data };
          obj[name] = e.target.value;
          setData(obj);
          setFilled(e);
        }}
        onFocus={(e) => setFocus(e)}
        onBlur={(e) => unsetFocus(e)}
      />
    </div>
  );
};

export const ModalConfirm = (props) => {
  const title = props.title;
  const msg = props.msg;
  const textConfirm = props.textConfirm;
  const textClose = props.textClose;
  const id = props.id;
  const callback = props.callback;
  const buttonClass = props.buttonClass;
  return (
    <>
      <button
        className={buttonClass}
        onClick={(e) => e.preventDefault()}
        data-toggle='modal'
        data-target={"#" + id}
        style={{ paddingLeft: 20 }}>
        {textConfirm}
      </button>
      <div className='modal' tabIndex='-1' role='dialog' id={id}>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>{title}</h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <p>{msg}</p>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-primary'
                onClick={callback}
                data-dismiss='modal'>
                {textConfirm}
              </button>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'>
                {textClose}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Cancel = (props) => {
  const callback = props.callback;
  return (
    <ModalConfirm
      title='Cancelar Alterações'
      msg='Deseja realmente cancelar as alterações, todas seram perdidas?'
      textConfirm='Cancelar'
      textClose='Fechar'
      id='cancelarAlteracao'
      callback={callback}
      buttonClass='btn btn-secondary my-2'
    />
  );
};

export const Save = (props) => {
  const callback = props.callback;
  return (
    <ModalConfirm
      title='Gravar Alterações'
      msg='Deseja realmente gravar as alterações?'
      textConfirm='Gravar'
      textClose='Fechar'
      id='gravarAlteracao'
      callback={callback}
      buttonClass='btn btn-primary my-2'
    />
  );
};
