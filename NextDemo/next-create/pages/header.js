import Head from 'next/head'
import MyHeader from '../components/MyHeader'

function Header() {
  return (
    <div>
      <MyHeader></MyHeader>
      <h1>This is header page part!</h1>
    </div>
  );
}

export default Header;