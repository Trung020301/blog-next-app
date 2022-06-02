import styles from "../styles/Footer.module.scss";
import {
  AiOutlinePhone,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contentContact}>
        <ul className={styles.info}>
          <li className={styles.infoItem}>
            <AiOutlinePhone fontSize="18px" color="#1ed760" /> 0868 328 218
          </li>
          <li className={styles.infoItem}>
            <BsEnvelope fontSize="18px" color="#d32323" />{" "}
            trung02032001@gmail.com
          </li>
        </ul>
        <ul className={styles.contactList}>
          <p>Liên hệ với tôi : </p>
          <a
            href="https://facebook.com/trung02032001"
            target="_blank"
            className={styles.contactItem}
          >
            <AiFillFacebook fontSize="18px" color="#1877f2" title="Facebook" />
          </a>
          <animateMotion className={styles.contactItem}>
            <AiFillInstagram
              fontSize="18px"
              color="#c32aa3"
              title="Instagram"
            />
          </animateMotion>
          <a className={styles.contactItem}>
            <AiFillLinkedin fontSize="18px" color="#0a66c2" title="LinkedIn" />
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
