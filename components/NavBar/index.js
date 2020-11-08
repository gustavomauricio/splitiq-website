import { Menu } from 'antd';
import Link from 'next/link';

const NavBar = () => {
  return (
    <Menu mode="horizontal" theme="dark" style={{ display: 'flex', justifyContent: 'center' }}>
      <Menu.Item><Link href="/">Home</Link></Menu.Item>
      <Menu.Item disabled><Link href="/about">About</Link></Menu.Item>
      <Menu.Item><Link href="/roster">Roster</Link></Menu.Item>
      <Menu.Item><Link href="/recruitment">Recruitment</Link></Menu.Item>
    </Menu>
  );
}

export default  NavBar;
