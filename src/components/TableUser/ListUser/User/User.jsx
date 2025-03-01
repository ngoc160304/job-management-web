import styles from '../../../../styles/Table.module.css';
import { ROLE_USER } from '../../../../utils/constants';
import { capitalizeFirstLetter, roleName, statusName } from '../../../../utils/formatters';
const User = ({ user, order }) => {
  return (
    user.role !== ROLE_USER.ADMIN && (
      <tr>
        <td>{order}</td>
        <td>{capitalizeFirstLetter(user.username)}</td>
        <td>{user.email}</td>
        <td>{roleName(user.role)}</td>
        <td>
          <span className={styles.status + ' ' + styles[`status_${user.status}`]}>
            {statusName(user.status)}
          </span>
        </td>
        <td>
          <div className={styles.table_actions}>
            <button className={styles.btn_action + ' ' + styles.btn_view}>
              <i className="fas fa-eye" />
            </button>
            <button className={styles.btn_action + ' ' + styles.btn_edit}>
              <i className="fas fa-edit" />
            </button>
            <button className={styles.btn_action + ' ' + styles.btn_delete}>
              <i className="fas fa-trash" />
            </button>
          </div>
        </td>
      </tr>
    )
  );
};
export default User;
