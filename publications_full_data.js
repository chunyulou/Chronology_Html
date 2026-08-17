// 出版品總表（每一集一列，共 561 筆）——列與書目一字未增減，照錄來源檔
// 資料來源：03  出版品總表-書號&書名-20251219.xlsx
// candidates＝可能對應的大事（依吻合度排序）。畫面只採用「該則在目前提案中歸類為
// 出版流通」者，並把該則大事的「紀要」原文放入出版品紀要，未改寫、未自行撰寫。
// 查無對應大事者 candidates 為空陣列，紀要留白（不臆測、不補述）。目前已對應 527 筆。
const publicationsFull = [
 {
  "bookNo": "0001",
  "category": "B02 結緣書",
  "title": "無相念佛",
  "publishDate": "1993/03/01",
  "copyrightDate": "1993/03/01",
  "note": "",
  "eventId": 5,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 5,
    "by": "書名相同"
   },
   {
    "id": 156,
    "by": "書名相同"
   },
   {
    "id": 4,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0002",
  "category": "B02 結緣書",
  "title": "念佛三昧修學次第",
  "publishDate": "1995/05/01",
  "copyrightDate": "1995/05/01",
  "note": "",
  "eventId": 6,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 6,
    "by": "書名相同（紀要）"
   },
   {
    "id": 45,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0003",
  "category": "B02 結緣書",
  "title": "正法眼藏─護法集",
  "publishDate": "1996/10/01",
  "copyrightDate": "1996/10/01",
  "note": "三版首刷2025/2/27",
  "eventId": 11,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 11,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0004",
  "category": "B01 局版書",
  "title": "禪淨圓融",
  "publishDate": "1997/07/01",
  "copyrightDate": "1997/07/01",
  "note": "《禪淨圓融》為正智出版社首次出書，出版社成立時間1997/86",
  "eventId": 74,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 74,
    "by": "書名相同"
   },
   {
    "id": 14,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0005",
  "category": "B01 局版書",
  "title": "宗門正眼─公案拈提 (第一輯)",
  "publishDate": "1997/07/01",
  "copyrightDate": "1997/07/01",
  "note": "1997年初版書名：《禪門摩尼寶聚》\n二版於2003年增寫更名為《宗門正眼》；二版出版日期：2003/9",
  "eventId": 19,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 19,
    "by": "書名相同（紀要）"
   },
   {
    "id": 79,
    "by": "書名相含"
   },
   {
    "id": 65,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0006",
  "category": "B02 結緣書",
  "title": "佛子之省思&真假開悟之簡易辨正法",
  "publishDate": "1997/07/01",
  "copyrightDate": "1997/07/01",
  "note": "",
  "eventId": 58,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 58,
    "by": "書名相含（紀要）"
   },
   {
    "id": 67,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0007",
  "category": "B01 局版書",
  "title": "禪─悟前與悟後 (上下冊)(繁體中文版)",
  "publishDate": "1997/12/01",
  "copyrightDate": "1997/12/01",
  "note": "1995/12出版原一大冊，以贈閱版流通；1997年底改為局版書，分上下冊印行出版",
  "eventId": 74,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 74,
    "by": "書名相同"
   },
   {
    "id": 7,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0008",
  "category": "B01 局版書",
  "title": "真實如來藏(繁體中文版)",
  "publishDate": "1997/12/20",
  "copyrightDate": "1997/12/20",
  "note": "初版版權頁：1997/12/20",
  "eventId": 74,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 74,
    "by": "書名相同"
   },
   {
    "id": 21,
    "by": "書名相同（紀要）"
   },
   {
    "id": 186,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0009",
  "category": "B01 局版書",
  "title": "宗門法眼─公案拈提 (第二輯)",
  "publishDate": "1998/07/01",
  "copyrightDate": "1998/07/01",
  "note": "",
  "eventId": 19,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 19,
    "by": "書名相含"
   },
   {
    "id": 79,
    "by": "書名相含"
   },
   {
    "id": 65,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0010",
  "category": "B02 結緣書",
  "title": "如何契入念佛法門",
  "publishDate": "1998/07/01",
  "copyrightDate": "1998/07/01",
  "note": "中英日文版初版首刷2011年7月",
  "eventId": 25,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 25,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0011",
  "category": "B02 結緣書",
  "title": "平實書箋",
  "publishDate": "1998/10/01",
  "copyrightDate": "1998/10/01",
  "note": "",
  "eventId": 23,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 23,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0012",
  "category": "B01 局版書",
  "title": "楞伽經詳解 第一輯",
  "publishDate": "1999/05/01",
  "copyrightDate": "2001/05/01",
  "note": "初版版權頁:1999/5/1，正智書香園地:2001/5",
  "eventId": 10,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 10,
    "by": "書名相同（紀要）"
   },
   {
    "id": 15,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0013",
  "category": "B01 局版書",
  "title": "宗門道眼—公案拈提 (第三輯)",
  "publishDate": "1999/07/01",
  "copyrightDate": "1999/07/01",
  "note": "初版日出處:正智書香園地及書後ISBN處;後來再版為2007/7，未印初版日",
  "eventId": 19,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 19,
    "by": "書名相含"
   },
   {
    "id": 79,
    "by": "書名相含"
   },
   {
    "id": 65,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0014",
  "category": "B02 結緣書",
  "title": "《三乘唯識－如來藏系經律彙編》",
  "publishDate": "1999/09/01",
  "copyrightDate": "1999/09/01",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "0015",
  "category": "B01 局版書",
  "title": "楞伽經詳解 第二輯",
  "publishDate": "1999/11/01",
  "copyrightDate": "1999/11",
  "note": "",
  "eventId": 10,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 10,
    "by": "書名相同（紀要）"
   },
   {
    "id": 15,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0016",
  "category": "B01 局版書",
  "title": "楞伽經詳解 第三輯",
  "publishDate": "2000/05/01",
  "copyrightDate": "2000/05/01",
  "note": "",
  "eventId": 10,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 10,
    "by": "書名相同（紀要）"
   },
   {
    "id": 15,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0017",
  "category": "B01 局版書",
  "title": "宗門血脈─公案拈提 (第四輯)",
  "publishDate": "2000/07/01",
  "copyrightDate": "2000/07/01",
  "note": "",
  "eventId": 19,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 19,
    "by": "書名相含"
   },
   {
    "id": 79,
    "by": "書名相含"
   },
   {
    "id": 65,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0018",
  "category": "B01 局版書",
  "title": "楞伽經詳解 第四輯",
  "publishDate": "2000/10/01",
  "copyrightDate": "2000/10/01",
  "note": "",
  "eventId": 10,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 10,
    "by": "書名相同（紀要）"
   },
   {
    "id": 15,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0019",
  "category": "B01 局版書",
  "title": "宗通與說通",
  "publishDate": "2000/12/01",
  "copyrightDate": "2000/12/01",
  "note": "",
  "eventId": 42,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 42,
    "by": "書名相同"
   },
   {
    "id": 108,
    "by": "書名相同（紀要）"
   },
   {
    "id": 98,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0020",
  "category": "B02 結緣書",
  "title": "邪見與佛法",
  "publishDate": "2001/01/01",
  "copyrightDate": "2001/01/01",
  "note": "",
  "eventId": 42,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 42,
    "by": "書名相同（紀要）"
   },
   {
    "id": 108,
    "by": "書名相同（紀要）"
   },
   {
    "id": 35,
    "by": "書名相同（紀要）"
   },
   {
    "id": 44,
    "by": "書名相同（紀要）"
   },
   {
    "id": 45,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0021",
  "category": "B01 局版書",
  "title": "楞伽經詳解 第五輯",
  "publishDate": "2001/05/01",
  "copyrightDate": "2001/05/01",
  "note": "",
  "eventId": 10,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 10,
    "by": "書名相同（紀要）"
   },
   {
    "id": 15,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0022",
  "category": "B01 局版書",
  "title": "宗門正道─公案拈提 (第五輯)",
  "publishDate": "2001/07/01",
  "copyrightDate": "2001/07/01",
  "note": "",
  "eventId": 19,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 19,
    "by": "書名相含"
   },
   {
    "id": 79,
    "by": "書名相含"
   },
   {
    "id": 65,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0023",
  "category": "B02 結緣書",
  "title": "甘露法雨",
  "publishDate": "2001/07/01",
  "copyrightDate": "2001/07/01",
  "note": "",
  "eventId": 98,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 98,
    "by": "書名相含（紀要）"
   },
   {
    "id": 43,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0024",
  "category": "B02 結緣書",
  "title": "我與無我",
  "publishDate": "2001/10/01",
  "copyrightDate": "2001/10/01",
  "note": "",
  "eventId": 184,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 184,
    "by": "書名相同（紀要）"
   },
   {
    "id": 156,
    "by": "書名相含（紀要）"
   },
   {
    "id": 46,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0025",
  "category": "B01 局版書",
  "title": "楞伽經詳解 第六輯",
  "publishDate": "2001/11/01",
  "copyrightDate": "2001/11/01",
  "note": "",
  "eventId": 10,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 10,
    "by": "書名相同（紀要）"
   },
   {
    "id": 15,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0026",
  "category": "B01 局版書",
  "title": "狂密與真密 第一輯",
  "publishDate": "2002/02/01",
  "copyrightDate": "2002/02/01",
  "note": "",
  "eventId": 51,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 51,
    "by": "書名相同"
   },
   {
    "id": 156,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0027",
  "category": "B02 結緣書",
  "title": "佛教之危機",
  "publishDate": "2002/03/01",
  "copyrightDate": "2002/03/01",
  "note": "",
  "eventId": 53,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 53,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0028",
  "category": "B01 局版書",
  "title": "狂密與真密 第二輯",
  "publishDate": "2002/04/01",
  "copyrightDate": "2002/04/01",
  "note": "",
  "eventId": 51,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 51,
    "by": "書名相同"
   },
   {
    "id": 156,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0029",
  "category": "B02 結緣書",
  "title": "學佛之心態",
  "publishDate": "2002/04/01",
  "copyrightDate": "2002/04/01",
  "note": "",
  "eventId": 54,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 54,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0030",
  "category": "B01 局版書",
  "title": "楞伽經詳解 第七輯",
  "publishDate": "2002/05/01",
  "copyrightDate": "2002/5",
  "note": "",
  "eventId": 10,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 10,
    "by": "書名相同（紀要）"
   },
   {
    "id": 15,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0031",
  "category": "B01 局版書",
  "title": "狂密與真密 第三輯",
  "publishDate": "2002/06/01",
  "copyrightDate": "2002/06/01",
  "note": "",
  "eventId": 51,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 51,
    "by": "書名相同"
   },
   {
    "id": 156,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0032",
  "category": "B01 局版書",
  "title": "宗門正義─公案拈提 (第六輯)",
  "publishDate": "2002/08/01",
  "copyrightDate": "2002/08/01",
  "note": "",
  "eventId": 19,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 19,
    "by": "書名相含"
   },
   {
    "id": 79,
    "by": "書名相含"
   },
   {
    "id": 65,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0033",
  "category": "B01 局版書",
  "title": "狂密與真密 第四輯",
  "publishDate": "2002/08/01",
  "copyrightDate": "2002/08/01",
  "note": "",
  "eventId": 51,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 51,
    "by": "書名相同"
   },
   {
    "id": 156,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0034",
  "category": "B02 結緣書",
  "title": "大乘無我觀",
  "publishDate": "2002/09/01",
  "copyrightDate": "2002/09/01",
  "note": "",
  "eventId": 34,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 34,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0035",
  "category": "B01 局版書",
  "title": "楞伽經詳解 第八輯",
  "publishDate": "2002/11/01",
  "copyrightDate": "2002/11",
  "note": "",
  "eventId": 10,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 10,
    "by": "書名相同（紀要）"
   },
   {
    "id": 15,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0036",
  "category": "B01 局版書",
  "title": "心經密意",
  "publishDate": "2002/12/01",
  "copyrightDate": "2002/12/01",
  "note": "",
  "eventId": 49,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 49,
    "by": "書名相同（紀要）"
   },
   {
    "id": 188,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0037",
  "category": "B02 結緣書",
  "title": "明心與初地",
  "publishDate": "20030/3/1",
  "copyrightDate": "20030/3",
  "note": "中英日文版初版首刷2011年7月",
  "eventId": 37,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 37,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0038",
  "category": "B02 結緣書",
  "title": "燈影",
  "publishDate": "2003/05/01",
  "copyrightDate": "2003/05/01",
  "note": "",
  "eventId": 56,
  "matchBy": "書名主體",
  "candidates": [
   {
    "id": 56,
    "by": "書名主體"
   }
  ]
 },
 {
  "bookNo": "0039",
  "category": "B01 局版書",
  "title": "楞伽經詳解 第九輯",
  "publishDate": "2003/06/01",
  "copyrightDate": "2003/06/01",
  "note": "",
  "eventId": 10,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 10,
    "by": "書名相同（紀要）"
   },
   {
    "id": 15,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0040",
  "category": "B01 局版書",
  "title": "宗門密意─公案拈提 (第七輯)",
  "publishDate": "2003/07/01",
  "copyrightDate": "2003/07/01",
  "note": "",
  "eventId": 19,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 19,
    "by": "書名相含"
   },
   {
    "id": 79,
    "by": "書名相含"
   },
   {
    "id": 65,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0041",
  "category": "B02 結緣書",
  "title": "護法與毀法",
  "publishDate": "2003/07/01",
  "copyrightDate": "2003/07/01",
  "note": "",
  "eventId": 59,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 59,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0042",
  "category": "",
  "title": "正覺電子報第 1期─創刊號",
  "publishDate": "2003/7/131",
  "copyrightDate": "2003/7初版",
  "note": "初版；2021/3網路電子版改版",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0043",
  "category": "",
  "title": "正覺電子報第 2期",
  "publishDate": "2003/08/01",
  "copyrightDate": "2003/8初版",
  "note": "初版；2021/9網路電子版改版",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0044",
  "category": "B01 局版書",
  "title": "淨土聖道─兼評選擇本願念佛",
  "publishDate": "2003/09/01",
  "copyrightDate": "2003/09/01",
  "note": "",
  "eventId": 63,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 63,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0045",
  "category": "",
  "title": "正覺電子報第 3期",
  "publishDate": "2003/10/01",
  "copyrightDate": "2003/10初版",
  "note": "初版；2022/4網路電子版改版",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0046",
  "category": "B01 局版書",
  "title": "楞伽經詳解 第十輯",
  "publishDate": "2003/11/01",
  "copyrightDate": "2003/11/01",
  "note": "",
  "eventId": 10,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 10,
    "by": "書名相同（紀要）"
   },
   {
    "id": 15,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0047",
  "category": "B02 結緣書",
  "title": "辨唯識性相",
  "publishDate": "2003/11/01",
  "copyrightDate": "2003/11/01",
  "note": "",
  "eventId": 56,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 56,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0048",
  "category": "",
  "title": "正覺電子報第 4期",
  "publishDate": "2003/11/03",
  "copyrightDate": "2003/11/3初版",
  "note": "初版",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0049",
  "category": "B02 結緣書",
  "title": "假如來藏",
  "publishDate": "2003/12/01",
  "copyrightDate": "2003/12/01",
  "note": "",
  "eventId": 56,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 56,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0050",
  "category": "B02 結緣書",
  "title": "入不二門",
  "publishDate": "2003/12/01",
  "copyrightDate": "2003/12/01",
  "note": "",
  "eventId": 65,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 65,
    "by": "書名相同"
   },
   {
    "id": 69,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0051",
  "category": "",
  "title": "正覺電子報第 5期",
  "publishDate": "2003/12/06",
  "copyrightDate": "2003/12/6初版",
  "note": "初版",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0052",
  "category": "",
  "title": "正覺電子報第 6期",
  "publishDate": "2004/01/04",
  "copyrightDate": "2004/1/4初版",
  "note": "初版；電子版2003/4，日期有誤，左為紙本書籍標示之日期。",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0053",
  "category": "",
  "title": "正覺電子報第 7期",
  "publishDate": "2004/02/22",
  "copyrightDate": "2004/2/22初版",
  "note": "初版",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0054",
  "category": "B02 結緣書",
  "title": "真假邪說(上下冊)",
  "publishDate": "2004/04/01",
  "copyrightDate": "2004/4/1初版",
  "note": "2004年初版原一大冊，2008年3月改版拆為上下二冊，內容不變。",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "0055",
  "category": "",
  "title": "正覺電子報第 8期",
  "publishDate": "2004/04/03",
  "copyrightDate": "2004/4/3初版",
  "note": "初版",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0056",
  "category": "",
  "title": "正覺電子報第 9期",
  "publishDate": "2004/05/03",
  "copyrightDate": "2004/5/3初版",
  "note": "初版",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0057",
  "category": "B02 結緣書",
  "title": "真假開悟",
  "publishDate": "2004/06/01",
  "copyrightDate": "2004/06/01",
  "note": "",
  "eventId": 58,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 58,
    "by": "書名相同（紀要）"
   },
   {
    "id": 67,
    "by": "書名相同（紀要）"
   },
   {
    "id": 18,
    "by": "書名相含"
   }
  ]
 },
 {
  "bookNo": "0058",
  "category": "B01 局版書",
  "title": "起信論講記 第一輯",
  "publishDate": "2004/06/30",
  "copyrightDate": "2004/6月底",
  "note": "",
  "eventId": 39,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 39,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0059",
  "category": "",
  "title": "正覺電子報第 10期",
  "publishDate": "2004/06/06",
  "copyrightDate": "2004/6/6初版",
  "note": "初版",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0060",
  "category": "",
  "title": "正覺電子報第 11期",
  "publishDate": "2004/07/04",
  "copyrightDate": "2004/7/4初版",
  "note": "初版",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0061",
  "category": "B02 結緣書",
  "title": "眼見佛性",
  "publishDate": "2004/08/01",
  "copyrightDate": "2004/08/01",
  "note": "",
  "eventId": 68,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 68,
    "by": "書名相同"
   },
   {
    "id": 123,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0062",
  "category": "",
  "title": "正覺電子報第 12期",
  "publishDate": "2004/08/04",
  "copyrightDate": "2004/8/4初版",
  "note": "初版",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0063",
  "category": "B02 結緣書",
  "title": "普門自在",
  "publishDate": "2004/09/01",
  "copyrightDate": "2004/09/01",
  "note": "",
  "eventId": 69,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 69,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0064",
  "category": "B01 局版書",
  "title": "起信論講記 第二輯",
  "publishDate": "2004/09/30",
  "copyrightDate": "2004/9月底",
  "note": "",
  "eventId": 39,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 39,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0065",
  "category": "",
  "title": "正覺電子報第 13期",
  "publishDate": "2004/09/09",
  "copyrightDate": "2004/9/9初版",
  "note": "初版",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0066",
  "category": "",
  "title": "正覺電子報第 14期",
  "publishDate": "2004/10/07",
  "copyrightDate": "2004/10/7初版",
  "note": "初版",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0067",
  "category": "",
  "title": "正覺電子報第 15期",
  "publishDate": "2004/11/11",
  "copyrightDate": "2004/11/11初版",
  "note": "初版",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0068",
  "category": "B01 局版書",
  "title": "起信論講記 第三輯",
  "publishDate": "2004/12/30",
  "copyrightDate": "2004/12月底",
  "note": "",
  "eventId": 39,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 39,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0069",
  "category": "",
  "title": "正覺電子報第 16期",
  "publishDate": "2004/12/13",
  "copyrightDate": "2004/12/13初版",
  "note": "初版",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0070",
  "category": "B02 結緣書",
  "title": "印順法師的悲哀",
  "publishDate": "2005/01/01",
  "copyrightDate": "2005/01/01",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "0071",
  "category": "",
  "title": "正覺電子報第 17期",
  "publishDate": "2005/01/07",
  "copyrightDate": "2005/1/7網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0072",
  "category": "",
  "title": "正覺電子報第 18期",
  "publishDate": "2005/02/03",
  "copyrightDate": "2005/2/3網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0073",
  "category": "B02 結緣書",
  "title": "真假禪和",
  "publishDate": "2005/03/01",
  "copyrightDate": "2005/03/01",
  "note": "",
  "eventId": 72,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 72,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0074",
  "category": "B01 局版書",
  "title": "起信論講記 第四輯",
  "publishDate": "2005/03/30",
  "copyrightDate": "2005/3月底",
  "note": "",
  "eventId": 39,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 39,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0075",
  "category": "",
  "title": "正覺電子報第 19期",
  "publishDate": "2005/03/17",
  "copyrightDate": "2005/3/19網路電子版出刊",
  "note": "網路電子版出刊 （實體書2005/3/19(末頁)、3/17(封面)）",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0076",
  "category": "",
  "title": "正覺電子報第 20期",
  "publishDate": "2005/05/05",
  "copyrightDate": "2005/5/5網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0077",
  "category": "B01 局版書",
  "title": "起信論講記 第五輯",
  "publishDate": "2005/06/30",
  "copyrightDate": "2005/6月底",
  "note": "",
  "eventId": 39,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 39,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0078",
  "category": "",
  "title": "正覺電子報第 21期",
  "publishDate": "2005/06/12",
  "copyrightDate": "2005/6/12網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0079",
  "category": "",
  "title": "正覺電子報第 22期",
  "publishDate": "2005/07/09",
  "copyrightDate": "2005/7/9網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0080",
  "category": "",
  "title": "正覺電子報第 23期",
  "publishDate": "2005/08/05",
  "copyrightDate": "2005/8/5網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0081",
  "category": "B01 局版書",
  "title": "起信論講記 第六輯",
  "publishDate": "2005/09/30",
  "copyrightDate": "2005/9月底",
  "note": "",
  "eventId": 39,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 39,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0082",
  "category": "",
  "title": "正覺電子報第 24期",
  "publishDate": "2005/09/12",
  "copyrightDate": "2005/9/12網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0083",
  "category": "",
  "title": "正覺電子報第 25期",
  "publishDate": "2005/10/09",
  "copyrightDate": "2005/10/9網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0084",
  "category": "B02 結緣書",
  "title": "識蘊真義",
  "publishDate": "2005/11/01",
  "copyrightDate": "2005/11/01",
  "note": "",
  "eventId": 77,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 77,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0085",
  "category": "",
  "title": "正覺電子報第 26期",
  "publishDate": "2005/11/08",
  "copyrightDate": "2005/11/8網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0086",
  "category": "",
  "title": "正覺電子報第 27期",
  "publishDate": "2005/12/11",
  "copyrightDate": "2005/12/11網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0087",
  "category": "B01 局版書",
  "title": "優婆塞戒經講記 第一輯",
  "publishDate": "2005/12/01",
  "copyrightDate": "2005/12/01",
  "note": "",
  "eventId": 61,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 61,
    "by": "書名相同（紀要）"
   },
   {
    "id": 117,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0088",
  "category": "",
  "title": "正覺電子報第 28期",
  "publishDate": "2006/01/10",
  "copyrightDate": "2006/1/10網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0089",
  "category": "B01 局版書",
  "title": "優婆塞戒經講記 第二輯",
  "publishDate": "2006/03/30",
  "copyrightDate": "2006/3月底",
  "note": "",
  "eventId": 61,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 61,
    "by": "書名相同（紀要）"
   },
   {
    "id": 117,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0090",
  "category": "",
  "title": "正覺電子報第 29期",
  "publishDate": "2006/03/10",
  "copyrightDate": "2006/3/10網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0091",
  "category": "",
  "title": "正覺電子報第 30期",
  "publishDate": "2006/04/08",
  "copyrightDate": "2006/4/8網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0092",
  "category": "",
  "title": "正覺電子報第 31期",
  "publishDate": "2006/05/10",
  "copyrightDate": "2006/5/10網路電子報版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0093",
  "category": "B01 局版書",
  "title": "優婆塞戒經講記 第三輯",
  "publishDate": "2006/06/30",
  "copyrightDate": "2006/6月底",
  "note": "",
  "eventId": 61,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 61,
    "by": "書名相同（紀要）"
   },
   {
    "id": 117,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0094",
  "category": "",
  "title": "正覺電子報第 32期",
  "publishDate": "2006/06/10",
  "copyrightDate": "2006/6/10網路電子報版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0095",
  "category": "",
  "title": "正覺電子報第 33期",
  "publishDate": "2006/07/10",
  "copyrightDate": "2006/7/10網路電子報版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0096",
  "category": "B01 局版書",
  "title": "阿含正義 第一輯",
  "publishDate": "2006/08/30",
  "copyrightDate": "2006/8月底",
  "note": "",
  "eventId": 84,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 84,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0097",
  "category": "",
  "title": "正覺電子報第 34期",
  "publishDate": "2006/08/10",
  "copyrightDate": "2006/8/10網路電子報版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0098",
  "category": "",
  "title": "正覺電子報第 35期",
  "publishDate": "2006/09/11",
  "copyrightDate": "2006/9/11網路電子報版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0099",
  "category": "B01 局版書",
  "title": "優婆塞戒經講記 第四輯",
  "publishDate": "2006/109/30",
  "copyrightDate": "2006/109月底",
  "note": "",
  "eventId": 61,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 61,
    "by": "書名相同（紀要）"
   },
   {
    "id": 117,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0100",
  "category": "B01 局版書",
  "title": "阿含正義 第二輯",
  "publishDate": "2006/10/30",
  "copyrightDate": "2006/10月底",
  "note": "",
  "eventId": 84,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 84,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0101",
  "category": "",
  "title": "正覺電子報第 36期",
  "publishDate": "2006/10/10",
  "copyrightDate": "2006/10/10網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0102",
  "category": "",
  "title": "正覺電子報第 37期",
  "publishDate": "2006/11/10",
  "copyrightDate": "2006/11/10網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0103",
  "category": "",
  "title": "正覺電子報第 38期",
  "publishDate": "2006/12/16",
  "copyrightDate": "2006/12/16網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0104",
  "category": "B01 局版書",
  "title": "優婆塞戒經講記 第五輯",
  "publishDate": "2006/12/30",
  "copyrightDate": "2006/12月底",
  "note": "書香園地刊載日期為2007/1",
  "eventId": 61,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 61,
    "by": "書名相同（紀要）"
   },
   {
    "id": 117,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0105",
  "category": "B01 局版書",
  "title": "阿含正義 第三輯",
  "publishDate": "2006/12/30",
  "copyrightDate": "2006/12月底",
  "note": "書香園地刊載日期為2007/1",
  "eventId": 84,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 84,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0106",
  "category": "",
  "title": "正覺電子報第 39期",
  "publishDate": "2007/01/25",
  "copyrightDate": "2007/1/25網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0107",
  "category": "B02 結緣書",
  "title": "遠惑趣道(第一輯)",
  "publishDate": "2007/02/01",
  "copyrightDate": "2007/02/01",
  "note": "",
  "eventId": 29,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 29,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0108",
  "category": "B02 結緣書",
  "title": "現代人應有的宗教觀",
  "publishDate": "2007/21/1",
  "copyrightDate": "2007/2元月",
  "note": "",
  "eventId": 88,
  "matchBy": "人工對應",
  "candidates": [
   {
    "id": 88,
    "by": "人工對應"
   }
  ]
 },
 {
  "bookNo": "0109",
  "category": "B01 局版書",
  "title": "阿含正義 第四輯",
  "publishDate": "2007/02/28",
  "copyrightDate": "2007/2月底",
  "note": "",
  "eventId": 84,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 84,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0110",
  "category": "B01 局版書",
  "title": "我的菩提路(第一輯)",
  "publishDate": "2007/03/30",
  "copyrightDate": "2007/3月底",
  "note": "",
  "eventId": 89,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 89,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0111",
  "category": "",
  "title": "正覺電子報第 40期",
  "publishDate": "2007/03/27",
  "copyrightDate": "2007/3/27網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0112",
  "category": "B01 局版書",
  "title": "優婆塞戒經講記 第六輯",
  "publishDate": "2007/43/30",
  "copyrightDate": "2007/43月底",
  "note": "",
  "eventId": 61,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 61,
    "by": "書名相同（紀要）"
   },
   {
    "id": 117,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0113",
  "category": "B01 局版書",
  "title": "阿含正義 第五輯",
  "publishDate": "2007/54/30",
  "copyrightDate": "2007/54月底",
  "note": "",
  "eventId": 84,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 84,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0114",
  "category": "B01 局版書",
  "title": "優婆塞戒經講記 第七輯",
  "publishDate": "2007/76/30",
  "copyrightDate": "2007/76月底",
  "note": "",
  "eventId": 61,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 61,
    "by": "書名相同（紀要）"
   },
   {
    "id": 117,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0115",
  "category": "B01 局版書",
  "title": "阿含正義 第六輯",
  "publishDate": "2007/76/30",
  "copyrightDate": "2007/76月底",
  "note": "",
  "eventId": 84,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 84,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0116",
  "category": "",
  "title": "正覺電子報第 41期",
  "publishDate": "2007/07/02",
  "copyrightDate": "2007/7/2網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0117",
  "category": "",
  "title": "正覺電子報第 42期",
  "publishDate": "2007/08/06",
  "copyrightDate": "2007/8/6網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0118",
  "category": "B02 結緣書",
  "title": "生命實相之辨正",
  "publishDate": "1997/09/20",
  "copyrightDate": "1997/9/20",
  "note": "",
  "eventId": 20,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 20,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0119",
  "category": "B01 局版書",
  "title": "阿含正義 第七輯",
  "publishDate": "2007/09/30",
  "copyrightDate": "2007/9月底",
  "note": "",
  "eventId": 84,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 84,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0120",
  "category": "",
  "title": "正覺電子報第 43期",
  "publishDate": "2007/09/12",
  "copyrightDate": "2007/9/12網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0121",
  "category": "B01 局版書",
  "title": "優婆塞戒經講記 第八輯",
  "publishDate": "2007/109/1",
  "copyrightDate": "2007/109",
  "note": "",
  "eventId": 61,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 61,
    "by": "書名相同（紀要）"
   },
   {
    "id": 117,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0122",
  "category": "",
  "title": "正覺電子報第 44期",
  "publishDate": "2007/10/29",
  "copyrightDate": "2007/10/29網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0123",
  "category": "B01 局版書",
  "title": "鈍鳥與靈龜",
  "publishDate": "2007/11/01",
  "copyrightDate": "2007/11/01",
  "note": "預計初版日是10/31，故印時寫2007/10月，但真正初版是在11月，再印時改為11月。",
  "eventId": 95,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 95,
    "by": "書名相同"
   },
   {
    "id": 156,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0124",
  "category": "B01 局版書",
  "title": "維摩詰經講記 第一輯",
  "publishDate": "2007/11/30",
  "copyrightDate": "2007/11月底",
  "note": "",
  "eventId": 70,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 70,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0125",
  "category": "",
  "title": "正覺電子報第 45期",
  "publishDate": "2007/11/26",
  "copyrightDate": "2007/11/26網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0126",
  "category": "B01 局版書",
  "title": "正覺學報 創刊號",
  "publishDate": "2007/12/02",
  "copyrightDate": "2007/12/2",
  "note": "",
  "eventId": 97,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 97,
    "by": "書名相含"
   },
   {
    "id": 78,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0127",
  "category": "B02 結緣書",
  "title": "確保您的權益",
  "publishDate": "2007/12/01",
  "copyrightDate": "2007/12/01",
  "note": "",
  "eventId": 88,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 88,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0128",
  "category": "B01 局版書",
  "title": "維摩詰經講記 第二輯",
  "publishDate": "2008/01/30",
  "copyrightDate": "2008/1/月底",
  "note": "",
  "eventId": 70,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 70,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0129",
  "category": "",
  "title": "正覺電子報第 46期",
  "publishDate": "2008/01/28",
  "copyrightDate": "2008/1/28網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0130",
  "category": "B02 結緣書",
  "title": "如何修證解脫道",
  "publishDate": "2008/03/01",
  "copyrightDate": "2008/03/01",
  "note": "",
  "eventId": 98,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 98,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0131",
  "category": "B02 結緣書",
  "title": "成佛之道",
  "publishDate": "2008/03/01",
  "copyrightDate": "2008/03/01",
  "note": "",
  "eventId": 98,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 98,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0132",
  "category": "B02 結緣書",
  "title": "概說密宗系列(共六冊)",
  "publishDate": "2008/03/01",
  "copyrightDate": "2008/03/01",
  "note": "",
  "eventId": 51,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 51,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0133",
  "category": "B02 結緣書",
  "title": "甘露法門─解脫道與佛菩提道",
  "publishDate": "2008/03/01",
  "copyrightDate": "2008/03/01",
  "note": "",
  "eventId": 98,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 98,
    "by": "書名相含"
   }
  ]
 },
 {
  "bookNo": "0134",
  "category": "B01 局版書",
  "title": "維摩詰經講記 第三輯",
  "publishDate": "2008/03/30",
  "copyrightDate": "2008/3月底",
  "note": "",
  "eventId": 70,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 70,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0135",
  "category": "",
  "title": "正覺電子報第 47期",
  "publishDate": "2008/03/28",
  "copyrightDate": "2008/3/28網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0136",
  "category": "B01 局版書",
  "title": "維摩詰經講記 第四輯",
  "publishDate": "2008/05/30",
  "copyrightDate": "2008/5月底",
  "note": "",
  "eventId": 70,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 70,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0137",
  "category": "",
  "title": "正覺電子報第 48期",
  "publishDate": "2008/05/26",
  "copyrightDate": "2008/5/26網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0138",
  "category": "B01 局版書",
  "title": "真假外道",
  "publishDate": "2008/06/01",
  "copyrightDate": "2008/06/01",
  "note": "",
  "eventId": 103,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 103,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0139",
  "category": "B02 結緣書",
  "title": "淺談達賴喇嘛之雙身法",
  "publishDate": "2008/06/01",
  "copyrightDate": "2008/06/01",
  "note": "",
  "eventId": 104,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 104,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0140",
  "category": "B01 局版書",
  "title": "維摩詰經講記 第五輯",
  "publishDate": "2008/07/30",
  "copyrightDate": "2008/7月底",
  "note": "",
  "eventId": 70,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 70,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0141",
  "category": "",
  "title": "正覺電子報第 49期",
  "publishDate": "2008/07/11",
  "copyrightDate": "2008/7/11網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0142",
  "category": "B02 結緣書",
  "title": "隨緣",
  "publishDate": "2008/09/01",
  "copyrightDate": "2008/09/01",
  "note": "",
  "eventId": 76,
  "matchBy": "書名主體",
  "candidates": [
   {
    "id": 76,
    "by": "書名主體"
   }
  ]
 },
 {
  "bookNo": "0143",
  "category": "B02 結緣書",
  "title": "密宗真相 (原名：魔界轉世)",
  "publishDate": "2008/09/01",
  "copyrightDate": "2008/09/01",
  "note": "",
  "eventId": 104,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 104,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0144",
  "category": "B01 局版書",
  "title": "維摩詰經講記 第六輯",
  "publishDate": "2008/09/30",
  "copyrightDate": "2008/9月底",
  "note": "",
  "eventId": 70,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 70,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0145",
  "category": "",
  "title": "正覺電子報第 50期",
  "publishDate": "2008/09/30",
  "copyrightDate": "2008/9/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0146",
  "category": "B01 局版書",
  "title": "勝鬘經講記 第一輯",
  "publishDate": "2008/11/30",
  "copyrightDate": "2008/11/30",
  "note": "",
  "eventId": 82,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 82,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0147",
  "category": "B01 局版書",
  "title": "正覺學報 第二期",
  "publishDate": "2008/12/131",
  "copyrightDate": "2008/12/31",
  "note": "日期依據博客來網站書訊https://www.books.com.tw/products/0010432489所載《正覺學報》第二期出版時間",
  "eventId": 97,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 97,
    "by": "書名相含"
   },
   {
    "id": 78,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0148",
  "category": "",
  "title": "正覺電子報第 51期",
  "publishDate": "2008/12/22",
  "copyrightDate": "2008/12/22網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0149",
  "category": "B01 局版書",
  "title": "勝鬘經講記 第二輯",
  "publishDate": "2009/01/30",
  "copyrightDate": "2009/01/30",
  "note": "",
  "eventId": 82,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 82,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0150",
  "category": "B01 局版書",
  "title": "勝鬘經講記 第三輯",
  "publishDate": "2009/03/30",
  "copyrightDate": "2009/03/30",
  "note": "",
  "eventId": 82,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 82,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0151",
  "category": "",
  "title": "正覺電子報第 52期",
  "publishDate": "2009/03/11",
  "copyrightDate": "2009/3/11網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0152",
  "category": "B02 結緣書",
  "title": "學佛的覺醒",
  "publishDate": "2009/05/01",
  "copyrightDate": "2009/05/01",
  "note": "",
  "eventId": 108,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 108,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0153",
  "category": "B02 結緣書",
  "title": "導師之真實義",
  "publishDate": "2009/05/01",
  "copyrightDate": "2009/05/01",
  "note": "",
  "eventId": 88,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 88,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0154",
  "category": "B01 局版書",
  "title": "勝鬘經講記 第四輯",
  "publishDate": "2009/05/30",
  "copyrightDate": "2009/05/30",
  "note": "",
  "eventId": 82,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 82,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0155",
  "category": "",
  "title": "正覺電子報第 53期",
  "publishDate": "2009/06/15",
  "copyrightDate": "2009/6/15網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0156",
  "category": "B02 結緣書",
  "title": "如來藏中藏如來",
  "publishDate": "2009/07/01",
  "copyrightDate": "2009/07/01",
  "note": "",
  "eventId": 98,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 98,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0157",
  "category": "B02 結緣書",
  "title": "觀行斷三縛結",
  "publishDate": "2009/07/01",
  "copyrightDate": "2009/07/01",
  "note": "",
  "eventId": 98,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 98,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0158",
  "category": "B01 局版書",
  "title": "勝鬘經講記 第五輯",
  "publishDate": "2009/07/30",
  "copyrightDate": "2009/07/30",
  "note": "",
  "eventId": 82,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 82,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0159",
  "category": "",
  "title": "正覺電子報第 54期",
  "publishDate": "2009/07/30",
  "copyrightDate": "2009/7/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0160",
  "category": "B02 結緣書",
  "title": "一貫道與開悟",
  "publishDate": "2009/08/01",
  "copyrightDate": "2009/08/01",
  "note": "",
  "eventId": 88,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 88,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0161",
  "category": "B01 局版書",
  "title": "勝鬘經講記 第六輯",
  "publishDate": "2009/09/30",
  "copyrightDate": "2009/09/30",
  "note": "",
  "eventId": 82,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 82,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0162",
  "category": "",
  "title": "正覺電子報第 55期",
  "publishDate": "2009/09/25",
  "copyrightDate": "2009/9/25網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0163",
  "category": "B02 結緣書",
  "title": "出家菩薩首重 虛心求教 勤求證悟",
  "publishDate": "2009/11/01",
  "copyrightDate": "2009/11/01",
  "note": "",
  "eventId": 98,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 98,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0164",
  "category": "B01 局版書",
  "title": "楞嚴經講記 第一輯",
  "publishDate": "2009/11/30",
  "copyrightDate": "2009/11/30月底",
  "note": "",
  "eventId": 48,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 48,
    "by": "書名相同（紀要）"
   },
   {
    "id": 1,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0165",
  "category": "",
  "title": "正覺電子報第 56期",
  "publishDate": "2009/11/09",
  "copyrightDate": "2009/11/9網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0166",
  "category": "B01 局版書",
  "title": "正覺學報 第三期",
  "publishDate": "2009/12/31",
  "copyrightDate": "2009/12月底",
  "note": "",
  "eventId": 97,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 97,
    "by": "書名相含"
   },
   {
    "id": 78,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0167",
  "category": "B02 結緣書",
  "title": "遠惑趣道(第二輯)",
  "publishDate": "2009/12/01",
  "copyrightDate": "2009/12/01",
  "note": "",
  "eventId": 29,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 29,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0168",
  "category": "B01 局版書",
  "title": "達賴真面目─玩盡天下女人  ‧精裝本",
  "publishDate": "2010/01/01",
  "copyrightDate": "2010/01/01",
  "note": "2010年版為正覺教育基金會發行初版，作者為正覺教育基金會編。\n2011年改版為正智出版社發行初版，作者為白志偉等編著。",
  "eventId": 111,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 111,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0169",
  "category": "B02 結緣書",
  "title": "博愛",
  "publishDate": "2010/01/01",
  "copyrightDate": "2010/01/01",
  "note": "",
  "eventId": 111,
  "matchBy": "書名主體",
  "candidates": [
   {
    "id": 111,
    "by": "書名主體"
   }
  ]
 },
 {
  "bookNo": "0170",
  "category": "B02 結緣書",
  "title": "破羯磨僧真義",
  "publishDate": "2010/01/01",
  "copyrightDate": "2010/01/01",
  "note": "",
  "eventId": 113,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 113,
    "by": "書名相含"
   }
  ]
 },
 {
  "bookNo": "0171",
  "category": "B01 局版書",
  "title": "楞嚴經講記 第二輯",
  "publishDate": "2010/01/30",
  "copyrightDate": "2010/1/30月底",
  "note": "",
  "eventId": 48,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 48,
    "by": "書名相同（紀要）"
   },
   {
    "id": 1,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0172",
  "category": "",
  "title": "正覺電子報第 57期",
  "publishDate": "2010/01/04",
  "copyrightDate": "2010/1/4網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0173",
  "category": "B01 局版書",
  "title": "楞嚴經講記 第三輯",
  "publishDate": "2010/03/30",
  "copyrightDate": "2010/3/30月底",
  "note": "",
  "eventId": 48,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 48,
    "by": "書名相同（紀要）"
   },
   {
    "id": 1,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0174",
  "category": "",
  "title": "正覺電子報第 58期",
  "publishDate": "2010/03/17",
  "copyrightDate": "2010/3/17網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0175",
  "category": "B02 結緣書",
  "title": "意識虛妄經教彙編",
  "publishDate": "2010/04/01",
  "copyrightDate": "2010/04/01",
  "note": "",
  "eventId": 115,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 115,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0176",
  "category": "B01 局版書",
  "title": "楞嚴經講記 第四輯",
  "publishDate": "2010/05/30",
  "copyrightDate": "2010/5/30月底",
  "note": "",
  "eventId": 48,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 48,
    "by": "書名相同（紀要）"
   },
   {
    "id": 1,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0177",
  "category": "",
  "title": "正覺電子報第 59期",
  "publishDate": "2010/06/29",
  "copyrightDate": "2010/6/29網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0178",
  "category": "B01 局版書",
  "title": "楞嚴經講記 第五輯",
  "publishDate": "2010/87/30",
  "copyrightDate": "2010/7/308月底",
  "note": "",
  "eventId": 48,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 48,
    "by": "書名相同（紀要）"
   },
   {
    "id": 1,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0179",
  "category": "",
  "title": "正覺電子報第 60期",
  "publishDate": "2010/08/01",
  "copyrightDate": "2010/8/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0180",
  "category": "B01 局版書",
  "title": "楞嚴經講記 第六輯",
  "publishDate": "2010/09/30",
  "copyrightDate": "2010/9/30月底",
  "note": "",
  "eventId": 48,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 48,
    "by": "書名相同（紀要）"
   },
   {
    "id": 1,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0181",
  "category": "",
  "title": "正覺電子報第 61期",
  "publishDate": "2010/09/01",
  "copyrightDate": "2010/9/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0182",
  "category": "",
  "title": "正覺電子報第 62期",
  "publishDate": "2010/10/01",
  "copyrightDate": "2010/10/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0183",
  "category": "B01 局版書",
  "title": "楞嚴經講記 第七輯",
  "publishDate": "2010/11/30",
  "copyrightDate": "2010/11/30月底",
  "note": "",
  "eventId": 48,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 48,
    "by": "書名相同（紀要）"
   },
   {
    "id": 1,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0184",
  "category": "",
  "title": "正覺電子報第 63期",
  "publishDate": "2010/11/01",
  "copyrightDate": "2010/11/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0185",
  "category": "",
  "title": "正覺電子報第 64期",
  "publishDate": "2010/12/01",
  "copyrightDate": "2010/12/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0186",
  "category": "B01 局版書",
  "title": "楞嚴經講記 第八輯",
  "publishDate": "2011/01/30",
  "copyrightDate": "2011/1/30月底",
  "note": "",
  "eventId": 48,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 48,
    "by": "書名相同（紀要）"
   },
   {
    "id": 1,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0187",
  "category": "",
  "title": "正覺電子報第 65期",
  "publishDate": "2011/01/01",
  "copyrightDate": "2011/1/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0188",
  "category": "B01 局版書",
  "title": "明心與眼見佛性",
  "publishDate": "2011/2/11/31",
  "copyrightDate": "2011/2/11/31",
  "note": "",
  "eventId": 123,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 123,
    "by": "書名相同"
   },
   {
    "id": 68,
    "by": "書名相含"
   }
  ]
 },
 {
  "bookNo": "0189",
  "category": "B02 結緣書",
  "title": "繫念思惟念佛法門",
  "publishDate": "2011/03/01",
  "copyrightDate": "2011/03/01",
  "note": "",
  "eventId": 88,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 88,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0190",
  "category": "",
  "title": "正覺電子報第 66期",
  "publishDate": "2011/03/01",
  "copyrightDate": "2011/3/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0191",
  "category": "B01 局版書",
  "title": "楞嚴經講記 第九輯",
  "publishDate": "2011/43/30",
  "copyrightDate": "2011/4月底3/30",
  "note": "",
  "eventId": 48,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 48,
    "by": "書名相同（紀要）"
   },
   {
    "id": 1,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0192",
  "category": "",
  "title": "正覺電子報第 67期",
  "publishDate": "2011/04/01",
  "copyrightDate": "2011/4/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0193",
  "category": "",
  "title": "正覺電子報第 68期",
  "publishDate": "2011/05/01",
  "copyrightDate": "2011/5/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0194",
  "category": "B01 局版書",
  "title": "楞嚴經講記 第十輯",
  "publishDate": "2011/65/30",
  "copyrightDate": "2011/6月底5/30",
  "note": "",
  "eventId": 48,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 48,
    "by": "書名相同（紀要）"
   },
   {
    "id": 1,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0195",
  "category": "",
  "title": "正覺電子報第 69期",
  "publishDate": "2011/06/01",
  "copyrightDate": "2011/6/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0196",
  "category": "B02 結緣書",
  "title": "廣論之平議 (一)",
  "publishDate": "2011/06/01",
  "copyrightDate": "2011/6初版四刷(紙版)",
  "note": "初版四刷(紙版)；電子書初版 2017/10月",
  "eventId": 126,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 126,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0197",
  "category": "B02 結緣書",
  "title": "俺矇你把你哄",
  "publishDate": "2011/07/01",
  "copyrightDate": "2011/07/01",
  "note": "",
  "eventId": 104,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 104,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0198",
  "category": "B01 局版書",
  "title": "楞嚴經講記 第十一輯",
  "publishDate": "2011/07/30",
  "copyrightDate": "2011/7/30月底",
  "note": "",
  "eventId": 48,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 48,
    "by": "書名相同（紀要）"
   },
   {
    "id": 1,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0199",
  "category": "",
  "title": "正覺電子報第 70期",
  "publishDate": "2011/07/01",
  "copyrightDate": "2011/7/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0200",
  "category": "B02 結緣書",
  "title": "廣論之平議 (二)",
  "publishDate": "2011/07/01",
  "copyrightDate": "2011/7初版四刷(紙版)",
  "note": "初版四刷(紙版)；電子書初版 2017/10月",
  "eventId": 126,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 126,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0201",
  "category": "",
  "title": "正覺電子報第 71期",
  "publishDate": "2011/08/01",
  "copyrightDate": "2011/8/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0202",
  "category": "B01 局版書",
  "title": "喇嘛性世界─揭開藏傳佛教譚崔瑜伽的面紗",
  "publishDate": "2011/07/01",
  "copyrightDate": "2011/07/01",
  "note": "",
  "eventId": 104,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 104,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0204",
  "category": "B01 局版書",
  "title": "楞嚴經講記 第十二輯",
  "publishDate": "2011/09/30",
  "copyrightDate": "2011/9/30月底",
  "note": "",
  "eventId": 48,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 48,
    "by": "書名相同（紀要）"
   },
   {
    "id": 1,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0205",
  "category": "",
  "title": "正覺電子報第 72期",
  "publishDate": "2011/09/01",
  "copyrightDate": "2011/9/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0206",
  "category": "",
  "title": "正覺電子報第 73期",
  "publishDate": "2011/10/01",
  "copyrightDate": "2011/10/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0207",
  "category": "B01 局版書",
  "title": "假藏傳佛教的神話─性、謊言、喇嘛教",
  "publishDate": "2011/11/01",
  "copyrightDate": "2011/11/01",
  "note": "初版書名：藏傳佛教的神話─性、謊言、喇嘛教\n2016年11月初版四刷更名：假藏傳佛教的神話─性、謊言、喇嘛教",
  "eventId": 104,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 104,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0208",
  "category": "",
  "title": "正覺電子報第 74期",
  "publishDate": "2011/11/01",
  "copyrightDate": "2011/11/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0209",
  "category": "B02 結緣書",
  "title": "外道羅丹的悲哀(一)(二)(三)",
  "publishDate": "2011/12/01",
  "copyrightDate": "2011/12/01",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "0210",
  "category": "B02 結緣書",
  "title": "您不可不知的事實",
  "publishDate": "2011/12/01",
  "copyrightDate": "2011/12/01",
  "note": "",
  "eventId": 104,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 104,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0211",
  "category": "B01 局版書",
  "title": "楞嚴經講記 第十三輯",
  "publishDate": "2011/1211/30",
  "copyrightDate": "2011/11/3012月底",
  "note": "",
  "eventId": 48,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 48,
    "by": "書名相同（紀要）"
   },
   {
    "id": 1,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0212",
  "category": "",
  "title": "正覺電子報第 75期",
  "publishDate": "2011/12/01",
  "copyrightDate": "2011/12/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0213",
  "category": "B01 局版書",
  "title": "楞嚴經講記 第十四輯",
  "publishDate": "2012/01/30",
  "copyrightDate": "2012/1/30月底",
  "note": "",
  "eventId": 48,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 48,
    "by": "書名相同（紀要）"
   },
   {
    "id": 1,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0214",
  "category": "",
  "title": "正覺電子報第 76期",
  "publishDate": "2012/01/01",
  "copyrightDate": "2012/1/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0215",
  "category": "B01 局版書",
  "title": "楞嚴經講記 第十五輯",
  "publishDate": "2012/03/30",
  "copyrightDate": "2012/3/30月底",
  "note": "",
  "eventId": 48,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 48,
    "by": "書名相同（紀要）"
   },
   {
    "id": 1,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0216",
  "category": "",
  "title": "正覺電子報第 77期",
  "publishDate": "2012/03/01",
  "copyrightDate": "2012/3/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0217",
  "category": "",
  "title": "正覺電子報第 78期",
  "publishDate": "2012/04/01",
  "copyrightDate": "2012/4/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0218",
  "category": "",
  "title": "正覺電子報第 79期",
  "publishDate": "2012/05/01",
  "copyrightDate": "2012/5/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0219",
  "category": "B01 局版書",
  "title": "金剛經宗通 第一輯",
  "publishDate": "2012/05/31",
  "copyrightDate": "2012/5/31",
  "note": "",
  "eventId": 87,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 87,
    "by": "書名相同（紀要）"
   },
   {
    "id": 66,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0220",
  "category": "B01 局版書",
  "title": "末代達賴—性交教主的悲歌",
  "publishDate": "2012/04/01",
  "copyrightDate": "2012/04/01",
  "note": "",
  "eventId": 104,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 104,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0221",
  "category": "",
  "title": "正覺電子報第 80期",
  "publishDate": "2012/06/01",
  "copyrightDate": "2012/6/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0222",
  "category": "B01 局版書",
  "title": "金剛經宗通 第二輯",
  "publishDate": "2012/07/31",
  "copyrightDate": "2012/7/31",
  "note": "",
  "eventId": 87,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 87,
    "by": "書名相同（紀要）"
   },
   {
    "id": 66,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0223",
  "category": "",
  "title": "正覺電子報第 81期",
  "publishDate": "2012/07/10",
  "copyrightDate": "2012/7/10網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0224",
  "category": "",
  "title": "正覺電子報第 82期",
  "publishDate": "2012/08/08",
  "copyrightDate": "2012/8/8網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0225",
  "category": "",
  "title": "正覺電子報第 83期",
  "publishDate": "2012/09/01",
  "copyrightDate": "2012/9/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0226",
  "category": "B01 局版書",
  "title": "金剛經宗通 第三輯",
  "publishDate": "2012/09/30",
  "copyrightDate": "2012/9/30",
  "note": "",
  "eventId": 87,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 87,
    "by": "書名相同（紀要）"
   },
   {
    "id": 66,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0227",
  "category": "B01 局版書",
  "title": "霧峰無霧─給哥哥的信",
  "publishDate": "2012/10/01",
  "copyrightDate": "2012/10/01",
  "note": "",
  "eventId": 136,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 136,
    "by": "書名相含"
   }
  ]
 },
 {
  "bookNo": "0228",
  "category": "",
  "title": "正覺電子報第 84期",
  "publishDate": "2012/10/08",
  "copyrightDate": "2012/10/8網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0229",
  "category": "B01 局版書",
  "title": "金剛經宗通 第四輯",
  "publishDate": "2012/11/30",
  "copyrightDate": "2012/11/30",
  "note": "",
  "eventId": 87,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 87,
    "by": "書名相同（紀要）"
   },
   {
    "id": 66,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0230",
  "category": "",
  "title": "正覺電子報第 85期",
  "publishDate": "2012/11/01",
  "copyrightDate": "2012/11/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0231",
  "category": "B01 局版書",
  "title": "第七意識與第八意識?──穿越時空「超意識」",
  "publishDate": "2012/12/01",
  "copyrightDate": "2012/12/01",
  "note": "初版七刷版權頁中登載：\n初版首刷日期為2012年10月1日",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "0232",
  "category": "",
  "title": "正覺電子報第 86期",
  "publishDate": "2012/12/01",
  "copyrightDate": "2012/12/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0233",
  "category": "",
  "title": "正覺電子報第 87期",
  "publishDate": "2013/01/01",
  "copyrightDate": "2013/1/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0234",
  "category": "B01 局版書",
  "title": "金剛經宗通 第五輯",
  "publishDate": "2013/01/31",
  "copyrightDate": "2013/1/31",
  "note": "",
  "eventId": 87,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 87,
    "by": "書名相同（紀要）"
   },
   {
    "id": 66,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0235",
  "category": "B01 局版書",
  "title": "黯淡的達賴 — 失去光彩的諾貝爾和平獎",
  "publishDate": "2013/01/31",
  "copyrightDate": "2013/1/31",
  "note": "",
  "eventId": 104,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 104,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0236",
  "category": "B01 局版書",
  "title": "金剛經宗通 第六輯",
  "publishDate": "2013/03/31",
  "copyrightDate": "2013/3/31",
  "note": "",
  "eventId": 87,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 87,
    "by": "書名相同（紀要）"
   },
   {
    "id": 66,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0237",
  "category": "",
  "title": "正覺電子報第 88期",
  "publishDate": "2013/03/01",
  "copyrightDate": "2013/3/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0238",
  "category": "",
  "title": "正覺電子報第 89期",
  "publishDate": "2013/04/01",
  "copyrightDate": "2013/4/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0239",
  "category": "B01 局版書",
  "title": "金剛經宗通 第七輯",
  "publishDate": "2013/05/31",
  "copyrightDate": "2013/5/31",
  "note": "",
  "eventId": 87,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 87,
    "by": "書名相同（紀要）"
   },
   {
    "id": 66,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0240",
  "category": "",
  "title": "正覺電子報第 90期",
  "publishDate": "2013/05/01",
  "copyrightDate": "2013/5/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0241",
  "category": "",
  "title": "正覺電子報第 91期",
  "publishDate": "2013/06/01",
  "copyrightDate": "2013/6/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0242",
  "category": "B02 結緣書",
  "title": "廣論之平議 (三)",
  "publishDate": "2013/06/01",
  "copyrightDate": "2013/6初版二刷(紙版)",
  "note": "初版二刷(紙版)；電子書初版 2017/10月",
  "eventId": 126,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 126,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0243",
  "category": "B02 結緣書",
  "title": "廣論之平議 (四)",
  "publishDate": "2013/06/01",
  "copyrightDate": "2013/6初版二刷(紙版)",
  "note": "初版二刷(紙版)；電子書初版 2017/10月",
  "eventId": 126,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 126,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0244",
  "category": "B02 結緣書",
  "title": "廣論之平議 (五)",
  "publishDate": "2013/06/01",
  "copyrightDate": "2013/6初版二刷(紙版)",
  "note": "初版二刷(紙版)；電子書初版 2017/10月",
  "eventId": 126,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 126,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0245",
  "category": "B02 結緣書",
  "title": "廣論之平議 (六)",
  "publishDate": "2013/06/01",
  "copyrightDate": "2013/6初版二刷(紙版)",
  "note": "初版二刷(紙版)；電子書初版 2017/10月",
  "eventId": 126,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 126,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0246",
  "category": "B02 結緣書",
  "title": "廣論之平議 (七)",
  "publishDate": "2013/06/01",
  "copyrightDate": "2013/6初版二刷(紙版)",
  "note": "初版二刷(紙版)；電子書初版 2017/11月",
  "eventId": 126,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 126,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0247",
  "category": "B01 局版書",
  "title": "金剛經宗通 第八輯",
  "publishDate": "2013/07/31",
  "copyrightDate": "2013/7/31",
  "note": "",
  "eventId": 87,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 87,
    "by": "書名相同（紀要）"
   },
   {
    "id": 66,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0248",
  "category": "",
  "title": "正覺電子報第 92期",
  "publishDate": "2013/07/01",
  "copyrightDate": "2013/7/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0249",
  "category": "B02 結緣書",
  "title": "與《廣論》研討班學員談心",
  "publishDate": "2013/07/01",
  "copyrightDate": "2013/7初版首二刷(紙版)",
  "note": "初版首二刷(紙版)；電子書初版 2018/1月",
  "eventId": 126,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 126,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0250",
  "category": "B01 局版書",
  "title": "童女迦葉考",
  "publishDate": "2013/8/130",
  "copyrightDate": "2013/08/30",
  "note": "",
  "eventId": 139,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 139,
    "by": "書名相同"
   },
   {
    "id": 95,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0251",
  "category": "",
  "title": "正覺電子報第 93期",
  "publishDate": "2013/08/01",
  "copyrightDate": "2013/8/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0252",
  "category": "B01 局版書",
  "title": "金剛經宗通 第九輯",
  "publishDate": "2013/09/30",
  "copyrightDate": "2013/9/30",
  "note": "",
  "eventId": 87,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 87,
    "by": "書名相同（紀要）"
   },
   {
    "id": 66,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0253",
  "category": "",
  "title": "正覺電子報第 94期",
  "publishDate": "2013/09/01",
  "copyrightDate": "2013/9/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0254",
  "category": "",
  "title": "正覺電子報第 95期",
  "publishDate": "2013/10/01",
  "copyrightDate": "2013/10/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0255",
  "category": "",
  "title": "正覺電子報第 96期",
  "publishDate": "2013/11/01",
  "copyrightDate": "2013/11/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0256",
  "category": "B01 局版書",
  "title": "人間佛教",
  "publishDate": "2013/1211/1",
  "copyrightDate": "2013/1211",
  "note": "",
  "eventId": 96,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 96,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0257",
  "category": "",
  "title": "正覺電子報第 97期",
  "publishDate": "2013/12/01",
  "copyrightDate": "2013/12/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0258",
  "category": "",
  "title": "正覺電子報第 98期",
  "publishDate": "2014/01/01",
  "copyrightDate": "2014/1/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0259",
  "category": "B01 局版書",
  "title": "實相經宗通 第一輯",
  "publishDate": "2014/01/31",
  "copyrightDate": "2014/1/31",
  "note": "",
  "eventId": 101,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 101,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0260",
  "category": "B01 局版書",
  "title": "真心告訴您(一)-達賴喇嘛在幹什麼？",
  "publishDate": "2014/2/11/10",
  "copyrightDate": "2014/1/10",
  "note": "",
  "eventId": 122,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 122,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0261",
  "category": "B02 結緣書",
  "title": "邪箭囈語 (上下冊)",
  "publishDate": "2014/02/01",
  "copyrightDate": "2014/02/01",
  "note": "",
  "eventId": 142,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 142,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0262",
  "category": "B01 局版書",
  "title": "見性與看話頭",
  "publishDate": "2014/3/12/28",
  "copyrightDate": "2014/2月底",
  "note": "",
  "eventId": 144,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 144,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0263",
  "category": "B01 局版書",
  "title": "實相經宗通 第二輯",
  "publishDate": "2014/03/31",
  "copyrightDate": "2014/3/31",
  "note": "",
  "eventId": 101,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 101,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0264",
  "category": "",
  "title": "正覺電子報第 99期",
  "publishDate": "2014/03/01",
  "copyrightDate": "2014/3/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0265",
  "category": "",
  "title": "正覺電子報第 100期",
  "publishDate": "2014/04/01",
  "copyrightDate": "2014/4/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0266",
  "category": "B01 局版書",
  "title": "實相經宗通 第三輯",
  "publishDate": "2014/05/31",
  "copyrightDate": "2014/5/31",
  "note": "",
  "eventId": 101,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 101,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0267",
  "category": "",
  "title": "正覺電子報第 101期",
  "publishDate": "2014/05/01",
  "copyrightDate": "2014/5/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0268",
  "category": "",
  "title": "正覺電子報第 102期",
  "publishDate": "2014/06/01",
  "copyrightDate": "2014/6/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0269",
  "category": "B01 局版書",
  "title": "實相經宗通 第四輯",
  "publishDate": "2014/07/31",
  "copyrightDate": "2014/7/31",
  "note": "",
  "eventId": 101,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 101,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0270",
  "category": "",
  "title": "正覺電子報第 103期",
  "publishDate": "2014/07/01",
  "copyrightDate": "2014/7/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0271",
  "category": "B02 結緣書",
  "title": "甘願做菩薩",
  "publishDate": "2014/08/01",
  "copyrightDate": "2014/08/01",
  "note": "",
  "eventId": 147,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 147,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0272",
  "category": "B02 結緣書",
  "title": "證道歌",
  "publishDate": "2014/08/01",
  "copyrightDate": "2014/08/01",
  "note": "",
  "eventId": 98,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 98,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0273",
  "category": "B02 結緣書",
  "title": "恭祝達賴喇嘛八十大壽",
  "publishDate": "2014/8/12015/6/30",
  "copyrightDate": "2014/8/12015/6/30",
  "note": "正智書香園地出版日期：2014/8",
  "eventId": 104,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 104,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0274",
  "category": "",
  "title": "正覺電子報第 104期",
  "publishDate": "2014/08/01",
  "copyrightDate": "2014/8/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0275",
  "category": "B01 局版書",
  "title": "實相經宗通 第五輯",
  "publishDate": "2014/09/30",
  "copyrightDate": "2014/9/30",
  "note": "",
  "eventId": 101,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 101,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0276",
  "category": "",
  "title": "正覺電子報第 105期",
  "publishDate": "2014/09/01",
  "copyrightDate": "2014/9/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0277",
  "category": "B01 局版書",
  "title": "中觀金鑑(上冊)",
  "publishDate": "2014/09/01",
  "copyrightDate": "2014/09",
  "note": "",
  "eventId": 148,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 148,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0278",
  "category": "",
  "title": "正覺電子報第 106期",
  "publishDate": "2014/10/01",
  "copyrightDate": "2014/10/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0279",
  "category": "B02 結緣書",
  "title": "淨土奇特行門",
  "publishDate": "2014/10/01",
  "copyrightDate": "2014/10改版十八刷(紙版)",
  "note": "改版十八刷(紙版)；電子書初版 2017/5月",
  "eventId": 98,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 98,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0280",
  "category": "",
  "title": "正覺電子報第 107期",
  "publishDate": "2014/11/01",
  "copyrightDate": "2014/11/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0281",
  "category": "B01 局版書",
  "title": "實相經宗通 第六輯",
  "publishDate": "2014/11/30",
  "copyrightDate": "2014/11/30",
  "note": "",
  "eventId": 101,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 101,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0282",
  "category": "B01 局版書",
  "title": "中觀金鑑(中冊)",
  "publishDate": "2014/11/01",
  "copyrightDate": "2014/11",
  "note": "",
  "eventId": 148,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 148,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0283",
  "category": "",
  "title": "正覺電子報第 108期",
  "publishDate": "2014/12/01",
  "copyrightDate": "2014/12/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0284",
  "category": "B01 局版書",
  "title": "實相經宗通 第七輯",
  "publishDate": "2015/01/31",
  "copyrightDate": "2015/1/31",
  "note": "",
  "eventId": 101,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 101,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0285",
  "category": "B01 局版書",
  "title": "中觀金鑑(下冊)",
  "publishDate": "2015/01/01",
  "copyrightDate": "2015/1",
  "note": "",
  "eventId": 148,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 148,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0286",
  "category": "",
  "title": "正覺電子報第 109期",
  "publishDate": "2015/01/01",
  "copyrightDate": "2015/1/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0287",
  "category": "B02 結緣書",
  "title": "邁向正覺(四)",
  "publishDate": "2015/01/01",
  "copyrightDate": "2015/1初版十五刷(紙版)",
  "note": "初版十五刷(紙版)；電子書初版 2017/10月",
  "eventId": 112,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 112,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0288",
  "category": "",
  "title": "正覺電子報第 110期",
  "publishDate": "2015/03/01",
  "copyrightDate": "2015/3/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0289",
  "category": "B01 局版書",
  "title": "實相經宗通 第八輯",
  "publishDate": "2015/03/31",
  "copyrightDate": "2015/3/31",
  "note": "",
  "eventId": 101,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 101,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0290",
  "category": "",
  "title": "正覺電子報第 111期",
  "publishDate": "2015/04/01",
  "copyrightDate": "2015/4/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0291",
  "category": "B01 局版書",
  "title": "法華經講義 第一輯",
  "publishDate": "2015/05/31",
  "copyrightDate": "2015/5/31",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0292",
  "category": "",
  "title": "正覺電子報第 112期",
  "publishDate": "2015/05/01",
  "copyrightDate": "2015/5/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0293",
  "category": "B01 局版書",
  "title": "廣論三部曲",
  "publishDate": "2015/06/01",
  "copyrightDate": "2015/06/01",
  "note": "",
  "eventId": 127,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 127,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0294",
  "category": "",
  "title": "正覺電子報第 113期",
  "publishDate": "2015/06/01",
  "copyrightDate": "2015/6/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0295",
  "category": "B01 局版書",
  "title": "真心告訴您(二)─達賴喇嘛是佛教僧侶嗎？",
  "publishDate": "2015/07/01",
  "copyrightDate": "2015/07/01",
  "note": "",
  "eventId": 122,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 122,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0296",
  "category": "B01 局版書",
  "title": "西藏「活佛轉世」制度——附佛、造神、世俗法",
  "publishDate": "2015/07/01",
  "copyrightDate": "2015/07/01",
  "note": "",
  "eventId": 104,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 104,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0297",
  "category": "B01 局版書",
  "title": "法華經講義 第二輯",
  "publishDate": "2015/07/31",
  "copyrightDate": "2015/7/31",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0298",
  "category": "",
  "title": "正覺電子報第 114期",
  "publishDate": "2015/07/01",
  "copyrightDate": "2015/7/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0299",
  "category": "",
  "title": "正覺電子報第 115期",
  "publishDate": "2015/08/07",
  "copyrightDate": "2015/8/7網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0300",
  "category": "B01 局版書",
  "title": "法華經講義 第三輯",
  "publishDate": "2015/09/30",
  "copyrightDate": "2015/9/30",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0301",
  "category": "",
  "title": "正覺電子報第 116期",
  "publishDate": "2015/09/01",
  "copyrightDate": "2015/9/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0302",
  "category": "B02 結緣書",
  "title": "邁向正覺(二)",
  "publishDate": "2015/09/01",
  "copyrightDate": "2015/9初版二十一刷(紙版)",
  "note": "初版二十一刷(紙版)；電子書初版 2017/9月",
  "eventId": 112,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 112,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0303",
  "category": "B02 結緣書",
  "title": "邁向正覺(一)",
  "publishDate": "2015/09/01",
  "copyrightDate": "2015/9初版二十六刷(紙版)",
  "note": "初版二十六刷(紙版)電子書初版 2017/9月",
  "eventId": 112,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 112,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0304",
  "category": "",
  "title": "正覺電子報第 117期",
  "publishDate": "2015/10/01",
  "copyrightDate": "2015/10/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0305",
  "category": "B01 局版書",
  "title": "法華經講義 第四輯",
  "publishDate": "2015/11/30",
  "copyrightDate": "2015/11/30",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0306",
  "category": "",
  "title": "正覺電子報第 118期",
  "publishDate": "2015/11/01",
  "copyrightDate": "2015/11/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0307",
  "category": "B02 結緣書",
  "title": "邁向正覺(五)",
  "publishDate": "2015/11/01",
  "copyrightDate": "2015/11初版十二刷(紙版)",
  "note": "初版十二刷(紙版)；電子書初版 2017/10月",
  "eventId": 112,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 112,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0308",
  "category": "",
  "title": "正覺電子報第 119期",
  "publishDate": "2015/12/07",
  "copyrightDate": "2015/12/7網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0309",
  "category": "B01 局版書",
  "title": "法華經講義 第五輯",
  "publishDate": "2016/01/31",
  "copyrightDate": "2016/1/31",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0310",
  "category": "",
  "title": "正覺電子報第 120期",
  "publishDate": "2016/01/12",
  "copyrightDate": "2016/1/12網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0311",
  "category": "B02 結緣書",
  "title": "老去人間萬事休，應須洗心從佛祖",
  "publishDate": "2016/3/130",
  "copyrightDate": "2016/3/30",
  "note": "初版首刷",
  "eventId": 104,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 104,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0312",
  "category": "B01 局版書",
  "title": "法華經講義 第六輯",
  "publishDate": "2016/03/31",
  "copyrightDate": "2016/3/31",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0313",
  "category": "",
  "title": "正覺電子報第 121期",
  "publishDate": "2016/03/01",
  "copyrightDate": "2016/3/1網路電子版出刊",
  "note": "",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0314",
  "category": "",
  "title": "正覺電子報第 122期",
  "publishDate": "2016/04/01",
  "copyrightDate": "2016/4/1網路電子版出刊",
  "note": "",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0315",
  "category": "B01 局版書",
  "title": "法華經講義 第七輯",
  "publishDate": "2016/05/31",
  "copyrightDate": "2016/5/31",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0316",
  "category": "",
  "title": "正覺電子報第 123期",
  "publishDate": "2016/05/01",
  "copyrightDate": "2016/5/1網路電子版出刊",
  "note": "",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0317",
  "category": "B02 結緣書",
  "title": "邁向正覺(三)",
  "publishDate": "2016/05/01",
  "copyrightDate": "2016/5初版十八刷(紙版)",
  "note": "初版十八刷(紙版)；電子書初版 2017/10月",
  "eventId": 112,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 112,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0318",
  "category": "",
  "title": "正覺電子報第 124期",
  "publishDate": "2016/06/11",
  "copyrightDate": "2016/6/11網路電子版出刊",
  "note": "",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0319",
  "category": "B02 結緣書",
  "title": "表相歸依與實義歸依",
  "publishDate": "2016/07/01",
  "copyrightDate": "2016/07/01",
  "note": "初版首刷",
  "eventId": 98,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 98,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0320",
  "category": "B01 局版書",
  "title": "法華經講義 第八輯",
  "publishDate": "2016/07/31",
  "copyrightDate": "2016/7/31",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0321",
  "category": "",
  "title": "正覺電子報第 125期",
  "publishDate": "2016/07/22",
  "copyrightDate": "2016/7/22網路電子版出刊",
  "note": "",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0322",
  "category": "",
  "title": "正覺電子報第 126期",
  "publishDate": "2016/08/15",
  "copyrightDate": "2016/8/15網路電子版出刊",
  "note": "",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0323",
  "category": "B01 局版書",
  "title": "法華經講義 第九輯",
  "publishDate": "2016/09/30",
  "copyrightDate": "2016/9/30",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0324",
  "category": "",
  "title": "正覺電子報第 127期",
  "publishDate": "2016/09/25",
  "copyrightDate": "2016/9/25網路電子版出刊",
  "note": "",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0325",
  "category": "",
  "title": "正覺電子報第 128期",
  "publishDate": "2016/10/26",
  "copyrightDate": "2016/10/26網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0326",
  "category": "B01 局版書",
  "title": "法華經講義 第十輯",
  "publishDate": "2016/11/30",
  "copyrightDate": "2016/11/30",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0327",
  "category": "",
  "title": "正覺電子報第 129期",
  "publishDate": "2016/11/21",
  "copyrightDate": "2016/11/21網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0328",
  "category": "",
  "title": "正覺電子報第 130期",
  "publishDate": "2016/12/21",
  "copyrightDate": "2016/12/21網路電子版出刊",
  "note": "",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0329",
  "category": "B01 局版書",
  "title": "法華經講義 第十一輯",
  "publishDate": "2017/01/31",
  "copyrightDate": "2017/1/31",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0330",
  "category": "",
  "title": "正覺電子報第 131期",
  "publishDate": "2017/01/24",
  "copyrightDate": "2017/1/24網路電子版出刊",
  "note": "",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0331",
  "category": "B01 局版書",
  "title": "法華經講義 第十二輯",
  "publishDate": "2017/03/31",
  "copyrightDate": "2017/3/31",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0332",
  "category": "B02 結緣書",
  "title": "我為何離開廣論",
  "publishDate": "2017/03/01",
  "copyrightDate": "2017/3初版首二刷(紙版)",
  "note": "初版首二刷(紙版)；電子書初版 2017/5月",
  "eventId": 126,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 126,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0333",
  "category": "",
  "title": "正覺電子報第 132期",
  "publishDate": "2017/03/20",
  "copyrightDate": "2017/3/20網路電子版出刊",
  "note": "",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0334",
  "category": "",
  "title": "正覺電子報第 133期",
  "publishDate": "2017/04/20",
  "copyrightDate": "2017/4/20網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0335",
  "category": "B01 局版書",
  "title": "法華經講義 第十三輯",
  "publishDate": "2017/05/31",
  "copyrightDate": "2017/5/31",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0336",
  "category": "",
  "title": "正覺電子報第 134期",
  "publishDate": "2017/05/22",
  "copyrightDate": "2017/5/22網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0337",
  "category": "B02 結緣書",
  "title": "八個奇妙的心",
  "publishDate": "2017/06/01",
  "copyrightDate": "2017/06/01",
  "note": "",
  "eventId": 159,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 159,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0338",
  "category": "B01 局版書",
  "title": "次法(上冊)",
  "publishDate": "2017/6/130",
  "copyrightDate": "2017/6/30",
  "note": "",
  "eventId": 160,
  "matchBy": "書名主體",
  "candidates": [
   {
    "id": 160,
    "by": "書名主體"
   }
  ]
 },
 {
  "bookNo": "0339",
  "category": "B01 局版書",
  "title": "我的菩提路(第三輯)",
  "publishDate": "2017/06/30",
  "copyrightDate": "2017/6月底",
  "note": "",
  "eventId": 89,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 89,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0340",
  "category": "B02 結緣書",
  "title": "邁向正覺(六)",
  "publishDate": "2017/06/01",
  "copyrightDate": "2017/6初版十四刷(紙版)",
  "note": "初版十四刷(紙版)；電子書初版 2017/11月",
  "eventId": 112,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 112,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0341",
  "category": "",
  "title": "正覺電子報第 135期",
  "publishDate": "2017/06/25",
  "copyrightDate": "2017/6/25網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0342",
  "category": "B01 局版書",
  "title": "法華經講義 第十四輯",
  "publishDate": "2017/07/31",
  "copyrightDate": "2017/7/31",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0343",
  "category": "B01 局版書",
  "title": "次法(下冊)",
  "publishDate": "2017/8/130",
  "copyrightDate": "2017/8/30",
  "note": "",
  "eventId": 160,
  "matchBy": "書名主體",
  "candidates": [
   {
    "id": 160,
    "by": "書名主體"
   }
  ]
 },
 {
  "bookNo": "0344",
  "category": "",
  "title": "正覺電子報第 136期",
  "publishDate": "2017/08/29",
  "copyrightDate": "2017/8/29網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0345",
  "category": "B01 局版書",
  "title": "法華經講義 第十五輯",
  "publishDate": "2017/09/30",
  "copyrightDate": "2017/9/30",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0346",
  "category": "",
  "title": "正覺電子報第 137期",
  "publishDate": "2017/09/29",
  "copyrightDate": "2017/9/29網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0347",
  "category": "B01 局版書",
  "title": "法華經講義 第十六輯",
  "publishDate": "2017/11/30",
  "copyrightDate": "2017/11/30",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0348",
  "category": "",
  "title": "正覺電子報第 138期",
  "publishDate": "2017/11/18",
  "copyrightDate": "2017/11/18網路電子版出刊",
  "note": "",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0349",
  "category": "",
  "title": "正覺電子報第 139期",
  "publishDate": "2017/12/29",
  "copyrightDate": "2017/12/29網路電子版出刊",
  "note": "",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0350",
  "category": "B01 局版書",
  "title": "法華經講義 第十七輯",
  "publishDate": "2018/01/31",
  "copyrightDate": "2018/1/31",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0351",
  "category": "B01 局版書",
  "title": "法華經講義 第十八輯",
  "publishDate": "2018/03/31",
  "copyrightDate": "2018/3/31",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0352",
  "category": "",
  "title": "正覺電子報第 140期",
  "publishDate": "2018/03/12",
  "copyrightDate": "2018/3/12網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0353",
  "category": "B01 局版書",
  "title": "法華經講義 第十九輯",
  "publishDate": "2018/05/31",
  "copyrightDate": "2018/5/31",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0354",
  "category": "B01 局版書",
  "title": "我的菩提路(第四輯)",
  "publishDate": "2018/06/30",
  "copyrightDate": "2018/6月底",
  "note": "",
  "eventId": 89,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 89,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0355",
  "category": "",
  "title": "正覺電子報第 141期",
  "publishDate": "2018/06/29",
  "copyrightDate": "2018/6/29網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0356",
  "category": "B01 局版書",
  "title": "涅槃(上冊)",
  "publishDate": "2018/7/131",
  "copyrightDate": "2018/7/31",
  "note": "",
  "eventId": 165,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 165,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0357",
  "category": "B01 局版書",
  "title": "法華經講義 第二十輯",
  "publishDate": "2018/07/31",
  "copyrightDate": "2018/7/31",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0358",
  "category": "B01 局版書",
  "title": "涅槃(下冊)",
  "publishDate": "2018/9/130",
  "copyrightDate": "2018/9/30",
  "note": "",
  "eventId": 165,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 165,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0359",
  "category": "B01 局版書",
  "title": "法華經講義 第二十一輯",
  "publishDate": "2018/09/30",
  "copyrightDate": "2018/9/30",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0360",
  "category": "",
  "title": "正覺電子報第 142期",
  "publishDate": "2018/09/29",
  "copyrightDate": "2018/9/29網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0361",
  "category": "B02 結緣書",
  "title": "從一佛所在世界談宇宙大覺者",
  "publishDate": "2018/10/01",
  "copyrightDate": "2018/10/01",
  "note": "",
  "eventId": 88,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 88,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0362",
  "category": "B01 局版書",
  "title": "法華經講義 第二十二輯",
  "publishDate": "2018/11/30",
  "copyrightDate": "2018/11/30",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0363",
  "category": "",
  "title": "正覺電子報第 143期",
  "publishDate": "2018/12/28",
  "copyrightDate": "2018/12/28網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0364",
  "category": "B01 局版書",
  "title": "法華經講義 第二十三輯",
  "publishDate": "2019/01/31",
  "copyrightDate": "2019/1/31",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0365",
  "category": "B01 局版書",
  "title": "法華經講義 第二十四輯",
  "publishDate": "2019/03/31",
  "copyrightDate": "2019/3/31",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0366",
  "category": "B02 結緣書",
  "title": "三乘菩提概說(一)",
  "publishDate": "2019/05/01",
  "copyrightDate": "2019/05/01",
  "note": "",
  "eventId": 184,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 184,
    "by": "書名相同（紀要）"
   },
   {
    "id": 135,
    "by": "書名相含"
   },
   {
    "id": 114,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0367",
  "category": "B02 結緣書",
  "title": "三乘菩提之佛典故事(一)",
  "publishDate": "2019/05/01",
  "copyrightDate": "2019/05/01",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "0368",
  "category": "B02 結緣書",
  "title": "佛教與成佛",
  "publishDate": "2019/05/01",
  "copyrightDate": "2019/05/01",
  "note": "",
  "eventId": 88,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 88,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0369",
  "category": "B01 局版書",
  "title": "法華經講義 第二十五輯",
  "publishDate": "2019/05/31",
  "copyrightDate": "2019/5/31",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同（紀要）"
   },
   {
    "id": 140,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0370",
  "category": "B01 局版書",
  "title": "我的菩提路(第五輯)",
  "publishDate": "2019/07/30",
  "copyrightDate": "2019/7/30",
  "note": "",
  "eventId": 89,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 89,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0371",
  "category": "B01 局版書",
  "title": "佛藏經講義 第一輯",
  "publishDate": "2019/07/31",
  "copyrightDate": "2019/7/31",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0372",
  "category": "",
  "title": "正覺電子報第 144期",
  "publishDate": "2019/07/31",
  "copyrightDate": "2019/7/31網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0373",
  "category": "B01 局版書",
  "title": "佛藏經講義 第二輯",
  "publishDate": "2019/09/30",
  "copyrightDate": "2019/9/30",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0374",
  "category": "B01 局版書",
  "title": "霧峰無霧(第二輯)",
  "publishDate": "2019/10/01",
  "copyrightDate": "2019/10/01",
  "note": "",
  "eventId": 136,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 136,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0375",
  "category": "B01 局版書",
  "title": "佛藏經講義 第三輯",
  "publishDate": "2019/11/30",
  "copyrightDate": "2019/11/30",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0376",
  "category": "B01 局版書",
  "title": "佛藏經講義 第四輯",
  "publishDate": "2020/01/31",
  "copyrightDate": "2020/1/31",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0377",
  "category": "",
  "title": "正覺電子報第 145期",
  "publishDate": "2020/02/19",
  "copyrightDate": "2020/2/19網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0378",
  "category": "B01 局版書",
  "title": "佛藏經講義 第五輯",
  "publishDate": "2020/03/31",
  "copyrightDate": "2020/3/31",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0379",
  "category": "B01 局版書",
  "title": "佛藏經講義 第六輯",
  "publishDate": "2020/05/31",
  "copyrightDate": "2020/5/31",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0380",
  "category": "",
  "title": "正覺電子報第 146期",
  "publishDate": "2020/05/30",
  "copyrightDate": "2020/5/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0381",
  "category": "B01 局版書",
  "title": "我的菩提路(第六輯)",
  "publishDate": "2020/06/30",
  "copyrightDate": "2020/6月底",
  "note": "",
  "eventId": 89,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 89,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0382",
  "category": "",
  "title": "正覺電子報第 147期",
  "publishDate": "2020/06/30",
  "copyrightDate": "2020/6/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0383",
  "category": "B01 局版書",
  "title": "佛藏經講義 第七輯",
  "publishDate": "2020/07/31",
  "copyrightDate": "2020/7/31",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0384",
  "category": "",
  "title": "正覺電子報第 148期",
  "publishDate": "2020/07/30",
  "copyrightDate": "2020/7/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0385",
  "category": "",
  "title": "正覺電子報第 149期",
  "publishDate": "2020/08/30",
  "copyrightDate": "2020/8/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0386",
  "category": "B01 局版書",
  "title": "佛藏經講義 第八輯",
  "publishDate": "2020/09/30",
  "copyrightDate": "2020/9/30",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0387",
  "category": "",
  "title": "正覺電子報第 150期",
  "publishDate": "2020/09/30",
  "copyrightDate": "2020/9/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0388",
  "category": "",
  "title": "正覺電子報第 151期",
  "publishDate": "2020/10/30",
  "copyrightDate": "2020/10/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0389",
  "category": "B01 局版書",
  "title": "佛藏經講義 第九輯",
  "publishDate": "2020/11/30",
  "copyrightDate": "2020/11/30",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0390",
  "category": "",
  "title": "正覺電子報第 152期",
  "publishDate": "2020/11/30",
  "copyrightDate": "2020/11/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0391",
  "category": "",
  "title": "正覺電子報第 153期",
  "publishDate": "2020/12/30",
  "copyrightDate": "2020/12/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0392",
  "category": "B01 局版書",
  "title": "佛藏經講義 第十輯",
  "publishDate": "2021/01/31",
  "copyrightDate": "2021/1/31",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0393",
  "category": "",
  "title": "正覺電子報第 154期",
  "publishDate": "2021/02/01",
  "copyrightDate": "2021/2/1網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0394",
  "category": "B01 局版書",
  "title": "佛藏經講義 第十一輯",
  "publishDate": "2021/03/31",
  "copyrightDate": "2021/3/31",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0395",
  "category": "",
  "title": "正覺電子報第 155期",
  "publishDate": "2021/03/30",
  "copyrightDate": "2021/3/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0396",
  "category": "",
  "title": "正覺電子報第 156期",
  "publishDate": "2021/04/30",
  "copyrightDate": "2021/4/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0397",
  "category": "B01 局版書",
  "title": "佛藏經講義 第十二輯",
  "publishDate": "2021/05/31",
  "copyrightDate": "2021/5/31",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0398",
  "category": "",
  "title": "正覺電子報第 157期",
  "publishDate": "2021/05/30",
  "copyrightDate": "2021/5/30網路電子版初刊",
  "note": "網路電子版初刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0399",
  "category": "",
  "title": "正覺電子報第 158期",
  "publishDate": "2021/06/30",
  "copyrightDate": "2021/6/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0400",
  "category": "B01 局版書",
  "title": "佛藏經講義 第十三輯",
  "publishDate": "2021/07/31",
  "copyrightDate": "2021/7/31",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0401",
  "category": "",
  "title": "正覺電子報第 159期",
  "publishDate": "2021/07/30",
  "copyrightDate": "2021/7/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0402",
  "category": "",
  "title": "正覺電子報第 160期",
  "publishDate": "2021/08/30",
  "copyrightDate": "2021/8/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0403",
  "category": "B01 局版書",
  "title": "佛藏經講義 第十四輯",
  "publishDate": "2021/09/30",
  "copyrightDate": "2021/9/30",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0404",
  "category": "",
  "title": "正覺電子報第 161期",
  "publishDate": "2021/09/30",
  "copyrightDate": "2021/9/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0405",
  "category": "B01 局版書",
  "title": "我的菩提路(第七輯)",
  "publishDate": "2021/10/30",
  "copyrightDate": "2021/10月底",
  "note": "",
  "eventId": 89,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 89,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0406",
  "category": "",
  "title": "正覺電子報第 162期",
  "publishDate": "2021/10/31",
  "copyrightDate": "2021/10/31網路電子版出刊",
  "note": "網路電子版出刊；2022/4/25網路電子版修訂",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0407",
  "category": "B01 局版書",
  "title": "佛藏經講義 第十五輯",
  "publishDate": "2021/11/30",
  "copyrightDate": "2021/11/30",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0408",
  "category": "",
  "title": "正覺電子報第 163期",
  "publishDate": "2021/11/30",
  "copyrightDate": "2021/11/30網路電子版出刊",
  "note": "網路電子版出刊；2022/4/25網路電子版修訂",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0409",
  "category": "B01 局版書",
  "title": "我的菩提路(第二輯)",
  "publishDate": "2021/12/311",
  "copyrightDate": "2021/12",
  "note": "",
  "eventId": 89,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 89,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0410",
  "category": "",
  "title": "正覺電子報第 164期",
  "publishDate": "2021/12/30",
  "copyrightDate": "2021/12/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0411",
  "category": "B01 局版書",
  "title": "佛藏經講義 第十六輯",
  "publishDate": "2022/01/31",
  "copyrightDate": "2022/1/31",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0412",
  "category": "",
  "title": "正覺電子報第 165期",
  "publishDate": "2022/02/28",
  "copyrightDate": "2022/2/28網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0413",
  "category": "B01 局版書",
  "title": "佛藏經講義 第十七輯",
  "publishDate": "2022/03/31",
  "copyrightDate": "2022/3/31",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0414",
  "category": "",
  "title": "正覺電子報第 166期",
  "publishDate": "2022/03/30",
  "copyrightDate": "2022/3/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0415",
  "category": "",
  "title": "正覺電子報第 167期",
  "publishDate": "2022/04/30",
  "copyrightDate": "2022/4/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0416",
  "category": "B01 局版書",
  "title": "佛藏經講義 第十八輯",
  "publishDate": "2022/05/31",
  "copyrightDate": "2022/5/31",
  "note": "網路電子版出刊",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0417",
  "category": "",
  "title": "正覺電子報第 168期",
  "publishDate": "2022/05/30",
  "copyrightDate": "2022/5/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0418",
  "category": "",
  "title": "正覺電子報第 169期",
  "publishDate": "2022/06/30",
  "copyrightDate": "2022/6/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0419",
  "category": "B01 局版書",
  "title": "佛藏經講義 第十九輯",
  "publishDate": "2022/07/31",
  "copyrightDate": "2022/7/31",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0420",
  "category": "",
  "title": "正覺電子報第 170期",
  "publishDate": "2022/07/30",
  "copyrightDate": "2022/7/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0421",
  "category": "B02 結緣書",
  "title": "一位哲學博士的懺悔",
  "publishDate": "2022/08/01",
  "copyrightDate": "2022/8",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "0422",
  "category": "",
  "title": "正覺電子報第 171期",
  "publishDate": "2022/08/30",
  "copyrightDate": "2022/8/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0423",
  "category": "B01 局版書",
  "title": "佛藏經講義 第二十輯",
  "publishDate": "2022/09/30",
  "copyrightDate": "2022/9/30",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0424",
  "category": "",
  "title": "正覺電子報第 172期",
  "publishDate": "2022/09/30",
  "copyrightDate": "2022/9/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0425",
  "category": "",
  "title": "正覺電子報第 173期",
  "publishDate": "2022/10/30",
  "copyrightDate": "2022/10/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0426",
  "category": "B01 局版書",
  "title": "佛藏經講義 第二十一輯",
  "publishDate": "2022/11/30",
  "copyrightDate": "2022/11/30",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0427",
  "category": "",
  "title": "正覺電子報第 174期",
  "publishDate": "2022/11/30",
  "copyrightDate": "2022/11/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0428",
  "category": "",
  "title": "正覺電子報第 175期",
  "publishDate": "2022/12/30",
  "copyrightDate": "2022/12/30",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0429",
  "category": "B01 局版書",
  "title": "大法鼓經講義  第一輯",
  "publishDate": "2023/01/30",
  "copyrightDate": "2023/01/30",
  "note": "",
  "eventId": 162,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 162,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0430",
  "category": "",
  "title": "正覺電子報第 176期",
  "publishDate": "2023/02/28",
  "copyrightDate": "2023/2/28網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0431",
  "category": "",
  "title": "正覺電子報第 177期",
  "publishDate": "2023/03/30",
  "copyrightDate": "2023/3/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0432",
  "category": "B01 局版書",
  "title": "大法鼓經講義  第二輯",
  "publishDate": "2023/03/30",
  "copyrightDate": "2023/03/30",
  "note": "",
  "eventId": 162,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 162,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0433",
  "category": "B01 局版書",
  "title": "山法",
  "publishDate": "2018/10/01",
  "copyrightDate": "2018/10",
  "note": "初版2018/10，二版2021/12",
  "eventId": 167,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 167,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0434",
  "category": "",
  "title": "正覺電子報第 178期",
  "publishDate": "2023/04/30",
  "copyrightDate": "2023/4/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0435",
  "category": "B01 局版書",
  "title": "成唯識論釋 第一輯",
  "publishDate": "2023/05/30",
  "copyrightDate": "2023/05/30",
  "note": "",
  "eventId": 181,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 181,
    "by": "書名相同"
   },
   {
    "id": 180,
    "by": "書名相同（紀要）"
   },
   {
    "id": 186,
    "by": "書名相同（紀要）"
   },
   {
    "id": 188,
    "by": "書名相同（紀要）"
   },
   {
    "id": 13,
    "by": "書名相含"
   }
  ]
 },
 {
  "bookNo": "0436",
  "category": "B01 局版書",
  "title": "大法鼓經講義  第三輯",
  "publishDate": "2023/05/30",
  "copyrightDate": "2023/05/30",
  "note": "",
  "eventId": 162,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 162,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0437",
  "category": "",
  "title": "正覺電子報第 179期",
  "publishDate": "2023/05/30",
  "copyrightDate": "2023/5/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0438",
  "category": "",
  "title": "正覺電子報第 180期",
  "publishDate": "2023/06/30",
  "copyrightDate": "2023/6/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0439",
  "category": "B01 局版書",
  "title": "正覺學報 第四期",
  "publishDate": "2010/12/31",
  "copyrightDate": "2010/12/31",
  "note": "",
  "eventId": 97,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 97,
    "by": "書名相含"
   },
   {
    "id": 78,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0440",
  "category": "B01 局版書",
  "title": "正覺學報 第五期",
  "publishDate": "2011/12/31",
  "copyrightDate": "2011/12/31",
  "note": "",
  "eventId": 97,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 97,
    "by": "書名相含"
   },
   {
    "id": 78,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0441",
  "category": "B01 局版書",
  "title": "大法鼓經講義  第四輯",
  "publishDate": "2023/07/30",
  "copyrightDate": "2023/07/30",
  "note": "",
  "eventId": 162,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 162,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0442",
  "category": "",
  "title": "正覺電子報第 181期",
  "publishDate": "2023/07/30",
  "copyrightDate": "2023/7/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0443",
  "category": "",
  "title": "正覺電子報第 182期",
  "publishDate": "2023/08/30",
  "copyrightDate": "2023/8/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0444",
  "category": "B01 局版書",
  "title": "大法鼓經講義  第五輯",
  "publishDate": "2023/09/30",
  "copyrightDate": "2023/09/30",
  "note": "",
  "eventId": 162,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 162,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0445",
  "category": "",
  "title": "佛教正覺同修會會員手冊",
  "publishDate": "",
  "copyrightDate": "",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "0446",
  "category": "",
  "title": "宗風與門庭",
  "publishDate": "2007/09/14",
  "copyrightDate": "2007/9/14",
  "note": "2004年11月初版書名：《本會領導者應有之特質》\n2007年更名為《宗風與門庭》",
  "eventId": 94,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 94,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0447",
  "category": "",
  "title": "正覺電子報第 183期",
  "publishDate": "2023/09/30",
  "copyrightDate": "2023/9/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0448",
  "category": "",
  "title": "正覺電子報第 184期",
  "publishDate": "2023/10/30",
  "copyrightDate": "2023/10/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0449",
  "category": "B01 局版書",
  "title": "大法鼓經講義  第六輯",
  "publishDate": "2023/11/30",
  "copyrightDate": "2023/11/30",
  "note": "",
  "eventId": 162,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 162,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0450",
  "category": "",
  "title": "正覺電子報第 185期",
  "publishDate": "2023/11/30",
  "copyrightDate": "2023/11/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0451",
  "category": "",
  "title": "正覺電子報第 186期",
  "publishDate": "2023/12/30",
  "copyrightDate": "2023/12/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0452",
  "category": "B01 局版書",
  "title": "不退轉法輪經講義 第一輯",
  "publishDate": "2024/01/30",
  "copyrightDate": "2024/01/30",
  "note": "",
  "eventId": 168,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 168,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0453",
  "category": "",
  "title": "正覺電子報第 187期",
  "publishDate": "2024/01/30",
  "copyrightDate": "2024/1/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0454",
  "category": "B01 局版書",
  "title": "成唯識論釋 第二輯",
  "publishDate": "2024/01/31",
  "copyrightDate": "2024/01/31",
  "note": "",
  "eventId": 181,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 181,
    "by": "書名相同"
   },
   {
    "id": 180,
    "by": "書名相同（紀要）"
   },
   {
    "id": 186,
    "by": "書名相同（紀要）"
   },
   {
    "id": 188,
    "by": "書名相同（紀要）"
   },
   {
    "id": 13,
    "by": "書名相含"
   }
  ]
 },
 {
  "bookNo": "0455",
  "category": "B01 局版書",
  "title": "空行母",
  "publishDate": "2012/07/01",
  "copyrightDate": "2012/7",
  "note": "",
  "eventId": 134,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 134,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0456",
  "category": "B01 局版書",
  "title": "不退轉法輪經講義 第二輯",
  "publishDate": "2024/03/30",
  "copyrightDate": "2024/03/30",
  "note": "",
  "eventId": 168,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 168,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0457",
  "category": "",
  "title": "正覺電子報第 188期",
  "publishDate": "2024/03/30",
  "copyrightDate": "2024/3/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0458",
  "category": "B01 局版書",
  "title": "中論正義(上冊)",
  "publishDate": "2024/04/30",
  "copyrightDate": "2024/04/30",
  "note": "",
  "eventId": 191,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 191,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0459",
  "category": "",
  "title": "正覺電子報第 189期",
  "publishDate": "2024/04/30",
  "copyrightDate": "2024/4/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0460",
  "category": "",
  "title": "正覺電子報第 190期",
  "publishDate": "2024/05/30",
  "copyrightDate": "2024/5/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0461",
  "category": "B01 局版書",
  "title": "誰是師子身中蟲",
  "publishDate": "2024/05/30",
  "copyrightDate": "2024/5/30",
  "note": "",
  "eventId": 192,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 192,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0462",
  "category": "B01 局版書",
  "title": "不退轉法輪經講義 第三輯",
  "publishDate": "2024/05/30",
  "copyrightDate": "2024/5/30",
  "note": "",
  "eventId": 168,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 168,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0463",
  "category": "B01 局版書",
  "title": "中論正義(下冊)",
  "publishDate": "2024/06/30",
  "copyrightDate": "2024/6/30",
  "note": "",
  "eventId": 191,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 191,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0464",
  "category": "",
  "title": "正覺電子報第 191期",
  "publishDate": "2024/06/30",
  "copyrightDate": "2024/6/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0465",
  "category": "B02 結緣書",
  "title": "心經在說什麼？",
  "publishDate": "2024/06/30",
  "copyrightDate": "2024/06/01",
  "note": "",
  "eventId": 49,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 49,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0466",
  "category": "B01 局版書",
  "title": "不退轉法輪經講義 第四輯",
  "publishDate": "2024/07/30",
  "copyrightDate": "2024/7/30",
  "note": "",
  "eventId": 168,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 168,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0467",
  "category": "",
  "title": "正覺電子報第 192期",
  "publishDate": "2024/07/30",
  "copyrightDate": "2024/7/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0468",
  "category": "",
  "title": "正覺電子報第 193期",
  "publishDate": "2024/08/30",
  "copyrightDate": "2024/8/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0469",
  "category": "B02 結緣書",
  "title": "尊師重道",
  "publishDate": "2024/03/01",
  "copyrightDate": "2024/03/01",
  "note": "",
  "eventId": 88,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 88,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0470",
  "category": "",
  "title": "正覺電子報第 194期",
  "publishDate": "2024/09/30",
  "copyrightDate": "2024/9/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0471",
  "category": "B01 局版書",
  "title": "不退轉法輪經講義 第五輯",
  "publishDate": "2024/09/30",
  "copyrightDate": "2024/9/30",
  "note": "",
  "eventId": 168,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 168,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0472",
  "category": "",
  "title": "正覺電子報第 195期",
  "publishDate": "2024/10/30",
  "copyrightDate": "2024/10/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0473",
  "category": "B01 局版書",
  "title": "不退轉法輪經講義 第六輯",
  "publishDate": "2024/11/30",
  "copyrightDate": "2024/11/30",
  "note": "",
  "eventId": 168,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 168,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0474",
  "category": "B01 局版書",
  "title": "成唯識論釋 第三輯",
  "publishDate": "2024/11/30",
  "copyrightDate": "2024/11/30",
  "note": "",
  "eventId": 181,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 181,
    "by": "書名相同"
   },
   {
    "id": 180,
    "by": "書名相同（紀要）"
   },
   {
    "id": 186,
    "by": "書名相同（紀要）"
   },
   {
    "id": 188,
    "by": "書名相同（紀要）"
   },
   {
    "id": 13,
    "by": "書名相含"
   }
  ]
 },
 {
  "bookNo": "0475",
  "category": "",
  "title": "正覺電子報第 196期",
  "publishDate": "2024/11/30",
  "copyrightDate": "2024/11/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0476",
  "category": "B02 結緣書",
  "title": "佛典故事集",
  "publishDate": "2024/12/01",
  "copyrightDate": "2024/12/01",
  "note": "",
  "eventId": 114,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 114,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0477",
  "category": "",
  "title": "正覺電子報第 197期",
  "publishDate": "2024/12/30",
  "copyrightDate": "2024/12/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0478",
  "category": "B02 結緣書",
  "title": "正覺總持咒的威德力",
  "publishDate": "2025/01/01",
  "copyrightDate": "2025/01/01",
  "note": "",
  "eventId": 88,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 88,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0479",
  "category": "B01 局版書",
  "title": "不退轉法輪經講義 第七輯",
  "publishDate": "2025/01/30",
  "copyrightDate": "2025/1/30",
  "note": "",
  "eventId": 168,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 168,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0480",
  "category": "",
  "title": "正覺電子報第 198期",
  "publishDate": "2025/02/28",
  "copyrightDate": "2025/2/28網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0481",
  "category": "B01 局版書",
  "title": "不退轉法輪經講義 第八輯",
  "publishDate": "2025/03/30",
  "copyrightDate": "2025/3/30",
  "note": "",
  "eventId": 168,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 168,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0482",
  "category": "",
  "title": "正覺電子報第 199期",
  "publishDate": "2025/03/30",
  "copyrightDate": "2025/3/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0483",
  "category": "",
  "title": "正覺電子報第 200期",
  "publishDate": "2025/04/30",
  "copyrightDate": "2025/4/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0484",
  "category": "B01 局版書",
  "title": "不退轉法輪經講義 第九輯",
  "publishDate": "2025/05/30",
  "copyrightDate": "2025/5/30",
  "note": "",
  "eventId": 168,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 168,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0485",
  "category": "",
  "title": "正覺電子報第 201期",
  "publishDate": "2025/05/30",
  "copyrightDate": "2025/5/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0486",
  "category": "",
  "title": "正覺電子報第 202期",
  "publishDate": "2025/06/30",
  "copyrightDate": "2025/6/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0487",
  "category": "B01 局版書",
  "title": "不退轉法輪經講義 第十輯",
  "publishDate": "2025/07/30",
  "copyrightDate": "2025/7/30",
  "note": "",
  "eventId": 168,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 168,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0488",
  "category": "",
  "title": "正覺電子報第 203期",
  "publishDate": "2025/07/30",
  "copyrightDate": "2025/7/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0489",
  "category": "B02 結緣書",
  "title": "三乘菩提概說(二)",
  "publishDate": "2023/12/01",
  "copyrightDate": "2023/12/01",
  "note": "",
  "eventId": 184,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 184,
    "by": "書名相同（紀要）"
   },
   {
    "id": 135,
    "by": "書名相含"
   },
   {
    "id": 114,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0490",
  "category": "B02 結緣書",
  "title": "三乘菩提之佛典故事(二)",
  "publishDate": "2023/12/01",
  "copyrightDate": "2023/12/01",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "0491",
  "category": "B01 局版書",
  "title": "八個奇妙的心",
  "publishDate": "2025/08/10",
  "copyrightDate": "2025/8/10",
  "note": "",
  "eventId": 159,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 159,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0492",
  "category": "B01 局版書",
  "title": "我的菩提路(第八輯)",
  "publishDate": "2025/08/29",
  "copyrightDate": "2025/8/29",
  "note": "",
  "eventId": 89,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 89,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0493",
  "category": "",
  "title": "正覺電子報第 204期",
  "publishDate": "2025/08/30",
  "copyrightDate": "2025/8/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0494",
  "category": "B01 局版書",
  "title": "廣論之平議 第一輯",
  "publishDate": "2025/08/30",
  "copyrightDate": "2025/8/30",
  "note": "",
  "eventId": 126,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 126,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0495",
  "category": "",
  "title": "正覺電子報第 205期",
  "publishDate": "2025/09/30",
  "copyrightDate": "2025/9/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0496",
  "category": "B01 局版書",
  "title": "解深密經講義 第一輯",
  "publishDate": "2025/09/30",
  "copyrightDate": "2025/9/30",
  "note": "",
  "eventId": 177,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 177,
    "by": "書名相同（紀要）"
   },
   {
    "id": 31,
    "by": "書名相含"
   }
  ]
 },
 {
  "bookNo": "0497",
  "category": "B02 結緣書",
  "title": "老了要靠誰？",
  "publishDate": "2025/10/03",
  "copyrightDate": "2025/10/3",
  "note": "",
  "eventId": 88,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 88,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "0498",
  "category": "B01 局版書",
  "title": "廣論之平議 第二輯",
  "publishDate": "2025/10/30",
  "copyrightDate": "2025/10/30",
  "note": "",
  "eventId": 126,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 126,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "0499",
  "category": "",
  "title": "正覺電子報第 206期",
  "publishDate": "2025/10/30",
  "copyrightDate": "2025/10/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0500",
  "category": "",
  "title": "正覺電子報第 207期",
  "publishDate": "2025/11/30",
  "copyrightDate": "2025/11/30網路電子版出刊",
  "note": "網路電子版出刊",
  "eventId": 60,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 60,
    "by": "書名相含"
   },
   {
    "id": 171,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "0501",
  "category": "B01 局版書",
  "title": "解深密經講義 第二輯",
  "publishDate": "2025/11/30",
  "copyrightDate": "2025/11/30",
  "note": "",
  "eventId": 177,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 177,
    "by": "書名相同（紀要）"
   },
   {
    "id": 31,
    "by": "書名相含"
   }
  ]
 },
 {
  "bookNo": "0502",
  "category": "B01 局版書",
  "title": "成唯識論釋 第四輯",
  "publishDate": "2025/12/20",
  "copyrightDate": "2025/12/20",
  "note": "",
  "eventId": 181,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 181,
    "by": "書名相同"
   },
   {
    "id": 180,
    "by": "書名相同（紀要）"
   },
   {
    "id": 186,
    "by": "書名相同（紀要）"
   },
   {
    "id": 188,
    "by": "書名相同（紀要）"
   },
   {
    "id": 13,
    "by": "書名相含"
   }
  ]
 },
 {
  "bookNo": "6001",
  "category": "B01 局版書",
  "title": "禪淨圓融(宗教文化出版社)",
  "publishDate": "2005/04/01",
  "copyrightDate": "2005/04/01",
  "note": "宗教文化出版社/作者：蕭平實",
  "eventId": 74,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 74,
    "by": "書名相同"
   },
   {
    "id": 14,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "6002",
  "category": "B01 局版書",
  "title": "《禅─悟前与悟后》(简体中文版)",
  "publishDate": "2005/04/01",
  "copyrightDate": "2005/04/01",
  "note": "四川大學出版社/作者：蕭平實居士\n2010/12二版",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "6003",
  "category": "B01 局版書",
  "title": "佛法真實義-三乘菩提概說",
  "publishDate": "2009/08/01",
  "copyrightDate": "2009/08/01",
  "note": "宗教文化出版社/作者：方竹平",
  "eventId": 184,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 184,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "6004",
  "category": "B01 局版書",
  "title": "《阿含概论》(简体中文版)",
  "publishDate": "2011/10/01",
  "copyrightDate": "2011/10/01",
  "note": "四川大學出版社/作者：蕭平實居士",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "6005",
  "category": "B01 局版書",
  "title": "《菩萨优婆塞戒经讲记》(全套共四册)(简体中文版)",
  "publishDate": "2011/11/01",
  "copyrightDate": "2011/11/01",
  "note": "甘肅民族出版社/作者：金雄师",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "6006",
  "category": "B01 局版書",
  "title": "《胜鬘经真义》(全套共三册)(简体中文版)",
  "publishDate": "2011/12/01",
  "copyrightDate": "2011/12/01",
  "note": "甘肅民族出版社/作者：金雄师",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "6007",
  "category": "B01 局版書",
  "title": "《佛法概论——三乘菩提概说》",
  "publishDate": "2012/09/01",
  "copyrightDate": "2012/09/01",
  "note": "學林出版社/作者：方竹平",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "6008",
  "category": "B01 局版書",
  "title": "《心经宗通》(简体中文版)",
  "publishDate": "2012/10/01",
  "copyrightDate": "2012/10/01",
  "note": "中西書局/作者：萧平实",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "6009",
  "category": "B01 局版書",
  "title": "《起信论讲记》(簡體中文版，全套共四冊)",
  "publishDate": "2013/05/01",
  "copyrightDate": "2013/05/01",
  "note": "中西書局/作者：萧平实",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "6010",
  "category": "B01 局版書",
  "title": "《真实如来藏》(简体中文版)",
  "publishDate": "2013/08/01",
  "copyrightDate": "2013/08/01",
  "note": "學林出版社/作者：萧平实\n(另：宗教文化出版社初版日期為2005/4)",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "6011",
  "category": "B01 局版書",
  "title": "《维摩诘经讲纪》(簡體中文版，全套共三冊)",
  "publishDate": "2013/10/01",
  "copyrightDate": "2013/10/01",
  "note": "上海遠東出版社/作者：萧平实",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "6012",
  "category": "",
  "title": "正覺學報  (簡體字版已出版四期)",
  "publishDate": "",
  "copyrightDate": "",
  "note": "",
  "eventId": 97,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 97,
    "by": "書名相同"
   },
   {
    "id": 78,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "7001",
  "category": "",
  "title": "無相念佛     (美國出版品-中英文對照)",
  "publishDate": "2016/04/19",
  "copyrightDate": "",
  "note": "",
  "eventId": 5,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 5,
    "by": "書名相同"
   },
   {
    "id": 156,
    "by": "書名相同"
   },
   {
    "id": 4,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "7002",
  "category": "",
  "title": "如何契入念佛法門    (美國出版品-中英文對照)",
  "publishDate": "2016/08/03",
  "copyrightDate": "",
  "note": "",
  "eventId": 25,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 25,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "7003",
  "category": "",
  "title": "八個兄弟共一胎    (美國出版品-中英文對照)",
  "publishDate": "2017/03/05",
  "copyrightDate": "",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "7004",
  "category": "",
  "title": "平實導師法語選輯    (美國出版品-中英文對照)",
  "publishDate": "2017/08/01",
  "copyrightDate": "",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "7005",
  "category": "",
  "title": "八個奇妙的心     (美國出版品-中英文對照)",
  "publishDate": "2017/10/28",
  "copyrightDate": "",
  "note": "",
  "eventId": 159,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 159,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "7006",
  "category": "",
  "title": "學佛釋疑‧第 1 輯     (美國出版品-中英文對照)",
  "publishDate": "2018/01/14",
  "copyrightDate": "",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "7007",
  "category": "",
  "title": "狂密與真密‧前三篇    (美國出版品-中英文對照)",
  "publishDate": "20178/73/1",
  "copyrightDate": "",
  "note": "",
  "eventId": 51,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 51,
    "by": "書名相含"
   }
  ]
 },
 {
  "bookNo": "7008",
  "category": "",
  "title": "三乘菩提綱要‧第 1 輯     (美國出版品-中英文對照)",
  "publishDate": "2018/03/01",
  "copyrightDate": "",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "7009",
  "category": "",
  "title": "三乘菩提綱要‧第 2 輯     (美國出版品-中英文對照)",
  "publishDate": "2020/02/01",
  "copyrightDate": "",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "7010",
  "category": "",
  "title": "三乘菩提綱要‧第 3 輯     (美國出版品-中英文對照)",
  "publishDate": "2020/02/01",
  "copyrightDate": "",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "7011",
  "category": "",
  "title": "我與無我     (美國出版品-中英文對照)",
  "publishDate": "2022/10/21",
  "copyrightDate": "",
  "note": "",
  "eventId": 184,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 184,
    "by": "書名相同（紀要）"
   },
   {
    "id": 156,
    "by": "書名相含（紀要）"
   },
   {
    "id": 46,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "7012",
  "category": "",
  "title": "狂密與真密‧第 1 輯     (美國出版品-中英文對照)",
  "publishDate": "201723/124/123",
  "copyrightDate": "",
  "note": "",
  "eventId": 51,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 51,
    "by": "書名相同"
   },
   {
    "id": 156,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "7013",
  "category": "",
  "title": "狂密與真密‧第 2輯     (美國出版品-中英文對照)",
  "publishDate": "2023/05/11",
  "copyrightDate": "",
  "note": "",
  "eventId": 51,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 51,
    "by": "書名相同"
   },
   {
    "id": 156,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "7014",
  "category": "",
  "title": "鈍鳥與靈龜",
  "publishDate": "2023/07/11",
  "copyrightDate": "",
  "note": "",
  "eventId": 95,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 95,
    "by": "書名相同"
   },
   {
    "id": 156,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "8001",
  "category": "B02 結緣書",
  "title": "《勝鬘經》",
  "publishDate": "2005/10",
  "copyrightDate": "2005/10",
  "note": "",
  "eventId": 82,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 82,
    "by": "書名相同（紀要）"
   },
   {
    "id": 74,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "8002",
  "category": "B02 結緣書",
  "title": "《妙法蓮華經》",
  "publishDate": "2012/5",
  "copyrightDate": "2012/5",
  "note": "",
  "eventId": 109,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 109,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "8003",
  "category": "B02 結緣書",
  "title": "《大法鼓經》",
  "publishDate": "2017/3",
  "copyrightDate": "2017/3",
  "note": "",
  "eventId": 162,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 162,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "8004",
  "category": "B02 結緣書",
  "title": "《不退轉法輪經》",
  "publishDate": "2018/7",
  "copyrightDate": "2018/7",
  "note": "",
  "eventId": 168,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 168,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "8005",
  "category": "B02 結緣書",
  "title": "《解深密經》",
  "publishDate": "2020/10",
  "copyrightDate": "2020/10",
  "note": "",
  "eventId": 31,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 31,
    "by": "書名相同"
   },
   {
    "id": 177,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "8006",
  "category": "B01 局版書",
  "title": "《成唯識論》",
  "publishDate": "2021/12",
  "copyrightDate": "2021/12",
  "note": "",
  "eventId": 13,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 13,
    "by": "書名相同"
   },
   {
    "id": 180,
    "by": "書名相同"
   },
   {
    "id": 18,
    "by": "書名相同（紀要）"
   },
   {
    "id": 37,
    "by": "書名相同（紀要）"
   },
   {
    "id": 21,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "8007",
  "category": "B02 結緣書",
  "title": "《金剛經》",
  "publishDate": "2006/",
  "copyrightDate": "2006/",
  "note": "",
  "eventId": 66,
  "matchBy": "書名相同（紀要）",
  "candidates": [
   {
    "id": 66,
    "by": "書名相同（紀要）"
   },
   {
    "id": 87,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "8008",
  "category": "B02 結緣書",
  "title": "《佛藏經》",
  "publishDate": "2012/6",
  "copyrightDate": "2012/6",
  "note": "",
  "eventId": 141,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 141,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "8009",
  "category": "B02 結緣書",
  "title": "《維摩詰經》",
  "publishDate": "",
  "copyrightDate": "無",
  "note": "",
  "eventId": 74,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 74,
    "by": "書名相含（紀要）"
   },
   {
    "id": 70,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "8010",
  "category": "B02 結緣書",
  "title": "《優婆塞戒經》",
  "publishDate": "",
  "copyrightDate": "無",
  "note": "",
  "eventId": 74,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 74,
    "by": "書名相含（紀要）"
   },
   {
    "id": 61,
    "by": "書名相含"
   },
   {
    "id": 117,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "8011",
  "category": "B02 結緣書",
  "title": "《楞嚴經》",
  "publishDate": "",
  "copyrightDate": "無",
  "note": "",
  "eventId": 48,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 48,
    "by": "書名相同"
   },
   {
    "id": 1,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "8012",
  "category": "B02 結緣書",
  "title": "《菩薩瓔珞本業經》",
  "publishDate": "2023/2",
  "copyrightDate": "2023/02/01",
  "note": "",
  "eventId": 190,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 190,
    "by": "書名相同"
   },
   {
    "id": 193,
    "by": "書名相同（紀要）"
   }
  ]
 },
 {
  "bookNo": "8013",
  "category": "B02 結緣書",
  "title": "《金剛三昧經》",
  "publishDate": "2024/12",
  "copyrightDate": "2024/12/01",
  "note": "",
  "eventId": 195,
  "matchBy": "書名相同",
  "candidates": [
   {
    "id": 195,
    "by": "書名相同"
   }
  ]
 },
 {
  "bookNo": "9001",
  "category": "",
  "title": "超意境‧音樂CD",
  "publishDate": "2006/01/01",
  "copyrightDate": "",
  "note": "",
  "eventId": 79,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 79,
    "by": "書名相含"
   }
  ]
 },
 {
  "bookNo": "9002",
  "category": "",
  "title": "菩薩底憂鬱‧音樂CD",
  "publishDate": "2011/04/01",
  "copyrightDate": "",
  "note": "",
  "eventId": 79,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 79,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "9003",
  "category": "",
  "title": "菩薩底憂鬱–禪意無限‧音樂CD",
  "publishDate": "2012/05/31",
  "copyrightDate": "2012/5月底",
  "note": "0225《正覺電子報》第83期頁156：CD第三輯〈菩薩底憂鬱–禪意無限〉於2012年5月底出版發行\n圖檔B03-P3  禾廣公司的發行截圖",
  "eventId": 79,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 79,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "9501",
  "category": "",
  "title": "電視弘法 DVD‧第 1 輯   三乘菩提之意涵 與 學佛正知見( 第一單元 )",
  "publishDate": "2010/06/01",
  "copyrightDate": "",
  "note": "發行日期：2010/6  改版日期：2010/11/6",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "9502",
  "category": "",
  "title": "電視弘法 DVD‧第 2 輯   三乘菩提之念佛法門 與 學佛正知見( 第二單元 )",
  "publishDate": "2011/03/01",
  "copyrightDate": "",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "9503",
  "category": "",
  "title": "電視弘法 DVD‧第 3 輯   三乘菩提之宗通與說通",
  "publishDate": "2012/04/01",
  "copyrightDate": "",
  "note": "",
  "eventId": 42,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 42,
    "by": "書名相含"
   },
   {
    "id": 108,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "9504",
  "category": "",
  "title": "電視弘法 DVD‧第 4 輯   三乘菩提概說",
  "publishDate": "2013/03/01",
  "copyrightDate": "",
  "note": "",
  "eventId": 184,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 184,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "9505",
  "category": "",
  "title": "電視弘法 DVD‧第 5 輯   三乘菩提之學佛釋疑 ( 第一單元 )",
  "publishDate": "2013/03/01",
  "copyrightDate": "",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "9506",
  "category": "",
  "title": "電視弘法 DVD‧第 6 輯   三乘菩提之菩薩正行 ( 第一單元 )",
  "publishDate": "2014/03/31",
  "copyrightDate": "",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "9507",
  "category": "",
  "title": "電視弘法 DVD‧第 7 輯   三乘菩提之學佛釋疑 ( 第二單元 )",
  "publishDate": "2014/03/31",
  "copyrightDate": "",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "9508",
  "category": "",
  "title": "電視弘法 DVD‧第 8 輯   三乘菩提之菩薩正行 ( 第二單元 )",
  "publishDate": "2015/03/31",
  "copyrightDate": "",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "9509",
  "category": "",
  "title": "電視弘法 DVD‧第 9 輯   三乘菩提之學佛釋疑 ( 第三單元 )",
  "publishDate": "2015/03/31",
  "copyrightDate": "",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "9510",
  "category": "",
  "title": "電視弘法 DVD‧第 10 輯 三乘菩提之入門起信 ( 第一單元 )",
  "publishDate": "2016/03/31",
  "copyrightDate": "",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "9511",
  "category": "",
  "title": "電視弘法 DVD‧第 11 輯 三乘菩提之佛典故事",
  "publishDate": "2016/03/31",
  "copyrightDate": "",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "9512",
  "category": "",
  "title": "電視弘法 DVD‧第 12 輯 三乘菩提之入門起信 ( 第二單元 )",
  "publishDate": "2017/03/31",
  "copyrightDate": "",
  "note": "",
  "eventId": null,
  "matchBy": "",
  "candidates": []
 },
 {
  "bookNo": "9513",
  "category": "",
  "title": "電視弘法 DVD‧第 13 輯 三乘菩提之常見外道法：廣論 ( 第一單元 )",
  "publishDate": "2017/03/31",
  "copyrightDate": "",
  "note": "",
  "eventId": 126,
  "matchBy": "書名主體",
  "candidates": [
   {
    "id": 126,
    "by": "書名主體"
   }
  ]
 },
 {
  "bookNo": "9514",
  "category": "",
  "title": "電視弘法 DVD‧第 14 輯 三乘菩提之常見外道法：廣論 ( 第二單元 )",
  "publishDate": "2018/03/31",
  "copyrightDate": "",
  "note": "",
  "eventId": 126,
  "matchBy": "書名主體",
  "candidates": [
   {
    "id": 126,
    "by": "書名主體"
   }
  ]
 },
 {
  "bookNo": "9515",
  "category": "",
  "title": "電視弘法 DVD‧第 15 輯 三乘菩提之阿含正義 ( 第一單元 )",
  "publishDate": "2018/03/31",
  "copyrightDate": "",
  "note": "",
  "eventId": 84,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 84,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "9516",
  "category": "",
  "title": "電視弘法 DVD‧第 16 輯 三乘菩提之阿含正義 ( 第二單元 )",
  "publishDate": "2019/03/31",
  "copyrightDate": "",
  "note": "",
  "eventId": 84,
  "matchBy": "書名相含（紀要）",
  "candidates": [
   {
    "id": 84,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "9517",
  "category": "",
  "title": "電視弘法 DVD‧第 17 輯 三乘菩提之入不二門 ( 第一單元 )",
  "publishDate": "2019/03/31",
  "copyrightDate": "",
  "note": "",
  "eventId": 65,
  "matchBy": "書名相含",
  "candidates": [
   {
    "id": 65,
    "by": "書名相含"
   },
   {
    "id": 69,
    "by": "書名相含（紀要）"
   }
  ]
 },
 {
  "bookNo": "",
  "category": "",
  "title": "正覺電子書",
  "publishDate": "",
  "copyrightDate": "",
  "note": "",
  "eventId": 152,
  "matchBy": "人工對應",
  "candidates": [
   {
    "id": 152,
    "by": "人工對應"
   }
  ]
 }
];
