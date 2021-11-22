import { cloneElement, ReactElement } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from "next/router";

/*
  ReactElement !== ReactNode
  ReactElement aceita SOMENTE components dentro dele
  ReactNode aceita todos os elementos dentro dele
  ------------------
  Qnd for passar o children dentro da função cloneElement
  tem o type tem q ser ReactElement
*/
interface ActiveLinkProps extends LinkProps{
  children: ReactElement;
  matchExactHref?: boolean;
}

export const ActiveLink = ({ children, matchExactHref = false, ...rest }: ActiveLinkProps) => {
  const { asPath } = useRouter();
  
  let isActive= false;  
  
  if(matchExactHref && (asPath === rest.href) ){
    isActive = true
  }

  if(!matchExactHref && 
      (asPath.startsWith(String(rest.href))) ||
      (asPath.startsWith(String(rest.as)))
    ){
    isActive = true

  }


  return (
    <Link {...rest}>
      { cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50"
      }) }
    </Link>
  )
}