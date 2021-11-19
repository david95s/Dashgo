import { 
  useBreakpointValue,
  Box, 
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody
} from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { SideBarNav } from "./SideBarNav";


export const Sidebar = () => {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });


  if(isDrawerSidebar){

    return (
      <Drawer isOpen={ isOpen } placement="left"  onClose={onClose}>
        <DrawerOverlay> 
          <DrawerContent bg="gray.900" p="4"  >
            <DrawerCloseButton mt="6" mr="1" />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SideBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }


  return(
    <Box as="aside" w="64" mr="8">
      <SideBarNav />
    </Box>  
  );
}