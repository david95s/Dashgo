import { Text, Link as LinkChakra, Icon, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from 'next/link';
import { ActiveLink } from "../ActiveLink";


interface NavLinkProps extends ChakraLinkProps{
  children: string;
  myIcon: ElementType;
  myHref: string;
}

export const NavLink = ({ myIcon, children, myHref, ...rest }: NavLinkProps) => {

  return (
    <ActiveLink href={ myHref } passHref>
      <LinkChakra display="flex" align="center" {...rest}>
        <Icon as={ myIcon } fontSize="20" />
        <Text ml="4" fontWeight="medium">{ children }</Text>
      </LinkChakra>
    </ActiveLink>

  );
}