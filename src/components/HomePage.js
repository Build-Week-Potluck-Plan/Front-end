import React from 'react'
import { Container, Card, Button } from 'react-bootstrap';



export default function HomePage() {
    return (
            <>
            <Container>
            <Card style={{flexDirection: 'row', alignItems: 'center'}}>
                <Card.Img style={{width: '50%', }} variant="left" src="https://cdn.shopify.com/s/files/1/0085/5484/0141/files/potluck4_grande.jpg?v=1589822887" />
                <Card.Body style={{padding: '0.5em 1.2em', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Card.Title>Welcome to Potluck</Card.Title>
                    <Card.Text style={{width: '95%'}}>
                        You’ve heard of tough luck, blind luck, and beginner’s luck, but the best luck of all is… POT-Luck! We make hosting potluck events simple. Sign up now and get started with coordinating your event!
                    </Card.Text>
                    <Button href="/signup" variant="primary" style={{textAlign: 'center'}}>Sign up!</Button>
                </Card.Body>
            </Card>
            <Card style={{flexDirection: 'row-reverse', alignItems: 'center',}}>
                <Card.Img style={{width: '50%',}} variant="left" src="https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Dishes_at_Potluck-700x461.jpg" />
                <Card.Body style={{padding: '0.5em 1.2em', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Card.Title>Create a potluck event!</Card.Title>
                    <Card.Text style={{width: '95%'}}>
                        Have you ever wanted to host a potluck, but don't know where to start? Would you like to get together for some good food and fantastic company? Here at Potluck, we make organzing a potluck event as easy as pie.
                    </Card.Text>
                    <Button href="/create-an-event" to="/create-an-event" variant="primary" style={{textAlign: 'center'}}>Start here!</Button>
                </Card.Body>
            </Card>
            </Container>
            </>
    )
}
