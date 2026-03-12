export const REGIONAL_FOODS: Record<string, {
  breakfast: string[];
  lunch: string[];
  dinner: string[];
  snacks: string[];
  description: string;
}> = {
  'Tamil Nadu': {
    breakfast: ['Idli with sambar and coconut chutney', 'Dosa with tomato chutney', 'Pongal with ghee and pepper', 'Upma with vegetables', 'Appam with coconut milk', 'Rava idli with coriander chutney'],
    lunch: ['Brown rice with vegetable sambar and poriyal', 'Rasam rice with papad', 'Curd rice with pickle', 'Koottu curry with rice', 'Morkozhambhu with rice', 'Puliyodarai'],
    dinner: ['Light dosa with tomato chutney', 'Chapati with vegetable kurma', 'Vegetable soup with multigrain roti', 'Ven pongal', 'Idiyappam with coconut milk'],
    snacks: ['Sundal (chickpea or lentil)', 'Buttermilk (mor)', 'Fresh fruit bowl', 'Murukku (small portion)', 'Kozhukattai', 'Tender coconut water'],
    description: 'Tamil Nadu'
  },
  'Kerala': {
    breakfast: ['Appam with vegetable stew', 'Puttu with kadala curry', 'Idiyappam with coconut milk', 'Pathiri with egg curry', 'Dosa with fish curry'],
    lunch: ['Kerala red rice with avial and sambar', 'Fish curry with brown rice', 'Olan (ash gourd with coconut)', 'Thoran with rice', 'Erissery with rice'],
    dinner: ['Chapati with vegetable stew', 'Appam with chicken curry', 'Kanji (rice porridge)', 'Matta rice with fish curry', 'Vegetable ishtu'],
    snacks: ['Banana chips (small portion)', 'Pazham pori (banana fritters)', 'Coconut water', 'Chakka (jackfruit)', 'Roasted nuts'],
    description: 'Kerala'
  },
  'Karnataka': {
    breakfast: ['Akki roti with chutney', 'Ragi mudde with sambar', 'Benne dosa with chutney', 'Uppit (upma)', 'Set dosa with sagu'],
    lunch: ['Jolada roti with bassaru', 'Bisibele bath', 'Vangi bath', 'Chitranna', 'Ragi sankati with sambar'],
    dinner: ['Chapati with dal palya', 'Ragi roti with chutney', 'Rice with rasam', 'Set dosa with chutney', 'Vegetable curry with roti'],
    snacks: ['Chikki (peanut sweet)', 'Roasted corn', 'Tender coconut', 'Groundnut boiled', 'Fresh fruits'],
    description: 'Karnataka'
  },
  'Andhra Pradesh': {
    breakfast: ['Pesarattu with ginger chutney', 'Upma with vegetables', 'Rava dosa with chutney', 'Bamboo rice kanji', 'Idli with peanut chutney'],
    lunch: ['Andhra rice with gongura chutney', 'Tomato rice with raita', 'Vegetable pulao', 'Dal with rice and pickle', 'Sambar rice with poriyal'],
    dinner: ['Roti with dal fry', 'Vegetable biryani (small portion)', 'Chapati with mixed vegetable curry', 'Pesarattu', 'Rice with rasam'],
    snacks: ['Chilli bajji', 'Roasted chana', 'Tender coconut', 'Fruit salad', 'Buttermilk'],
    description: 'Andhra Pradesh'
  },
  'North India': {
    breakfast: ['Whole wheat paratha with curd', 'Poha with peanuts', 'Besan cheela with chutney', 'Oats upma', 'Moong dal cheela'],
    lunch: ['Dal makhani with brown rice', 'Rajma with roti', 'Chole with bhatura (small)', 'Paneer curry with roti', 'Vegetable pulao with raita'],
    dinner: ['Roti with dal tadka', 'Khichdi with vegetables', 'Palak paneer with roti', 'Mixed dal with rice', 'Vegetable sabzi with roti'],
    snacks: ['Roasted makhana', 'Chana chaat', 'Fresh lassi', 'Mixed nuts', 'Fruit chaat'],
    description: 'North India'
  },
};

export const MEDICAL_ADJUSTMENTS: Record<string, string> = {
  'Diabetes': 'Prioritize low glycemic index foods. Avoid refined carbohydrates, white rice in large portions, and sugary drinks. Include whole grains, leafy vegetables, and fiber-rich foods. Choose brown rice over white rice. Limit fruit portions.',
  'Hypertension': 'Reduce sodium intake. Avoid pickles, papads, processed foods, and excess salt. Include potassium-rich foods like bananas, sweet potatoes, and leafy greens. Choose low-fat dairy. Increase magnesium through nuts and seeds.',
  'Obesity': 'Create a caloric deficit while maintaining nutrition. Focus on high-volume, low-calorie foods. Increase protein intake for satiety. Reduce portion sizes. Choose steamed or boiled preparations over fried. Include more vegetables and fiber.',
  'Heart Disease': 'Avoid saturated fats, trans fats, and high-cholesterol foods. Choose heart-healthy oils (olive, coconut in moderation). Include omega-3 rich foods. Limit red meat. Choose lean proteins. Increase fiber and antioxidant-rich foods.',
  'None': 'Maintain a balanced diet with all macronutrients. Focus on whole foods, adequate protein, healthy fats, and complex carbohydrates.',
};
