import React, { Component } from "react";
import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";


class DishDetail extends Component{
    
    renderDish(dish) {
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

    renderComments(dish) {
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
   



    render() {
        const dishitem = this.props.dish;
        return(
            <div className="container">
                <div className="row">
                    {this.renderDish(dishitem)}
                    {this.renderComments(dishitem)}
                </div>
            </div>
        )
    }
}

export default DishDetail;