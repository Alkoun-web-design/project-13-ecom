import Link from 'next/link'
import H1 from '@/components/H1';
 
export default function NotFound() {
  return (
    <div className="col-start-2 col-end-12">
      <div className="col-span-full mt-20">
        <Link href="/" className="text-xl text-gray-500 hover:text-gray-900 hover:underline mx-1">Home</Link>
        <span className="inline-block text-xl mx-1">/</span>
      </div>
      <H1 heading="Not Found" />
      <p className="py-1 px-2">Could not find requested category</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}