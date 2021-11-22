import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export const SideBarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink myIcon={RiContactsLine} myHref="/dashboard">Dashboard</NavLink>
        <NavLink myIcon={RiDashboardLine} myHref="/users">Usuário</NavLink>
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink myIcon={RiInputMethodLine} myHref="/forms">Formulários</NavLink>
        <NavLink myIcon={RiGitMergeLine} myHref="/automation">Automação</NavLink>
      </NavSection>
    </Stack>
  );
}