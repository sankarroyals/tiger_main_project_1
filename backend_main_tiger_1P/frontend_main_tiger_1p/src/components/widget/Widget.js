import "./widget.scss";


const Widget = ({ name,percentage,depo }) => {
  


 

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{name}</span>
        <span className="counter">
          {depo}
        </span>
        <span className="link"></span>
        <div className="percentage positive">
        {percentage} {name === "Active Deployments" && 
        <>
        <i className="fa-solid fa-arrow-up" style={{marginLeft:"10px"}}></i>
        <span className="te">than last week</span>
        </>
        }
        </div>
      </div>
      <div className="right">
      {name !=='Active Deployments' && <div className="inT">8</div>}
        
      {name === "Active Deployments" && 
      <div className="inR">
          

          <i className="fa-solid fa-arrows-rotate"></i>
          </div>}
          
        
       
      </div>
    </div>
  );
};

export default Widget;
