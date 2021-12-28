import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text> Pedro Henrique </Text>
          <Text color="gray.300" fontSize="small">
            pedrohenrique@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Pedro Henrique"
        src="https://github.com/PedroHenrique-O.png"
      />
    </Flex>
  );
}
