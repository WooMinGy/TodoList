import { isTablet } from 'react-native-device-info';

const defaultSize = {
  '0.25-x': 1,
  '0.5-x': 2,
  '1-x': 4,
  '1.5-x': 6,
  '2-x': 8,
  '2.5-x': 10,
  '3-x': 12,
  '3.5-x': 14,
  '4-x': 16,
  '4.5-x': 18,
  '5-x': 20,
  '5.5-x': 22,
  '6-x': 24,
  '7-x': 28,
  '8-x': 32,
  '9-x': 36,
  '10-x': 40,
  '10.5-x': 42,
  '11-x': 44,
  '12-x': 48,
  '13-x': 52,
  '14-x': 56,
  '15-x': 60,
  '15.5-x': 62,
  '16-x': 64,
  '17-x': 68,
  '18-x': 72,
  '19-x': 76,
  '19.5-x': 78,
  '20-x': 80,
  '21-x': 84,
  '22-x': 88,
  '23-x': 92,
  '24-x': 96,
  '25-x': 100,
  '26-x': 104,
  '27-x': 108,
  '28-x': 112,
  '29-x': 116,
  '30-x': 120,
  '31-x': 124,
  '32-x': 128,
  '33-x': 132,
  '34-x': 136,
  '35-x': 140,
  '36-x': 144,
  '37-x': 148,
  '38-x': 152,
  '39-x': 156,
  '40-x': 160,
  '42-x': 168,
  '43-x': 172,
  '44-x': 176,
  '45-x': 180,
  '46-x': 184,
  '47-x': 188,
  '48-x': 192,
  '50-x': 200,
  '52-x': 208,
  '53-x': 212,
  '55-x': 220,
  '56-x': 224,
  '58-x': 232,
  '60-x': 240,
  '61-x': 244,
  '65-x': 260,
  '66-x': 264,
  '67-x': 268,
  '70-x': 280,
  '71-x': 284,
  '72-x': 288,
  '74-x': 296,
  '75-x': 300,
  '77-x': 308,
  '78-x': 312,
  '85-x': 340,
  '90-x': 360,
  '95-x': 380,
  '100-x': 400,
  '110-x': 440,
  '113-x': 452,
  '120-x': 480,
  '121-x': 484,
  '125-x': 500,
  '140-x': 560,
  '150-x': 600,
  '160-x': 640,
};

export const size = Object.fromEntries(
  Object.entries(defaultSize).map((e) => {
    const keyName = e[0];
    const value = e[1];
    if (isTablet()) {
      return [keyName, value * 1.5];
    } else {
      return [keyName, value];
    }
  })
);
