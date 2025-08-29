// app/utils/zodiac.js

export const zodiacSigns = [
  {
    name: { en: "Aries", ar: "الحمل" },
    dates: "Mar 21 - Apr 19",
    element: { en: "Fire", ar: "نار" },
    symbol: "♈",
    compatibility: ["Leo", "Sagittarius", "Gemini", "Aquarius"],
    weaknesses: ["Capricorn", "Cancer", "Libra"],
    traits: {
      en: ["Courageous", "Determined", "Confident", "Enthusiastic", "Optimistic", "Honest", "Passionate"],
      ar: ["شجاع", "مصمم", "واثق", "متحمس", "متفائل", "صادق", "متفاني"]
    },
    weaknesses: {
      en: ["Impatient", "Moody", "Short-tempered", "Impulsive", "Aggressive"],
      ar: ["سريع الانفعال", "متقلب المزاج", "سريع الغضب", "متهور", "عدواني"]
    }
  },
  {
    name: { en: "Taurus", ar: "الثور" },
    dates: "Apr 20 - May 20",
    element: { en: "Earth", ar: "أرض" },
    symbol: "♉",
    compatibility: ["Virgo", "Capricorn", "Cancer", "Pisces"],
    weaknesses: ["Scorpio", "Aquarius", "Leo"],
    traits: {
      en: ["Reliable", "Patient", "Practical", "Devoted", "Responsible", "Stable"],
      ar: ["موثوق", "صبور", "عملي", "مخلص", "مسؤول", "مستقر"]
    },
    weaknesses: {
      en: ["Stubborn", "Possessive", "Uncompromising"],
      ar: ["عنيد", "متملك", "غير مرن"]
    }
  },
  {
    name: { en: "Gemini", ar: "الجوزاء" },
    dates: "May 21 - Jun 20",
    element: { en: "Air", ar: "هواء" },
    symbol: "♊",
    compatibility: ["Libra", "Aquarius", "Aries", "Leo"],
    weaknesses: ["Pisces", "Virgo", "Scorpio"],
    traits: {
      en: ["Gentle", "Affectionate", "Curious", "Adaptable", "Ability to learn quickly", "Outgoing"],
      ar: ["لطيف", "م affectionate", "فضولي", "متكيف", "قادر على التعلم بسرعة", "اجتماعي"]
    },
    weaknesses: {
      en: ["Nervous", "Inconsistent", "Indecisive"],
      ar: ["عصبي", "غير متسق", "متردد"]
    }
  },
  {
    name: { en: "Cancer", ar: "السرطان" },
    dates: "Jun 21 - Jul 22",
    element: { en: "Water", ar: "ماء" },
    symbol: "♋",
    compatibility: ["Scorpio", "Pisces", "Taurus", "Virgo"],
    weaknesses: ["Aries", "Libra", "Capricorn"],
    traits: {
      en: ["Tenacious", "Highly imaginative", "Loyal", "Emotional", "Sympathetic", "Persuasive"],
      ar: ["مثابر", "شديد الخيال", "مخلص", "عاطفي", "متعاطف", "مقنع"]
    },
    weaknesses: {
      en: ["Moody", "Pessimistic", "Suspicious", "Manipulative", "Insecure"],
      ar: ["متقلب المزاج", "متشائم", "مشكوك", "م manipulative", "غير آمن"]
    }
  },
  {
    name: { en: "Leo", ar: "الأسد" },
    dates: "Jul 23 - Aug 22",
    element: { en: "Fire", ar: "نار" },
    symbol: "♌",
    compatibility: ["Aries", "Sagittarius", "Gemini", "Libra"],
    weaknesses: ["Taurus", "Scorpio", "Aquarius"],
    traits: {
      en: ["Creative", "Passionate", "Generous", "Warm-hearted", "Cheerful", "Humorous"],
      ar: ["مبدع", "شغوف", "سخي", "طيب القلب", "مبتهج", "مرح"]
    },
    weaknesses: {
      en: ["Arrogant", "Stubborn", "Self-centered", "Lazy", "Inflexible"],
      ar: ["مغرور", "عنيد", "متمركز حول الذات", "كسول", "غير مرن"]
    }
  },
  {
    name: { en: "Virgo", ar: "العذراء" },
    dates: "Aug 23 - Sep 22",
    element: { en: "Earth", ar: "أرض" },
    symbol: "♍",
    compatibility: ["Taurus", "Capricorn", "Cancer", "Scorpio"],
    weaknesses: ["Gemini", "Sagittarius", "Pisces"],
    traits: {
      en: ["Loyal", "Analytical", "Kind", "Hardworking", "Practical"],
      ar: ["مخلص", "محلل", "لطيف", "مجتهد", "عملي"]
    },
    weaknesses: {
      en: ["Shyness", "Worry", "Overly critical of self and others", "All work and no play"],
      ar: ["خجول", "قلق", "ناقد بشكل مفرط للذات والآخرين", "عمل فقط ولا لعب"]
    }
  },
  {
    name: { en: "Libra", ar: "الميزان" },
    dates: "Sep 23 - Oct 22",
    element: { en: "Air", ar: "هواء" },
    symbol: "♎",
    compatibility: ["Gemini", "Aquarius", "Leo", "Sagittarius"],
    weaknesses: ["Cancer", "Capricorn", "Aries"],
    traits: {
      en: ["Cooperative", "Diplomatic", "Gracious", "Fair-minded", "Social"],
      ar: ["متعاون", "دبلوماسي", "مؤدب", "منصف", "اجتماعي"]
    },
    weaknesses: {
      en: ["Indecisive", "Avoids confrontations", "Will carry a grudge", "Self-pity"],
      ar: ["متردد", "يتجنب المواجهات", "يحمل ضغينة", "يتعاطف مع الذات"]
    }
  },
  {
    name: { en: "Scorpio", ar: "العقرب" },
    dates: "Oct 23 - Nov 21",
    element: { en: "Water", ar: "ماء" },
    symbol: "♏",
    compatibility: ["Cancer", "Pisces", "Virgo", "Capricorn"],
    weaknesses: ["Leo", "Aquarius", "Taurus"],
    traits: {
      en: ["Resourceful", "Brave", "Passionate", "Stubborn", "A true friend"],
      ar: ["موارد", "شجاع", "شغوف", "عنيد", "صديق حقيقي"]
    },
    weaknesses: {
      en: ["Distrustful", "Jealous", "Secretive", "Violent"],
      ar: ["مشكوك", "حسود", "سري", "عنيف"]
    }
  },
  {
    name: { en: "Sagittarius", ar: "القوس" },
    dates: "Nov 22 - Dec 21",
    element: { en: "Fire", ar: "نار" },
    symbol: "♐",
    compatibility: ["Aries", "Leo", "Aquarius", "Libra"],
    weaknesses: ["Virgo", "Pisces", "Taurus"],
    traits: {
      en: ["Generous", "Idealistic", "Great sense of humor"],
      ar: ["سخي", "مثالي", "روح الدعابة رائعة"]
    },
    weaknesses: {
      en: ["Promises more than can deliver", "Very impatient", "Will say anything no matter how undiplomatic"],
      ar: ["يعد أكثر مما يمكنه تقديمه", "صبور جداً", "سيقول أي شيء بغض النظر عن مدى دبلوماسيته"]
    }
  },
  {
    name: { en: "Capricorn", ar: "الجدي" },
    dates: "Dec 22 - Jan 19",
    element: { en: "Earth", ar: "أرض" },
    symbol: "♑",
    compatibility: ["Taurus", "Virgo", "Scorpio", "Pisces"],
    weaknesses: ["Aries", "Libra", "Cancer"],
    traits: {
      en: ["Responsible", "Disciplined", "Self-control", "Good managers"],
      ar: ["مسؤول", "منضبط", "ذو سيطرة على الذات", "مديرون جيدون"]
    },
    weaknesses: {
      en: ["Know-it-all", "Unforgiving", "Condescending", "Expecting the worst"],
      ar: ["يعرف كل شيء", "غير غفور", "متعالٍ", "يتوقع الأسوأ"]
    }
  },
  {
    name: { en: "Aquarius", ar: "الدلو" },
    dates: "Jan 20 - Feb 18",
    element: { en: "Air", ar: "هواء" },
    symbol: "♒",
    compatibility: ["Gemini", "Libra", "Aries", "Sagittarius"],
    weaknesses: ["Taurus", "Scorpio", "Leo"],
    traits: {
      en: ["Progressive", "Original", "Humanitarian"],
      ar: ["تقدمي", "أصلي", "إنساني"]
    },
    weaknesses: {
      en: ["Runs from emotional expression", "Stubborn", "Unpredictable"],
      ar: ["يهرب من التعبير العاطفي", "عنيد", "غير متوقع"]
    }
  },
  {
    name: { en: "Pisces", ar: "الحوت" },
    dates: "Feb 19 - Mar 20",
    element: { en: "Water", ar: "ماء" },
    symbol: "♓",
    compatibility: ["Cancer", "Scorpio", "Taurus", "Capricorn"],
    weaknesses: ["Gemini", "Sagittarius", "Virgo"],
    traits: {
      en: ["Compassionate", "Artistic", "Intuitive", "Gentle", "Wise", "Musical"],
      ar: ["رحيم", "فني", "حدسي", "لطيف", "حكيم", "موسيقي"]
    },
    weaknesses: {
      en: ["Fearful", "Overly trusting", "Sad", "Desire to escape reality", "Can be a victim or a martyr"],
      ar: ["خائف", "موثوق بشكل مفرط", "حزين", "رغبة في الهروب من الواقع", "يمكن أن يكون ضحية أو شهيد"]
    }
  }
];

