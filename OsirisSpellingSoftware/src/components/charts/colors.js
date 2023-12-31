'use strict';
export {colors, colorsBW};

//COLORS
const colors = [
  '#A9D18E', '#000000', '#FF0000', '#0000FF', '#FF00FF', '#00FFFF', '#FFFF00', '#FFA500', '#008000', '#800080',
  '#FFC0CB', '#FF4500', '#00CED1', '#FF1493', '#8B0000', '#800000', '#4169E1', '#8A2BE2', '#00FF7F', '#DAA520',
  '#4B0082', '#ADFF2F', '#CD853F', '#20B2AA', '#9932CC', '#FF69B4', '#DC143C', '#000080', '#FF8C00', '#696969',
  '#00BFFF', '#D2691E', '#1E90FF', '#FFD700', '#808000', '#008080', '#FF6347', '#A0522D', '#708090', '#00FA9A',
  '#BA55D3', '#F0E68C', '#8B008B', '#FF00FF', '#A9A9A9', '#32CD32', '#8B4513', '#FA8072', '#2E8B57', '#FF7F50',
  '#9370DB', '#FFFFE0', '#C71585', '#00FF00', '#191970', '#FF4500', '#8B0000', '#0000CD', '#7B68EE', '#ADFF2F',
  '#DEB887', '#008080', '#FF6347', '#FFD700', '#2F4F4F', '#FF69B4', '#D2691E', '#20B2AA', '#800080', '#4682B4',
  '#FF8C00', '#F5DEB3', '#6A5ACD', '#FF1493', '#DC143C', '#6495ED', '#FF00FF', '#696969', '#00FA9A', '#FFA07A',
  '#778899', '#3CB371', '#BC8F8F', '#8B4513', '#FA8072', '#2E8B57', '#FF7F50', '#D3D3D3', '#7FFF00', '#B8860B',
  '#EE82EE', '#6B8E23', '#FF4500', '#8B0000', '#0000CD', '#7B68EE', '#ADFF2F', '#DEB887', '#008080', '#FF6347',
  '#FFD700', '#2F4F4F', '#FF69B4', '#D2691E', '#20B2AA', '#800080', '#4682B4', '#FF8C00', '#F5DEB3', '#6A5ACD',
  '#FF1493', '#DC143C', '#6495ED', '#FF00FF', '#696969', '#00FA9A', '#FFA07A', '#778899', '#3CB371', '#BC8F8F',
  '#8B4513', '#FA8072', '#2E8B57', '#FF7F50', '#D3D3D3', '#7FFF00', '#B8860B', '#EE82EE', '#6B8E23', '#FF4500',
  '#8B0000', '#0000CD', '#7B68EE', '#ADFF2F', '#DEB887', '#008080', '#FF6347', '#FFD700', '#2F4F4F', '#FF69B4',
  '#D2691E', '#20B2AA', '#800080', '#4682B4', '#FF8C00', '#F5DEB3', '#6A5ACD', '#FF1493', '#DC143C', '#6495ED',
  '#FF00FF', '#696969', '#00FA9A', '#FFA07A', '#778899', '#3CB371', '#BC8F8F', '#8B4513', '#FA8072', '#2E8B57',
  '#FF7F50', '#D3D3D3', '#7FFF00', '#B8860B', '#EE82EE', '#6B8E23', '#FF4500', '#8B0000', '#0000CD', '#7B68EE',
  '#ADFF2F', '#DEB887', '#008080', '#FF6347', '#FFD700', '#2F4F4F', '#FF69B4', '#D2691E', '#20B2AA', '#800080',
  '#4682B4', '#FF8C00', '#F5DEB3', '#6A5ACD', '#FF1493', '#DC143C', '#6495ED', '#FF00FF', '#696969', '#00FA9A',
  '#FFA07A', '#778899', '#3CB371', '#BC8F8F', '#8B4513', '#FA8072', '#2E8B57', '#FF7F50', '#D3D3D3', '#7FFF00',
  '#B8860B', '#EE82EE', '#6B8E23', '#FF4500', '#8B0000', '#0000CD', '#7B68EE', '#ADFF2F', '#DEB887', '#008080',
  '#FF6347', '#FFD700', '#2F4F4F', '#FF69B4', '#D2691E', '#20B2AA', '#800080', '#4682B4', '#FF8C00', '#F5DEB3',
  '#6A5ACD', '#FF1493', '#DC143C', '#6495ED', '#FF00FF', '#696969', '#00FA9A', '#FFA07A', '#778899', '#3CB371',
  '#BC8F8F', '#8B4513', '#FA8072', '#2E8B57', '#FF7F50', '#D3D3D3', '#7FFF00', '#B8860B', '#EE82EE', '#6B8E23',
  '#FF4500', '#8B0000', '#0000CD', '#7B68EE', '#ADFF2F', '#DEB887', '#008080', '#FF6347', '#FFD700', '#2F4F4F',
  '#FF69B4', '#D2691E', '#20B2AA', '#800080', '#4682B4', '#FF8C00', '#F5DEB3', '#6A5ACD', '#FF1493', '#DC143C',
  '#6495ED', '#FF00FF', '#696969', '#00FA9A', '#FFA07A', '#778899', '#3CB371', '#BC8F8F', '#8B4513', '#FA8072',
  '#2E8B57', '#FF7F50', '#D3D3D3', '#7FFF00', '#B8860B', '#EE82EE', '#6B8E23', '#FF4500', '#8B0000', '#0000CD',
  '#7B68EE', '#ADFF2F', '#DEB887', '#008080', '#FF6347', '#FFD700', '#2F4F4F', '#FF69B4', '#D2691E', '#20B2AA',
  '#800080', '#4682B4', '#FF8C00', '#F5DEB3', '#6A5ACD', '#FF1493', '#DC143C', '#6495ED', '#FF00FF', '#696969',
  '#00FA9A', '#FFA07A', '#778899', '#3CB371', '#BC8F8F', '#8B4513', '#FA8072', '#2E8B57', '#FF7F50', '#D3D3D3',
  '#7FFF00', '#B8860B', '#EE82EE', '#6B8E23', '#FF4500', '#8B0000', '#0000CD', '#7B68EE', '#ADFF2F', '#DEB887',
  '#008080', '#FF6347', '#FFD700', '#2F4F4F', '#FF69B4', '#D2691E', '#20B2AA', '#800080', '#4682B4', '#FF8C00',
  '#F5DEB3', '#6A5ACD', '#FF1493', '#DC143C', '#6495ED', '#FF00FF', '#696969', '#00FA9A', '#FFA07A', '#778899',
  '#3CB371', '#BC8F8F', '#8B4513', '#FA8072', '#2E8B57', '#FF7F50', '#D3D3D3', '#7FFF00', '#B8860B', '#EE82EE',
  '#6B8E23', '#FF4500', '#8B0000', '#0000CD', '#7B68EE', '#ADFF2F', '#DEB887', '#008080', '#FF6347', '#FFD700',
  '#2F4F4F', '#FF69B4', '#D2691E', '#20B2AA', '#800080', '#4682B4', '#FF8C00', '#F5DEB3', '#6A5ACD', '#FF1493',
  '#DC143C', '#6495ED', '#FF00FF', '#696969', '#00FA9A', '#FFA07A', '#778899', '#3CB371', '#BC8F8F', '#8B4513',
  '#FA8072', '#2E8B57', '#FF7F50', '#D3D3D3', '#7FFF00', '#B8860B', '#EE82EE', '#6B8E23', '#FF4500', '#8B0000'
];

//COLORS B & W contrasting from the previous one
const colorsBW = [];
let r = 0;
let g = 0;
let b = 0;

for (let i = 0; i < 200; i++) {
  const shade = i % 2 === 0 ? 30 : 220;
  r = shade;
  g = shade;
  b = shade;

  if (i % 4 === 0) { 
    r += 40;
    g += 40;
    b += 40;
  } else if (i % 4 === 1) {
    r -= 20;
    g -= 20;
    b -= 20;
  } else if (i % 4 === 2) { 
    r -= 20;
    g -= 20;
    b -= 20;
  } else { 
    r -= 40;
    g -= 40;
    b -= 40;
  }

  const colorBW = `rgb(${r}, ${g}, ${b})`;
  colorsBW.push(colorBW);
}
