import { optimieren } from 'dunkel-modus-optimierer';

const deinFarbschema = {
    hintergrund: '#FFFFFF',
    text: '#000000',
    akzent: '#FF4081'
};

const neuesDesign = optimieren(deinFarbschema);
console.log(neuesDesign);