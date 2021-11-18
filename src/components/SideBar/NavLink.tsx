import { Text, Link, Icon, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps{
  myIcon: ElementType;
  children: string;
}

export const NavLink = ({ myIcon, children, ...rest }: NavLinkProps) => {

  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={ myIcon } fontSize="20" />
      <Text ml="4" fontWeight="medium">{ children }</Text>
    </Link>
  );
}