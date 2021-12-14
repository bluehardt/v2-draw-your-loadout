const ch_str = {
	SALTZ: 'saltz',
	KRUBER: 'kruber',
	BARDIN: 'bardin',
	SIENNA: 'sienna',
	KERI: 'keri',
};

const cat_str = {
	CHARACTERS: 'chars',
	CLASSES: 'cls',
	WPN_MELEE: 'wpnm',
	WPN_RANGED: 'wpnr',
};

const cls_str = {
	SALTZ_WHC: 'saltz-whc-1',
	SALTZ_BH: 'saltz-bh-2',
	SALTZ_ZLT: 'saltz-zlt-3',
	SALTZ_WP: 'saltz-wp-4',
	KRUBER_MRC: 'kruber-mrc-1',
	KRUBER_HNT: 'kruber-hnt-2',
	KRUBER_FK: 'kruber-fk-3',
	KRUBER_GK: 'kruber-gk-4',
	BARDIN_RV: 'bardin-rv-1',
	BARDIN_IB: 'bardin-ib-2',
	BARDIN_SLR: 'bardin-slr-3',
	BARDIN_OE: 'bardin-oe-4',
	SIENNA_BW: 'sienna-bw-1',
	SIENNA_PR: 'sienna-pr-2',
	SIENNA_UNC: 'sienna-unc-3',
	KERI_WS: 'keri-ws-1',
	KERI_HM: 'keri-hm-2',
	KERI_SHD: 'keri-shd-3',
	KERI_ST: 'keri-st-4',
};

const wpnm_str = {
	SALTZ_AXE: 'saltz-axe-123',
	SALTZ_FLC: 'saltz-flc-123',
	SALTZ_FLAIL: 'saltz-flail-123',
	SALTZ_RPR: 'saltz-rpr-123',
	SALTZ_SWRD2H: 'saltz-swrd2h-123',
	SALTZ_AXENFLC: 'saltz-axenflc-123',
	SALTZ_BILLHK: 'saltz-billhk-123',
	SALTZ_HMMR2H: 'saltz-hmmr2h-34',
	SALTZ_HMMR1H: 'saltz-hmmr1h-34',
	SALTZ_HMMRDUAL: 'saltz-hmmrdual-34',
	SALTZ_HMMRNSHLD: 'saltz-hmmrnshld-4',
	SALTZ_HMMRNTOME: 'saltz-hmmrntome-4',
	SALTZ_FLAILNSHLD: 'saltz-flailnshld-4',
	KRUBER_EXEC: 'kruber-exec-1234',
	KRUBER_HLB: 'kruber-hlb-123',
	KRUBER_MACE1H: 'kruber-mace1h-1234',
	KRUBER_MACENSHLD: 'kruber-macenshld-1234',
	KRUBER_SWRD1H: 'kruber-swrd1h-1234',
	KRUBER_SWRDNSHLD: 'kruber-swrdnshld-1234',
	KRUBER_HMMR2H: 'kruber-hmmr2h-1234',
	KRUBER_SWRD2H: 'kruber-swrd2h-1234',
	KRUBER_MACENSWRD: 'kruber-macenswrd-1234',
	KRUBER_SPR: 'kruber-spr-12',
	KRUBER_BRETSWRD: 'kruber-bretswrd-1234',
	KRUBER_BRETSWRDNSHLD: 'kruber-bretswrdnshld-4',
	KRUBER_SPRNSHLD: 'kruber-sprnshld-123',
	BARDIN_AXE: 'bardin-axe1h-1234',
	BARDIN_AXENSHLD: 'bardin-axenshld-124',
	BARDIN_AXEDUAL: 'bardin-axedual-3',
	BARDIN_AXE2H: 'bardin-axe2h-1234',
	BARDIN_HMMR: 'bardin-hmmr1h-1234',
	BARDIN_HMMRNSHLD: 'bardin-hmmrnshld-124',
	BARDIN_HMMR2H: 'bardin-hmmr2h-1234',
	BARDIN_PICK: 'bardin-pick-1234',
	BARDIN_HMMRDUAL: 'bardin-hmmrdual-1234',
	BARDIN_COGHMMR: 'bardin-coghmmr-1234',
	SIENNA_DAG: 'sienna-dag-123',
	SIENNA_SWRDFIRE: 'sienna-swrdfire-123',
	SIENNA_MACE2H: 'sienna-mace2h-123',
	SIENNA_SWRD: 'sienna-swrd-123',
	SIENNA_CRWBILL: 'sienna-crwbill-123',
	SIENNA_FLAIL: 'sienna-flail-123',
	KERI_DAGDUAL: 'keri-dagdual-1234',
	KERI_SWRDDUAL: 'keri-swrddual-1234',
	KERI_SPR: 'keri-spr-1234',
	KERI_GLV: 'keri-glv-1234',
	KERI_SWRD: 'keri-swrd-1234',
	KERI_SWRDNDAG: 'keri-swrdndag-1234',
	KERI_SWRD2H: 'keri-swrd2h-1234',
	KERI_AXE: 'keri-axe-1234',
	KERI_SPRNSHLD: 'keri-sprnshld-2',
};

