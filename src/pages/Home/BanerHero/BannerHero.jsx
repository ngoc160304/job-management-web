import styles from './BannerHero.module.css';
const BannerHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.search_box}>
        <h1>Tìm kiếm công việc mơ ước của bạn</h1>
        <p>Khám phá hàng nghìn cơ hội việc làm từ các công ty hàng đầu</p>
        <form className={styles.search_container}>
          <input
            type="text"
            className={styles.search_input}
            placeholder="Vị trí, kỹ năng hoặc công ty..."
          />
          <input type="text" className={styles.search_input} placeholder="Địa điểm..." />
          <button className={styles.search_button}>
            <i className="fas fa-search" /> Tìm kiếm
          </button>
        </form>
      </div>
    </section>
  );
};
export default BannerHero;
