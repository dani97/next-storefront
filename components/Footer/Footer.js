import React from 'react';
import Link from "next/link";

const Footer = () => (
    <footer>
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
            <Link href="/cms/[uid]" as={"/cms/privacy-policy-cookie-restriction-mode"}>
                <a>Private Policy</a>
            </Link>
        </div>
    </footer>
);

export default Footer;