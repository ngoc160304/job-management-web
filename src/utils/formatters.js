import { ROLE_USER, STATUS } from './constants';

const capitalizeFirstLetter = (val) => {
  if (!val) return '';
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`;
};

const generatePlaceholderCard = (column) => {
  return {
    _id: `${column._id}-placeholder-card`,
    boardId: column.boardId,
    columnId: column._id,
    FE_PlaceholderCard: true
  };
};

export const interceptorLoadingElements = (calling) => {
  // DOM lấy ra toàn bộ phần tử trên page hiện tại có className là 'interceptor-loading'
  const elements = document.querySelectorAll('.interceptor-loading');
  for (let i = 0; i < elements.length; i++) {
    if (calling) {
      elements[i].style.opacity = '0.5';
      elements[i].style.pointerEvents = 'none';
    } else {
      elements[i].style.opacity = 'initial';
      elements[i].style.pointerEvents = 'initial';
    }
  }
};
export const roleName = (role) => {
  if (role === ROLE_USER.ADMIN) {
    return 'Admin';
  } else if (role === ROLE_USER.EMPLOYER) {
    return 'Người tìm việc';
  } else if (role === ROLE_USER.INTERVIEER) {
    return 'Người phỏng vấn';
  }
  return 'Nhà tuyển dụng';
};

export const statusName = (status) => {
  if (status === STATUS.ACTIVE) return 'Hoạt động';
  else if (status === STATUS.INACTIVE) return 'Ngừng hoạt động';
};

export { capitalizeFirstLetter, generatePlaceholderCard };
