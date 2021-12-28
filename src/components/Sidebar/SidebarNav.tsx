import { Stack } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";
import { NavLinks } from "./NavLinks";
import NavSection from "./NavSection";

export default function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLinks href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLinks>
        <NavLinks href="/users" icon={RiContactsLine}>
          Usuários
        </NavLinks>
      </NavSection>

      <NavSection title="Automação">
        <NavLinks href="/forms" icon={RiInputMethodLine}>
          Formulários
        </NavLinks>
        <NavLinks href="/automation" icon={RiGitMergeLine}>
          Usuários
        </NavLinks>
      </NavSection>
    </Stack>
  );
}
