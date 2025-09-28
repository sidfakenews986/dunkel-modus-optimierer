import { optimieren } from 'dunkel-modus-optimierer';

const colorScheme = {
    background: '#F0F0F0', // Changed background for better contrast
    text: '#333333', // Darker text for readability
    accent: '#FF4081'
};

const newDesign = optimieren(colorScheme);
console.log(newDesign);