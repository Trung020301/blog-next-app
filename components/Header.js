import styles from "../styles/Header.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import ActiveLink from "../components/ActiveLink";
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.logo}>
            <p>The Memories</p>
          </div>
        </div>
        <div className={styles.item}>
          <ul className={styles.nav}>
            <ActiveLink href="/">
              <li className={styles.navItem}>Trang chủ</li>
            </ActiveLink>
            <ActiveLink href="/hot">
              <li className={styles.navItem}>Nổi bật</li>
            </ActiveLink>
            <ActiveLink href="/populor">
              <li className={styles.navItem}>Đọc nhiều</li>
            </ActiveLink>
            <ActiveLink href="/category">
              <li className={styles.navItem}>Thể loại</li>
            </ActiveLink>
            <ActiveLink href="/write">
              <li className={styles.navItem}>Viết nhật ký</li>
            </ActiveLink>
            <ActiveLink href="/contact">
              <li className={styles.navItem}>Đăng nhập</li>
            </ActiveLink>
          </ul>
        </div>
        <div className={styles.item}>
          <div className={styles.search}>
            <input placeholder="Tìm bài viết..." className={styles.searchInput} />
            <span className={styles.searchIcon}>
              <AiOutlineSearch fontSize="18px" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
