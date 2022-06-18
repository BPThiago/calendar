import '../styles/globals.css'
import Head from 'next/head'
export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Calendar</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}