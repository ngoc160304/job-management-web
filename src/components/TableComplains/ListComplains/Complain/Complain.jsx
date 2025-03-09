import styles from '../../../../styles/Table.module.css';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter, convertDate } from '../../../../utils/formatters';

const Complain = ({ complain, order }) => {
  return (
    <tr>
      <td>{order}</td>
      <td>{complain.employerInfo.companyName}</td>
      <td>{capitalizeFirstLetter(complain.jobSeekerInfo.username)}</td>
      <td>{convertDate(complain.createdAt)}</td>
      <td>
        <span
          className={`${complain?.isResolved ? styles.status_active : styles.status_reject} ${styles.status}`}
        >
          {complain?.isResolved ? 'Đã giải quyết' : 'Chưa giải quyết'}
        </span>
      </td>
      <td>
        <div className={styles.table_actions}>
          <Link to={`/admin/complains/edit/${complain._id}`}>
            <button className={styles.btn_action + ' ' + styles.btn_edit}>
              <i className="fas fa-edit" />
            </button>
          </Link>
          <button className={styles.btn_action + ' ' + styles.btn_delete}>
            <i className="fas fa-trash" />
          </button>
        </div>
      </td>
    </tr>
  );
};
export default Complain;