const wpnr_str = {
	SALTZ_BOP: 'saltz-bop-123',
	SALTZ_XBOW: 'saltz-xbow-123',
	SALTZ_RPTR: 'saltz-rptr-123',
	SALTZ_VXBOW: 'saltz-vxbow-123',
	SALTZ_GRFNFT: 'saltz-grfnft-123',
	KRUBER_BLNDR: 'kruber-blndr-123',
	KRUBER_HAND: 'kruber-hgun-123',
	KRUBER_LBOW: 'kruber-lbow-2',
	KRUBER_RPTR: 'kruber-rptr-123',
	BARDIN_XBOW: 'bardin-xbow-12',
	BARDIN_DRKPSTL: 'bardin-drkpstl-24',
	BARDIN_DKRGUN: 'bardin-drkgun-24',
	BARDIN_GRUDGE: 'bardin-grudge-124',
	BARDIN_HAND: 'bardin-hgun-124',
	BARDIN_TAXES: 'bardin-taxes-13',
	BARDIN_MWPSTL: 'bardin-mwpstl-124',
	BARDIN_TRLHMMR: 'bardin-trlhmmr-24',
	SIENNA_BEAM: 'sienna-beam-123',
	SIENNA_BOLT: 'sienna-bolt-123',
	SIENNA_CONF: 'sienna-conf-123',
	SIENNA_FIREBALL: 'sienna-fireball-123',
	SIENNA_FLAME: 'sienna-flame-123',
	SIENNA_CRSC: 'sienna-crsc-123',
	KERI_HAG: 'keri-hag-1234',
	KERI_LBOW: 'keri-lbow-1234',
	KERI_SBOW: 'keri-sbow-1234',
	KERI_VXBOW: 'keri-vxbow-3',
	KERI_MFIRE: 'keri-mfire-1234',
	KERI_BRJV: 'keri-brjv-1234',
	KERI_DPWD: 'keri-dpwd-4',
};

const options_str = {
	DLC_BTU: 'dlc-btu',
	DLC_WOM: 'dlc-wom',
	DLC_GK: 'dlc-gk',
	DLC_OE: 'dlc-oe',
	DLC_FR: 'dlc-fr',
	DLC_ST: 'dlc-st',
	DLC_WP: 'dlc-wp',
};

const dlc_btu_wpn = [
	wpnm_str.SALTZ_AXENFLC,
	wpnm_str.KRUBER_MACENSWRD,
	wpnm_str.BARDIN_HMMRDUAL,
	wpnm_str.KERI_AXE,
	wpnm_str.SIENNA_CRWBILL,
];

const dlc_wom_wpn = [
	wpnm_str.SALTZ_BILLHK,
	wpnm_str.KRUBER_SPR,
	wpnr_str.BARDIN_TAXES,
	wpnm_str.KERI_SPRNSHLD,
	wpnm_str.SIENNA_FLAIL,
];

const dlc_gk_wpn = [
	wpnm_str.KRUBER_BRETSWRD,
	wpnm_str.KRUBER_BRETSWRDNSHLD,
];

const dlc_oe_wpn = [
	wpnm_str.BARDIN_COGHMMR,
	wpnr_str.BARDIN_MWPSTL,
];

const dlc_fr_wpn = [
	wpnm_str.KRUBER_SPRNSHLD,
	wpnr_str.SALTZ_GRFNFT,
	wpnr_str.BARDIN_TRLHMMR,
	wpnr_str.SIENNA_CRSC,
	wpnr_str.KERI_MFIRE,
];

const dlc_st_wpn = [
	wpnr_str.KERI_BRJV,
	wpnr_str.KERI_DPWD,
];

const dlc_wp_wpn = [
	wpnm_str.SALTZ_HMMR1H,
	wpnm_str.SALTZ_HMMR2H,
	wpnm_str.SALTZ_HMMRDUAL,
	wpnm_str.SALTZ_HMMRNSHLD,
	wpnm_str.SALTZ_HMMRNTOME,
	wpnm_str.SALTZ_FLAILNSHLD,
]

const dlc_gk_cls = cls_str.KRUBER_GK;
const dlc_oe_cls = cls_str.BARDIN_OE;
const dlc_st_cls = cls_str.KERI_ST;
const dlc_wp_cls = cls_str.SALTZ_WP;
