import Image from 'next/image'
import Link from 'next/link'

const AuthHeader = () => {
  return (
    <Link href="/login">
      <Image
        src="/images/my_library_logo.png"
        alt="logo image"
        width={100}
        height={100}
      />
    </Link>
  )
}

export default AuthHeader
