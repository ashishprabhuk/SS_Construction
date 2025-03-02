// services.js
import { FiCheckCircle } from 'react-icons/fi';
import fibre from "../assets/Services/SSURMC – FIBRE CONCRETE.jpg";
import air from "../assets/Services/SSURMC – AIR CONCRETE.webp";
import aqua from "../assets/Services/SSURMC – AQUAGUARD.jpg";
import iron from '../assets/Services/SSURMC – IRON CONCRETE.jpg';
import flow from '../assets/Services/High Flow Concrete.jpeg';
import color from '../assets/Services/Color Concrete.webp';
import earth from "../assets/Services/early strength concrete.jpg";
import temp from '../assets/Services/Temperature Control Concrete.webp';

export const services = [
  {
    title: 'SSURMC – FIBRE CON',
    image: fibre, 
    advantages: [
      'Greatly reduces the Shrinkage Cracks',
      'Improve the water permeability into the concrete structure',
      'Enhance the durability of the building',
      'Value Added Concrete Products'
    ],
  },
  {
    title: 'SSURMC – AIR CONCRETE',
    image: air,
    advantages: [
      'Suitable for floor level difference filling, wall side filling',
      'Reduce the dead load of the structure',
      'Can produce density of the concrete between 750kg/Cum to 1200 Kg/Cum',
      'Can be used as a weathering course by using Thermocol beads',
    ],
  },
  {
    title: 'Temperature Control Concrete',
    image: temp, 
    advantages: [
      'Regulates temperature changes during curing, preventing cracks due to thermal stresses',
      'Reduces the risk of thermal cracking in large-scale pours or extreme temperature conditions',
      'Enhances durability by ensuring consistent strength development over time'
    ],
  },
  {
    title: 'High Flow Concrete',
    image: flow,
    advantages: [
      'Highly fluid mix that easily flows into congested reinforcement areas, reducing the need for vibration',
      'Ideal for complex shapes and detailed designs, providing smooth, high-quality finishes',
      'Improves workability and reduces labor and equipment costs during placement'
    ],
  },
  {
    title: 'Color Concrete',
    image: color, 
    advantages: [
      'Offers vibrant, long-lasting colors for decorative surfaces like pavements and facades',
      'Eliminates the need for external coatings, providing a more durable and low-maintenance finish',
      'Available in a wide range of shades to enhance the aesthetic appeal of concrete surfaces'
    ],
  },
  {
    title: 'SSURMC – AQUAGUARD',
    image: aqua,
    advantages: [
      'Greatly reduces the Water Seepage into concrete',
      'Improve the Dampness Resistivity of concrete structure', 
      'Enhance the durability of the building'
    ],
  },
  {
    title: 'SSURMC – IRON CONCRETE',
    image: iron, 
    advantages: [
      'Suitable for Industrial Flooring',
      'Improve the Wear and Tear resistance',
      'Cost benefit than Steel fibre concrete',
      'Enhance the durability of the Concrete'
    ],
  },
  {
    title: 'Early Strength Concrete',
    image: earth, 
    advantages: [
      'Provides rapid strength gain, enabling faster formwork removal and quick project turnaround',
      'Ideal for projects requiring early load-bearing capacity, such as road repairs or bridges',
      'Reduces construction time while maintaining long-term durability',
    ],
  }
];
