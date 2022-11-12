import Head from 'next/head'
import React from 'react'
import AuthCard from '../components/AuthCard'

function auth() {
  return (
    <>
      <Head>
        <title>Login/Signup to your account</title>
      </Head>
      <AuthCard />
    </>
  )
}

export default auth
