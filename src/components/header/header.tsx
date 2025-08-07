import style from './header.module.css';
import logo from './logo.png';

export default function Header() {

    return (
        <header className={style.header}>
            <img src={logo} alt="Logo site" />
            <span>Intro React</span>
        </header>
    );
}
