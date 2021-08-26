
import FromPropertyDescriptor from 'es-abstract/5/FromPropertyDescriptor';
import { Card, Container, Form, Button } from 'react-bootstrap';
import './FoodList.css'





export default function FoodList(props) {

    const { values, update, submit } = props;

    const onSubmit = evt => {

        evt.preventDefault();

        submit();
    }


    return (
        <>
            <Container>
                Make a Food List Test

                <Form onSubmit={onSubmit}>

                    <div className="buttonHeader">
                        <h2>What will you bring?</h2>
                    </div>



                    <div className="radioButtons">
                        <div className="rowOne">
                            <label> Appetizers
                                <input
                                    type="radio"
                                    name="appetizers"
                                />
                            </label>

                            <label> Entrees
                                <input
                                    type="radio"
                                    name="entrees"
                                />
                            </label>


                            <label> Dessert
                                <input
                                    type="radio"
                                    name="dessert"
                                />
                            </label>
                        </div>

                        <div className="rowTwo">
                            <label> Non-Alcoholic Drinks
                                <input
                                    type="radio"
                                    name="drinks"
                                />
                            </label>


                            <label> Alcoholic Drinks
                                <input
                                    type="radio"
                                    name="alcohol"
                                />
                            </label>
                        </div>
                    </div>



                    <Form.Group className="textBox">
                        <Card.Title>
                            <Card.Text style={{ fontsize: '25px', }}>Specify what you are bringing</Card.Text>
                        </Card.Title>
                        <Form.Control type="text" placeholer="Enter dish here" />
                    </Form.Group>


                    <Form.Group>

                        <Button variant="primary" type="submit" style={{justifyContent: 'center', marginTop: '30px'}}>Submit</Button>
                    </Form.Group>

                </Form>

            </Container>
        </>
    )
}
