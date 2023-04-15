


import {useRouter} from 'next/router'

import { NextUIProvider } from '@nextui-org/react';
import { Input } from "@nextui-org/react";
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
import { Link } from "@nextui-org/react";


export default function Home({data}) {

  async function handleSubmit(event){

    event.preventDefault(); // block default behav

    const name = document.querySelector('#username').value
    const pass = document.querySelector('#password').value

    // test the vars

    alert(name);
    alert(pass);


    // send the data to the api page/  

    // get data from the form.

    const data = {

      username: event.target.username.value,
      password: event.target.password.value,
    }

    // send the data to the server in JSON format.


    const JSONdata = JSON.stringify(data)

    //API endpoint where we send form data.

    const endpoint = '/api/login'

    //form the request for sending data to server.

    const options = {
      // the method is POST because we are sending data.
      method: "POST",
      //tell the server we're sending JSON

    headers: {
      'Content-Type': 'application/json',
    },
    //body of the request is the JSON data we created above.
    body: JSONdata,
    }

    // send the data to our forms API on Vercel and get a responce.
    const response = await fetch(endpoint, options)

    // get the responce data from the server as JSON.
    // if server returns the name submitted , that means the form works.
    const result = await response.json()

    // if we get back ok message, redirect to the next page

    router.push("/listCourses");




  }


  const router = useRouter()

  const MockItem = ({ text }) => {
    return (
      <Card css={{ h: "$24", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };
  
  return (

    <NextUIProvider>
      <Grid.Container gap={2} justify="center">
        <Grid xs={4}>
          <MockItem text="1 of 3" />
        </Grid>
        <Grid xs={4}>
          <Card css={{ h: "$240", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            
            Login into system

            <br></br>
            <form onSubmit={handleSubmit}>
            <Input id="username" placeholder="Username" labelPlaceholder="username" initialValue="" />
            <Spacer y={0.5}/>

            <Input id="password" placeholder="Password"  labelPlaceholder="password" initialValue=""/>
            <Spacer y={0.5}/>

            <Button>Login</Button>
            <Spacer y={0.5}/>
            </form>
          </Text>
        </Card.Body>
      </Card>
        </Grid>
        <Grid xs={4}>
          <MockItem text="3 of 3" />
        </Grid>
      </Grid.Container>
      </NextUIProvider>
  )
}


