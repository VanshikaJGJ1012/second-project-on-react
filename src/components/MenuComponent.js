import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle,BreadCrumb,BreadCrumbItem } from 'reactstrap';

import {Link} from 'react-router-dom';
function RenderMenuItem({dish,onClick})
{
  return (
    <Card >
      <Link to={`/menu/${dish.id}`}>
    <CardImg width="100%" src={dish.image} alt={dish.name}/>
    <CardImgOverlay>
      <CardTitle>{dish.name}</CardTitle>
    </CardImgOverlay>
    </Link>
  </Card>
  );
}

const Menu=(props)=> {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
       <RenderMenuItem dish={dish} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <BreadCrumb>
        <BreadCrumbItem>
        <Link to ='/home'>Home
        </Link>
        </BreadCrumbItem>
        <BreadCrumbItem active>Menu</BreadCrumbItem>
        </BreadCrumb>
        <div className="col-12">
<h3>
  Menu

</h3>
<hr/>
        </div>
      </div>
      <div className="row">
          {menu}
      </div>
    </div>
  );

}

  
   
export default Menu;
