/**
 * 2018-2026年财务数据（从Excel提取）
 * 指标：收入、成本、回款、付款、毛利、毛利率
 * 单位：万元
 */

// 年度数据（含2026年Q1）
export const yearlyData = {
  2019: { revenue: 6099.74, cost: 1350.41, profit: 4749.33, margin: 77.9, collection: 694.06, payment: 410.16 },
  2020: { revenue: 22779.46, cost: 11210.19, profit: 11569.27, margin: 50.8, collection: 15027.38, payment: 6646.14 },
  2021: { revenue: 26233.66, cost: 24229.22, profit: 2004.44, margin: 7.6, collection: 21654.00, payment: 9436.57 },
  2022: { revenue: 22170.04, cost: 19825.87, profit: 2344.17, margin: 10.6, collection: 27485.46, payment: 20846.01 },
  2023: { revenue: 25485.82, cost: 21649.13, profit: 3836.69, margin: 15.1, collection: 22173.37, payment: 14940.04 },
  2024: { revenue: 13633.34, cost: 14341.51, profit: -708.17, margin: -5.2, collection: 21433.60, payment: 16668.78 },
  2025: { revenue: 6686.82, cost: 3199.73, profit: 3487.09, margin: 52.1, collection: 10926.55, payment: 8441.49 },
};

// 2026年Q1数据
export const data2026Q1 = {
  revenue: 360.99,
  cost: 121.47,
  profit: 239.52,
  collection: 1027.29,
  payment: 811.26,
};

// 按板块分类的年度数据
export const segmentYearlyData = {
  '水务存量': {
    2019: { revenue: 2526.06, cost: 698.52, profit: 1827.55, margin: 72.3, collection: 462.71, payment: 273.44 },
    2020: { revenue: 9929.02, cost: 5521.41, profit: 4407.61, margin: 44.4, collection: 6278.75, payment: 3000.80 },
    2021: { revenue: 14658.64, cost: 13374.73, profit: 1283.91, margin: 8.8, collection: 10850.45, payment: 4340.88 },
    2022: { revenue: 10991.90, cost: 9936.28, profit: 1055.61, margin: 9.6, collection: 13917.52, payment: 11486.64 },
    2023: { revenue: 10127.60, cost: 8827.78, profit: 1299.82, margin: 12.8, collection: 9154.86, payment: 5977.83 },
    2024: { revenue: 5283.70, cost: 5519.12, profit: -235.41, margin: -4.5, collection: 8397.06, payment: 7103.94 },
    2025: { revenue: 2501.94, cost: 1284.47, profit: 1217.48, margin: 48.7, collection: 4210.83, payment: 3843.79 },
  },
  '水务新增': {
    2019: { revenue: 0, cost: 0, profit: 0, margin: 0, collection: 0, payment: 0 },
    2020: { revenue: 0, cost: 0, profit: 0, margin: 0, collection: 0, payment: 0 },
    2021: { revenue: 0, cost: 0, profit: 0, margin: 0, collection: 0, payment: 0 },
    2022: { revenue: 0, cost: 0, profit: 0, margin: 0, collection: 0, payment: 0 },
    2023: { revenue: 2201.90, cost: 1770.79, profit: 431.11, margin: 19.6, collection: 1689.31, payment: 842.90 },
    2024: { revenue: 3316.77, cost: 3176.63, profit: 140.14, margin: 4.2, collection: 2721.19, payment: 2656.48 },
    2025: { revenue: 165.07, cost: 96.72, profit: 68.35, margin: 41.4, collection: 298.04, payment: 201.88 },
  },
  '管廊存量': {
    2019: { revenue: 492.82, cost: 248.38, profit: 244.44, margin: 49.6, collection: 231.35, payment: 136.72 },
    2020: { revenue: 2012.60, cost: 1727.77, profit: 284.83, margin: 14.2, collection: 1087.21, payment: 725.18 },
    2021: { revenue: 3668.16, cost: 3031.43, profit: 636.73, margin: 17.4, collection: 2385.96, payment: 1112.40 },
    2022: { revenue: 1522.35, cost: 1382.84, profit: 139.51, margin: 9.2, collection: 2475.70, payment: 2276.55 },
    2023: { revenue: 808.66, cost: 488.06, profit: 320.60, margin: 39.6, collection: 1039.32, payment: 458.87 },
    2024: { revenue: 96.41, cost: 115.54, profit: -19.13, margin: -19.8, collection: 427.53, payment: 672.68 },
    2025: { revenue: 185.34, cost: 154.18, profit: 31.16, margin: 16.8, collection: 755.30, payment: 649.48 },
  },
  '其他存量': {
    2019: { revenue: 0, cost: 0, profit: 0, margin: 0, collection: 0, payment: 0 },
    2020: { revenue: 323.27, cost: 56.91, profit: 266.36, margin: 82.4, collection: 182.42, payment: 60.23 },
    2021: { revenue: 2245.92, cost: 2266.88, profit: -20.96, margin: -0.9, collection: 1246.49, payment: 82.95 },
    2022: { revenue: 2061.84, cost: 1944.82, profit: 117.02, margin: 5.7, collection: 2260.00, payment: 2261.42 },
    2023: { revenue: 140.79, cost: 355.19, profit: -214.41, margin: -152.3, collection: 405.89, payment: 402.00 },
    2024: { revenue: 0, cost: 0, profit: 0, margin: 0, collection: 20.00, payment: 0 },
    2025: { revenue: 0, cost: 0, profit: 0, margin: 0, collection: 15.93, payment: 240.88 },
  },
  '24年新增': {
    2019: { revenue: 0, cost: 0, profit: 0, margin: 0, collection: 0, payment: 0 },
    2020: { revenue: 0, cost: 0, profit: 0, margin: 0, collection: 0, payment: 0 },
    2021: { revenue: 0, cost: 0, profit: 0, margin: 0, collection: 0, payment: 0 },
    2022: { revenue: 0, cost: 0, profit: 0, margin: 0, collection: 0, payment: 0 },
    2023: { revenue: 0, cost: 0, profit: 0, margin: 0, collection: 0, payment: 0 },
    2024: { revenue: 842.20, cost: 621.46, profit: 220.73, margin: 26.2, collection: 590.36, payment: 262.43 },
    2025: { revenue: 414.71, cost: 250.61, profit: 164.11, margin: 39.6, collection: 456.88, payment: 216.65 },
  },
  '25年新增': {
    2019: { revenue: 0, cost: 0, profit: 0, margin: 0, collection: 0, payment: 0 },
    2020: { revenue: 0, cost: 0, profit: 0, margin: 0, collection: 0, payment: 0 },
    2021: { revenue: 0, cost: 0, profit: 0, margin: 0, collection: 0, payment: 0 },
    2022: { revenue: 0, cost: 0, profit: 0, margin: 0, collection: 0, payment: 0 },
    2023: { revenue: 0, cost: 0, profit: 0, margin: 0, collection: 0, payment: 0 },
    2024: { revenue: 108.34, cost: 0, profit: 108.34, margin: 100, collection: 0, payment: 0 },
    2025: { revenue: 1395.79, cost: 478.73, profit: 917.06, margin: 65.7, collection: 2070.44, payment: 143.56 },
  },
};

