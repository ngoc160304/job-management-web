import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import styles from './BannerHero.module.css';
import React, { useState } from 'react';
import { SKILLS } from '../../../utils/constants';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
const BannerHero = () => {
  const [skills, setSkills] = useState([]);

  const handleChangeSkills = (event) => {
    const {
      target: { value }
    } = event;
    setSkills(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const [state, setState] = React.useState({
    option1: false,
    option2: false,
    option3: false
  });
  return (
    <section className={styles.hero}>
      <div className={styles.search_box}>
        <h1>Tìm kiếm công việc mơ ước của bạn</h1>
        <p>Khám phá hàng nghìn cơ hội việc làm từ các công ty hàng đầu</p>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Select Category */}
          <FormControl fullWidth variant="outlined">
            <InputLabel id="category-label">Danh mục</InputLabel>
            <Select labelId="category-label" id="category" name="category" label="Danh mục">
              <MenuItem value="">Tất cả</MenuItem>
              <MenuItem value="electronics">Điện tử</MenuItem>
              <MenuItem value="clothing">Quần áo</MenuItem>
              <MenuItem value="books">Sách</MenuItem>
            </Select>
          </FormControl>

          {/* Select Status */}
          <FormControl fullWidth variant="outlined">
            <InputLabel id="status-label">Trạng thái</InputLabel>
            <Select labelId="status-label" id="status" name="status" label="Trạng thái">
              <MenuItem value="">Tất cả</MenuItem>
              <MenuItem value="active">Hoạt động</MenuItem>
              <MenuItem value="inactive">Không hoạt động</MenuItem>
            </Select>
          </FormControl>

          {/* Keyword Input */}
          <TextField fullWidth variant="outlined" label="Từ khóa" name="keyword" />

          {/* Submit Button */}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Tìm kiếm
          </Button>
        </Box>
      </div>
    </section>
  );
};
export default BannerHero;
