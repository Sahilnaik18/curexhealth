export const serviceAreas = [
  {
    zone: 'Western Suburbs',
    color: '#0F6CBD',
    bg: '#E8F3FC',
    areas: [
      'Bandra', 'Andheri West', 'Andheri East', 'Juhu', 'Vile Parle',
      'Santacruz', 'Khar', 'Jogeshwari', 'Goregaon', 'Malad',
      'Kandivali', 'Borivali', 'Dahisar',
    ],
  },
  {
    zone: 'Central Suburbs',
    color: '#00B894',
    bg: '#E0F7F3',
    areas: [
      'Dadar', 'Matunga', 'Sion', 'Kurla', 'Ghatkopar',
      'Vikhroli', 'Bhandup', 'Mulund', 'Nahur', 'Kanjurmarg',
    ],
  },
  {
    zone: 'South Mumbai',
    color: '#5B4FCF',
    bg: '#EEF0FD',
    areas: [
      'Worli', 'Lower Parel', 'Prabhadevi', 'Wadala',
      'Chembur', 'Parel', 'Colaba', 'Fort', 'Marine Lines',
    ],
  },
  {
    zone: 'Thane & Navi Mumbai',
    color: '#E17055',
    bg: '#FDF0EC',
    areas: [
      'Thane West', 'Thane East', 'Mulund', 'Navi Mumbai',
      'Vashi', 'Kopar Khairane', 'Airoli', 'Belapur', 'Kharghar',
      'Panvel', 'Dombivli', 'Kalyan',
    ],
  },
  {
    zone: 'Powai & Eastern Suburbs',
    color: '#FDCB6E',
    bg: '#FEF6E4',
    areas: [
      'Powai', 'Hiranandani', 'Chandivali', 'Sakinaka',
      'Govandi', 'Mankhurd', 'Trombay',
    ],
  },
]

export const allAreas = serviceAreas.flatMap(z => z.areas)
