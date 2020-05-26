import React from "react";
import Link from "next/link";
import style from "./Footer.module.css";

const Footer = () => (
  <footer className={style.footer}>
    <div className={style.cmsLinks}>
      <div>
        <Link href="/cms/[uid]" as={"/cms/private-sales"}>
          <a>Private Sales</a>
        </Link>
      </div>
      <div>
        <Link href="/cms/[uid]" as={"/cms/reward-points"}>
          <a>Reward points</a>
        </Link>
      </div>
      <div>
        <Link
          href="/cms/[uid]"
          as={"/cms/privacy-policy-cookie-restriction-mode"}
        >
          <a>Private Policy</a>
        </Link>
      </div>
    </div>
    <div className={style.about}>
      PWA built with next JS and Magento 2 - Developed By Christopher Daniel
    </div>
  </footer>
);

export default Footer;
