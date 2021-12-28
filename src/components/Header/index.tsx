import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSideBarDrawer } from "../../context/SideBarDrawerContext";
import Logo from "../Header/Logo";
import NotificationNav from "../Header/NotificationNav";
import { Profile } from "../Header/Profile";
import Search from "../Header/Search";

export function Header() {
  const { onOpen } = useSideBarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth="1480"
      h="28"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      {!isWideVersion && (
        <IconButton
          mr="2"
          font-size="24"
          variant="unstyled"
          onClick={onOpen}
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
        ></IconButton>
      )}
      <Logo />

      {isWideVersion && <Search />}

      <Flex align="center" ml="auto">
        <NotificationNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
