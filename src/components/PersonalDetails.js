import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem, Typography, Paper } from '@mui/material';

function PersonalDetails() {
    const [name, setName] = useState('');
    const [school, setSchool] = useState('');
    const [classNum, setClassNum] = useState('');
    const [section, setSection] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [parentMobile, setParentMobile] = useState('');

    const navigate = useNavigate();

    const schools = [
        "Amity International School, Noida",
        "Pathways School, Noida",
        "Lotus Valley International School, Noida",
        "Step by Step School, Noida",
        "DPS Noida"
    ];

    const sections = ["A", "B", "C", "D", "E", "F", "G", "H", "Other"];

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (parentMobile.length !== 10) {
            alert("Mobile number must be 10 digits.");
            return;
        }
        
        if (isNaN(classNum) || classNum < 1 || classNum > 12) {
            alert("Class must be a number between 1 and 12.");
            return;
        }

        if (isNaN(rollNo)) {
            alert("Roll No. must be a number.");
            return;
        }

        const personalDetails = { name, school, classNum, section, rollNo, parentMobile: `+91${parentMobile}` };
        localStorage.setItem('personalDetails', JSON.stringify(personalDetails));
    
        navigate('/questionnaire');
    };

    return (
        <Container component="main" maxWidth="sm">
            <Paper elevation={6} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h4" align="center" gutterBottom>
                    AI Questionnaire
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>School</InputLabel>
                                <Select
                                    value={school}
                                    label="School"
                                    onChange={(e) => setSchool(e.target.value)}
                                    required
                                >
                                    {schools.map((schoolName, index) => (
                                        <MenuItem key={index} value={schoolName}>
                                            {schoolName}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                type="number"
                                label="Class"
                                variant="outlined"
                                fullWidth
                                value={classNum}
                                onChange={(e) => setClassNum(e.target.value)}
                                inputProps={{ min: 1, max: 12 }}
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel>Section</InputLabel>
                                <Select
                                    value={section}
                                    label="Section"
                                    onChange={(e) => setSection(e.target.value)}
                                    required
                                >
                                    {sections.map((sectionName, index) => (
                                        <MenuItem key={index} value={sectionName}>
                                            {sectionName}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                type="number"
                                label="Roll No."
                                variant="outlined"
                                fullWidth
                                value={rollNo}
                                onChange={(e) => setRollNo(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Parent's Mobile No. (+91)"
                                variant="outlined"
                                fullWidth
                                value={parentMobile}
                                onChange={(e) => setParentMobile(e.target.value)}
                                inputProps={{ maxLength: 10 }}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Start Questionnaire
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
}

export default PersonalDetails;
