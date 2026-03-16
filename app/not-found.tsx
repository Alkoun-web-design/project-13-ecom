import Link from 'next/link'
import H1 from '@/components/H1'
 
export default function NotFound() {
  return (
    <div className="col-start-2 col-end-12">
      <H1 heading="Not Found" />
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}