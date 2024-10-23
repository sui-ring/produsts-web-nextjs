"use client";
import { Menu } from "antd";
import Link from "next/link";
import { useState } from "react";
import { MenuItemType } from "antd/es/menu/interface";
import { HomeOutlined, InfoCircleOutlined, ProductOutlined, MailOutlined, ReadOutlined } from "@ant-design/icons";

const items: MenuItemType[] = [
    {
        key: "home", icon: <HomeOutlined />, label: (
            <Link href="/">
                Home
            </Link>
        )
    },
    {
        key: "products", icon: <ProductOutlined />, label: (
            <Link href="/products">
                Products
            </Link>
        )
    },
    {
        key: "about", icon: <InfoCircleOutlined />, label: (
            <Link href="/about">
                About
            </Link>
        )
    },
    {
        key: "contact", icon: <MailOutlined />, label: (
            <Link href="/contact">
                Contact
            </Link>
        )
    },

];

const Navibar = () => {
    const [current, setCurrent] = useState("home");

    const handleClick = (e: any) => {
        console.log("click ", e);
        setCurrent(e.key);
    }

    return (
        <>
            <Menu
                mode="horizontal"
                onClick={handleClick}
                defaultSelectedKeys={[current]}
                items={items}
                style={{ flex: 1, width: 980 }}
            />
        </>
    );
}




export default Navibar;