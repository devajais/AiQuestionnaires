import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Paper,
    Radio,
    RadioGroup,
    Typography,
    CircularProgress
} from '@mui/material';
function Questionnaire() {
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);


    const questions = [
        {
            text: "What do you think AI is mainly used for?",
            options: [
                "Playing games",
                "Solving problems",
                "Controlling people",
                "Helping with homework"
            ]
        },
        {
            text: "How do you feel about robots and AI in schools?",
            options: [
                "Excited",
                "Indifferent",
                "Worried",
                "Confused"
            ]
        },
        {
            text: "Do you think AI will take away jobs from people?",
            options: [
                "Yes, many jobs",
                "Only a few jobs",
                "No, it will create more jobs",
                "Not sure"
            ]
        },
        {
            text: "What do you fear most about AI?",
            options: [
                "It will make decisions for us",
                "It won’t always be right",
                "It could be used for bad purposes",
                "Nothing, I don’t fear AI"
            ]
        },
        {
            text: "How important is it for kids to learn about AI?",
            options: [
                "Very important",
                "Somewhat important",
                "Not very important",
                "Unimportant"
            ]
        },
        {
            text: "Who should be responsible for teaching about AI?",
            options: [
                "Schools",
                "Parents",
                "The government",
                "Kids should learn on their own"
            ]
        },
        {
            text: "What do you think AI cannot do?",
            options: [
                "Understand human feelings",
                "Make art",
                "Think like a human",
                "All of the above"
            ]
        },
        {
            text: "Do you think AI can be biased or unfair?",
            options: [
                "Yes, often",
                "Sometimes",
                "Rarely",
                "No, never"
            ]
        },
        {
            text: "What should be the primary goal of AI development?",
            options: [
                "To make life easier",
                "To make money",
                "To ensure safety",
                "To explore new possibilities"
            ]
        },
        {
            text: "How does AI impact your view of the future?",
            options: [
                "I’m optimistic",
                "I’m cautious but curious",
                "I’m concerned",
                "I’m indifferent"
            ]
        },
        {
            text: "What role should AI have in decision-making?",
            options: [
                "It should help humans make decisions",
                "It should make decisions on its own",
                "It should not be involved in decision-making",
                "It depends on the situation"
            ]
        },
        {
            text: "How would you prefer to interact with AI?",
            options: [
                "Through voice commands",
                "Via text or chat",
                "Through gestures or movements",
                "I prefer not to interact with AI"
            ]
        },
        {
            text: "What is your biggest concern about AI in the next 10 years?",
            options: [
                "Privacy loss",
                "Increased dependency on technology",
                "Lack of human interaction",
                "Other (please specify)"
            ]
        },
        {
            text: "How should AI be regulated?",
            options: [
                "By international organizations",
                "By each country individually",
                "By independent AI experts",
                "AI should not be regulated"
            ]
        },
        {
            text: "Would you like to work in an AI-related job in the future?",
            options: [
                "Yes, definitely",
                "Maybe, I’m not sure",
                "No, I’m not interested",
                "I need to learn more about AI first"
            ]
        },
        {
            text: "What interests you most about AI?",
            options: [
                "Its ability to learn and adapt",
                "Its potential to change the world",
                "Its ability to perform tasks faster than humans",
                "I am not interested in AI"
            ]
        },
        {
            text: "Do you believe AI could lead to better educational tools?",
            options: [
                "Yes, definitely",
                "Possibly, but I'm skeptical",
                "No, I don't think so",
                "I have no opinion"
            ]
        },
        {
            text: "How should AI be used to improve healthcare?",
            options: [
                "For diagnosing diseases",
                "For personalized medicine",
                "For automating routine tasks",
                "It should not be used in healthcare"
            ]
        },
        {
            text: "What is your opinion on AI-powered surveillance?",
            options: [
                "It’s necessary for safety",
                "It’s useful but needs strict regulation",
                "It’s an invasion of privacy",
                "I don't know enough to decide"
            ]
        },
        {
            text: "How do you think AI should learn ethical behavior?",
            options: [
                "From human ethical standards",
                "Through trial and error",
                "AI can't learn ethical behavior",
                "Not sure"
            ]
        }
    ];
    
    const handleRadioChange = (question, value) => {
        setAnswers({
            ...answers,
            [question]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Check if all questions are answered
        if (Object.keys(answers).length !== questions.length) {
            alert('Please answer all questions.');
            return;
        }
    
        setIsLoading(true);
    
        const personalDetails = JSON.parse(localStorage.getItem('personalDetails') || '{}');
        const combinedData = { ...personalDetails, answers };
    
        // Using a CORS proxy for development purposes
        const corsProxyURL = 'https://cors-anywhere.herokuapp.com/';
        const googleScriptURL = 'https://script.google.com/macros/s/AKfycbxE0p8yQxbHvcUCx_a3P_kI4chUrb97y3ko6rZAiSadmSQqwWfZavTSSOxDdh0Sha_Cww/exec';
        const proxyUrl = `${corsProxyURL}${googleScriptURL}`;
    
        try {
            const response = await axios.post(proxyUrl, combinedData, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });
    
            console.log('Data sent to Google Sheets', response.data);
            setIsLoading(false);
            navigate('/'); // Navigate to base page on successful submission
        } catch (error) {
            console.error('Error sending data to Google Sheets', error);
            alert("Something went wrong");
            setIsLoading(false);
        }
    };
    

    return (
        <Container component="main" maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    AI Questionnaire
                </Typography>
                <form onSubmit={handleSubmit}>
                    {questions.map((question, index) => (
                        <Paper elevation={3} key={index} sx={{ my: 2, p: 2 }}>
                            <FormControl component="fieldset" fullWidth>
                                <FormLabel component="legend" sx={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '10px' }}>
                                    {question.text}
                                </FormLabel>
                                <RadioGroup
                                    name={`question${index}`}
                                    onChange={(e) => handleRadioChange(question.text, e.target.value)}
                                >
                                    {question.options.map((option, idx) => (
                                        <FormControlLabel key={idx} value={option} control={<Radio />} label={option} />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </Paper>
                    ))}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                        <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
                            {isLoading ? <CircularProgress size={24} /> : 'Submit'}
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    );
                                    }    

export default Questionnaire;