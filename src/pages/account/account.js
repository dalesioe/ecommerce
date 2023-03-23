import styles from "./account.module.scss";
import { useRouter } from "next/router";
import { Tab } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Info, Settings } from "@/components/Account";
import { useAuth } from "@/hooks";

export default function AccountPage() {
  const { logout, user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/");
    return null;
  }

  const panes = [
    {
      menuItem: "Mis Pedidos",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Mis Pedidos</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Lista de deseos",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Lista de deseos</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Direcciones",
      render: () => (
        <Tab.Pane attached={false}>
          <p>Direcciones</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: { icon: "setting", content: "Ajustes" },
      render: () => (
        <Tab.Pane attached={false}>
          <Settings.ChangeNameForm />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        icon: "log out",
        content: "",
        onClick: logout,
      },
    },
  ];
  return (
    <>
      <BasicLayout isContainer relative>
        <Info />
        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          className={styles.tabs}
        />
      </BasicLayout>
    </>
  );
}
