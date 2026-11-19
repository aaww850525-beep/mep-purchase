/* 機電工程採購 設定檔
 * apiUrl     ：部署 Google Apps Script 後貼上網址（…/exec），所有人的叫料紀錄就會共用。留空 = 單機模式（紀錄只在各自裝置）。
 * warnRatio  ：累計叫料達合約數量的幾成時顯示「接近上限」（0.8 = 80%）。
 * notify     ：「超量警示」頁「Email 通知採購」的收件人。'*' = 該專案所有廠商；也可用廠商名稱個別指定。
 * supervisors：叫料超出合約數量（不可下單）時，「Email 通知主管」的收件人。
 * companyName：進料申請單抬頭。
 * deliver    ：進料申請單「交貨地點」預設值（各專案）；使用者改過後會記在自己的裝置。
 */
window.APP_CONFIG = {
  apiUrl: 'https://script.google.com/macros/s/AKfycby1W0SVdGOmvtT_ik6Xm8yOukPHigpcTyetqDbdxreLDD6K99DUiHi1Uz5BrDc4pzT2/exec',
  warnRatio: 0.8,
  companyName: '久舜營造股份有限公司',
  deliver: {
    tp: "新北市土城區科技路中央路四段67巷口(朗沐L'AMOUR｜丞石建築頂埔接待中心)旁邊久舜營造頂埔安居工地",
    yf: '新北市土城區大暖路108號前方工地'
  },
  notify: {
    tp: { '*': [] },
    yf: { '*': [] }
  },
  supervisors: {
    tp: [],
    yf: []
  }
};
