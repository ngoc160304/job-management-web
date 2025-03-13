import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  useTheme
} from '@mui/material';
import { useEffect, useState } from 'react';
import { JOB_LOCATION, SKILLS } from '../../utils/constants';
import { useLocation, useNavigate } from 'react-router-dom';
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
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}
const FormSearchJob = () => {
  const location = useLocation();
  const getStoredValue = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  };
  const theme = useTheme();
  const [workLocation, setWorkLocation] = useState(() => getStoredValue('workLocation', ''));
  const [skills, setSkills] = useState(() => getStoredValue('skills', []));
  const [salary, setSalary] = useState(() => getStoredValue('salary', ''));
  const handleChangeSkills = (event) => {
    const {
      target: { value }
    } = event;
    setSkills(typeof value === 'string' ? value.split(',') : value);
  };
  useEffect(() => {
    localStorage.setItem('workLocation', JSON.stringify(workLocation));
  }, [workLocation]);

  useEffect(() => {
    localStorage.setItem('skills', JSON.stringify(skills));
  }, [skills]);
  useEffect(() => {
    localStorage.setItem('salary', JSON.stringify(salary));
  }, [salary]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (location.pathname !== '/search') {
      navigate('/search');
    }
  };
  return (
    <Box
      // component="form"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        '& .MuiOutlinedInput-input': {
          bgcolor: 'transparent',
          borderColor: '#000',
          borderWidth: '3px',
          color: '#000',
          '&:hover': {
            borderColor: '#000'
          }
        },
        '& .MuiInputLabel-shrink': {
          color: '#000'
        },
        marginTop: 3
      }}
    >
      <FormControl variant="outlined" sx={{ minWidth: 220 }}>
        <InputLabel id="multiple-skills-label">Skills</InputLabel>
        <Select
          labelId="multiple-skills-label"
          id="multiple-skills-label"
          multiple
          value={skills}
          onChange={handleChangeSkills}
          input={<OutlinedInput label="Skills" />}
          MenuProps={MenuProps}
        >
          {SKILLS.map((skill) => (
            <MenuItem key={skill} value={skill} style={getStyles(skill, skills, theme)}>
              {skill}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined" sx={{ minWidth: 138 }}>
        <InputLabel id="select-work-location-label">Work Location</InputLabel>
        <Select
          labelId="select-work-location-label"
          id="select-work-location"
          value={workLocation}
          onChange={(e) => {
            setWorkLocation(e.target.value);
          }}
          autoWidth
          label="Work Location"
        >
          {JOB_LOCATION.map((jobLocation) => (
            <MenuItem key={jobLocation} value={jobLocation}>
              {jobLocation}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box
        sx={{
          width: 120
        }}
      >
        <TextField
          variant="outlined"
          label="Salary"
          name="salary"
          sx={{ flex: 1 }}
          type="number"
          onChange={(e) => {
            setSalary(parseInt(e.target.value));
            // setSalary();
          }}
          value={salary}
        />
      </Box>
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Tìm kiếm
      </Button>
    </Box>
  );
};
export default FormSearchJob;
