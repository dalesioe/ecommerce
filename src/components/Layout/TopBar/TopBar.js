import { Image } from "semantic-ui-react";
import style from "./TopBar.module.scss";
import Link from "next/link";
import { Account } from "../Account";
import { Menu } from "../Menu";

export function TopBar(props) {
  const { isOpenSearch } = props;
  return (
    <div className={style.topBar}>
      <div className={style.left}>
        <Link href="/">
          <Image src="/images/logo.png" alt="Gaming"></Image>
        </Link>
      </div>

      <div className={style.center}>
        <Menu isOpenSearch={isOpenSearch}></Menu>
      </div>

      <div className={style.right}>
        <Account />
      </div>
    </div>
  );
}
