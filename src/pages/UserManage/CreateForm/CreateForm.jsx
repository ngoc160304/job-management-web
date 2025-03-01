import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  Typography
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CreateForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      role: '',
      companyName: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
      password: Yup.string().min(6, 'Mật khẩu ít nhất 6 ký tự').required('Mật khẩu là bắt buộc'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp')
        .required('Xác nhận mật khẩu là bắt buộc'),
      role: Yup.string().required('Vai trò là bắt buộc'),
      companyName: Yup.string().required('Tên công ty là bắt buộc')
    }),
    onSubmit: (values) => {
      onSubmit(values);
    }
  });

  return (
    <Box
      sx={{ maxWidth: 1000, width: '100%', mx: 'auto', mt: 4, p: 3, boxShadow: 3, borderRadius: 2 }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Thêm Người Dùng
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          margin="normal"
        />

        <TextField
          fullWidth
          type="password"
          label="Mật khẩu"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          margin="normal"
        />

        <TextField
          fullWidth
          type="password"
          label="Xác nhận mật khẩu"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          margin="normal"
        />

        <FormControl
          fullWidth
          margin="normal"
          error={formik.touched.role && Boolean(formik.errors.role)}
        >
          <InputLabel>Vai trò</InputLabel>
          <Select
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <MenuItem value="admin">Quản trị viên</MenuItem>
            <MenuItem value="user">Người dùng</MenuItem>
            <MenuItem value="editor">Biên tập viên</MenuItem>
          </Select>
          {formik.touched.role && formik.errors.role && (
            <Typography color="error" variant="body2">
              {formik.errors.role}
            </Typography>
          )}
        </FormControl>

        <TextField
          fullWidth
          label="Tên công ty"
          name="companyName"
          value={formik.values.companyName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.companyName && Boolean(formik.errors.companyName)}
          helperText={formik.touched.companyName && formik.errors.companyName}
          margin="normal"
        />

        <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Thêm Người Dùng
        </Button>
      </form>
    </Box>
  );
};

export default CreateForm;
