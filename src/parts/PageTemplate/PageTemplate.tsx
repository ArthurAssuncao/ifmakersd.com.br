import { ReactNode, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ButtonScrollToTop } from "../../components/ButtonScrollToTop";
import { Footer } from "../Footer";
import { Header } from "../Header";
import styles from "./PageTemplate.module.scss";

interface PageTemplateProps {
  children: ReactNode;
  headerChildren?: ReactNode;
}

const PageTemplate = (props: PageTemplateProps) => {
  const { children, headerChildren } = props;

  useEffect(() => {
    toast.info("Site em desenvolvimento...", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    });
  }, []);

  return (
    <div className={styles.container}>
      <ToastContainer />
      <Header>{headerChildren}</Header>
      {children}
      <ButtonScrollToTop className={styles.buttonToTop} />
      <Footer />
    </div>
  );
};

export { PageTemplate };
