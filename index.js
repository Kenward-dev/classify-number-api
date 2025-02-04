const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

// Helper functions
const isArmstrong = (num) => {
    const digits = String(num).split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
    return sum === num;
};

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const isPerfect = (num) => {
    if (num <= 1) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num;
};

const getDigitSum = (num) => {
    return String(num).split('').reduce((acc, digit) => acc + Number(digit), 0);
};

const getProperties = (num) => {
    const properties = [];
    
    if (isArmstrong(num)) {
        properties.push('armstrong');
    }
    
    properties.push(num % 2 === 0 ? 'even' : 'odd');
    
    return properties;
};

// axios instance with default config
const numbersApi = axios.create({
    baseURL: 'http://numbersapi.com',
    timeout: 3000, // 3 second timeout
    headers: {
        'Accept': 'text/plain'
    }
});

const getFunFact = async (num) => {
    try {
        const response = await numbersApi.get(`/${num}/math`);
        return response.data;
    } catch (error) {
        console.error('Error fetching fun fact:', error.message);
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received');
        }
        // Fallback response
        return `${num} is a number`; 
    }
};

// Main route handler
app.get('/api/classify-number', async (req, res) => {
    const { number } = req.query;
    
    // Input validation
    if (!number || isNaN(number)) {
        return res.status(400).json({
            number: 'alphabet',
            error: true
        });
    }
    
    try {
        const num = parseInt(number);
        const properties = getProperties(num);
        const funFact = await getFunFact(num);
        
        const response = {
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties: properties,
            digit_sum: getDigitSum(num),
            fun_fact: funFact
        };
        
        res.json(response);
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
            number: number,
            error: true,
            message: 'Internal server error'
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
