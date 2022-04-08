import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { useContext } from "react";
import { useState } from "react";
import { Event } from "../../components/event/Event";
import { Layout } from "../../components/layout/Layout";


export default function EventPage( { data }: InferGetServerSidePropsType<typeof getServerSideProps>):JSX.Element {
    const [loggedin, setLoggedin] = useState(false);
    return(
        <Layout
        title="Viðburðasíðan"
        footer={
            <div></div>
        }
        >
            <Event
            title={data.name}
            description={data.description}
            registrations={data.registrations}
            loggedin={loggedin}
            />
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const result = await fetch(`https://vef2-20222-v3-synilausn.herokuapp.com/events/${params?.id}`);  
    const data = await result.json();
    console.log('data :>> ', data);
    return {
        props: {
            data
        },
    };
};
