import { optimieren } from 'dunkel-modus-optimierer';

const colorScheme = {
    background: '#FFFFFF',
    text: '#000000',
    accent: '#FF4081'
};

const newDesign = optimieren(colorScheme);
console.log(newDesign);