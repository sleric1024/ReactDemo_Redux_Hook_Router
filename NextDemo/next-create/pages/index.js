import React from 'react'
import Link from 'next/Link'
import Router from 'next/Router'
import '../static/style.css'

const Home = () => {
  function goToA() {
    Router.push("/testA");
  }

  function goToWelcome() {
    Router.push({
      pathname: '/welcome',
      query: {
        name: 'Jim'
      }
    })
  }

  Router.events.on('routeChangeStart',(...args)=>{
    console.log('1.routeChangeStart->路由开始变化,参数为:',...args)
  })

  Router.events.on('routeChangeComplete',(...args)=>{
    console.log('2.routeChangeComplete->路由结束变化,参数为:',...args)
  })

  Router.events.on('beforeHistoryChange',(...args)=>{
    console.log('3,beforeHistoryChange->在改变浏览器 history之前触发,参数为:',...args)
  })

  Router.events.on('routeChangeError',(...args)=>{
    console.log('4,routeChangeError->跳转发生错误,参数为:',...args)
  })

  Router.events.on('hashChangeStart',(...args)=>{
    console.log('5,hashChangeStart->hash跳转开始时执行,参数为:',...args)
  })

  Router.events.on('hashChangeComplete',(...args)=>{
    console.log('6,hashChangeComplete->hash跳转完成时,参数为:',...args)
  })

  return (
    <div>
      <h1>This is Main Page</h1>
      <div>
        <Link href="/testA">
          <a>To Page A<span> Blog</span></a>
        </Link>
      </div>
      <div><Link href="/testB"><a>To Page B</a></Link></div>
      <div>
        <button onClick={goToA}>To Page A</button>
      </div>
      <h2><Link href="/welcome?name=David"><a>Link to David's Page</a></Link></h2>
      <h2><Link href={{pathname: '/welcome', query: {name: 'Tomas'}}}><a>Link to Tomas's Page</a></Link></h2>
      <div>
        <button onClick={goToWelcome}>Link to Jim's Page</button>
      </div>
      <div>
        <h2><Link href="#testA"><a>Hash Navigation</a></Link></h2>
      </div>
    </div>
  );
}

export default Home
