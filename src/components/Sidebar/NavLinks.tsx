import {
  Icon,
  Text,
  Link as ChakraLink,
  LinkProps as ChakkraLinkProps,
} from "@chakra-ui/react";

import ActiveLink from "../ActiveLink";

interface NavLinkProps extends ChakkraLinkProps {
  icon: React.ElementType;
  children: string;
  href: string;
}

export function NavLinks({ icon, href, children, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center">
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