export const getZodiacSign = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  // Aries (Mar 21 - Apr 19)
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return zodiacSigns[0];
  
  // Taurus (Apr 20 - May 20)
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return zodiacSigns[1];
  
  // Gemini (May 21 - Jun 20)
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return zodiacSigns[2];
  
  // Cancer (Jun 21 - Jul 22)
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return zodiacSigns[3];
  
  // Leo (Jul 23 - Aug 22)
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return zodiacSigns[4];
  
  // Virgo (Aug 23 - Sep 22)
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return zodiacSigns[5];
  
  // Libra (Sep 23 - Oct 22)
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return zodiacSigns[6];
  
  // Scorpio (Oct 23 - Nov 21)
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return zodiacSigns[7];
  
  // Sagittarius (Nov 22 - Dec 21)
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return zodiacSigns[8];
  
  // Capricorn (Dec 22 - Jan 19)
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return zodiacSigns[9];
  
  // Aquarius (Jan 20 - Feb 18)
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return zodiacSigns[10];
  
  // Pisces (Feb 19 - Mar 20)
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return zodiacSigns[11];
  
  return zodiacSigns[0]; // Default to Aries
};

// Helper function to get zodiac sign by name
export const getZodiacSignByName = (name) => {
  return zodiacSigns.find(sign => 
    sign.name.en.toLowerCase() === name.toLowerCase() || 
    sign.name.ar === name
  ) || zodiacSigns[0];
};

