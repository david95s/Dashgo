import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {


  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>David Linconl</Text>
          <Text color="gray.300" fontSize="small">
            davidlinconl1@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="David Linconl" src="https://github.com/david95s.png" />
    </Flex>
  );
}