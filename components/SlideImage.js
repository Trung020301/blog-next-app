import styles from "../styles/SlideImage.module.scss"
import {AiOutlineUser, AiOutlineFieldTime} from "react-icons/ai"

const SlideImage = (props) => {
  return (
      <div className={styles.wrapper}>
          <img className={styles.slideImg} src={props.src} alt={props.alt}  />
          <div className={styles.contentSlide}>
                <div className={styles.wrapperContent}>
                    <div className={styles.containerContent}>

                    <h2>{props.title}</h2>
                    <p>{props.excerpts}</p>
                    <div className={styles.infoContent}>
                        <span>
                            <AiOutlineUser />
                            {props.auth}</span>
                        <span>
                            <AiOutlineFieldTime />
                            {props.date}</span>
                        <span className={styles.category}>
                            {props.category}</span>
                    </div>
                    </div>
                </div>
          </div>
      </div>
  )
}

export default SlideImage