// Helper function to get zodiac compatibility between two signs
export const getCompatibility = (sign1Name, sign2Name) => {
  const sign1 = getZodiacSignByName(sign1Name);
  const sign2 = getZodiacSignByName(sign2Name);
  
  const isCompatible = sign1.compatibility.includes(sign2.name.en) || 
                      sign2.compatibility.includes(sign1.name.en);
  
  const isWeakness = sign1.weaknesses.includes(sign2.name.en) || 
                    sign2.weaknesses.includes(sign1.name.en);
  
  let compatibilityLevel;
  if (isCompatible) compatibilityLevel = "high";
  else if (isWeakness) compatibilityLevel = "low";
  else compatibilityLevel = "medium";
  
  return {
    sign1: sign1.name,
    sign2: sign2.name,
    compatibilityLevel,
    description: getCompatibilityDescription(sign1, sign2, compatibilityLevel)
  };
};

// Helper function to generate compatibility description
const getCompatibilityDescription = (sign1, sign2, level) => {
  const descriptions = {
    high: {
      en: `${sign1.name.en} and ${sign2.name.en} have a strong connection! They complement each other well and can build a lasting relationship.`,
      ar: `علاقة قوية بين ${sign1.name.ar} و${sign2.name.ar}! يكملان بعضهما البعض جيدًا ويمكنهما بناء علاقة دائمة.`
    },
    medium: {
      en: `${sign1.name.en} and ${sign2.name.en} have a moderate compatibility. With understanding and compromise, they can make it work.`,
      ar: `توافق متوسط بين ${sign1.name.ar} و${sign2.name.ar}. مع الفهم والتنازل، يمكنهما جعل العلاقة ناجحة.`
    },
    low: {
      en: `${sign1.name.en} and ${sign2.name.en} may face challenges. They need to work hard to understand each other's differences.`,
      ar: `قد يواجه ${sign1.name.ar} و${sign2.name.ar} تحديات. يحتاجان للعمل بجد لفهم اختلافات بعضهما البعض.`
    }
  };
  
  return descriptions[level];
};
