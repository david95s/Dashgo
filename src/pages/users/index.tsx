import { 
  useBreakpointValue,
  Box, 
  Flex, 
  Heading, 
  Button, 
  Icon, 
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Text
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/SideBar";

export default function UserList(){

  const isDrawerSidebar = useBreakpointValue({
    base: false,
    lg: true,
  });


  return (
    <Box>
      <Header/>
      <Flex w="100%" my="6" maxW={ 1480 } mx="auto" px="6">
        <Sidebar/>
        
        <Box flex="1" borderRadius={8} bg="gray.800" p={["4", "4","8"]}>
          <Flex mb="8" justify="space-between" align="center">
            <Heading   size={ isDrawerSidebar ? "lg" : "md"}  fontWeight="normal">Usuários</Heading>
            <Button 
              as="a" 
              size="sm" 
              fontSize="sm"
              colorScheme="pink"
              leftIcon={ <Icon as={ RiAddLine } fontSize={ isDrawerSidebar ? "20" : "10"}/> }
              cursor="pointer"
            >
              Criar novo
            </Button>
          </Flex>
          
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>Usuário</Th>
                {isDrawerSidebar && <Th>Data de cadastro</Th>} 
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td  px={["4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">David Linconl</Text>
                    <Text fontSize="sm" color="gray.300">davidlinconl1@hotmail.com</Text>
                  </Box>
                </Td>
                {isDrawerSidebar && <Td>04 de Abril, 2021</Td>} 
                <Td p= { isDrawerSidebar ? "auto" : "1" }>
                  <Button 
                    as="a" 
                    size="sm" 
                    fontSize="sm"
                    colorScheme="purple"
                    pr={ isDrawerSidebar ? "auto" : "0"}
                    pl= { isDrawerSidebar ? "auto" : "1" }  
                    leftIcon={ <Icon as={ RiPencilLine } fontSize="15" /> }
                    cursor="pointer"
                  >
                    { isDrawerSidebar && "Editar" }
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td  px={["4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">David Linconl</Text>
                    <Text fontSize="sm" color="gray.300">davidlinconl1@hotmail.com</Text>
                  </Box>
                </Td>
                {isDrawerSidebar && <Td>04 de Abril, 2021</Td>} 
                <Td p= { isDrawerSidebar ? "auto" : "1" }>
                  <Button 
                    as="a" 
                    size="sm" 
                    fontSize="sm"
                    colorScheme="purple"
                    pr={ isDrawerSidebar ? "auto" : "0"}
                    pl= { isDrawerSidebar ? "auto" : "1" }  
                    leftIcon={ <Icon as={ RiPencilLine } fontSize="15" /> }
                    cursor="pointer"
                  >
                    { isDrawerSidebar && "Editar" }
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td  px={["4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">David Linconl</Text>
                    <Text fontSize="sm" color="gray.300">davidlinconl1@hotmail.com</Text>
                  </Box>
                </Td>
                {isDrawerSidebar && <Td>04 de Abril, 2021</Td>} 
                <Td p= { isDrawerSidebar ? "auto" : "1" }>
                  <Button 
                    as="a" 
                    size="sm" 
                    fontSize="sm"
                    colorScheme="purple"
                    pr={ isDrawerSidebar ? "auto" : "0"}
                    pl= { isDrawerSidebar ? "auto" : "1" }  
                    leftIcon={ <Icon as={ RiPencilLine } fontSize="15" /> }
                    cursor="pointer"
                  >
                    { isDrawerSidebar && "Editar" }
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination/>
        </Box>
        
      </Flex>
    </Box>
  )
}