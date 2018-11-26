import App from '../components/App'
import Header from '../components/Header'
import Submit from '../components/Submit'
import PostList from '../components/PostList'
import Head from 'next/head'

export default () => (
  <App>
    <Head>
      <meta name="google-site-verification" content="6Henc3W_kV_SFW-10sMb5wP9_28ftpKzIBGZHdhe1aA" />
    </Head>
    <Header />
    <Submit />
    <PostList />
  </App>
)
