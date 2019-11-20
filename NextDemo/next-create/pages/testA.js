import Link from 'next/link'

function testA() {
  return (
    <div>
      <div>
        <h1>This is  test Page A</h1>
        <Link href="/"><a>Return to Main Page</a></Link>
      </div>
    </div>
  )
}
export default testA;