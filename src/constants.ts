export const STORAGE_KEYS = {
  PREFERENCES: 'brevet_preferences',
  PROGRESS: 'brevet_pwa_progress_v1',
  AUTH: 'auth-storage',
  GAMIFICATION: 'gamification-storage',
  SCORES: 'score-storage',
  DEVICE_ID: 'brevet_device_id',
  ONBOARDING: 'hasSeenOnboarding',
};

export const SUBJECT_IDS = {
  MATHS: 'maths',
  FRANCAIS: 'francais',
  HISTOIRE_GEO_EMC: 'histoire-geo-emc',
  SCIENCES: 'sciences',
};

// Migrate legacy IDs to new IDs to prevent fragmented XP and lost progress
export const ID_MIGRATION_MAP: Record<string, string> = {
  '11-lunion-europeenne': 'hg-11',
  '12-les-espaces-productifs-et-leurs-evolutions': 'hg-18',
  '13-les-espaces-de-faible-densite': 'hg-19',
  '27-les-reperes-geographiques-pour-le-brevet': 'hg-27-g',
  '19-lengagement-civique-et-social': 'hg-12',
  '33-la-defense-et-laction-internationale': 'hg-33',
  '05-le-monde-depuis-1945-vue-densemble': 'hg-5',
  '24-lanalyse-de-document': 'hg-16',
  '25-methodologie-le-developpement-construit': 'hg-25-methodo',
  '05-lenergie': 'pc-5',
  '06-lunivers-et-la-gravitation': 'pc-6',
  '07-lenergie-et-la-puissance-electrique': 'pc-7',
  '28-lenergie-et-le-developpement-durable': 'pc-12',
  '30-methodologie-scientifique-la-demarche-dinvestigation': 'sciences-methodo-1',
  '20-levolution-du-vivant': 'svt-10',
  '24-chaines-dinformation-et-daction': 'tech-3-chaine-info-action',
  '01-comprendre-lepreuve': 'oral-comprendre',
  '05-maitriser-lentretien': 'oral-entretien',
  '04-conseils-pour-lhistoire-geo': 'methode-hg',
  '14-lanalyse-de-limage': 'francais-14',
  '16-le-present-de-lindicatif': 'francais-16',
  '23-laccord-du-participe-passe': 'francais-23',
  '29-laccord-dans-le-groupe-nominal': 'francais-29',
  '30-limperatif-present': 'francais-30',
  '32-laccord-du-verbe-avec-son-sujet': 'francais-32',
  '34-largumentation-et-lessai': 'francais-34',
  '35-le-sujet-dinvention': 'francais-35',
};
