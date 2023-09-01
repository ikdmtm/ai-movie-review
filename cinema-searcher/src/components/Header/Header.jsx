import styles from "src/components/Header/Header.module.css";
import Image from "next/image";
import Link from "next/link";

export const Header = (props) => {
    console.log("header", props);

    return (
        <header className={styles.header}>
            <Link href="/">
                <p>Cinema Searcher</p>
            </Link>
            <div className="inputForm">
                <input type="search" onChange={props.handleChange} value={props.text}></input>
                <button onClick={props.handleClickSearch}>検索</button>
            </div>
            {/* {props.open ? null : (
                <Image
                    src="/openMenu.png"
                    alt="Picture of the author"
                    width={32}
                    height={32}
                    className={styles.button}
                    onClick={props.handleMenu}
                />
            )} */}
        </header>
    );
};
