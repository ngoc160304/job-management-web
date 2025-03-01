import styles from '../../styles/Table.module.css';
import ListUser from './ListUser/ListUser';
const TableUser = ({ title, listUser }) => {
  return (
    <div className={styles.data_section}>
      <div className={styles.section_header}>
        <h3 className={styles.section_title}>{title}</h3>
        <button className={styles.action_button + ' ' + styles.btn_primary}>
          <i className="fas fa-plus" /> Thêm người dùng
        </button>
      </div>
      <table className={styles.data_table}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Vai trò</th>
            <th>Trạng thái</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <ListUser listUser={listUser} />
      </table>
    </div>
  );
};
export default TableUser;