// 板块累计数据（2018-2026.3）
export const segmentCumulative = {
  '水务存量': { revenue: 19080.88, cost: 12367.78, profit: 6713.11, margin: 35.2, collection: 20109.04, payment: 12370.78 },
  '水务新增': { revenue: 5779.83, cost: 4604.22, profit: 1175.62, margin: 20.3, collection: 4843.22, payment: 3836.85 },
  '管廊存量': { revenue: 8788.16, cost: 6382.03, profit: 2406.14, margin: 27.4, collection: 8672.75, payment: 6060.57 },
  '其他存量': { revenue: 4771.80, cost: 4202.67, profit: 569.13, margin: 11.9, collection: 4130.64, payment: 3209.18 },
  '24年新增': { revenue: 1256.69, cost: 780.46, profit: 476.24, margin: 37.9, collection: 1081.46, payment: 530.69 },
  '25年新增': { revenue: 1418.97, cost: 428.90, profit: 990.07, margin: 69.8, collection: 1214.48, payment: 214.39 },
};

// 总计累计数据
export const totalCumulative = {
  revenue: 123342.11,
  cost: 86453.07,
  profit: 36889.04,
  margin: 29.9,
  collection: 114847.87,
  payment: 77586.85,
};

// 辅助函数：获取年度数组
export function getYears() {
  return Object.keys(yearlyData).map(Number);
}

export function getRevenueArray() {
  return Object.values(yearlyData).map(d => d.revenue);
}

export function getCostArray() {
  return Object.values(yearlyData).map(d => d.cost);
}

export function getProfitArray() {
  return Object.values(yearlyData).map(d => d.profit);
}

export function getCollectionArray() {
  return Object.values(yearlyData).map(d => d.collection);
}

export function getPaymentArray() {
  return Object.values(yearlyData).map(d => d.payment);
}

export function getMarginArray() {
  return Object.values(yearlyData).map(d => d.margin);
}
