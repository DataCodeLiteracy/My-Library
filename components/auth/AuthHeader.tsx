import Image from 'next/image'
import Link from 'next/link'

const AuthHeader = () => {
  return (
    <Link href="/login">
      <Image
        src="/images/my_library_logo.png"
        alt="logo image"
        width={80}
        height={80}
      />
    </Link>
  )
}

export default AuthHeader
