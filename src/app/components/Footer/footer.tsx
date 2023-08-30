import { Divider } from 'antd';
import { Footer } from "antd/es/layout/layout";
import Image from "next/image";
import Link from "next/link";

import { FacebookOutlined, GithubOutlined, TwitterOutlined } from '@ant-design/icons';
import footerLogo from '@public/images/logo-footer.png';

import styles from './footer.module.css';

//TODO: сделать адекватно чтобы при масштабировании футер оставался на месте

const footerLinks = [
  {
    links: [
      { href: "/about", label: "About Us" },
      { href: "/api-doc", label: "API" },
      { href: "/contacts", label: "Contact Us" },
    ],
  },
  {
    links: [
      { href: "/faq", label: "Help/FAQ" },
      { href: "/support", label: "Support & Bugs" },
      { href: "/map", label: "Sitemap" },
    ],
  },
  {
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/cookies-policy", label: "Cookies Policy" },
      { href: "/terms-of-use", label: "Term Of Use" },
    ],
  },
];

export default function FooterCustom() {
    const footerStyle: React.CSSProperties = {
        textAlign: 'left',
        display: 'flex', 
        alignItems: 'top',
        justifyContent: 'space-between',
        padding: '2rem 15% 2rem 15%',
        height: 'auto',
        backgroundColor: '#1c1e22',
        color: 'white',
    };

    const dividerStyle: React.CSSProperties = {
        backgroundColor: '#232428', 
    }

    const iconStyle: React.CSSProperties = {
        fill: 'white',
    }

    return (
        <Footer style={footerStyle} className={styles.mainContainer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerRow}>
                    {footerLinks.map((column, columnIndex) => (
                        <div className={styles.footerColumn} key={columnIndex}>
                            {column.links.map((link, linkIndex) => (
                                <Link href={link.href} key={linkIndex} className={styles.link}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    ))}
                    <div className={styles.footerLogo}>
                        <Image src={footerLogo} alt="Free-to-play Games logo"/>
                    </div>
                </div>
                <Divider className={styles.divider} style={dividerStyle}/>
                <div className={styles.footerLastRow}>
                    <div className={styles.footerText}>
                    © 2023 Skvortsova Darya, all rights reserved. All trademarks are property of their respective owners.
                    </div>
                    <div className={styles.footerIcons}>
                        <FacebookOutlined className={styles.icon} style={iconStyle}/>
                        <TwitterOutlined className={styles.icon} style={iconStyle}/>
                        <Link href='https://github.com/iwishyoujoy/avito-tech' className={styles.link}>
                            <GithubOutlined style={iconStyle}/>
                        </Link>
                    </div>
                </div>
            </div>
        </Footer>
    )
}
