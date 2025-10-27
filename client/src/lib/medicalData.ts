export interface Symptom {
  id: string;
  name: string;
  aliases: string[];
}

export interface Disease {
  id: string;
  name: string;
  symptoms: string[];
  weights: Record<string, number>;
  requiresWeight?: boolean;
  specialist: string;
}

export interface Medicine {
  id: string;
  name: string;
  ageGroups: string[];
  dosage: {
    low: string;
    medium: string;
    high: string;
  };
  timing: string;
  instructions: string;
}

export const SYMPTOMS: Symptom[] = [
  // General & Fever-related
  { id: 'fever', name: 'Fever', aliases: ['high temperature', 'temperature', 'hot', 'feverish', 'hot body', 'heat in body', 'burning', 'chills', 'mild fever', 'fevr', 'fvr', 'fevering', 'fevers', 'fever with chills', 'body heating', 'fever and rash', 'body hot', 'feverish feeling', 'fever with rash'] },
  { id: 'chills', name: 'Chills', aliases: ['shivering', 'cold shivers', 'body shivers', 'goosebumps', 'shaking due to cold', 'feeling cold', 'body chills'] },
  { id: 'sweating', name: 'Excessive Sweating', aliases: ['sweaty', 'sweating a lot', 'night sweats', 'perspiration', 'hyperhidrosis', 'excess sweat', 'body sweat', 'sweat', 'sweating too much'] },
  { id: 'fatigue', name: 'Fatigue', aliases: ['tiredness', 'weakness', 'exhaustion', 'energy loss', 'drained', 'feeling weak', 'lack of energy', 'lazy', 'tired', 'sleepy', 'cant get up', 'low stamina', 'sluggish'] },
  { id: 'body_ache', name: 'Body Ache', aliases: ['muscle ache', 'aching', 'body pains', 'whole body ache', 'muscle pain', 'pain all over', 'joint and body pain', 'body soreness', 'body hurting', 'generalized pain', 'body stiffness', 'body discomfort'] },

  // Head, Eyes, Ears, Nose, Throat (HEENT)
  { id: 'headache', name: 'Headache', aliases: ['head pain', 'migraine', 'head aching', 'head heavy', 'throbbing head', 'temple pain', 'forehead pain', 'back of head pain', 'pain in head', 'head hurting'] },
  { id: 'migraine', name: 'Migraine', aliases: ['one side headache', 'migren', 'migrne', 'sharp head pain', 'sensitive to light', 'visual aura', 'aura headache', 'nausea with headache'] },
  { id: 'diabetes', name: 'Diabetes', aliases: ['increased thirst', 'urination', 'extreme hunger', 'fatigue', 'blurred vision', 'slow-healing sores', 'diabetes'] },
  { id: 'dizziness', name: 'Dizziness', aliases: ['lightheaded', 'vertigo', 'spinning', 'feeling faint', 'unsteady', 'losing balance', 'giddiness', 'head spinning', 'feeling woozy'] },
  { id: 'blurred_vision', name: 'Blurred Vision', aliases: ['blurry vision', 'blurry eyes', 'vision blur', 'unclear vision', 'cannot see clearly', 'double vision', 'hazy vision', 'fuzzy vision', 'distorted vision', 'vision not clear'] },
  { id: 'eye', name: 'Eye', aliases: ['eye pain', 'eye ache', 'eye discomfort', 'eye strain', 'burning eyes', 'itchy eyes', 'watery eyes', 'dry eyes', 'eye redness', 'red eyes', 'eye irritation', 'eye swelling'] },
  { id: 'itchy_eyes', name: 'Itchy Eyes', aliases: ['eye itching', 'eyes scratchy', 'allergic eyes', 'watery itchy eyes', 'itch in eye', 'eye irritation'] },
  { id: 'red_eyes', name: 'Red Eyes', aliases: ['bloodshot eyes', 'eye redness', 'pink eye', 'conjunctivitis', 'inflamed eye'] },
  { id: 'sore_throat', name: 'Sore Throat', aliases: ['throat pain', 'throat ache', 'throat discomfort', 'ful throat', 'itchy throat', 'dry throat', 'pain swallowing', 'scratchy throat'] },
  { id: 'swollen_glands', name: 'Swollen Glands', aliases: ['swollen neck', 'throat lump', 'swollen lymph nodes', 'neck swelling', 'gland swelling', 'enlarged glands'] },
  { id: 'ear', name: 'Ear', aliases: ['earache', 'ear pain', 'ear infection', 'ear discomfort', 'blocked ear', 'ear ringing', 'buzzing in ears'] },
  { id: 'hearing_loss', name: 'Hearing Loss', aliases: ['cant hear', 'hearing difficulty', 'hearing reduced', 'muffled sound', 'partial deafness', 'deafness', 'hearing impairment'] },
  { id: 'runny_nose', name: 'Runny Nose', aliases: ['nose running', 'nasal discharge', 'leaking nose', 'mucus from nose', 'runny nostrils', 'watery nose'] },
  { id: 'stuffy_nose', name: 'Blocked Nose', aliases: ['nasal congestion', 'nose blocked', 'stuffy nose', 'cant breathe through nose', 'blocked nostrils'] },
  { id: 'sneezing', name: 'Sneezing', aliases: ['sneeze', 'continuous sneezing', 'achoo', 'nasal allergy', 'repeated sneezing'] },
  { id: 'loss_smell', name: 'Loss of Smell', aliases: ['cant smell', 'anosmia', 'smell loss', 'no sense of smell'] },
  { id: 'loss_taste', name: 'Loss of Taste', aliases: ['cant taste', 'ageusia', 'taste loss', 'taste gone', 'loss of taste sensation'] },
  { id: 'mouth_ulcer', name: 'Mouth Ulcer', aliases: ['mouth sore', 'blister in mouth', 'mouth wound', 'oral ulcer', 'aphthous ulcer'] },
  { id: 'tooth', name: 'Tooth', aliases: ['toothache', 'dental pain', 'gum pain', 'tooth infection', 'tooth sensitivity', 'decaying tooth'] },
  { id: 'bad_breath', name: 'Bad Breath', aliases: ['mouth odor', 'foul breath', 'halitosis', 'smelly breath'] },
  { id: 'nose_bleed', name: 'Nose Bleed', aliases: ['bleeding nose', 'blood from nose', 'nasal bleeding', 'nose blood', 'epistaxis'] },

  // Respiratory
  { id: 'cough', name: 'Cough', aliases: ['coughing', 'dry cough', 'wet cough', 'persistent cough', 'productive cough', 'cof', 'coff', 'mucus cough'] },
  { id: 'phlegm', name: 'Phlegm Production', aliases: ['thick sputum', 'mucus in throat', 'spitting mucus', 'chest mucus', 'cough with mucus', 'expectorating'] },
  { id: 'hemoptysis', name: 'Coughing Blood', aliases: ['blood in cough', 'bloody sputum', 'blood while coughing', 'red sputum'] },
  { id: 'cold', name: 'Cold', aliases: ['common cold', 'flu-like', 'nasal congestion', 'sneezing', 'runny nose', 'blocked nose'] },
  { id: 'shortness_breath', name: 'Shortness of Breath', aliases: ['breathlessness', 'difficulty breathing', 'cant breathe', 'breathing trouble', 'hard to breathe', 'out of breath', 'gasping', 'breathing problem', 'tight chest'] },
  { id: 'wheezing', name: 'Wheezing', aliases: ['whistling breath', 'noisy breathing', 'tight breathing', 'chest wheeze', 'wheezing sound', 'difficulty exhaling'] },
  { id: 'snoring', name: 'Snoring', aliases: ['snore sound', 'loud breathing at night', 'breathing noise in sleep'] },
  { id: 'apnea', name: 'Sleep Apnea', aliases: ['stopped breathing at night', 'breathing pauses', 'choking in sleep', 'sleep breathing problem'] },

  // Chest
  { id: 'chest_pain', name: 'Chest Pain', aliases: ['chest discomfort', 'chest tightness', 'chest ache', 'pain in chest', 'pressure in chest', 'burning chest', 'chest soreness', 'chest hurting', 'chest pressure', 'angina', 'painful breathing'] },

  // Digestive/Gastrointestinal
  { id: 'stomach_pain', name: 'Stomach Pain', aliases: ['abdominal pain', 'belly ache', 'tummy ache', 'gas pain', 'abdominal discomfort', 'stomach ache', 'pain in belly'] },
  { id: 'bloating', name: 'Bloating', aliases: ['gas', 'stomach fullness', 'swollen stomach', 'abdominal distension', 'fullness', 'abdominal bloating', 'trapped gas'] },
  { id: 'indigestion', name: 'Indigestion', aliases: ['acidity', 'heartburn', 'acid reflux', 'burning chest', 'gastritis', 'dyspepsia', 'stomach upset', 'discomfort after eating'] },
  { id: 'nausea', name: 'Nausea', aliases: ['feeling sick', 'want to vomit', 'sick feeling', 'queasy', 'nauseated', 'feeling like vomiting', 'sick to stomach'] },
  { id: 'vomiting', name: 'Vomiting', aliases: ['throwing up', 'vomit', 'puke', 'retching', 'emesis', 'projectile vomit', 'vomiting blood'] },
  { id: 'diarrhea', name: 'Diarrhea', aliases: ['loose motion', 'loose stools', 'runny stools', 'watery stool', 'frequent stool', 'bowel movement', 'stomach upset', 'frequent toilet', 'runs'] },
  { id: 'constipation', name: 'Constipation', aliases: ['hard stool', 'motion', 'difficulty passing stool', 'poop not coming', 'infrequent stool', 'blocked bowel', 'difficulty pooping'] },
  { id: 'loss_appetite', name: 'Loss of Appetite', aliases: ['not hungry', 'appetite loss', 'dont feel like eating', 'reduced appetite', 'eating less', 'loss of hunger', 'no appetite'] },
  { id: 'weight_loss', name: 'Weight Loss', aliases: ['losing weight', 'unintentional weight loss', 'unexplained weight loss', 'weight dropping', 'getting thin', 'body weight loss'] },
  { id: 'weight_gain', name: 'Weight Gain', aliases: ['gained weight', 'putting on weight', 'obesity', 'weight increasing', 'getting fat'] },
  { id: 'bloody_stool', name: 'Blood in Stool', aliases: ['blood in stool', 'red stool', 'black stool', 'rectal bleeding', 'tarry stool', 'bleeding in stool'] },
  { id: 'heartburn', name: 'Heartburn', aliases: ['acid reflux', 'burning chest after eating', 'acidity', 'GERD', 'gastric burning'] },
  { id: 'hiccups', name: 'Hiccups', aliases: ['hiccuping', 'cant stop hiccups', 'singultus', 'repeated hiccups'] },
  { id: 'belching', name: 'Belching', aliases: ['burping', 'gas release', 'eructation', 'excess burping', 'belch'] },
  { id: 'flatulence', name: 'Flatulence', aliases: ['farting', 'excess gas', 'passing gas', 'wind'] },

  // Urinary & Kidney
  { id: 'burning_urination', name: 'Burning Urination', aliases: ['burn while urinating', 'urine burning', 'dysuria', 'burning pee', 'painful urination'] },
  { id: 'frequent_urination', name: 'Frequent Urination', aliases: ['urinate often', 'peeing a lot', 'passing urine frequently', 'frequent pee', 'polyuria', 'urinating often'] },
  { id: 'urgency_urination', name: 'Urgent Urination', aliases: ['cannot hold pee', 'urine urgency', 'need to urinate urgently', 'sudden urge to urinate'] },
  { id: 'blood_urine', name: 'Blood in Urine', aliases: ['red urine', 'bloody urine', 'hematuria', 'blood while peeing', 'pink urine'] },
  { id: 'dark_urine', name: 'Dark Urine', aliases: ['concentrated urine', 'brown urine', 'deep yellow urine', 'dark pee'] },
  { id: 'foul_urine', name: 'Foul Smelling Urine', aliases: ['smelly urine', 'urine odor', 'strong urine smell'] },
  { id: 'urine_leakage', name: 'Urine Leakage', aliases: ['incontinence', 'urine dribbling', 'cant control pee', 'leaking urine', 'accidental urination', 'wetting'] },
  { id: 'difficulty_urinating', name: 'Difficulty Urinating', aliases: ['trouble peeing', 'weak urine flow', 'straining to urinate', 'cannot pee properly', 'urine obstruction'] },

  // Musculoskeletal
  { id: 'joint_pain', name: 'Joint Pain', aliases: ['joint ache', 'arthritic pain', 'knee pain', 'elbow pain', 'ankle pain', 'shoulder pain', 'hip pain', 'joint soreness', 'painful joints'] },
  { id: 'joint_swelling', name: 'Joint Swelling', aliases: ['swollen joints', 'joint inflammation', 'arthritis swelling', 'joint edema'] },
  { id: 'muscle_cramp', name: 'Muscle Cramp', aliases: ['muscle spasm', 'cramps', 'tight muscle', 'charley horse', 'muscle pain', 'spasms'] },
  { id: 'muscle_weakness', name: 'Muscle Weakness', aliases: ['weak muscles', 'tired muscles', 'muscles not strong'] },
  { id: 'back_pain', name: 'Back Pain', aliases: ['lower back pain', 'upper back pain', 'spine pain', 'backache', 'back soreness', 'lumbar pain', 'pain in back'] },
  { id: 'neck_pain', name: 'Neck Pain', aliases: ['stiff neck', 'neck ache', 'neck strain', 'neck stiffness', 'neck discomfort'] },
  { id: 'shoulder_pain', name: 'Shoulder Pain', aliases: ['shoulder ache', 'shoulder discomfort', 'shoulder strain', 'shoulder injury', 'pain in shoulder'] },
  { id: 'leg_pain', name: 'Leg Pain', aliases: ['leg ache', 'thigh pain', 'calf pain', 'pain in leg', 'leg discomfort', 'leg soreness'] },
  { id: 'hand_pain', name: 'Hand Pain', aliases: ['hand ache', 'wrist pain', 'finger pain', 'palm pain', 'hand discomfort', 'pain in hand'] },
  { id: 'foot_pain', name: 'Foot Pain', aliases: ['foot ache', 'heel pain', 'sole pain', 'toe pain', 'pain in foot', 'foot soreness'] },
  { id: 'cramps', name: 'Cramps', aliases: ['stomach cramps', 'leg cramps', 'muscle cramps', 'period cramps', 'abdominal cramps', 'spasms', 'cramping', 'tight muscles'] },
  { id: 'stiffness', name: 'Stiffness', aliases: ['joint stiffness', 'neck stiffness', 'morning stiffness', 'frozen joints', 'muscle stiffness', 'body stiffness', 'hard to move', 'rigidity'] },
  { id: 'numbness', name: 'Numbness', aliases: ['tingling', 'pins and needles', 'loss of feeling', 'sensation', 'feeling numb', 'numb area'] },
  { id: 'weakness', name: 'Weakness', aliases: ['feeling weak', 'loss of strength', 'body weak', 'limb weakness', 'fatigued muscles', 'cant move properly'] },
  { id: 'swelling', name: 'Swelling', aliases: ['swollen area', 'puffiness', 'edema', 'body swelling', 'face swollen', 'leg swelling', 'ankle swelling', 'inflammation', 'bloating'] },
  { id: 'bruising', name: 'Bruising', aliases: ['blue mark', 'purple mark', 'injury mark', 'bruise', 'skin discoloration', 'bleeding under skin'] },
  { id: 'blisters', name: 'Blisters', aliases: ['fluid bumps', 'skin blister', 'boils', 'bubble on skin', 'burn blister'] },
  { id: 'lumps', name: 'Lumps', aliases: ['bump', 'nodule', 'swelling lump', 'growth', 'knot', 'hard lump'] },

  // Skin & Allergy
  { id: 'rash', name: 'Rash', aliases: ['red spots', 'skin rash', 'itchy rash', 'hives', 'skin bumps', 'skin allergy', 'skin irritation', 'allergic rash', 'skin redness'] },
  { id: 'itching', name: 'Itching', aliases: ['skin itch', 'scratch', 'pruritus', 'itchy skin', 'scratching', 'itchy rash', 'skin feels itchy', 'rash itch'] },
  { id: 'acne', name: 'Acne', aliases: ['pimples', 'zits', 'whiteheads', 'blackheads', 'skin breakout', 'acne marks'] },
  { id: 'hair_loss', name: 'Hair Loss', aliases: ['balding', 'hair fall', 'losing hair', 'thinning hair', 'bald patches'] },
  { id: 'dry_skin', name: 'Dry Skin', aliases: ['rough skin', 'flaky skin', 'peeling skin', 'parched skin', 'skin dryness'] },
  { id: 'skin_discoloration', name: 'Skin Discoloration', aliases: ['dark spots', 'uneven skin tone', 'skin pigmentation', 'skin color changes'] },
  { id: 'skin_peeling', name: 'Skin Peeling', aliases: ['flaking skin', 'peeling layer', 'skin shedding'] },
  { id: 'nail_discoloration', name: 'Nail Discoloration', aliases: ['yellow nails', 'white nails', 'black line on nail'] },
  { id: 'nail_breaking', name: 'Brittle Nails', aliases: ['weak nails', 'nail cracking', 'nail splitting', 'broken nails'] },
  { id: 'dark_circles', name: 'Dark Circles', aliases: ['black under eyes', 'under eye darkness', 'eye bags', 'darkness around eyes'] },
  { id: 'lip_cracks', name: 'Chapped Lips', aliases: ['dry lips', 'cracked lips', 'peeling lips', 'chapped mouth'] },

  // Cardiac/Circulatory
  { id: 'palpitations', name: 'Palpitations', aliases: ['heart racing', 'fast heartbeat', 'heart pounding', 'irregular heartbeat', 'fluttering heart', 'heart skipping beats', 'pounding chest', 'rapid heartbeat', 'palpitation'] },
  { id: 'fainting', name: 'Fainting', aliases: ['passed out', 'loss of consciousness', 'blackout', 'collapse', 'feeling faint', 'syncope', 'dizzy and fell', 'fainted'] },
  { id: 'swollen_feet', name: 'Swollen Feet', aliases: ['foot swelling', 'puffy feet', 'leg edema', 'swelling in feet', 'edema feet'] },
  { id: 'high_bp', name: 'High Blood Pressure', aliases: ['hypertension', 'bp high', 'increased blood pressure', 'high bp', 'bp rise', 'high blood'] },
  { id: 'low_bp', name: 'Low Blood Pressure', aliases: ['hypotension', 'bp drop', 'bp low', 'blood pressure drop', 'low bp'] },
  { id: 'irregular_heartbeat', name: 'Irregular Heartbeat', aliases: ['heart skipping beats', 'arrhythmia', 'uneven pulse', 'pulse irregular', 'irregular pulse'] },

  // Neurological & Psychological
  { id: 'anxiety', name: 'Anxiety', aliases: ['panic', 'nervous', 'tension', 'restless', 'uneasy', 'feeling anxious', 'worry', 'stress', 'panic attacks', 'nervousness'] },
  { id: 'depression', name: 'Depression', aliases: ['sad', 'hopeless', 'low mood', 'loss of interest', 'feeling down', 'discouragement', 'feeling low', 'hopelessness'] },
  { id: 'memory_loss', name: 'Memory Loss', aliases: ['forgetfulness', 'amnesia', 'cant remember', 'confusion', 'short-term memory loss', 'memory problems', 'forgetting things'] },
  { id: 'sleep_problems', name: 'Sleep Problems', aliases: ['insomnia', 'sleep difficulty', 'cant sleep', 'restless nights', 'sleep disturbances', 'difficulty falling asleep'] },
  { id: 'tremors', name: 'Tremors', aliases: ['shaking hands', 'trembling', 'body shaking', 'hand tremor', 'involuntary shaking', 'shiver', 'shaky body', 'vibration in hands'] },
  { id: 'numbness', name: 'Numbness', aliases: ['tingling', 'pins and needles', 'loss of feeling', 'hand numb', 'leg numb', 'feeling numb'] },
  { id: 'seizures', name: 'Seizure', aliases: ['fits', 'convulsion', 'epileptic attack', 'jerking', 'jerking movements', 'epilepsy', 'shaking', 'loss of consciousness', 'spasms'] },

  // Reproductive (keep these merged for both sexes, clarify male/female in context)
  { id: 'menstrual_cramps', name: 'Menstrual Cramps', aliases: ['period cramps', 'menstrual pain', 'dysmenorrhea', 'stomach pain during periods', 'period pain', 'pain during menstruation'] },
  { id: 'irregular_periods', name: 'Irregular Periods', aliases: ['missed period', 'late period', 'early period', 'cycle problem', 'period irregularity', 'unusual menstruation', 'skipped period'] },
  { id: 'vaginal_discharge', name: 'Vaginal Discharge', aliases: ['white discharge', 'abnormal discharge', 'smelly discharge', 'watery discharge', 'thick discharge', 'vaginal fluid'] },
  { id: 'vaginal_itching', name: 'Vaginal Itching', aliases: ['itchy vagina', 'private part itching', 'genital itching', 'itching down there'] },
  { id: 'erectile_dysfunction', name: 'Erectile Dysfunction', aliases: ['cant get erection', 'weak erection', 'impotence', 'erection problem', 'sexual weakness'] },
  { id: 'loss_of_libido', name: 'Loss of Libido', aliases: ['low sex drive', 'reduced interest in sex', 'decreased libido', 'sexual desire loss'] },
  { id: 'genital_ulcer', name: 'Genital Ulcer', aliases: ['sore on genitals', 'blister on private part', 'wound near penis', 'ulcer near vagina', 'genital wound'] },

  // Pediatric / Miscellaneous
  { id: 'crying_infant', name: 'Persistent Crying (Infant)', aliases: ['baby crying continuously', 'colic baby', 'infant irritability', 'crying baby', 'baby crying nonstop'] },
  { id: 'delayed_growth', name: 'Delayed Growth', aliases: ['slow growth', 'not gaining weight', 'child not growing', 'growth delay', 'failure to thrive'] },
  { id: 'yellow_skin', name: 'Jaundice', aliases: ['yellow eyes', 'yellow skin', 'jaundiced', 'bilirubin high', 'yellowing body'] }
];


