import React from "react";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";


    
    function RenderDish({dish}) {
        if (dish) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>
                                {dish.name}
                            </CardTitle>
                            <CardText>
                                {dish.description}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    function RenderComments({dish}) {
        if (dish) {
            const commentsItems = dish.comments.map(item => {
                return(
                    <li key= {item.id}>
                        <p>
                            {item.comment}
                        </p>
                        <p>
                            -- {item.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))}
                        </p>
                    </li>
                )
            })
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentsItems}
                    </ul>
                </div>
            )
        }
        else {
            return(
                <div></div>
            );
        }
    }
   


    const DishDetail = (props) => {
        const dishitem = props.dish;
        return(
            <div className="container">
                <div className="row">
                    <RenderDish dish= {dishitem} />
                    <RenderComments dish= {dishitem} />
                </div>
            </div>
        )
    }

export default DishDetail;