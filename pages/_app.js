import Layout from '../component/Layout'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* <Layout>
        <Component {...pageProps} />
      </Layout> */}
    </>

  )

}

export default MyApp
