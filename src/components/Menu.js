const LinkItem = (props) => {
  const item = props.item;
  if (item.type === "item" && !item.print)
    return (
      <a
        className={"nav-link " + item.props}
        href={item.link}
        target={item.target}>
        {item.label}
      </a>
    );
  else if (item.type === "item" && item.print)
    return (
      <a
        className={"nav-link " + item.props}
        href={item.link}
        target={item.target}>
        {item.label}
      </a>
    );
  else if (item.type === "dropdown")
    return (
      <a
        className='nav-link dropdown-toggle'
        data-toggle='dropdown'
        href='/#'
        role='button'
        aria-haspopup='true'
        aria-expanded='false'>
        {item.label}
      </a>
    );
};

const Menu = (props) => {
  const menu = [
    {
      type: "item",
      label: "Home",
      link: "/",
      props: "active",
    },
    {
      type: "dropdown",
      label: "Portifolio",
      props: "",
      link: [
        {
          type: "item",
          label: "Projetos Feitos",
          link: "/portifolio/projetos",
          props: "",
        },
        {
          type: "item",
          label: "Componentes",
          link: "/portifolio/componentes",
          props: "",
        },
        {
          type: "item",
          label: "GitHub",
          link: "https://github.com/dabes",
          props: "",
          target: "_blank",
          divider: true,
        },
      ],
    },
  ];

  return (
    <div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow d-print-none'>
      <h5 className='my-0 mr-md-auto font-weight-normal'>{props.title}</h5>
      <nav className='my-2 my-md-0 mr-md-3'>
        <ul className='nav nav-tabs'>
          {menu.map((item, index) => (
            <li
              className={
                "nav-item " + item.type === "dropdown" ? item.type : ""
              }
              key={index}>
              <LinkItem item={item} />
              {item.type === "dropdown" ? (
                <div className='dropdown-menu'>
                  {item.link.map((subitem, index) => (
                    <div key={index}>
                      {subitem.divider === true ? (
                        <div className='dropdown-divider' />
                      ) : (
                        ""
                      )}
                      <a
                        className={"dropdown-item" + subitem.props}
                        href={subitem.link}
                        target={subitem.target}>
                        {subitem.label}
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
