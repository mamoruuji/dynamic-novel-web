import { signIn, signOut, useSession } from 'next-auth/react'

export default function Page() {
  const {data:session, status} = useSession()

  if (status === 'loading') return <p>Loading...</p>

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  )
}