export const DISEASES: Disease[] = [
  {
    id: 'common_cold',
    name: 'Common Cold',
    symptoms: ['cold', 'cough', 'sore_throat', 'headache', 'sneezing', 'runny_nose', 'mild_fever'],
    weights: { cold: 4, cough: 3, sore_throat: 2, headache: 1, sneezing: 2, runny_nose: 3, mild_fever: 1 },
    specialist: 'General Physician',
  },
  {
    id: 'influenza',
    name: 'Influenza (Flu)',
    symptoms: ['fever', 'cough', 'body_ache', 'fatigue', 'headache', 'sore_throat', 'chills'],
    weights: { fever: 4, cough: 3, body_ache: 3, fatigue: 2, headache: 2, sore_throat: 1, chills: 2 },
    specialist: 'General Physician',
  },
  {
    id: 'covid19',
    name: 'COVID-19 Infection',
    symptoms: ['fever', 'cough', 'shortness_breath', 'fatigue', 'loss_taste', 'loss_smell', 'body_ache', 'sore_throat'],
    weights: { fever: 4, cough: 3, shortness_breath: 3, fatigue: 2, loss_taste: 4, loss_smell: 4, body_ache: 2, sore_throat: 2 },
    specialist: 'General Physician',
  },
  {
    id: 'pneumonia',
    name: 'Pneumonia',
    symptoms: ['fever', 'cough', 'chest_pain', 'shortness_breath', 'fatigue', 'chills'],
    weights: { fever: 4, cough: 3, chest_pain: 4, shortness_breath: 4, fatigue: 2, chills: 2 },
    specialist: 'Pulmonologist',
  },
  {
    id: 'bronchitis',
    name: 'Bronchitis',
    symptoms: ['cough', 'chest_pain', 'fatigue', 'sore_throat', 'shortness_breath', 'mild_fever'],
    weights: { cough: 4, chest_pain: 3, fatigue: 2, sore_throat: 2, shortness_breath: 2, mild_fever: 1 },
    specialist: 'Pulmonologist',
  },
  {
    id: 'asthma',
    name: 'Asthma',
    symptoms: ['shortness_breath', 'wheezing', 'cough', 'chest_tightness', 'fatigue'],
    weights: { shortness_breath: 5, wheezing: 5, cough: 2, chest_tightness: 4, fatigue: 1 },
    specialist: 'Pulmonologist',
  },
  {
    id: 'migraine',
    name: 'Migraine',
    symptoms: ['headache', 'nausea', 'dizziness', 'sensitivity_to_light', 'blurred_vision'],
    weights: { headache: 5, nausea: 3, dizziness: 2, sensitivity_to_light: 3, blurred_vision: 2 },
    specialist: 'Neurologist',
  },
  {
    id: 'sinusitis',
    name: 'Sinusitis',
    symptoms: ['headache', 'facial_pain', 'runny_nose', 'nasal_congestion', 'sore_throat', 'fever'],
    weights: { headache: 3, facial_pain: 4, runny_nose: 3, nasal_congestion: 3, sore_throat: 2, fever: 1 },
    specialist: 'ENT Specialist',
  },
  {
    id: 'gastritis',
    name: 'Gastritis',
    symptoms: ['stomach_pain', 'bloating', 'nausea', 'vomiting', 'indigestion', 'loss_appetite'],
    weights: { stomach_pain: 4, bloating: 2, nausea: 3, vomiting: 2, indigestion: 3, loss_appetite: 2 },
    specialist: 'Gastroenterologist',
  },
  {
    id: 'food_poisoning',
    name: 'Food Poisoning',
    symptoms: ['nausea', 'vomiting', 'diarrhea', 'stomach_pain', 'fever', 'dehydration'],
    weights: { nausea: 3, vomiting: 3, diarrhea: 4, stomach_pain: 3, fever: 1, dehydration: 2 },
    specialist: 'Gastroenterologist',
  },
  {
    id: 'ulcer',
    name: 'Peptic Ulcer Disease',
    symptoms: ['stomach_pain', 'heartburn', 'indigestion', 'nausea', 'loss_appetite', 'vomiting_blood'],
    weights: { stomach_pain: 5, heartburn: 3, indigestion: 3, nausea: 2, loss_appetite: 2, vomiting_blood: 4 },
    specialist: 'Gastroenterologist',
  },
  {
    id: 'appendicitis',
    name: 'Appendicitis',
    symptoms: ['abdominal_pain', 'fever', 'nausea', 'vomiting', 'loss_appetite', 'abdominal_swelling'],
    weights: { abdominal_pain: 5, fever: 2, nausea: 2, vomiting: 3, loss_appetite: 3, abdominal_swelling: 3 },
    requiresWeight: true,
    specialist: 'General Surgeon',
  },
  {
    id: 'diabetes',
    name: 'Type 2 Diabetes Mellitus',
    symptoms: ['frequent_urination', 'increased_thirst', 'fatigue','diabetes' ,'blurred_vision', 'slow_healing_wounds', 'weight_loss'],
    weights: { frequent_urination: 4, increased_thirst: 4, fatigue: 3, blurred_vision: 2, slow_healing_wounds: 3, weight_loss: 2 },
    requiresWeight: true,
    specialist: 'Endocrinologist',
  },
  {
    id: 'hypertension',
    name: 'Hypertension (High Blood Pressure)',
    symptoms: ['headache', 'dizziness', 'fatigue', 'blurred_vision', 'chest_pain'],
    weights: { headache: 3, dizziness: 2, fatigue: 2, blurred_vision: 2, chest_pain: 3 },
    specialist: 'Cardiologist',
  },
  {
    id: 'heart_disease',
    name: 'Coronary Artery Disease',
    symptoms: ['chest_pain', 'shortness_breath', 'fatigue', 'sweating', 'nausea', 'dizziness'],
    weights: { chest_pain: 5, shortness_breath: 4, fatigue: 3, sweating: 2, nausea: 2, dizziness: 3 },
    requiresWeight: true,
    specialist: 'Cardiologist',
  },
  {
    id: 'stroke',
    name: 'Stroke',
    symptoms: ['dizziness', 'slurred_speech', 'weakness_one_side', 'facial_drooping', 'headache', 'loss_balance'],
    weights: { dizziness: 3, slurred_speech: 5, weakness_one_side: 5, facial_drooping: 5, headache: 2, loss_balance: 3 },
    specialist: 'Neurologist',
  },
  {
    id: 'anemia',
    name: 'Anemia',
    symptoms: ['fatigue', 'pale_skin', 'dizziness', 'shortness_breath', 'cold_hands_feet', 'weakness'],
    weights: { fatigue: 4, pale_skin: 3, dizziness: 3, shortness_breath: 2, cold_hands_feet: 2, weakness: 3 },
    specialist: 'Hematologist',
  },
  {
    id: 'arthritis',
    name: 'Arthritis',
    symptoms: ['joint_pain', 'joint_swelling', 'stiffness', 'fatigue', 'body_ache'],
    weights: { joint_pain: 5, joint_swelling: 4, stiffness: 3, fatigue: 2, body_ache: 2 },
    specialist: 'Rheumatologist',
  },
  {
    id: 'urinary_tract_infection',
    name: 'Urinary Tract Infection (UTI)',
    symptoms: ['burning_urination', 'frequent_urination', 'foul_urine', 'lower_abdominal_pain', 'fever'],
    weights: { burning_urination: 5, frequent_urination: 4, foul_urine: 3, lower_abdominal_pain: 2, fever: 2 },
    specialist: 'Urologist',
  },
  {
    id: 'kidney_stones',
    name: 'Kidney Stones',
    symptoms: ['severe_back_pain', 'blood_in_urine', 'burning_urination', 'nausea', 'vomiting', 'fever'],
    weights: { severe_back_pain: 5, blood_in_urine: 4, burning_urination: 3, nausea: 2, vomiting: 2, fever: 1 },
    requiresWeight: true,
    specialist: 'Urologist',
  },
  {
    id: 'hepatitis',
    name: 'Hepatitis',
    symptoms: ['jaundice', 'fatigue', 'abdominal_pain', 'dark_urine', 'loss_appetite', 'nausea'],
    weights: { jaundice: 5, fatigue: 3, abdominal_pain: 3, dark_urine: 4, loss_appetite: 3, nausea: 2 },
    specialist: 'Gastroenterologist',
  },
  {
    id: 'malaria',
    name: 'Malaria',
    symptoms: ['fever', 'chills', 'sweating', 'headache', 'nausea', 'vomiting', 'fatigue'],
    weights: { fever: 5, chills: 5, sweating: 4, headache: 2, nausea: 2, vomiting: 2, fatigue: 3 },
    requiresWeight: true,
    specialist: 'Infectious Disease Specialist',
  },
  {
    id: 'typhoid',
    name: 'Typhoid Fever',
    symptoms: ['fever', 'abdominal_pain', 'loss_appetite', 'headache', 'constipation', 'fatigue'],
    weights: { fever: 5, abdominal_pain: 4, loss_appetite: 3, headache: 2, constipation: 2, fatigue: 3 },
    specialist: 'Infectious Disease Specialist',
  },
  {
    id: 'depression',
    name: 'Depression',
    symptoms: ['sadness', 'loss_interest', 'fatigue', 'insomnia', 'loss_appetite', 'hopelessness'],
    weights: { sadness: 5, loss_interest: 4, fatigue: 3, insomnia: 3, loss_appetite: 2, hopelessness: 5 },
    specialist: 'Psychiatrist',
  },
  {
    id: 'anxiety',
    name: 'Generalized Anxiety Disorder',
    symptoms: ['restlessness', 'palpitations', 'sweating', 'insomnia', 'shortness_breath', 'fatigue'],
    weights: { restlessness: 4, palpitations: 4, sweating: 3, insomnia: 3, shortness_breath: 2, fatigue: 2 },
    specialist: 'Psychiatrist',
  },
  {
    id: 'eczema',
    name: 'Eczema (Atopic Dermatitis)',
    symptoms: ['itching', 'red_rash', 'dry_skin', 'cracking_skin', 'swelling'],
    weights: { itching: 5, red_rash: 4, dry_skin: 3, cracking_skin: 2, swelling: 2 },
    specialist: 'Dermatologist',
  },
  {
    id: 'psoriasis',
    name: 'Psoriasis',
    symptoms: ['red_rash', 'scaly_skin', 'itching', 'joint_pain', 'cracking_skin'],
    weights: { red_rash: 5, scaly_skin: 4, itching: 3, joint_pain: 2, cracking_skin: 2 },
    specialist: 'Dermatologist',
  },
  {
    id: 'contact_dermatitis',
    name: 'Contact Dermatitis',
    symptoms: ['red_rash', 'itching', 'swelling', 'blisters', 'burning_sensation'],
    weights: { red_rash: 5, itching: 4, swelling: 3, blisters: 3, burning_sensation: 2 },
    specialist: 'Dermatologist',
  },
  {
    id: 'hives',
    name: 'Hives (Urticaria)',
    symptoms: ['red_rash', 'itching', 'swelling', 'burning_sensation', 'skin_flare'],
    weights: { red_rash: 4, itching: 5, swelling: 3, burning_sensation: 2, skin_flare: 3 },
    specialist: 'Allergist',
  },
  {
    id: 'fungal_infection',
    name: 'Fungal Skin Infection',
    symptoms: ['itching', 'red_rash', 'scaly_skin', 'blisters', 'cracking_skin'],
    weights: { itching: 5, red_rash: 4, scaly_skin: 3, blisters: 2, cracking_skin: 2 },
    specialist: 'Dermatologist',
  },
  {
    id: 'pcod',
    name: 'Polycystic Ovary Disease (PCOD)',
    symptoms: ['irregular_periods', 'weight_gain', 'acne', 'hair_growth', 'fatigue'],
    weights: { irregular_periods: 5, weight_gain: 4, acne: 3, hair_growth: 4, fatigue: 2 },
    requiresWeight: true,
    specialist: 'Endocrinologist',
  },
  {
    id: 'hypothyroidism',
    name: 'Hypothyroidism',
    symptoms: ['fatigue', 'weight_gain', 'cold_intolerance', 'dry_skin', 'hair_loss'],
    weights: { fatigue: 5, weight_gain: 4, cold_intolerance: 3, dry_skin: 3, hair_loss: 3 },
    requiresWeight: true,
    specialist: 'Endocrinologist',
  },
  {
    id: 'hyperthyroidism',
    name: 'Hyperthyroidism',
    symptoms: ['weight_loss', 'palpitations', 'sweating', 'anxiety', 'fatigue'],
    weights: { weight_loss: 5, palpitations: 4, sweating: 3, anxiety: 3, fatigue: 2 },
    requiresWeight: true,
    specialist: 'Endocrinologist',
  },
  {
    id: 'menstrual_disorder',
    name: 'Menstrual Irregularities',
    symptoms: ['irregular_periods', 'painful_periods', 'heavy_bleeding', 'fatigue', 'bloating'],
    weights: { irregular_periods: 5, painful_periods: 4, heavy_bleeding: 4, fatigue: 3, bloating: 2 },
    requiresWeight: true,
    specialist: 'Gynecologist',
  },
  {
    id: 'conjunctivitis',
    name: 'Conjunctivitis (Pink Eye)',
    symptoms: ['red_eyes', 'itching', 'tearing', 'discharge', 'swelling'],
    weights: { red_eyes: 5, itching: 4, tearing: 3, discharge: 3, swelling: 2 },
    specialist: 'Ophthalmologist',
  },
  {
    id: 'otitis_media',
    name: 'Middle Ear Infection (Otitis Media)',
    symptoms: ['ear_pain', 'hearing_loss', 'fever', 'discharge', 'irritability'],
    weights: { ear_pain: 5, hearing_loss: 4, fever: 3, discharge: 2, irritability: 2 },
    specialist: 'ENT Specialist',
  },
  {
    id: 'glaucoma',
    name: 'Glaucoma',
    symptoms: ['blurred_vision', 'eye_pain', 'headache', 'nausea', 'vision_loss'],
    weights: { blurred_vision: 5, eye_pain: 4, headache: 3, nausea: 2, vision_loss: 5 },
    specialist: 'Ophthalmologist',
  },
  {
    id: 'cataract',
    name: 'Cataract',
    symptoms: ['blurred_vision', 'glare_vision', 'fading_colors', 'poor_night_vision', 'eye_discomfort'],
    weights: { blurred_vision: 5, glare_vision: 4, fading_colors: 3, poor_night_vision: 3, eye_discomfort: 2 },
    specialist: 'Ophthalmologist',
  },
  {
    id: 'allergic_conjunctivitis',
    name: 'Allergic Conjunctivitis',
    symptoms: ['red_eyes', 'itching', 'tearing', 'swelling', 'sneezing'],
    weights: { red_eyes: 5, itching: 4, tearing: 3, swelling: 2, sneezing: 2 },
    specialist: 'Ophthalmologist',
  },
  {
    id: 'copd',
    name: 'Chronic Obstructive Pulmonary Disease (COPD)',
    symptoms: ['shortness_breath', 'chronic_cough', 'wheezing', 'fatigue', 'chest_tightness'],
    weights: { shortness_breath: 5, chronic_cough: 4, wheezing: 4, fatigue: 3, chest_tightness: 3 },
    specialist: 'Pulmonologist',
  },
  {
    id: 'sleep_apnea',
    name: 'Obstructive Sleep Apnea',
    symptoms: ['snoring', 'daytime_sleepiness', 'morning_headache', 'restless_sleep', 'shortness_breath'],
    weights: { snoring: 5, daytime_sleepiness: 5, morning_headache: 3, restless_sleep: 4, shortness_breath: 3 },
    requiresWeight: true,
    specialist: 'Pulmonologist',
  },
  {
    id: 'heart_failure',
    name: 'Heart Failure',
    symptoms: ['shortness_breath', 'fatigue', 'swelling_legs', 'chest_pain', 'rapid_heartbeat'],
    weights: { shortness_breath: 5, fatigue: 4, swelling_legs: 4, chest_pain: 3, rapid_heartbeat: 3 },
    requiresWeight: true,
    specialist: 'Cardiologist',
  },
  {
    id: 'arrhythmia',
    name: 'Cardiac Arrhythmia',
    symptoms: ['palpitations', 'dizziness', 'shortness_breath', 'chest_pain', 'fatigue'],
    weights: { palpitations: 5, dizziness: 3, shortness_breath: 3, chest_pain: 3, fatigue: 2 },
    specialist: 'Cardiologist',
  },
  {
    id: 'peripheral_artery_disease',
    name: 'Peripheral Artery Disease (PAD)',
    symptoms: ['leg_pain', 'numbness_legs', 'cold_feet', 'weakness', 'fatigue'],
    weights: { leg_pain: 5, numbness_legs: 4, cold_feet: 3, weakness: 3, fatigue: 2 },
    specialist: 'Cardiologist',
  },
  {
    id: 'epilepsy',
    name: 'Epilepsy',
    symptoms: ['seizures', 'loss_consciousness', 'confusion', 'staring_spells', 'muscle_twitching'],
    weights: { seizures: 5, loss_consciousness: 4, confusion: 3, staring_spells: 2, muscle_twitching: 3 },
    specialist: 'Neurologist',
  },
  {
    id: 'parkinsons',
    name: 'Parkinson’s Disease',
    symptoms: ['tremor', 'rigidity', 'slow_movement', 'balance_problems', 'fatigue'],
    weights: { tremor: 5, rigidity: 4, slow_movement: 4, balance_problems: 3, fatigue: 2 },
    specialist: 'Neurologist',
  },
  {
    id: 'multiple_sclerosis',
    name: 'Multiple Sclerosis (MS)',
    symptoms: ['numbness', 'tingling', 'vision_problems', 'fatigue', 'muscle_weakness'],
    weights: { numbness: 5, tingling: 4, vision_problems: 4, fatigue: 3, muscle_weakness: 4 },
    requiresWeight: true,
    specialist: 'Neurologist',
  },
  {
    id: 'alzheimers',
    name: 'Alzheimer’s Disease',
    symptoms: ['memory_loss', 'confusion', 'difficulty_speaking', 'disorientation', 'mood_swings'],
    weights: { memory_loss: 5, confusion: 4, difficulty_speaking: 3, disorientation: 3, mood_swings: 2 },
    specialist: 'Neurologist',
  },
  {
    id: 'ibs',
    name: 'Irritable Bowel Syndrome (IBS)',
    symptoms: ['abdominal_pain', 'bloating', 'diarrhea', 'constipation', 'mucus_in_stool'],
    weights: { abdominal_pain: 5, bloating: 4, diarrhea: 3, constipation: 3, mucus_in_stool: 2 },
    specialist: 'Gastroenterologist',
  },
  {
    id: 'crohns_disease',
    name: 'Crohn’s Disease',
    symptoms: ['abdominal_pain', 'diarrhea', 'weight_loss', 'fatigue', 'blood_in_stool'],
    weights: { abdominal_pain: 5, diarrhea: 4, weight_loss: 4, fatigue: 3, blood_in_stool: 3 },
    specialist: 'Gastroenterologist',
  },
  {
    id: 'ulcerative_colitis',
    name: 'Ulcerative Colitis',
    symptoms: ['diarrhea', 'blood_in_stool', 'abdominal_pain', 'urgency_to_defecate', 'fatigue'],
    weights: { diarrhea: 5, blood_in_stool: 4, abdominal_pain: 4, urgency_to_defecate: 3, fatigue: 3 },
    specialist: 'Gastroenterologist',
  },
  {
    id: 'chronic_hepatitis',
    name: 'Chronic Hepatitis',
    symptoms: ['jaundice', 'fatigue', 'loss_appetite', 'dark_urine', 'abdominal_pain'],
    weights: { jaundice: 5, fatigue: 4, loss_appetite: 3, dark_urine: 3, abdominal_pain: 3 },
    specialist: 'Gastroenterologist',
  },
  {
    id: 'ckd',
    name: 'Chronic Kidney Disease (CKD)',
    symptoms: ['fatigue', 'swelling_legs', 'loss_appetite', 'nausea', 'frequent_urination', 'high_blood_pressure'],
    weights: { fatigue: 4, swelling_legs: 4, loss_appetite: 3, nausea: 3, frequent_urination: 3, high_blood_pressure: 4 },
    specialist: 'Nephrologist',
  },
  {
    id: 'chronic_uti',
    name: 'Chronic Urinary Tract Infection',
    symptoms: ['frequent_urination', 'burning_urination', 'lower_abdominal_pain', 'cloudy_urine', 'fever'],
    weights: { frequent_urination: 5, burning_urination: 5, lower_abdominal_pain: 3, cloudy_urine: 3, fever: 2 },
    specialist: 'Urologist',
  },
  {
    id: 'nephrolithiasis',
    name: 'Kidney Stones (Nephrolithiasis)',
    symptoms: ['severe_back_pain', 'blood_in_urine', 'nausea', 'vomiting', 'frequent_urination'],
    weights: { severe_back_pain: 5, blood_in_urine: 4, nausea: 3, vomiting: 3, frequent_urination: 2 },
    specialist: 'Urologist',
  },
  {
    id: 'obesity',
    name: 'Obesity',
    symptoms: ['weight_gain', 'fatigue', 'joint_pain', 'shortness_breath', 'sleep_apnea'],
    weights: { weight_gain: 5, fatigue: 3, joint_pain: 3, shortness_breath: 3, sleep_apnea: 4 },
    requiresWeight: true,
    specialist: 'Endocrinologist',
  },
  {
    id: 'metabolic_syndrome',
    name: 'Metabolic Syndrome',
    symptoms: ['weight_gain', 'high_blood_pressure', 'high_blood_sugar', 'high_cholesterol', 'fatigue'],
    weights: { weight_gain: 5, high_blood_pressure: 4, high_blood_sugar: 4, high_cholesterol: 3, fatigue: 3 },
    requiresWeight: true,
    specialist: 'Endocrinologist',
  },
  {
    id: 'hyperlipidemia',
    name: 'Hyperlipidemia',
    symptoms: ['high_cholesterol', 'fatigue', 'xanthomas', 'chest_pain', 'shortness_breath'],
    weights: { high_cholesterol: 5, fatigue: 3, xanthomas: 3, chest_pain: 3, shortness_breath: 2 },
    requiresWeight: true,
    specialist: 'Cardiologist',
  },
  {
    id: 'dengue',
    name: 'Dengue Fever',
    symptoms: ['fever', 'headache', 'muscle_pain', 'joint_pain', 'rash', 'nausea', 'vomiting', 'fatigue'],
    weights: { fever: 5, headache: 4, muscle_pain: 4, joint_pain: 4, rash: 3, nausea: 3, vomiting: 3, fatigue: 3 },
    specialist: 'Infectious Disease Specialist',
  },
  {
    id: 'chikungunya',
    name: 'Chikungunya',
    symptoms: ['fever', 'joint_pain', 'muscle_pain', 'rash', 'fatigue', 'headache'],
    weights: { fever: 5, joint_pain: 5, muscle_pain: 3, rash: 3, fatigue: 3, headache: 2 },
    specialist: 'Infectious Disease Specialist',
  },
  {
    id: 'zika',
    name: 'Zika Virus Infection',
    symptoms: ['fever', 'rash', 'joint_pain', 'conjunctivitis', 'headache', 'fatigue'],
    weights: { fever: 4, rash: 5, joint_pain: 3, conjunctivitis: 4, headache: 3, fatigue: 2 },
    specialist: 'Infectious Disease Specialist',
  },
  {
    id: 'tuberculosis',
    name: 'Tuberculosis (TB)',
    symptoms: ['persistent_cough', 'weight_loss', 'fever', 'night_sweats', 'fatigue', 'chest_pain', 'coughing_blood'],
    weights: { persistent_cough: 5, weight_loss: 4, fever: 3, night_sweats: 3, fatigue: 3, chest_pain: 2, coughing_blood: 5 },
    specialist: 'Pulmonologist',
  },
  {
    id: 'leprosy',
    name: 'Leprosy (Hansen’s Disease)',
    symptoms: ['skin_lesions', 'numbness', 'muscle_weakness', 'thickened_nerves', 'loss_sensation'],
    weights: { skin_lesions: 5, numbness: 4, muscle_weakness: 3, thickened_nerves: 4, loss_sensation: 4 },
    specialist: 'Dermatologist',
  },
  {
    id: 'hiv',
    name: 'HIV/AIDS',
    symptoms: ['fatigue', 'weight_loss', 'fever', 'night_sweats', 'swollen_lymph_nodes', 'recurrent_infections'],
    weights: { fatigue: 4, weight_loss: 4, fever: 3, night_sweats: 3, swollen_lymph_nodes: 3, recurrent_infections: 5 },
    specialist: 'Infectious Disease Specialist',
  },
  {
    id: 'cystic_fibrosis',
    name: 'Cystic Fibrosis',
    symptoms: ['persistent_cough', 'frequent_lung_infections', 'poor_growth', 'salty_skin', 'shortness_breath'],
    weights: { persistent_cough: 5, frequent_lung_infections: 5, poor_growth: 4, salty_skin: 3, shortness_breath: 4 },
    specialist: 'Pulmonologist',
  },
  {
    id: 'hemophilia',
    name: 'Hemophilia',
    symptoms: ['excessive_bleeding', 'easy_brusing', 'joint_pain', 'swelling', 'nosebleeds'],
    requiresWeight: true,
    weights: { excessive_bleeding: 5, easy_brusing: 4, joint_pain: 3, swelling: 3, nosebleeds: 2 },
    specialist: 'Hematologist',
  },
  {
    id: 'sickle_cell_anemia',
    name: 'Sickle Cell Anemia',
    symptoms: ['fatigue', 'pain_crisis', 'swelling_hands_feet', 'frequent_infections', 'delayed_growth'],
    weights: { fatigue: 5, pain_crisis: 5, swelling_hands_feet: 3, frequent_infections: 3, delayed_growth: 2 },
    specialist: 'Hematologist',
  },
  {
    id: 'muscular_dystrophy',
    name: 'Muscular Dystrophy',
    symptoms: ['muscle_weakness', 'difficulty_walking', 'fatigue', 'muscle_wasting', 'balance_problems'],
    weights: { muscle_weakness: 5, difficulty_walking: 4, fatigue: 3, muscle_wasting: 5, balance_problems: 3 },
    specialist: 'Neurologist',
  },
];


