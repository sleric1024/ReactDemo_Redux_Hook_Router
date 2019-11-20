import Router, { withRouter } from 'next/Router'
import Link from 'next/Link'

const welcome = ({router}) => {
  return (
    <div>
      <h1>Welcome {router.query.name} !</h1>
      <Link href="/"><a>Go to Main Page</a></Link>
    </div>
  )
}

export default withRouter(welcome);