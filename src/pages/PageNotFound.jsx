import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      id={styles.error}
    >
      <h1 className={styles.notFound}>:( Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;