export const MEDICINES: Record<string, Medicine[]> = {
  common_cold: [
    { id: 'med1', name: 'Saline Nasal Drops', ageGroups: [ 'Infant'], dosage: { low: '1 drop', medium: '2 drops', high: '3 drops' }, timing: 'Every 4–6 hours', instructions: 'Relieves nasal blockage; ensure sterile dropper.' },
    { id: 'med2', name: 'Cetirizine (Zyrtec)', ageGroups: [ 'Child'], dosage: { low: '2.5mg', medium: '5mg', high: '10mg' }, timing: 'Once daily', instructions: 'For sneezing and runny nose; avoid overdose.' },
    { id: 'med3', name: 'Paracetamol (Crocin, Tylenol)', ageGroups: [ 'Adult'], dosage: { low: '500mg', medium: '650mg', high: '1000mg' }, timing: 'Every 6 hours as needed', instructions: 'For fever and body pain; do not exceed 4g/day.' },
    { id: 'med4', name: 'Paracetamol + Levocetirizine (D Cold Total)', ageGroups: [ 'Middle Age'], dosage: { low: '325/5mg', medium: '500/5mg', high: '650/10mg' }, timing: 'Twice daily', instructions: 'For comprehensive cold relief; hydrate well.' },
    { id: 'med5', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Please consult a specialist due to possible comorbidities.' }
  ],

  influenza: [
    { id: 'med6', name: 'Oseltamivir (Tamiflu)', ageGroups: [ 'Child'], dosage: { low: '30mg', medium: '45mg', high: '60mg' }, timing: 'Twice daily for 5 days', instructions: 'Effective if started within 48h of symptom onset.' },
    { id: 'med7', name: 'Oseltamivir (Tamiflu)', ageGroups: [ 'Adult'], dosage: { low: '75mg', medium: '75mg', high: '75mg' }, timing: 'Twice daily for 5 days', instructions: 'Reduces flu severity; complete full course.' },
    { id: 'med8', name: 'Baloxavir Marboxil (Xofluza)', ageGroups: [ 'Teen'], dosage: { low: '40mg', medium: '80mg', high: '80mg' }, timing: 'Single dose', instructions: 'Alternative antiviral; take under physician guidance.' },
    { id: 'med9', name: 'Paracetamol (Crocin, Tylenol)', ageGroups: [ 'Middle Age'], dosage: { low: '500mg', medium: '650mg', high: '1000mg' }, timing: 'Every 6 hours as needed', instructions: 'For fever and pain relief.' },
    { id: 'med10', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Flu antivirals and vaccines under doctor’s advice.' }
  ],

  covid19: [
    { id: 'med11', name: 'Paracetamol (Tylenol)', ageGroups: [ 'Child'], dosage: { low: '10mg/kg', medium: '15mg/kg', high: '20mg/kg' }, timing: 'Every 6 hours as needed', instructions: 'For fever; monitor temperature regularly.' },
    { id: 'med12', name: 'Azithromycin (Azithral)', ageGroups: [ 'Adult'], dosage: { low: '250mg', medium: '500mg', high: '500mg' }, timing: 'Once daily for 5 days', instructions: 'Used when bacterial co-infection suspected.' },
    { id: 'med13', name: 'Vitamin C + Zinc Tablets', ageGroups: [ 'Teen'], dosage: { low: '500mg/20mg', medium: '1000mg/40mg', high: '1000mg/40mg' }, timing: 'Twice daily', instructions: 'Supports immunity; hydration important.' },
    { id: 'med14', name: 'Dexamethasone', ageGroups: [ 'Middle Age'], dosage: { low: '2mg', medium: '4mg', high: '6mg' }, timing: 'Once daily', instructions: 'For severe inflammation under hospital supervision.' },
    { id: 'med15', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Supervised hospital care essential for elderly COVID-19.' }
  ],

  pneumonia: [
    { id: 'med16', name: 'Amoxicillin (Amoxil)', ageGroups: [ 'Child'], dosage: { low: '40mg/kg', medium: '80mg/kg', high: '90mg/kg' }, timing: 'Twice daily for 5 days', instructions: 'First-line antibiotic for bacterial pneumonia.' },
    { id: 'med17', name: 'Amoxicillin-Clavulanate (Augmentin)', ageGroups: [ 'Adult'], dosage: { low: '625mg', medium: '875mg', high: '1000mg' }, timing: 'Twice daily', instructions: 'Effective against resistant bacterial strains.' },
    { id: 'med18', name: 'Azithromycin (Zithromax)', ageGroups: [ 'Teen'], dosage: { low: '250mg', medium: '500mg', high: '500mg' }, timing: 'Once daily for 5 days', instructions: 'For atypical pneumonia (Mycoplasma).' },
    { id: 'med19', name: 'Ceftriaxone (IV)', ageGroups: [ 'Middle Age'], dosage: { low: '1g', medium: '2g', high: '2g' }, timing: 'Every 24 hours', instructions: 'For severe community-acquired pneumonia.' },
    { id: 'med20', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Hospital care required for pneumonia in elderly.' }
  ],

  bronchitis: [
    { id: 'med21', name: 'Terbutaline (Bricanyl)', ageGroups: [ 'Teen'], dosage: { low: '2.5mg', medium: '5mg', high: '15mg' }, timing: 'Three times daily', instructions: 'Relieves wheezing and breathlessness; avoid in infants under 12 years.' },
    { id: 'med22', name: 'Aminophylline (Phyllocontin)', ageGroups: [ 'Adult'], dosage: { low: '380mg', medium: '500mg', high: '760mg' }, timing: 'Every 6–8 hours', instructions: 'Bronchodilator; maintain regular blood level monitoring.' },
    { id: 'med23', name: 'Dextromethorphan (Robitussin DM)', ageGroups: [ 'Child'], dosage: { low: '7.5mg', medium: '15mg', high: '30mg' }, timing: 'Every 6–8 hours as needed', instructions: 'Cough suppressant; avoid in children below 6 years.' },
    { id: 'med24', name: 'Salbutamol Inhaler (Ventolin)', ageGroups: [ 'Middle Age'], dosage: { low: '1 puff (90mcg)', medium: '2 puffs', high: '2 puffs' }, timing: 'Every 4–6 hours', instructions: 'Rescue inhaler for wheezing; do not exceed recommended frequency.' },
    { id: 'med25', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Older adults require physician-reviewed bronchodilator adjustment.' }
  ],

  asthma: [
    { id: 'med26', name: 'Salbutamol (Ventolin HFA)', ageGroups: [ 'Child'], dosage: { low: '90mcg', medium: '180mcg', high: '360mcg' }, timing: 'Every 4–6 hours as needed', instructions: 'Rescue inhaler; avoid overuse.' },
    { id: 'med27', name: 'Fluticasone Propionate (Flovent)', ageGroups: [ 'Teen'], dosage: { low: '50mcg', medium: '110mcg', high: '220mcg' }, timing: 'Twice daily', instructions: 'Inhaled corticosteroid for long-term control.' },
    { id: 'med28', name: 'Budesonide + Formoterol (Symbicort)', ageGroups: [ 'Adult'], dosage: { low: '80/4.5mcg', medium: '160/4.5mcg', high: '160/9mcg' }, timing: 'Two inhalations twice daily', instructions: 'Combination for control; rinse mouth after use.' },
    { id: 'med29', name: 'Montelukast (Singulair)', ageGroups: [ 'Middle Age'], dosage: { low: '5mg', medium: '10mg', high: '10mg' }, timing: 'Once daily in evening', instructions: 'Leukotriene receptor antagonist; helpful in allergy-induced asthma.' },
    { id: 'med30', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Inhaled and systemic steroid adjustment under pulmonary specialist.' }
  ],

  migraine: [
    { id: 'med31', name: 'Paracetamol (Tylenol)', ageGroups: [ 'Child'], dosage: { low: '250mg', medium: '500mg', high: '650mg' }, timing: 'Every 6 hours as needed', instructions: 'For mild migraine pain.' },
    { id: 'med32', name: 'Topiramate (Topamax)', ageGroups: [ 'Teen'], dosage: { low: '50mg', medium: '100mg', high: '200mg' }, timing: 'In two divided doses', instructions: 'Preventive; weight-based dosing may apply (2–3mg/kg/day).' },
    { id: 'med33', name: 'Amitriptyline', ageGroups: [ 'Adult'], dosage: { low: '10mg', medium: '25mg', high: '50mg' }, timing: 'At bedtime', instructions: 'Prevents chronic migraines; monitor sedation.' },
    { id: 'med34', name: 'Sumatriptan (Imitrex)', ageGroups: [ 'Middle Age'], dosage: { low: '25mg', medium: '50mg', high: '100mg' }, timing: 'Once at migraine onset, repeat after 2 hours if needed', instructions: 'Abortive therapy for severe migraine.' },
    { id: 'med35', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Triptans require cardiovascular risk evaluation.' }
  ],

  sinusitis: [
    { id: 'med36', name: 'Amoxicillin-Clavulanate (Augmentin)', ageGroups: [ 'Child'], dosage: { low: '45mg/kg', medium: '90mg/kg', high: '90mg/kg' }, timing: 'Twice daily', instructions: 'Antibiotic for bacterial sinusitis; high dose if resistant strain suspected.' },
    { id: 'med37', name: 'Amoxicillin-Clavulanate (Augmentin)', ageGroups: [ 'Adult'], dosage: { low: '500/125mg', medium: '875/125mg', high: '875/125mg' }, timing: 'Twice daily for 7 days', instructions: 'For bacterial sinus infection treatment.' },
    { id: 'med38', name: 'Fluticasone Nasal Spray (Flonase)', ageGroups: [ 'Teen'], dosage: { low: '50mcg', medium: '100mcg', high: '200mcg' }, timing: 'Once daily', instructions: 'Relieves nasal pressure; avoid prolonged use.' },
    { id: 'med39', name: 'Cetirizine (Zyrtec)', ageGroups: [ 'Middle Age'], dosage: { low: '5mg', medium: '10mg', high: '10mg' }, timing: 'Once daily', instructions: 'For allergy-related sinus congestion.' },
    { id: 'med40', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Consider ENT evaluation for recurrent sinusitis.' }
  ],

  gastritis: [
    { id: 'med41', name: 'Omeprazole (Prilosec)', ageGroups: [ 'Adult'], dosage: { low: '20mg', medium: '40mg', high: '60mg' }, timing: 'Once daily before meals', instructions: 'Proton pump inhibitor for acid control.' },
    { id: 'med42', name: 'Pantoprazole (Protonix)', ageGroups: [ 'Middle Age'], dosage: { low: '40mg', medium: '80mg', high: '80mg' }, timing: 'Once daily', instructions: 'For GERD or gastritis; avoid chronic overuse.' },
    { id: 'med43', name: 'Amoxicillin + Clarithromycin + Metronidazole', ageGroups: [ 'Adult'], dosage: { low: '500mg each', medium: '1000mg each', high: '1000mg each' }, timing: 'Twice daily for 7–14 days', instructions: 'Triple therapy for H. pylori eradication.' },
    { id: 'med44', name: 'Ranitidine (Zantac)', ageGroups: [ 'Teen'], dosage: { low: '150mg', medium: '300mg', high: '300mg' }, timing: 'Twice daily', instructions: 'H2 blocker; avoid long-term use.' },
    { id: 'med45', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Infant gastritis requires specialist pediatric evaluation.' }
  ],

  food_poisoning: [
    { id: 'med46', name: 'Activated Charcoal', ageGroups: [ 'Adult'], dosage: { low: '1 capsule', medium: '2 capsules', high: '2 capsules' }, timing: 'Twice daily', instructions: 'Absorbs gastrointestinal toxins.' },
    { id: 'med47', name: 'Metoclopramide (Reglan)', ageGroups: [ 'Teen'], dosage: { low: '5mg', medium: '10mg', high: '10mg' }, timing: 'Three times daily before meals', instructions: 'Controls nausea and vomiting.' },
    { id: 'med48', name: 'ORS (Oral Rehydration Solution)', ageGroups: [ 'Child'], dosage: { low: '100mL', medium: '200mL', high: '300mL' }, timing: 'After each loose stool', instructions: 'Prevents dehydration; essential therapy.' },
    { id: 'med49', name: 'Loperamide (Imodium)', ageGroups: [ 'Middle Age'], dosage: { low: '2mg', medium: '4mg', high: '8mg' }, timing: 'Every 4–6 hours as needed', instructions: 'For diarrhea; not for bloody stools.' },
    { id: 'med50', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Infant diarrhea requires hospital hydration and monitoring.' }
  ],

  ulcer: [
    { id: 'med51', name: 'Omeprazole (Prilosec)', ageGroups: [ 'Adult'], dosage: { low: '20mg', medium: '40mg', high: '60mg' }, timing: 'Once daily before meals', instructions: 'Reduces acid production; duration 4–8 weeks.' },
    { id: 'med52', name: 'Ranitidine (Zantac)', ageGroups: [ 'Teen'], dosage: { low: '150mg', medium: '300mg', high: '300mg' }, timing: 'Twice daily', instructions: 'Alternative H2 blocker; effective for mild ulcers.' },
    { id: 'med53', name: 'Amoxicillin + Clarithromycin + PPI', ageGroups: [ 'Adult'], dosage: { low: '500mg each', medium: '1000mg each', high: '1000mg each' }, timing: 'Twice daily for 14 days', instructions: 'Eradicates H. pylori; part of triple therapy.' },
    { id: 'med54', name: 'Sucralfate (Carafate)', ageGroups: [ 'Middle Age'], dosage: { low: '1g', medium: '1g', high: '2g' }, timing: 'Four times daily on empty stomach', instructions: 'Protects ulcer surface; take separately from other meds.' },
    { id: 'med55', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Ulcers in infants need pediatric gastroenterologist care.' }
  ],

  appendicitis: [
    { id: 'med56', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Surgical emergency; no self-treatment.' },
    { id: 'med57', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Immediate surgical evaluation required.' },
    { id: 'med58', name: 'Ceftriaxone + Metronidazole (IV)', ageGroups: [ 'Adult'], dosage: { low: '1g/500mg', medium: '2g/500mg', high: '2g/1g' }, timing: 'Before surgery', instructions: 'Preoperative antibiotic prophylaxis.' },
    { id: 'med59', name: 'Piperacillin-Tazobactam (Zosyn)', ageGroups: [ 'Middle Age'], dosage: { low: '2.25g', medium: '3.375g', high: '4.5g' }, timing: 'Every 8 hours IV', instructions: 'Broad-spectrum coverage for complicated cases.' },
    { id: 'med60', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Hospital management essential.' }
  ],

  diabetes: [
    { id: 'med61', name: 'Metformin (Glucophage)', ageGroups: [ 'Adult'], dosage: { low: '500mg', medium: '850mg', high: '1000mg' }, timing: 'Twice daily with food', instructions: 'First-line oral drug for Type 2 diabetes.' },
    { id: 'med62', name: 'Glipizide (Glucotrol XL)', ageGroups: [ 'Middle Age'], dosage: { low: '5mg', medium: '10mg', high: '20mg' }, timing: 'Once daily with breakfast', instructions: 'Stimulates insulin secretion; avoid missed meals.' },
    { id: 'med63', name: 'Insulin Glargine (Lantus)', ageGroups: [ 'Teen'], dosage: { low: '5 units', medium: '10 units', high: '20 units' }, timing: 'Once daily at bedtime', instructions: 'Basal insulin for glycemic control.' },
    { id: 'med64', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Type 1 diabetes needs pediatric endocrinologist supervision.' },
    { id: 'med65', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Metabolic disorders managed in neonatal ICU only.' }
  ],

  hypertension: [
    { id: 'med66', name: 'Amlodipine (Norvasc)', ageGroups: [ 'Adult'], dosage: { low: '2.5mg', medium: '5mg', high: '10mg' }, timing: 'Once daily', instructions: 'Calcium channel blocker for BP control.' },
    { id: 'med67', name: 'Lisinopril (Prinivil)', ageGroups: [ 'Middle Age'], dosage: { low: '5mg', medium: '10mg', high: '40mg' }, timing: 'Once daily', instructions: 'ACE inhibitor; monitor kidney function.' },
    { id: 'med68', name: 'Losartan (Cozaar)', ageGroups: [ 'Senior'], dosage: { low: '25mg', medium: '50mg', high: '100mg' }, timing: 'Once daily', instructions: 'ARB; preferred in diabetic hypertensives.' },
    { id: 'med69', name: 'Hydrochlorothiazide (Microzide)', ageGroups: [ 'Adult'], dosage: { low: '12.5mg', medium: '25mg', high: '50mg' }, timing: 'Morning once daily', instructions: 'Diuretic; monitor electrolytes.' },
    { id: 'med70', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Pediatric hypertension needs specialist care.' }
  ],

  heart_disease: [
    { id: 'med71', name: 'Aspirin (Ecosprin)', ageGroups: [ 'Adult'], dosage: { low: '75mg', medium: '150mg', high: '325mg' }, timing: 'Once daily', instructions: 'Antiplatelet for heart attack prevention.' },
    { id: 'med72', name: 'Atorvastatin (Lipitor)', ageGroups: [ 'Middle Age'], dosage: { low: '10mg', medium: '20mg', high: '40mg' }, timing: 'Nightly', instructions: 'Reduces LDL cholesterol; liver monitoring needed.' },
    { id: 'med73', name: 'Carvedilol (Coreg)', ageGroups: [ 'Senior'], dosage: { low: '6.25mg', medium: '12.5mg', high: '25mg' }, timing: 'Twice daily', instructions: 'Beta-blocker for heart failure.' },
    { id: 'med74', name: 'Digoxin (Lanoxin)', ageGroups: [ 'Senior'], dosage: { low: '0.125mg', medium: '0.25mg', high: '0.25mg' }, timing: 'Once daily', instructions: 'Improves contractility; monitor toxic symptoms.' },
    { id: 'med75', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Congenital heart disease needs pediatric cardiologist follow-up.' }
  ],

  stroke: [
    { id: 'med76', name: 'Aspirin', ageGroups: [ 'Adult'], dosage: { low: '75mg', medium: '150mg', high: '300mg' }, timing: 'Once daily', instructions: 'First-line antiplatelet for ischemic stroke.' },
    { id: 'med77', name: 'Clopidogrel (Plavix)', ageGroups: [ 'Middle Age'], dosage: { low: '75mg', medium: '75mg', high: '150mg' }, timing: 'Once daily', instructions: 'Prevents recurrent stroke episodes.' },
    { id: 'med78', name: 'Alteplase (tPA)', ageGroups: [ 'Adult'], dosage: { low: '0.6mg/kg', medium: '0.9mg/kg', high: '0.9mg/kg' }, timing: 'Single IV infusion within 4.5 hours', instructions: 'Thrombolytic for acute ischemic stroke.' },
    { id: 'med79', name: 'Atorvastatin', ageGroups: [ 'Senior'], dosage: { low: '10mg', medium: '40mg', high: '80mg' }, timing: 'Once daily', instructions: 'Lipid-lowering post-stroke therapy.' },
    { id: 'med80', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Stroke in infants requires neuroimaging and pediatric management.' }
  ],

  anemia: [
    { id: 'med81', name: 'Ferrous Sulfate + Folic Acid (IFA tablets)', ageGroups: [ 'Child'], dosage: { low: '45mg/400mcg', medium: '60mg/500mcg', high: '100mg/500mcg' }, timing: 'Once daily after meals', instructions: 'Iron supplementation as per national guidelines.' },
    { id: 'med82', name: 'Ferrous Ascorbate (Fefol)', ageGroups: [ 'Adult'], dosage: { low: '100mg', medium: '200mg', high: '200mg' }, timing: 'Once or twice daily', instructions: 'For mild to moderate anemia.' },
    { id: 'med83', name: 'Folic Acid Tablets', ageGroups: [ 'Teen'], dosage: { low: '400mcg', medium: '500mcg', high: '5mg' }, timing: 'Once daily', instructions: 'Supports RBC formation; used in nutritional anemia.' },
    { id: 'med84', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Requires pediatric dosing and tests for hemoglobinopathies.' },
    { id: 'med85', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Elderly anemia needs Vitamin B12 and renal assessment.' }
  ],

  arthritis: [
    { id: 'med86', name: 'Ibuprofen (Brufen)', ageGroups: [ 'Adult'], dosage: { low: '200mg', medium: '400mg', high: '600mg' }, timing: 'Every 8 hours as needed', instructions: 'NSAID for pain; take after food.' },
    { id: 'med87', name: 'Naproxen (Naprosyn)', ageGroups: [ 'Middle Age'], dosage: { low: '250mg', medium: '500mg', high: '500mg' }, timing: 'Twice daily', instructions: 'Anti-inflammatory for joint stiffness.' },
    { id: 'med88', name: 'Methotrexate', ageGroups: [ 'Adult'], dosage: { low: '7.5mg', medium: '15mg', high: '25mg' }, timing: 'Once weekly', instructions: 'DMARD for rheumatoid arthritis; monitor liver.' },
    { id: 'med89', name: 'Hydroxychloroquine (Plaquenil)', ageGroups: [ 'Senior'], dosage: { low: '200mg', medium: '400mg', high: '400mg' }, timing: 'Daily', instructions: 'Long-term DMARD for joint inflammation.' },
    { id: 'med90', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Juvenile arthritis requires pediatric rheumatologist care.' }
  ],

  urinary_tract_infection: [
    { id: 'med91', name: 'Nitrofurantoin (Macrobid)', ageGroups: [ 'Adult'], dosage: { low: '50mg', medium: '100mg', high: '100mg' }, timing: 'Twice daily for 5 days', instructions: 'Effective for cystitis; take with food.' },
    { id: 'med92', name: 'Ciprofloxacin (Cifran)', ageGroups: [ 'Middle Age'], dosage: { low: '250mg', medium: '500mg', high: '750mg' }, timing: 'Twice daily for 5 days', instructions: 'Broad antibiotic; not for children.' },
    { id: 'med93', name: 'Amoxicillin-Clavulanate (Augmentin)', ageGroups: [ 'Child'], dosage: { low: '20mg/kg', medium: '40mg/kg', high: '45mg/kg' }, timing: 'Twice daily', instructions: 'For pediatric UTI; maintain hydration.' },
    { id: 'med94', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Requires urine culture and hospital observation.' },
    { id: 'med95', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Elderly UTI may need IV antibiotics.' }
  ],

  kidney_stones: [
    { id: 'med96', name: 'Tamsulosin (Flomax)', ageGroups: [ 'Adult'], dosage: { low: '0.4mg', medium: '0.8mg', high: '0.8mg' }, timing: 'Once daily after meals', instructions: 'Relaxes ureter muscles to ease stone passage.' },
    { id: 'med97', name: 'Potassium Citrate (Urocit-K)', ageGroups: [ 'Middle Age'], dosage: { low: '10mEq', medium: '20mEq', high: '30mEq' }, timing: 'Twice daily', instructions: 'Prevents stone recurrence by alkalinizing urine.' },
    { id: 'med98', name: 'Diclofenac (Voveran)', ageGroups: [ 'Adult'], dosage: { low: '50mg', medium: '75mg', high: '100mg' }, timing: 'Every 8 hours as needed', instructions: 'For renal colic pain.' },
    { id: 'med99', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Pediatric stone management under nephrologist care.' },
    { id: 'med100', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Monitor renal function regularly with urologist.' }
  ],

  hepatitis: [
    { id: 'med101', name: 'Entecavir (Baraclude)', ageGroups: [ 'Adult'], dosage: { low: '0.5mg', medium: '1mg', high: '1mg' }, timing: 'Once daily', instructions: 'For chronic Hepatitis B; take on empty stomach.' },
    { id: 'med102', name: 'Tenofovir Disoproxil (Viread)', ageGroups: [ 'Middle Age'], dosage: { low: '300mg', medium: '300mg', high: '300mg' }, timing: 'Once daily', instructions: 'Antiviral for HBV/HIV; monitor renal function.' },
    { id: 'med103', name: 'Sofosbuvir + Velpatasvir (Epclusa)', ageGroups: [ 'Adult'], dosage: { low: '400/100mg', medium: '400/100mg', high: '400/100mg' }, timing: 'Once daily for 12 weeks', instructions: 'For Hepatitis C virus eradication.' },
    { id: 'med104', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Pediatric hepatitis antiviral therapy under hepatology review.' },
    { id: 'med105', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Elderly patients require close liver monitoring.' }
  ],

  malaria: [
    { id: 'med106', name: 'Artemether-Lumefantrine (Coartem)', ageGroups: [ 'Adult'], dosage: { low: '4 tabs', medium: '6 tabs', high: '6 tabs' }, timing: 'Twice daily for 3 days', instructions: 'First-line ACT therapy for uncomplicated malaria.' },
    { id: 'med107', name: 'Chloroquine Phosphate', ageGroups: [ 'Child'], dosage: { low: '10mg/kg', medium: '10mg/kg', high: '10mg/kg' }, timing: 'Once daily for 3 days', instructions: 'For chloroquine-sensitive strains.' },
    { id: 'med108', name: 'Primaquine', ageGroups: [ 'Adult'], dosage: { low: '15mg', medium: '30mg', high: '30mg' }, timing: 'Once daily for 14 days', instructions: 'Targets liver hypnozoites; check G6PD status.' },
    { id: 'med109', name: 'Quinine Sulfate', ageGroups: [ 'Middle Age'], dosage: { low: '324mg', medium: '648mg', high: '648mg' }, timing: 'Every 8 hours for 7 days', instructions: 'Used for resistant falciparum cases.' },
    { id: 'med110', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Hospital management required for neonatal malaria.' }
  ],

  typhoid: [
    { id: 'med111', name: 'Cefixime (Suprax)', ageGroups: [ 'Child'], dosage: { low: '8mg/kg', medium: '12mg/kg', high: '12mg/kg' }, timing: 'Twice daily for 7 days', instructions: 'Oral antibiotic for uncomplicated typhoid.' },
    { id: 'med112', name: 'Azithromycin (Zithromax)', ageGroups: [ 'Adult'], dosage: { low: '500mg', medium: '1000mg', high: '1000mg' }, timing: 'Once daily for 7 days', instructions: 'For resistant typhoid strains.' },
    { id: 'med113', name: 'Ceftriaxone (IV)', ageGroups: [ 'Middle Age'], dosage: { low: '1g', medium: '2g', high: '2g' }, timing: 'Once daily for 10 days', instructions: 'Hospitalized severe cases; broad coverage.' },
    { id: 'med114', name: 'Ofloxacin (Oflox)', ageGroups: [ 'Adult'], dosage: { low: '200mg', medium: '400mg', high: '400mg' }, timing: 'Twice daily for 7 days', instructions: 'Alternative fluoroquinolone for sensitive strains.' },
    { id: 'med115', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Monitor hydration and hepatic function.' }
  ],

  depression: [
    { id: 'med116', name: 'Fluoxetine (Prozac)', ageGroups: [ 'Teen'], dosage: { low: '10mg', medium: '20mg', high: '40mg' }, timing: 'Once daily in the morning', instructions: 'SSRI; approved for depression in ages ≥8 years.' },
    { id: 'med117', name: 'Sertraline (Zoloft)', ageGroups: [ 'Adult'], dosage: { low: '25mg', medium: '50mg', high: '200mg' }, timing: 'Once daily', instructions: 'Common SSRI; start low and titrate per response.' },
    { id: 'med118', name: 'Escitalopram (Lexapro)', ageGroups: [ 'Middle Age'], dosage: { low: '10mg', medium: '20mg', high: '20mg' }, timing: 'Once daily', instructions: 'Useful for major depression; avoid abrupt stop.' },
    { id: 'med119', name: 'Mirtazapine (Remeron)', ageGroups: [ 'Senior'], dosage: { low: '7.5mg', medium: '15mg', high: '30mg' }, timing: 'At bedtime', instructions: 'For depression with insomnia and appetite loss.' },
    { id: 'med120', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Psychiatric evaluation essential; no antidepressants in infants.' }
  ],

  anxiety: [
    { id: 'med121', name: 'Duloxetine (Cymbalta)', ageGroups: [ 'Teen'], dosage: { low: '30mg', medium: '60mg', high: '120mg' }, timing: 'Once daily', instructions: 'Approved for generalized anxiety in ages ≥7 years.' },
    { id: 'med122', name: 'Sertraline (Zoloft)', ageGroups: [ 'Adult'], dosage: { low: '25mg', medium: '50mg', high: '200mg' }, timing: 'Once daily', instructions: 'Effective for panic and social anxiety disorders.' },
    { id: 'med123', name: 'Buspirone (Buspar)', ageGroups: [ 'Middle Age'], dosage: { low: '5mg', medium: '10mg', high: '15mg' }, timing: 'Twice daily', instructions: 'Non-benzodiazepine anxiolytic; slower onset of effect.' },
    { id: 'med124', name: 'Lorazepam (Ativan)', ageGroups: [ 'Senior'], dosage: { low: '0.5mg', medium: '1mg', high: '2mg' }, timing: 'As needed', instructions: 'Short-acting benzodiazepine; use minimal duration.' },
    { id: 'med125', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Requires specialist supervision for any psychotropic use.' }
  ],

  eczema: [
    { id: 'med126', name: 'Hydrocortisone Cream 1%', ageGroups: [ 'Child'], dosage: { low: 'Thin layer', medium: 'Twice daily', high: 'Not advised higher' }, timing: 'Once or twice daily', instructions: 'Mild topical steroid; short-term use.' },
    { id: 'med127', name: 'Tacrolimus (Protopic 0.03%)', ageGroups: [ 'Teen'], dosage: { low: 'Apply small amount', medium: 'Twice daily', high: 'Not applicable' }, timing: 'Twice daily', instructions: 'Calcineurin inhibitor; avoids steroid side effects.' },
    { id: 'med128', name: 'Crisaborole (Eucrisa)', ageGroups: [ 'Adult'], dosage: { low: 'Thin film', medium: 'Twice daily', high: 'Twice daily' }, timing: 'Morning and evening', instructions: 'Nonsteroidal PDE-4 inhibitor for mild eczema.' },
    { id: 'med129', name: 'Upadacitinib (Rinvoq)', ageGroups: [ 'Middle Age'], dosage: { low: '15mg', medium: '30mg', high: '30mg' }, timing: 'Once daily', instructions: 'JAK inhibitor for moderate to severe eczema; ≥12 years.' },
    { id: 'med130', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Use only mild emollients; specialist dermatology care needed.' }
  ],

  psoriasis: [
    { id: 'med131', name: 'Methotrexate', ageGroups: [ 'Adult'], dosage: { low: '7.5mg', medium: '15mg', high: '25mg' }, timing: 'Once weekly', instructions: 'Systemic agent for severe chronic plaque psoriasis.' },
    { id: 'med132', name: 'Calcipotriol Cream', ageGroups: [ 'Adult'], dosage: { low: 'Apply small amount', medium: 'Twice daily', high: 'Twice daily' }, timing: 'Twice daily', instructions: 'Vitamin D analog; normalize keratinocyte growth.' },
    { id: 'med133', name: 'Adalimumab (Humira)', ageGroups: [ 'Middle Age'], dosage: { low: '40mg', medium: '80mg', high: '80mg' }, timing: 'Every 2 weeks subcutaneously', instructions: 'Anti-TNF biologic for moderate–severe forms.' },
    { id: 'med134', name: 'Clobetasol Propionate 0.05%', ageGroups: [ 'Teen'], dosage: { low: 'Thin layer', medium: 'Twice daily', high: 'Avoid >2 weeks continuous use' }, timing: 'Once or twice daily', instructions: 'High-potency topical steroid; taper after improvement.' },
    { id: 'med135', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Avoid systemic drugs in infants.' }
  ],

  contact_dermatitis: [
    { id: 'med136', name: 'Hydrocortisone 1% Cream', ageGroups: [ 'Child'], dosage: { low: 'Thin layer', medium: 'Twice daily', high: 'Not advised higher' }, timing: 'Once–twice daily', instructions: 'Anti-inflammatory; use with moisturizers.' },
    { id: 'med137', name: 'Betamethasone 0.1%', ageGroups: [ 'Adult'], dosage: { low: 'Thin layer', medium: 'Twice daily', high: 'Twice daily' }, timing: 'Morning and evening', instructions: 'For thickened rashes; limit use to 7 days.' },
    { id: 'med138', name: 'Tacrolimus Ointment 0.1%', ageGroups: [ 'Middle Age'], dosage: { low: 'Apply small amount', medium: 'Twice daily', high: 'Twice daily' }, timing: 'Twice daily', instructions: 'For steroid-sensitive areas like face and folds.' },
    { id: 'med139', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Infant dermatitis requires pediatric care to identify allergens.' },
    { id: 'med140', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Elderly skin is fragile; avoid potent steroids without consultation.' }
  ],

  hives: [
    { id: 'med141', name: 'Fexofenadine (Allegra)', ageGroups: [ 'Adult'], dosage: { low: '60mg', medium: '180mg', high: '180mg' }, timing: 'Once daily', instructions: 'Second-generation antihistamine for itch and swelling.' },
    { id: 'med142', name: 'Desloratadine (Clarinex)', ageGroups: [ 'Child'], dosage: { low: '2.5mg', medium: '5mg', high: '5mg' }, timing: 'Once daily', instructions: 'Non-sedating antihistamine; age 6+ suitable.' },
    { id: 'med143', name: 'Cetirizine (Zyrtec)', ageGroups: [ 'Teen'], dosage: { low: '5mg', medium: '10mg', high: '10mg' }, timing: 'Once daily', instructions: 'Fast-acting antihistamine for acute urticaria.' },
    { id: 'med144', name: 'Hydroxyzine (Atarax)', ageGroups: [ 'Middle Age'], dosage: { low: '10mg', medium: '25mg', high: '50mg' }, timing: 'Every 6 hours as needed', instructions: 'For nighttime itching; causes sedation.' },
    { id: 'med145', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Requires allergy and safety evaluation.' }
  ],

  fungal_infection: [
    { id: 'med146', name: 'Fluconazole (Diflucan)', ageGroups: [ 'Adult'], dosage: { low: '150mg', medium: '200mg', high: '400mg' }, timing: 'Once daily or weekly', instructions: 'Systemic antifungal for candidiasis or ringworm.' },
    { id: 'med147', name: 'Topical Clotrimazole 1%', ageGroups: [ 'Child'], dosage: { low: 'Thin layer', medium: 'Twice daily', high: 'Twice daily' }, timing: 'Every 12 hours', instructions: 'Broad antifungal cream for tinea and skin fungi.' },
    { id: 'med148', name: 'Itraconazole (Sporanox)', ageGroups: [ 'Middle Age'], dosage: { low: '100mg', medium: '200mg', high: '400mg' }, timing: 'Once daily after food', instructions: 'For dermatophyte and systemic infections.' },
    { id: 'med149', name: 'Griseofulvin', ageGroups: [ 'Teen'], dosage: { low: '250mg', medium: '500mg', high: '1000mg' }, timing: 'Daily for 6–8 weeks', instructions: 'For scalp infections (tinea capitis).' },
    { id: 'med150', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Infant fungal infection requires pediatrician diagnosis.' }
  ],

   pcod: [
    { id: 'med151', name: 'Metformin (Glucophage)', ageGroups: [ 'Adult'], dosage: { low: '500mg', medium: '1000mg', high: '1500mg' }, timing: 'Twice or thrice daily with meals', instructions: 'Improves insulin sensitivity and ovulation.' },
    { id: 'med152', name: 'Clomiphene Citrate (Clomid)', ageGroups: [ 'Adult'], dosage: { low: '50mg', medium: '100mg', high: '150mg' }, timing: 'Once daily on cycle days 3–7', instructions: 'Stimulates ovulation; used under supervision.' },
    { id: 'med153', name: 'Dydrogesterone (Duphaston)', ageGroups: [ 'Middle Age'], dosage: { low: '10mg', medium: '20mg', high: '20mg' }, timing: 'Twice daily (second half of cycle)', instructions: 'Restores menstrual regularity.' },
    { id: 'med154', name: 'Doctor prescription required for this age group', ageGroups: [ 'Teen'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Endocrine assessment for PCOD advised.' },
    { id: 'med155', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Menopausal women do not require PCOD therapy.' }
  ],

  hypothyroidism: [
    { id: 'med156', name: 'Levothyroxine (Synthroid)', ageGroups: [ 'Adult'], dosage: { low: '25mcg', medium: '50mcg', high: '100mcg' }, timing: 'Once daily in the morning before food', instructions: 'Adjust dose based on TSH every 6 weeks.' },
    { id: 'med157', name: 'Levothyroxine', ageGroups: [ 'Senior'], dosage: { low: '12.5mcg', medium: '25mcg', high: '50mcg' }, timing: 'Once daily', instructions: 'Start low; titrate carefully to avoid cardiac strain.' },
    { id: 'med158', name: 'Levothyroxine', ageGroups: [ 'Child'], dosage: { low: '25mcg', medium: '50mcg', high: '75mcg' }, timing: 'Once daily', instructions: 'Weight-based for pediatric hypothyroidism.' },
    { id: 'med159', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Congenital hypothyroidism requires endocrinologist.' },
    { id: 'med160', name: 'Doctor prescription required for this age group', ageGroups: [ 'Middle Age'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Requires regular thyroid function testing.' }
  ],

  hyperthyroidism: [
    { id: 'med161', name: 'Methimazole (Tapazole)', ageGroups: [ 'Adult'], dosage: { low: '5mg', medium: '10mg', high: '30mg' }, timing: 'Once or twice daily', instructions: 'First-line antithyroid agent; monitor liver function.' },
    { id: 'med162', name: 'Propylthiouracil (PTU)', ageGroups: [ 'Adult'], dosage: { low: '100mg', medium: '150mg', high: '300mg' }, timing: 'Every 8 hours', instructions: 'Preferred in first trimester pregnancy.' },
    { id: 'med163', name: 'Propranolol', ageGroups: [ 'Teen'], dosage: { low: '10mg', medium: '20mg', high: '40mg' }, timing: 'Three times daily', instructions: 'Controls tremor and palpitations.' },
    { id: 'med164', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Pediatric endocrine specialist required.' },
    { id: 'med165', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Radioiodine therapy often preferred in elderly.' }
  ],

  menstrual_disorder: [
    { id: 'med166', name: 'Mefenamic Acid (Ponstel)', ageGroups: [ 'Adult'], dosage: { low: '250mg', medium: '500mg', high: '500mg' }, timing: 'Every 8 hours during menses', instructions: 'NSAID for pain relief; take after food.' },
    { id: 'med167', name: 'Dydrogesterone (Duphaston)', ageGroups: [ 'Adult'], dosage: { low: '10mg', medium: '20mg', high: '20mg' }, timing: 'Once or twice daily', instructions: 'For irregular cycle regulation.' },
    { id: 'med168', name: 'Tranexamic Acid (Pause)', ageGroups: [ 'Adult'], dosage: { low: '250mg', medium: '500mg', high: '1000mg' }, timing: 'Three times daily during heavy bleeding', instructions: 'Reduces menstrual blood loss.' },
    { id: 'med169', name: 'Combined Oral Contraceptive (Ethinyl Estradiol + Drospirenone)', ageGroups: [ 'Adult'], dosage: { low: 'One tablet', medium: 'One tablet', high: 'One tablet' }, timing: 'Daily, same time each day', instructions: 'Cycle regulation and ovulation suppression.' },
    { id: 'med170', name: 'Doctor prescription required for this age group', ageGroups: [ 'Teen'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Evaluate for PCOD or thyroid dysfunction before therapy.' }
  ],

  conjunctivitis: [
    { id: 'med171', name: 'Ciprofloxacin Eye Drops (Ciloxan)', ageGroups: [ 'Adult'], dosage: { low: '1 drop', medium: '1–2 drops', high: '1–2 drops' }, timing: 'Every 2–4 hours for 5 days', instructions: 'For bacterial conjunctivitis; avoid touching dropper tip.' },
    { id: 'med172', name: 'Ofloxacin Eye Drops (Ocuflox)', ageGroups: [ 'Teen'], dosage: { low: '1 drop', medium: '2 drops', high: '2 drops' }, timing: 'Every 2 hours first 2 days, then every 4 hours', instructions: 'Broad-spectrum antibiotic for bacterial eye infections.' },
    { id: 'med173', name: 'Carboxymethylcellulose (Refresh Tears)', ageGroups: [ 'Adult'], dosage: { low: '1 drop', medium: '2 drops', high: '2 drops' }, timing: 'As needed', instructions: 'For dryness relief in viral or allergic conjunctivitis.' },
    { id: 'med174', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Use pediatric-formulated antibiotic drops only.' },
    { id: 'med175', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Neonatal conjunctivitis requires immediate specialized treatment.' }
  ],

  otitis_media: [
    { id: 'med176', name: 'Amoxicillin (Amoxil)', ageGroups: [ 'Child'], dosage: { low: '40mg/kg', medium: '80mg/kg', high: '90mg/kg' }, timing: 'Twice daily for 10 days', instructions: 'First-line antibiotic per pediatric guidelines.' },
    { id: 'med177', name: 'Amoxicillin-Clavulanate (Augmentin)', ageGroups: [ 'Adult'], dosage: { low: '625mg', medium: '875mg', high: '1000mg' }, timing: 'Twice daily', instructions: 'Used in recurrent otitis media.' },
    { id: 'med178', name: 'Cefdinir (Omnicef)', ageGroups: [ 'Teen'], dosage: { low: '14mg/kg', medium: '14mg/kg', high: '14mg/kg' }, timing: 'Twice daily for 5–10 days', instructions: 'Cephalosporin alternative for penicillin-allergic children.' },
    { id: 'med179', name: 'Paracetamol (Crocin)', ageGroups: [ 'All ages'], dosage: { low: '10mg/kg', medium: '15mg/kg', high: '20mg/kg' }, timing: 'Every 6 hours as needed', instructions: 'Pain and fever relief.' },
    { id: 'med180', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Otitis media in infants needs ENT evaluation.' }
  ],

  glaucoma: [
    { id: 'med181', name: 'Latanoprost (Xalatan)', ageGroups: [ 'Adult'], dosage: { low: '1 drop', medium: '1 drop', high: '1 drop' }, timing: 'Nightly', instructions: 'Prostaglandin analog; reduces intraocular pressure.' },
    { id: 'med182', name: 'Timolol (Timoptic)', ageGroups: [ 'Adult'], dosage: { low: '1 drop', medium: '1 drop', high: '1 drop' }, timing: 'Twice daily', instructions: 'Beta-blocker for open-angle glaucoma.' },
    { id: 'med183', name: 'Brimonidine (Alphagan)', ageGroups: [ 'Middle Age'], dosage: { low: '1 drop', medium: '1 drop', high: '1 drop' }, timing: 'Three times daily', instructions: 'Reduces aqueous humor production.' },
    { id: 'med184', name: 'Dorzolamide + Timolol (Cosopt)', ageGroups: [ 'Senior'], dosage: { low: '1 drop', medium: '1 drop', high: '1 drop' }, timing: 'Twice daily', instructions: 'Combination therapy for advanced cases.' },
    { id: 'med185', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Congenital glaucoma requires surgical intervention.' }
  ],

  
  cataract: [
    { id: 'med186', name: 'Prednisolone Eye Drops', ageGroups: [ 'Adult'], dosage: { low: '1 drop', medium: '1 drop', high: '1 drop' }, timing: '4 times daily for 2 weeks post surgery', instructions: 'Reduces inflammation after surgery.' },
    { id: 'med187', name: 'Moxifloxacin Eye Drops', ageGroups: [ 'Adult'], dosage: { low: '1 drop', medium: '1 drop', high: '1 drop' }, timing: '4 times daily for 1 week post surgery', instructions: 'Antibiotic prophylaxis.' },
    { id: 'med188', name: 'NSAIDs (Ketorolac)', ageGroups: [ 'Adult'], dosage: { low: '1 drop', medium: '1 drop', high: '1 drop' }, timing: '3 times daily post surgery', instructions: 'Pain and inflammation control.' },
    { id: 'med189', name: 'Artificial tears', ageGroups: [ 'All Ages'], dosage: { low: 'As needed', medium: 'As needed', high: 'As needed' }, timing: 'As required', instructions: 'Relieves dryness and irritation.' },
    { id: 'med190', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Pediatric cataracts require specialist care.' }
  ],

  allergic_conjunctivitis: [
    { id: 'med191', name: 'Olopatadine Eye Drops', ageGroups: [ 'Adult'], dosage: { low: '1 drop', medium: '1 drop', high: '1 drop' }, timing: 'Twice daily', instructions: 'Antihistamine and mast cell stabilizer.' },
    { id: 'med192', name: 'Ketotifen Eye Drops', ageGroups: [ 'Child'], dosage: { low: '1 drop', medium: '1-2 drops', high: '2 drops' }, timing: 'Twice daily', instructions: 'For itching and redness.' },
    { id: 'med193', name: 'Artificial tears', ageGroups: [ 'All Ages'], dosage: { low: 'As needed', medium: 'As needed', high: 'As needed' }, timing: 'As required', instructions: 'Dilutes allergens and soothes.' },
    { id: 'med194', name: 'Prednisolone Eye Drops', ageGroups: [ 'Adult'], dosage: { low: '1 drop', medium: '1 drop', high: '1 drop' }, timing: 'Short term 2–3 times daily', instructions: 'Use only under ophthalmologist supervision.' },
    { id: 'med195', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Requires specialist pediatric evaluation.' }
  ],

  copd: [
    { id: 'med196', name: 'Tiotropium (Spiriva)', ageGroups: [ 'Adult'], dosage: { low: '18mcg', medium: '18mcg', high: '18mcg' }, timing: 'Once daily inhalation', instructions: 'Long-acting anticholinergic bronchodilator.' },
    { id: 'med197', name: 'Formoterol (Foradil)', ageGroups: [ 'Adult'], dosage: { low: '12mcg', medium: '24mcg', high: '24mcg' }, timing: 'Twice daily inhalation', instructions: 'Long-acting beta2 agonist for symptom relief.' },
    { id: 'med198', name: 'Budesonide (Pulmicort)', ageGroups: [ 'Adult'], dosage: { low: '180mcg', medium: '360mcg', high: '720mcg' }, timing: 'Twice daily inhalation', instructions: 'Inhaled corticosteroid to reduce inflammation.' },
    { id: 'med199', name: 'Prednisone', ageGroups: [ 'Adult'], dosage: { low: '5mg', medium: '10mg', high: '40mg' }, timing: 'Oral daily during exacerbations', instructions: 'Short course systemic steroid during flare-ups.' },
    { id: 'med200', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Requires pulmonary specialist management.' }
  ],

  sleep_apnea: [
    { id: 'med201', name: 'Modafinil (Provigil)', ageGroups: [ 'Adult'], dosage: { low: '100mg', medium: '200mg', high: '200mg' }, timing: 'Once daily in the morning', instructions: 'Used for excessive sleepiness.' },
    { id: 'med202', name: 'Armodafinil (Nuvigil)', ageGroups: [ 'Adult'], dosage: { low: '50mg', medium: '150mg', high: '250mg' }, timing: 'Once daily', instructions: 'Improves wakefulness.' },
    { id: 'med203', name: 'CPAP device', ageGroups: [ 'All Ages'], dosage: { low: '-', medium: '-', high: '-' }, timing: 'Nightly during sleep', instructions: 'Gold standard for obstructive sleep apnea.' },
    { id: 'med204', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Pediatric sleep apnea requires specialist evaluation.' },
    { id: 'med205', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Elderly patients require cardiac and respiratory clearance.' }
  ],

  heart_failure: [
    { id: 'med206', name: 'Lisinopril (Prinivil)', ageGroups: [ 'Adult'], dosage: { low: '2.5mg', medium: '10mg', high: '40mg' }, timing: 'Once daily', instructions: 'ACE inhibitor reduces mortality.' },
    { id: 'med207', name: 'Carvedilol (Coreg)', ageGroups: [ 'Adult'], dosage: { low: '3.125mg', medium: '25mg', high: '50mg' }, timing: 'Twice daily', instructions: 'Beta-blocker for heart failure.' },
    { id: 'med208', name: 'Spironolactone', ageGroups: [ 'Middle Age'], dosage: { low: '12.5mg', medium: '25mg', high: '50mg' }, timing: 'Once daily', instructions: 'Aldosterone antagonist; monitor potassium.' },
    { id: 'med209', name: 'Furosemide (Lasix)', ageGroups: [ 'Adult'], dosage: { low: '20mg', medium: '40mg', high: '80mg' }, timing: 'Once or twice daily', instructions: 'Diuretic for fluid overload.' },
    { id: 'med210', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Frailty needs individualized drug dosing.' }
  ],

  arrhythmia: [
    { id: 'med211', name: 'Amiodarone', ageGroups: [ 'Adult'], dosage: { low: '200mg', medium: '400mg', high: '600mg' }, timing: 'Once daily', instructions: 'Antiarrhythmic with thyroid/liver monitoring.' },
    { id: 'med212', name: 'Beta-blockers (Metoprolol)', ageGroups: [ 'Adult'], dosage: { low: '25mg', medium: '50mg', high: '100mg' }, timing: 'Twice daily', instructions: 'Slows heart rate; commonly used.' },
    { id: 'med213', name: 'Verapamil', ageGroups: [ 'Middle Age'], dosage: { low: '120mg', medium: '240mg', high: '480mg' }, timing: 'Once or twice daily', instructions: 'Calcium channel blocker for rate control.' },
    { id: 'med214', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Pediatric arrhythmias managed by pediatric cardiologist.' },
    { id: 'med215', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Requires tailored dosing to avoid toxicity.' }
  ],

  peripheral_artery_disease: [
    { id: 'med216', name: 'Aspirin', ageGroups: [ 'Adult'], dosage: { low: '75mg', medium: '100mg', high: '325mg' }, timing: 'Once daily', instructions: 'Antiplatelet to reduce clot risk.' },
    { id: 'med217', name: 'Clopidogrel', ageGroups: [ 'Adult'], dosage: { low: '75mg', medium: '75mg', high: '75mg' }, timing: 'Once daily', instructions: 'Alternative antiplatelet agent.' },
    { id: 'med218', name: 'Cilostazol', ageGroups: [ 'Middle Age'], dosage: { low: '50mg', medium: '100mg', high: '100mg' }, timing: 'Twice daily', instructions: 'Improves walking distance in claudication.' },
    { id: 'med219', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Manage comorbidities with specialist input.' },
    { id: 'med220', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Rare, needs pediatric vascular specialist.' }
  ],

  epilepsy: [
    { id: 'med221', name: 'Carbamazepine (Tegretol)', ageGroups: [ 'Adult'], dosage: { low: '200mg', medium: '400mg', high: '800mg' }, timing: 'Twice daily', instructions: 'Start low and titrate; monitor blood counts.' },
    { id: 'med222', name: 'Valproate (Depakote)', ageGroups: [ 'Adult'], dosage: { low: '250mg', medium: '500mg', high: '1000mg' }, timing: 'Twice daily', instructions: 'Broad spectrum antiepileptic; monitor liver and platelets.' },
    { id: 'med223', name: 'Levetiracetam (Keppra)', ageGroups: [ 'Child'], dosage: { low: '10mg/kg', medium: '20mg/kg', high: '60mg/kg' }, timing: 'Twice daily', instructions: 'Well tolerated; adjust for renal function.' },
    { id: 'med224', name: 'Doctor prescription required for this age group', ageGroups: [ 'Infant'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Requires EEG and specialist pediatric neurology.' },
    { id: 'med225', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Polypharmacy risk; cautious dosing required.' }
  ],

  parkinsons: [
    { id: 'med226', name: 'Levodopa + Carbidopa (Sinemet)', ageGroups: [ 'Adult'], dosage: { low: '100/25mg', medium: '300/75mg', high: '600/150mg' }, timing: 'Three times daily', instructions: 'Mainstay symptomatic therapy.' },
    { id: 'med227', name: 'Pramipexole (Mirapex)', ageGroups: [ 'Adult'], dosage: { low: '0.125mg', medium: '0.75mg', high: '4.5mg' }, timing: 'Three times daily', instructions: 'Dopamine agonist; start low dose.' },
    { id: 'med228', name: 'Ropinirole (Requip)', ageGroups: [ 'Adult'], dosage: { low: '0.25mg', medium: '1.5mg', high: '24mg' }, timing: 'Three times daily', instructions: 'Alternative dopamine agonist.' },
    { id: 'med229', name: 'Amantadine', ageGroups: [ 'Senior'], dosage: { low: '100mg', medium: '200mg', high: '300mg' }, timing: 'Once or twice daily', instructions: 'Used for dyskinesia and tremor.' },
    { id: 'med230', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Juvenile Parkinsonism needs neurologist care.' }
  ],

  multiple_sclerosis: [
    { id: 'med231', name: 'Interferon Beta-1a (Avonex)', ageGroups: [ 'Adult'], dosage: { low: '30mcg', medium: '30mcg', high: '30mcg' }, timing: 'Once weekly IM injection', instructions: 'Immunomodulator delaying relapse.' },
    { id: 'med232', name: 'Fingolimod (Gilenya)', ageGroups: [ 'Adult'], dosage: { low: '0.5mg', medium: '0.5mg', high: '0.5mg' }, timing: 'Once daily', instructions: 'Oral therapy reducing relapses.' },
    { id: 'med233', name: 'Glatiramer Acetate (Copaxone)', ageGroups: [ 'Adult'], dosage: { low: '20mg', medium: '20mg', high: '40mg' }, timing: 'Daily or 3 times weekly injection', instructions: 'Immunomodulating agent.' },
    { id: 'med234', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Pediatric MS management is specialized.' },
    { id: 'med235', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Requires individualized dose and monitoring.' }
  ],

  alzheimers: [
    { id: 'med236', name: 'Donepezil (Aricept)', ageGroups: [ 'Adult'], dosage: { low: '5mg', medium: '10mg', high: '23mg' }, timing: 'Once daily at bedtime', instructions: 'Cholinesterase inhibitor; improves cognition temporarily.' },
    { id: 'med237', name: 'Memantine (Namenda)', ageGroups: [ 'Adult'], dosage: { low: '5mg', medium: '10mg', high: '20mg' }, timing: 'Once or twice daily', instructions: 'NMDA receptor antagonist for moderate to severe AD.' },
    { id: 'med238', name: 'Galantamine', ageGroups: [ 'Senior'], dosage: { low: '4mg', medium: '8mg', high: '12mg' }, timing: 'Twice daily', instructions: 'Cholinesterase inhibitor; monitor GI side effects.' },
    { id: 'med239', name: 'Rivastigmine', ageGroups: [ 'Adult'], dosage: { low: '1.5mg', medium: '3mg', high: '6mg' }, timing: 'Twice daily', instructions: 'Patch or oral; adjust for tolerance.' },
    { id: 'med240', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Alzheimer’s is adult onset; pediatric care if neurodegeneration suspected.' }
  ],

  ibs: [
    { id: 'med241', name: 'Dicyclomine (Bentyl)', ageGroups: [ 'Adult'], dosage: { low: '10mg', medium: '20mg', high: '40mg' }, timing: 'Three to four times daily', instructions: 'Antispasmodic for abdominal cramping.' },
    { id: 'med242', name: 'Loperamide (Imodium)', ageGroups: [ 'Adult'], dosage: { low: '2mg', medium: '4mg', high: '8mg' }, timing: 'After each loose stool', instructions: 'Controls diarrhea in IBS-D.' },
    { id: 'med243', name: 'Rifaximin (Xifaxan)', ageGroups: [ 'Adult'], dosage: { low: '550mg', medium: '1100mg', high: '1100mg' }, timing: 'Twice daily for 14 days', instructions: 'For IBS with bloating.' },
    { id: 'med244', name: 'Alosetron', ageGroups: [ 'Adult'], dosage: { low: '0.5mg', medium: '1mg', high: '1mg' }, timing: 'Twice daily', instructions: 'Severe IBS-D in females; restricted use.' },
    { id: 'med245', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Pediatric IBS treatment individualized.' }
  ],

  crohns_disease: [
    { id: 'med246', name: 'Mesalamine (Asacol)', ageGroups: [ 'Adult'], dosage: { low: '800mg', medium: '2400mg', high: '4000mg' }, timing: 'Two to four times daily', instructions: 'Anti-inflammatory for mild to moderate disease; works best in colon.' },
    { id: 'med247', name: 'Azathioprine (Imuran)', ageGroups: [ 'Adult'], dosage: { low: '1mg/kg', medium: '2mg/kg', high: '2.5mg/kg' }, timing: 'Once daily', instructions: 'Immunosuppressant; requires blood count and liver monitoring.' },
    { id: 'med248', name: 'Infliximab (Remicade)', ageGroups: [ 'Adult'], dosage: { low: '5mg/kg', medium: '5mg/kg', high: '10mg/kg' }, timing: 'IV infusion every 8 weeks', instructions: 'Anti-TNF biologic for moderate to severe Crohn’s disease.' },
    { id: 'med249', name: 'Budesonide (Entocort EC)', ageGroups: [ 'Adult'], dosage: { low: '9mg', medium: '9mg', high: '9mg' }, timing: 'Once daily', instructions: 'Oral corticosteroid with low systemic absorption for flares.' },
    { id: 'med250', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Pediatric Crohn’s needs specialist gastroenterologist.' }
  ],

  ulcerative_colitis: [
    { id: 'med251', name: 'Mesalamine (Pentasa)', ageGroups: [ 'Adult'], dosage: { low: '2.4g', medium: '4.8g', high: '4.8g' }, timing: 'Once to four times daily', instructions: 'Maintains remission and reduces inflammation.' },
    { id: 'med252', name: 'Prednisone', ageGroups: [ 'Adult'], dosage: { low: '20mg', medium: '40mg', high: '60mg' }, timing: 'Once daily for short course', instructions: 'For acute flares; taper slowly.' },
    { id: 'med253', name: 'Azathioprine', ageGroups: [ 'Adult'], dosage: { low: '1.5mg/kg', medium: '2mg/kg', high: '2.5mg/kg' }, timing: 'Once daily', instructions: 'Immunomodulator for maintenance.' },
    { id: 'med254', name: 'Infliximab', ageGroups: [ 'Adult'], dosage: { low: '5mg/kg', medium: '5mg/kg', high: '10mg/kg' }, timing: 'IV infusion every 8 weeks', instructions: 'Biologic for moderate to severe UC.' },
    { id: 'med255', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Requires subspecialty care.' }
  ],

  chronic_hepatitis: [
    { id: 'med256', name: 'Peginterferon alfa-2a', ageGroups: [ 'Adult'], dosage: { low: '180 mcg', medium: '180 mcg', high: '180 mcg' }, timing: 'Subcutaneous injection once weekly for 48 weeks', instructions: 'Better tolerated with fixed therapy duration; monitor blood counts and thyroid function.' },
    { id: 'med257', name: 'Tenofovir Disoproxil Fumarate', ageGroups: [ 'Adult'], dosage: { low: '300 mg', medium: '300 mg', high: '300 mg' }, timing: 'Oral once daily', instructions: 'Preferred oral antiviral for HBV; monitor renal function and bone density.' },
    { id: 'med258', name: 'Entecavir', ageGroups: [ 'Adult'], dosage: { low: '0.5 mg', medium: '0.5 mg', high: '1.0 mg' }, timing: 'Oral once daily', instructions: 'Highly potent HBV antiviral; adjust dosing if lamivudine experienced or cirrhosis present.' },
    { id: 'med259', name: 'Ribavirin', ageGroups: [ 'Adult'], dosage: { low: '800 mg', medium: '1000 mg', high: '1200 mg' }, timing: 'Oral twice daily', instructions: 'Used with interferon for chronic hepatitis C; monitor hemoglobin and pregnancy status.' },
    { id: 'med260', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Pediatric hepatitis antiviral therapy requires specialist management.' }
  ],

   ckd: [
    { id: 'med261', name: 'Lisinopril', ageGroups: [ 'Adult'], dosage: { low: '2.5mg', medium: '10mg', high: '40mg' }, timing: 'Once daily', instructions: 'Slows progression of CKD; monitor potassium and renal function.' },
    { id: 'med262', name: 'Furosemide (Lasix)', ageGroups: [ 'Adult'], dosage: { low: '20mg', medium: '40mg', high: '80mg' }, timing: 'Once or twice daily', instructions: 'Diuretic to manage fluid overload and hypertension.' },
    { id: 'med263', name: 'Erythropoietin', ageGroups: [ 'Adult'], dosage: { low: '50u/kg', medium: '100u/kg', high: '150u/kg' }, timing: '3 times weekly subcutaneous injection', instructions: 'Treats anemia secondary to CKD; monitor hemoglobin.' },
    { id: 'med264', name: 'Sevelamer', ageGroups: [ 'Adult'], dosage: { low: '800mg', medium: '1600mg', high: '3200mg' }, timing: 'With meals, 3 times daily', instructions: 'Phosphate binder to control hyperphosphatemia in CKD.' },
    { id: 'med265', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Pediatric CKD requires nephrology consultation.' }
  ],

  chronic_uti: [
    { id: 'med266', name: 'Nitrofurantoin', ageGroups: [ 'Adult'], dosage: { low: '50mg', medium: '100mg', high: '100mg' }, timing: 'Twice daily for 7-10 days', instructions: 'Effective in uncomplicated chronic UTI; avoid in renal impairment.' },
    { id: 'med267', name: 'Trimethoprim-Sulfamethoxazole', ageGroups: [ 'Adult'], dosage: { low: '80/400mg', medium: '160/800mg', high: '160/800mg' }, timing: 'Twice daily for 10-14 days', instructions: 'Broad-spectrum antibiotic; check sulfa allergy.' },
    { id: 'med268', name: 'Fosfomycin', ageGroups: [ 'Adult'], dosage: { low: '3g', medium: '3g', high: '3g' }, timing: 'Single oral dose', instructions: 'Useful for resistant organisms; repeat dosing may be needed.' },
    { id: 'med269', name: 'Ciprofloxacin', ageGroups: [ 'Adult'], dosage: { low: '250mg', medium: '500mg', high: '750mg' }, timing: 'Twice daily for 7 days', instructions: 'Fluoroquinolone with wide coverage; monitor tendinopathy risk.' },
    { id: 'med270', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Consider pediatric dosing and urine culture-directed therapy.' }
  ],

  nephrolithiasis: [
    { id: 'med271', name: 'Tamsulosin', ageGroups: [ 'Adult'], dosage: { low: '0.4mg', medium: '0.4mg', high: '0.8mg' }, timing: 'Once daily', instructions: 'Relaxes ureter musculature to facilitate stone passage.' },
    { id: 'med272', name: 'Potassium Citrate', ageGroups: [ 'Adult'], dosage: { low: '10mEq', medium: '20mEq', high: '30mEq' }, timing: 'Twice daily', instructions: 'Alkalinizes urine; used to prevent recurrent stones.' },
    { id: 'med273', name: 'Diclofenac', ageGroups: [ 'Adult'], dosage: { low: '50mg', medium: '75mg', high: '100mg' }, timing: 'Every 8 hours as needed', instructions: 'NSAID for renal colic pain management.' },
    { id: 'med274', name: 'Hydration', ageGroups: [ 'All Ages'], dosage: { low: '-', medium: '-', high: '-' }, timing: 'Ad libitum', instructions: 'Encourage increased fluid intake to aid stone passage.' },
    { id: 'med275', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Pediatric nephrolithiasis requires specialist evaluation.' }
  ],

  obesity: [
    { id: 'med276', name: 'Orlistat', ageGroups: [ 'Adult'], dosage: { low: '60mg', medium: '120mg', high: '120mg' }, timing: 'Three times daily with meals', instructions: 'Lipase inhibitor; dietary fat restriction advised.' },
    { id: 'med277', name: 'Liraglutide', ageGroups: [ 'Adult'], dosage: { low: '0.6mg', medium: '3.0mg', high: '3.0mg' }, timing: 'Once daily subcutaneous injection', instructions: 'GLP-1 analog for weight management and glycemic control.' },
    { id: 'med278', name: 'Phentermine', ageGroups: [ 'Adult'], dosage: { low: '15mg', medium: '30mg', high: '37.5mg' }, timing: 'Once daily before breakfast', instructions: 'Appetite suppressant for short term use.' },
    { id: 'med279', name: 'Counseling and Lifestyle', ageGroups: [ 'All Ages'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Crucial adjuncts to pharmacotherapy for obesity management.' },
    { id: 'med280', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Pediatric obesity requires holistic and specialist approach.' }
  ],

  metabolic_syndrome: [
    { id: 'med281', name: 'Metformin', ageGroups: [ 'Adult'], dosage: { low: '500mg', medium: '1000mg', high: '2000mg' }, timing: 'Twice daily', instructions: 'Improves insulin sensitivity; weight neutral.' },
    { id: 'med282', name: 'Atorvastatin', ageGroups: [ 'Adult'], dosage: { low: '10mg', medium: '20mg', high: '80mg' }, timing: 'Once daily', instructions: 'Lipid lowering to reduce cardiovascular risk.' },
    { id: 'med283', name: 'Lisinopril', ageGroups: [ 'Adult'], dosage: { low: '5mg', medium: '20mg', high: '40mg' }, timing: 'Once daily', instructions: 'Blood pressure control; protects kidneys.' },
    { id: 'med284', name: 'Lifestyle Modification', ageGroups: [ 'All Ages'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Diet, exercise, and weight loss are foundational.' },
    { id: 'med285', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Specialized evaluation needed for pediatric metabolic syndrome.' }
  ],

   hyperlipidemia: [
    { id: 'med286', name: 'Atorvastatin', ageGroups: [ 'Adult'], dosage: { low: '10mg', medium: '20mg', high: '80mg' }, timing: 'Once daily', instructions: 'Statin for lowering LDL cholesterol; monitor liver enzymes.' },
    { id: 'med287', name: 'Ezetimibe', ageGroups: [ 'Adult'], dosage: { low: '10mg', medium: '10mg', high: '10mg' }, timing: 'Once daily', instructions: 'Cholesterol absorption inhibitor; used with statins.' },
    { id: 'med288', name: 'Fenofibrate', ageGroups: [ 'Adult'], dosage: { low: '48mg', medium: '145mg', high: '145mg' }, timing: 'Once daily', instructions: 'Reduces triglycerides; monitor kidney function.' },
    { id: 'med289', name: 'Niacin', ageGroups: [ 'Adult'], dosage: { low: '250mg', medium: '500mg', high: '2000mg' }, timing: 'Once daily at bedtime', instructions: 'Raises HDL cholesterol; watch for flushing.' },
    { id: 'med290', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Use pediatric guidelines for familial hyperlipidemias.' }
  ],

  dengue: [
    { id: 'med291', name: 'Paracetamol', ageGroups: [ 'All Ages'], dosage: { low: '10mg/kg', medium: '15mg/kg', high: '20mg/kg' }, timing: 'Every 6 hours', instructions: 'Fever and pain relief; avoid NSAIDs due to bleeding risk.' },
    { id: 'med292', name: 'Oral Rehydration Solution', ageGroups: [ 'All Ages'], dosage: { low: '-', medium: '-', high: '-' }, timing: 'As needed', instructions: 'Keeps patient hydrated; critical for recovery.' },
    { id: 'med293', name: 'Doctor prescription required for this age group', ageGroups: [ 'Severe Cases'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Hospitalization and supportive care for severe dengue or hemorrhagic fever.' }
  ],

  chikungunya: [
    { id: 'med294', name: 'Paracetamol', ageGroups: [ 'All Ages'], dosage: { low: '10mg/kg', medium: '15mg/kg', high: '20mg/kg' }, timing: 'Every 6 hours', instructions: 'For fever and joint pain relief.' },
    { id: 'med295', name: 'NSAIDs (Ibuprofen)', ageGroups: [ 'Adult'], dosage: { low: '200mg', medium: '400mg', high: '600mg' }, timing: 'Every 8 hours', instructions: 'Reduce inflammation and pain; avoid in dengue co-infection.' },
    { id: 'med296', name: 'Hydration', ageGroups: [ 'All Ages'], dosage: { low: '-', medium: '-', high: '-' }, timing: 'As needed', instructions: 'Maintain hydration to prevent complications.' }
  ],

  zika: [
    { id: 'med297', name: 'Paracetamol', ageGroups: [ 'All Ages'], dosage: { low: '10mg/kg', medium: '15mg/kg', high: '20mg/kg' }, timing: 'Every 6 hours', instructions: 'Fever and pain relief.' },
    { id: 'med298', name: 'Hydration', ageGroups: [ 'All Ages'], dosage: { low: '-', medium: '-', high: '-' }, timing: 'As needed', instructions: 'Important for recovery.' },
    { id: 'med299', name: 'Doctor prescription required for this age group', ageGroups: [ 'Pregnant Women'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Specialized care due to fetal risk.' }
  ],

  tuberculosis: [
    { id: 'med300', name: 'Isoniazid', ageGroups: [ 'Adult'], dosage: { low: '5mg/kg', medium: '10mg/kg', high: '300mg' }, timing: 'Once daily', instructions: 'Part of 4-drug therapy; monitor liver function.' },
    { id: 'med301', name: 'Rifampin', ageGroups: [ 'Adult'], dosage: { low: '10mg/kg', medium: '10mg/kg', high: '600mg' }, timing: 'Once daily', instructions: 'Potent antitubercular; orange discoloration of secretions.' },
    { id: 'med302', name: 'Ethambutol', ageGroups: [ 'Adult'], dosage: { low: '15mg/kg', medium: '25mg/kg', high: '25mg/kg' }, timing: 'Once daily', instructions: 'Monitor vision changes during treatment.' },
    { id: 'med303', name: 'Pyrazinamide', ageGroups: [ 'Adult'], dosage: { low: '15-30mg/kg', medium: '15-30mg/kg', high: '30mg/kg' }, timing: 'Once daily', instructions: 'Included in intensive phase therapy.' },
    { id: 'med304', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Pediatric TB requires specialist dosing and monitoring.' }
  ],

  leprosy: [
    { id: 'med305', name: 'Dapsone', ageGroups: [ 'Adult'], dosage: { low: '50mg', medium: '100mg', high: '100mg' }, timing: 'Once daily', instructions: 'Mainstay in multi-drug therapy (MDT).' },
    { id: 'med306', name: 'Rifampin', ageGroups: [ 'Adult'], dosage: { low: '600mg', medium: '600mg', high: '600mg' }, timing: 'Once monthly supervised dose', instructions: 'Bactericidal in MDT.' },
    { id: 'med307', name: 'Clofazimine', ageGroups: [ 'Adult'], dosage: { low: '50mg', medium: '100mg', high: '300mg' }, timing: 'Daily or monthly supervised', instructions: 'Anti-inflammatory and bactericidal.' },
    { id: 'med308', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Pediatric leprosy requires expert care.' }
  ],

  hiv: [
    { id: 'med309', name: 'Tenofovir + Emtricitabine (Truvada)', ageGroups: [ 'Adult'], dosage: { low: '300mg/200mg', medium: '300mg/200mg', high: '300mg/200mg' }, timing: 'Once daily', instructions: 'NRTI backbone for antiretroviral therapy (ART).' },
    { id: 'med310', name: 'Dolutegravir', ageGroups: [ 'Adult'], dosage: { low: '50mg', medium: '50mg', high: '50mg' }, timing: 'Once daily', instructions: 'Integrase inhibitor; preferred in many regimens.' },
    { id: 'med311', name: 'Efavirenz', ageGroups: [ 'Adult'], dosage: { low: '400mg', medium: '600mg', high: '600mg' }, timing: 'Once daily at bedtime', instructions: 'NNRTI; monitor CNS side effects.' },
    { id: 'med312', name: 'Darunavir', ageGroups: [ 'Adult'], dosage: { low: '800mg', medium: '800mg', high: '800mg' }, timing: 'Once daily with ritonavir', instructions: 'Protease inhibitor used in resistant HIV.' },
    { id: 'med313', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Pediatric ART must be individualized and supervised.' }
  ],

   hemophilia: [
    { id: 'med314', name: 'Factor VIII Concentrate', ageGroups: [ 'Child'], dosage: { low: '20 IU/kg', medium: '40 IU/kg', high: '50 IU/kg' }, timing: 'Every 8-12 hours', instructions: 'For mild to severe bleeding episodes; dose and frequency depend on severity.' },
    { id: 'med315', name: 'Factor IX Concentrate', ageGroups: [ 'Adult'], dosage: { low: '40 IU/kg', medium: '60 IU/kg', high: '80 IU/kg' }, timing: 'Every 12-24 hours', instructions: 'For Hemophilia B treatment; monitor factor levels.' },
    { id: 'med316', name: 'Desmopressin (DDAVP)', ageGroups: [ 'Adult'], dosage: { low: '0.3 mcg/kg', medium: '0.3 mcg/kg', high: '0.3 mcg/kg' }, timing: 'IV over 30 min', instructions: 'Used in mild Hemophilia A for bleeding prophylaxis.' },
    { id: 'med317', name: 'Recombinant Factor VIIa (NovoSeven)', ageGroups: [ 'Adult'], dosage: { low: '90 mcg/kg', medium: '120 mcg/kg', high: '120 mcg/kg' }, timing: 'Every 2-3 hours until hemostasis', instructions: 'Used in inhibitor patients to bypass factor VIII/IX.' },
    { id: 'med318', name: 'Doctor prescription required for this age group', ageGroups: [ 'Senior'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Individualized dosing required with specialist hematology input.' }
  ],

  sickle_cell_anemia: [
    { id: 'med319', name: 'Hydroxyurea', ageGroups: [ 'Adult'], dosage: { low: '10 mg/kg', medium: '15 mg/kg', high: '35 mg/kg' }, timing: 'Once daily', instructions: 'Increases fetal hemoglobin; reduces crises.' },
    { id: 'med320', name: 'Folic Acid', ageGroups: [ 'All Ages'], dosage: { low: '1 mg', medium: '5 mg', high: '5 mg' }, timing: 'Once daily', instructions: 'Supports erythropoiesis.' },
    { id: 'med321', name: 'Pain management (NSAIDs, opioids)', ageGroups: [ 'All Ages'], dosage: { low: '-', medium: '-', high: '-' }, timing: 'As required', instructions: 'Control vaso-occlusive crisis pain.' },
    { id: 'med322', name: 'Blood transfusions', ageGroups: [ 'All Ages'], dosage: { low: '-', medium: '-', high: '-' }, timing: 'As prescribed', instructions: 'For severe anemia and complications.' },
    { id: 'med323', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Treatment tailored under pediatric hematology.' }
  ],

  muscular_dystrophy: [
    { id: 'med324', name: 'Prednisone', ageGroups: [ 'Child'], dosage: { low: '0.3 mg/kg', medium: '0.75 mg/kg', high: '1.5 mg/kg' }, timing: 'Once daily', instructions: 'Delays progression; monitor side effects.' },
    { id: 'med325', name: 'Deflazacort', ageGroups: [ 'Child'], dosage: { low: '0.9 mg/kg', medium: '1.2 mg/kg', high: '1.5 mg/kg' }, timing: 'Once daily', instructions: 'Steroid alternative with fewer side effects.' },
    { id: 'med326', name: 'Eteplirsen', ageGroups: [ 'Child'], dosage: { low: '30 mg/kg', medium: '30 mg/kg', high: '30 mg/kg' }, timing: 'Weekly IV infusion', instructions: 'Exon-skipping therapy for specific Duchenne mutations.' },
    { id: 'med327', name: 'Physical therapy', ageGroups: [ 'All Ages'], dosage: { low: '-', medium: '-', high: '-' }, timing: 'Regular sessions', instructions: 'Maintains muscle strength and function.' },
    { id: 'med328', name: 'Doctor prescription required for this age group', ageGroups: [ 'Adult'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Adult muscular dystrophy management specialized.' }
  ],

  huntingtons_disease: [
    { id: 'med329', name: 'Tetrabenazine', ageGroups: [ 'Adult'], dosage: { low: '12.5 mg', medium: '25 mg', high: '100 mg' }, timing: 'Once to twice daily', instructions: 'Reduces chorea; monitor mood changes.' },
    { id: 'med330', name: 'Risperidone', ageGroups: [ 'Adult'], dosage: { low: '0.25 mg', medium: '1 mg', high: '4 mg' }, timing: 'Once or twice daily', instructions: 'Antipsychotic for behavioral symptoms.' },
    { id: 'med331', name: 'Benzodiazepines', ageGroups: [ 'Adult'], dosage: { low: '2 mg', medium: '10 mg', high: '20 mg' }, timing: 'As needed', instructions: 'For anxiety and agitation.' },
    { id: 'med332', name: 'Physical therapy', ageGroups: [ 'All Ages'], dosage: { low: '-', medium: '-', high: '-' }, timing: 'Regular sessions', instructions: 'Helps maintain mobility and function.' },
    { id: 'med333', name: 'Doctor prescription required for this age group', ageGroups: [ 'Child'], dosage: { low: '-', medium: '-', high: '-' }, timing: '-', instructions: 'Rare pediatric cases require specialist care.' }
  ]


  
};

export function getAgeGroup(age: number): string {
  if (age <= 3 && age >= 1) return 'Infant';
  if (age <= 10) return 'Child';
  if (age <= 18) return 'Teen';
  if (age <= 30) return 'Adult';
  if (age <= 60) return 'Middle Age';
  if (age <= 110) return 'Senior';
  return 'Heaven 😁 ^) No prblm I also work for your';
}
