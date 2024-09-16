import Link from 'next/link';
// import Image from 'next/image';
// import * as motion from 'framer-motion/client';


async function Home() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </>
  );
}

export default Home;
