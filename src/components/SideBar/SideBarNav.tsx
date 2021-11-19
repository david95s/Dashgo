import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export const SideBarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink myIcon={RiContactsLine}>Dashboard</NavLink>
        <NavLink myIcon={RiDashboardLine}>Usuário</NavLink>
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink myIcon={RiInputMethodLine}>Formulários</NavLink>
        <NavLink myIcon={RiGitMergeLine}>Automação</NavLink>
      </NavSection>
    </Stack>
  );
}