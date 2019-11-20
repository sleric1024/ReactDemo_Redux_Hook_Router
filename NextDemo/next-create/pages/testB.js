import Link from 'next/link'

function testB() {
  return (
    <div>
      <div>
        <h1>This is  test Page B</h1>
        <Link href="/"><a>Return to Main Page</a></Link>
      </div>
    </div>
  )
}
export default testB;