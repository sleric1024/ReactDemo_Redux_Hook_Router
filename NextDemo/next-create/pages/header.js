import Head from 'next/head'
import MyHeader from '../components/MyHeader'
import {Button} from 'antd'

function Header() {
  return (
    <div>
      <MyHeader></MyHeader>
      <h2>This is header page part!</h2>
      <Button>This is AntDesign Button</Button>
    </div>
  );
}

export default Header;