import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { CSSProperties } from 'react'

const style:CSSProperties ={
    color:'#2196f3',
    textDecoration:'underline',
    fontWeight:'bold'
}

const ActiveLink = ({href,text}) => {

    const {asPath} = useRouter()
    
  return (
    <Link  href={href} style={asPath === href ? style : undefined}>
    {text}
    </Link>
  )
}

export default ActiveLink
