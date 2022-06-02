import styles from "../styles/Slider.module.scss";
import SlideImage from "./SlideImage";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
const Slider = () => {
  const lists = [
    {
      id: 1,
      src: "https://image.winudf.com/v2/image/Y29tLm5hdHVyZXdhbGxwYXBlci5rZHhpbWFuX3NjcmVlbl80XzE1MjQzOTg0OTJfMDkx/screen-4.jpg?fakeurl=1&type=.webp",
      title: "Cuộc sống hiện đại , khiến con người ngày càng ích kỉ hơn",
      excerpts:
        "Đôi khi sự đấu tranh luôn cần phải có trong cuộc sống. Nếu cuộc sống trôi qua thật suôn sẻ, chúng ta sẽ không hiểu được cuộc sống, không có được bản lĩnh, nghị lực như chúng ta cần phải có, cuộc sống thật công bằng, không phải vô cớ mà mọi điều xảy đến với ta,  Đôi khi sự đấu tranh luôn cần phải có trong cuộc sống. Nếu cuộc sống trôi qua thật suôn sẻ, chúng ta sẽ không hiểu được cuộc sống, không có được bản lĩnh, nghị lực như chúng ta cần phải có, cuộc sống thật công bằng, không phải vô cớ mà mọi điều xảy đến với ta",
      auth: "Dang Hoang",
      date: "20/5/2022",
      category: "chia sẻ",
    },
    {
      id: 2,
      src: "https://wallpaperaccess.com/full/31189.jpg",
      title: "Cuộc sống hiện đại , khiến con người ngày càng ích kỉ hơn",
      excerpts:
        "Đôi khi sự đấu tranh luôn cần phải có trong cuộc sống. Nếu cuộc sống trôi qua thật suôn sẻ, chúng ta sẽ không hiểu được cuộc sống, không có được bản lĩnh, nghị lực như chúng ta cần phải có, cuộc sống thật công bằng, không phải vô cớ mà mọi điều xảy đến với ta,  Đôi khi sự đấu tranh luôn cần phải có trong cuộc sống. Nếu cuộc sống trôi qua thật suôn sẻ, chúng ta sẽ không hiểu được cuộc sống, không có được bản lĩnh, nghị lực như chúng ta cần phải có, cuộc sống thật công bằng, không phải vô cớ mà mọi điều xảy đến với ta",
      auth: "Dang Hoang",
      date: "20/5/2022",
      category: "chia sẻ",
    },
    {
      id: 3,
      src: "https://media5.sgp1.digitaloceanspaces.com/wp-content/uploads/2021/10/13123756/Cool-Nature-Wallpapers.jpg",
      title: "Cuộc sống hiện đại , khiến con người ngày càng ích kỉ hơn",
      excerpts:
        "Đôi khi sự đấu tranh luôn cần phải có trong cuộc sống. Nếu cuộc sống trôi qua thật suôn sẻ, chúng ta sẽ không hiểu được cuộc sống, không có được bản lĩnh, nghị lực như chúng ta cần phải có, cuộc sống thật công bằng, không phải vô cớ mà mọi điều xảy đến với ta,  Đôi khi sự đấu tranh luôn cần phải có trong cuộc sống. Nếu cuộc sống trôi qua thật suôn sẻ, chúng ta sẽ không hiểu được cuộc sống, không có được bản lĩnh, nghị lực như chúng ta cần phải có, cuộc sống thật công bằng, không phải vô cớ mà mọi điều xảy đến với ta",
      auth: "Dang Hoang",
      date: "20/5/2022",
      category: "chia sẻ",
    },
    {
      id: 4,
      src: "https://wallpapershome.com/images/pages/pic_h/23277.jpg",
      title: "Cuộc sống hiện đại , khiến con người ngày càng ích kỉ hơn",
      excerpts:
        "Đôi khi sự đấu tranh luôn cần phải có trong cuộc sống. Nếu cuộc sống trôi qua thật suôn sẻ, chúng ta sẽ không hiểu được cuộc sống, không có được bản lĩnh, nghị lực như chúng ta cần phải có, cuộc sống thật công bằng, không phải vô cớ mà mọi điều xảy đến với ta,  Đôi khi sự đấu tranh luôn cần phải có trong cuộc sống. Nếu cuộc sống trôi qua thật suôn sẻ, chúng ta sẽ không hiểu được cuộc sống, không có được bản lĩnh, nghị lực như chúng ta cần phải có, cuộc sống thật công bằng, không phải vô cớ mà mọi điều xảy đến với ta",
      auth: "Dang Hoang",
      date: "20/5/2022",
      category: "chia sẻ",
    },
    {
      id: 5,
      src: "https://images7.alphacoders.com/411/411820.jpg",
      title: "Cuộc sống hiện đại , khiến con người ngày càng ích kỉ hơn",
      excerpts:
        "Đôi khi sự đấu tranh luôn cần phải có trong cuộc sống. Nếu cuộc sống trôi qua thật suôn sẻ, chúng ta sẽ không hiểu được cuộc sống, không có được bản lĩnh, nghị lực như chúng ta cần phải có, cuộc sống thật công bằng, không phải vô cớ mà mọi điều xảy đến với ta,  Đôi khi sự đấu tranh luôn cần phải có trong cuộc sống. Nếu cuộc sống trôi qua thật suôn sẻ, chúng ta sẽ không hiểu được cuộc sống, không có được bản lĩnh, nghị lực như chúng ta cần phải có, cuộc sống thật công bằng, không phải vô cớ mà mọi điều xảy đến với ta",
      auth: "Dang Hoang",
      date: "20/5/2022",
      category: "chia sẻ",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4);
    } else {
      setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div className={styles.slider}>
      <div onClick={() => handleClick("left")} className={styles.icon}>
        <AiOutlineArrowLeft fontSize="30px" color="#fff" />
      </div>
      <div
        className={styles.listSlide}
        style={{ transform: `translateX(${-100 * slideIndex}vw)` }}
      >
        {lists.map((list) => (
          <SlideImage
            className={styles.Item}
            key={list.id}
            title={list.title}
            src={list.src}
            content={list.content}
            auth={list.auth}
            excerpts={list.excerpts}
            category={list.category}
            date={list.date}
          />
        ))}
      </div>
      <div onClick={() => handleClick("right")} className={styles.icon}>
        <AiOutlineArrowRight fontSize="30px" color="#fff" />
      </div>
    </div>
  );
};

export default Slider;
