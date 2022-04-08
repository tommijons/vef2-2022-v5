import type { InferGetServerSidePropsType } from 'next'
import { useState } from 'react'
import { GetServerSideProps } from 'next'
import { Layout } from '../components/layout/Layout'
import { Events } from '../components/events/Events'
import { Login } from '../components/login/Login'

export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const {items:allEvents } = data;
  const name = 'test';
  const [loggedin, setLoggedin] = useState(false);

  const onRegister = (e:any) => {
    e.preventDefault();
    setLoggedin(true);
  };

  const onLogout = (e:any) => {
    e.preventDefault();
    setLoggedin(false);
  };
  return (
    <Layout 
    title="Viðburðasíðan"
    footer={
      <Login
        loggedin={loggedin}
        name={name}
        onRegister={onRegister}
        onLogout={onLogout}
      />
    }
    >
      <Events title="Viðburðir á næstunni" events= {allEvents} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async() => {
  const result = await fetch(`https://vef2-20222-v3-synilausn.herokuapp.com/events`);  
  const data = await result.json();

  return {
    props: { data }
  };
}
