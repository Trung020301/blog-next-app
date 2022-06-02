import { useRouter } from "next/router";

const ActiveLink = ({ children, href }) => {
  const router = useRouter();
  const style = {
    color: router.asPath === href ? "var(--main-color)" : "inherit",
  };
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <a href={href} style={style} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ActiveLink;
