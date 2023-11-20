import Image from 'next/image';

export default function Home() {
  // Try to import here signOut() - a function from nextauth, or any other third party library function. It won't work.
  // you can try: signOut() from next-auth or zod for example, you won't get intellisense import suggestions

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'></main>
  );
}
