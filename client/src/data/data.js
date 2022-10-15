const data = [
  {
    train: '<a href="/train-enquiry/20501">20501 TEJAS EXPRESS</a>',
    from: 'Agartala',
    to: 'Anand Vihar Terminal',
    days: 'M',
    trainName: '20501 TEJAS EXPRESS'
  },
  {
    train: '<a href="/train-enquiry/12957">12957 ADI NDLS RAJ EX</a>',
    from: 'Ahmedabad Jn',
    to: 'New Delhi',
    days: 'Daily',
    trainName: '12957 ADI NDLS RAJ EX'
  },
  {
    train: '<a href="/train-enquiry/20502">20502 AGTL TEJAS EXP</a>',
    from: 'Anand Vihar Terminal',
    to: 'Agartala',
    days: 'W',
    trainName: '20502 AGTL TEJAS EXP'
  },
  {
    train: '<a href="/train-enquiry/20817">20817 RAJDHANI EXPRES</a>',
    from: 'Bhubaneswar',
    to: 'New Delhi',
    days: 'Sa',
    trainName: '20817 RAJDHANI EXPRES'
  },
  {
    train: '<a href="/train-enquiry/22811">22811 RAJDHANI EXPRES</a>',
    from: 'Bhubaneswar',
    to: 'New Delhi',
    days: 'W Su',
    trainName: '22811 RAJDHANI EXPRES'
  },
  {
    train: '<a href="/train-enquiry/22823">22823 RAJDHANI EXPRES</a>',
    from: 'Bhubaneswar',
    to: 'New Delhi',
    days: 'M Tu Th F',
    trainName: '22823 RAJDHANI EXPRES'
  },
  {
    train: '<a href="/train-enquiry/12441">12441 BSP NDLS RAJ EX</a>',
    from: 'Bilaspur Jn',
    to: 'New Delhi',
    days: 'M Th',
    trainName: '12441 BSP NDLS RAJ EX'
  },
  {
    train: '<a href="/train-enquiry/22221">22221 NZM RAJDHANI</a>',
    from: 'C Shivaji Maharaj T',
    to: 'Hazrat Nizamuddin',
    days: 'Daily',
    trainName: '22221 NZM RAJDHANI'
  },
  {
    train: '<a href="/train-enquiry/20503">20503 RAJDHANI EXP</a>',
    from: 'Dibrugarh',
    to: 'New Delhi',
    days: 'Tu W Th Sa Su',
    trainName: '20503 RAJDHANI EXP'
  },
  {
    train: '<a href="/train-enquiry/20505">20505 RAJDHANI EXP</a>',
    from: 'Dibrugarh',
    to: 'New Delhi',
    days: 'M F',
    trainName: '20505 RAJDHANI EXP'
  },
  {
    train: '<a href="/train-enquiry/12423">12423 RAJDHANI EXP</a>',
    from: 'Dibrugarh Town',
    to: 'New Delhi',
    days: 'Daily',
    trainName: '12423 RAJDHANI EXP'
  },
  {
    train: '<a href="/train-enquiry/12432">12432 TVC RAJDHANI</a>',
    from: 'Hazrat Nizamuddin',
    to: 'Thiruvananthapuram Central',
    days: 'Tu W Su',
    trainName: '12432 TVC RAJDHANI'
  },
  {
    train: '<a href="/train-enquiry/12434">12434 NZM MAS RAJDHANI</a>',
    from: 'Hazrat Nizamuddin',
    to: 'Mgr Chennai Ctr',
    days: 'W F',
    trainName: '12434 NZM MAS RAJDHANI'
  },
  {
    train: '<a href="/train-enquiry/12438">12438 SC RAJDHANI</a>',
    from: 'Hazrat Nizamuddin',
    to: 'Secunderabad Jn',
    days: 'Su',
    trainName: '12438 SC RAJDHANI'
  },
  {
    train: '<a href="/train-enquiry/12954">12954 AK TEJAS RAJ EX</a>',
    from: 'Hazrat Nizamuddin',
    to: 'Mumbai Central',
    days: 'Daily',
    trainName: '12954 AK TEJAS RAJ EX'
  },
  {
    train: '<a href="/train-enquiry/22222">22222 CSMT RAJDHANI</a>',
    from: 'Hazrat Nizamuddin',
    to: 'C Shivaji Maharaj T',
    days: 'Daily',
    trainName: '22222 CSMT RAJDHANI'
  },
  {
    train: '<a href="/train-enquiry/22414">22414 NZM MAO RAJDANI</a>',
    from: 'Hazrat Nizamuddin',
    to: 'Madgaon',
    days: 'F Sa',
    trainName: '22414 NZM MAO RAJDANI'
  },
  {
    train: '<a href="/train-enquiry/22692">22692 SBC RAJDHANI</a>',
    from: 'Hazrat Nizamuddin',
    to: 'Ksr Bengaluru',
    days: 'Daily',
    trainName: '22692 SBC RAJDHANI'
  },
  {
    train: '<a href="/train-enquiry/12301">12301 RAJDHANI EXPRES</a>',
    from: 'Howrah Jn',
    to: 'New Delhi',
    days: 'Except Sun',
    trainName: '12301 RAJDHANI EXPRES'
  },
  {
    train: '<a href="/train-enquiry/12305">12305 RAJDHANI EXPRES</a>',
    from: 'Howrah Jn',
    to: 'New Delhi',
    days: 'Su',
    trainName: '12305 RAJDHANI EXPRES'
  },
  {
    train: '<a href="/train-enquiry/12426">12426 JAMMU RAJDHANI</a>',
    from: 'Jammu Tawi',
    to: 'New Delhi',
    days: 'Daily',
    trainName: '12426 JAMMU RAJDHANI'
  },
  {
    train: '<a href="/train-enquiry/22691">22691 RAJDHANI EXP</a>',
    from: 'Ksr Bengaluru',
    to: 'Hazrat Nizamuddin',
    days: 'Daily',
    trainName: '22691 RAJDHANI EXP'
  },
  {
    train: '<a href="/train-enquiry/22413">22413 MAO NZM RAJ SPL</a>',
    from: 'Madgaon',
    to: 'Hazrat Nizamuddin',
    days: 'M Su',
    trainName: '22413 MAO NZM RAJ SPL'
  },
  {
    train: '<a href="/train-enquiry/12433">12433 MAS NZM RAJDHANI</a>',
    from: 'Mgr Chennai Ctr',
    to: 'Hazrat Nizamuddin',
    days: 'F Su',
    trainName: '12433 MAS NZM RAJDHANI'
  },
  {
    train: '<a href="/train-enquiry/22207">22207 TVC AC SF EXP</a>',
    from: 'Mgr Chennai Ctr',
    to: 'Thiruvananthapuram Central',
    days: 'Tu F',
    trainName: '22207 TVC AC SF EXP'
  },
  {
    train: '<a href="/train-enquiry/12951">12951 TEJAS RAJ EXP</a>',
    from: 'Mumbai Central',
    to: 'New Delhi',
    days: 'Daily',
    trainName: '12951 TEJAS RAJ EXP'
  },
  {
    train: '<a href="/train-enquiry/12953">12953 MMCT NZM AK RAJ</a>',
    from: 'Mumbai Central',
    to: 'Hazrat Nizamuddin',
    days: 'Daily',
    trainName: '12953 MMCT NZM AK RAJ'
  },
  {
    train: '<a href="/train-enquiry/12302">12302 HWH RAJDHANI</a>',
    from: 'New Delhi',
    to: 'Howrah Jn',
    days: 'Except Fri',
    trainName: '12302 HWH RAJDHANI'
  },
  {
    train: '<a href="/train-enquiry/12306">12306 KOLKATA RAJDHNI</a>',
    from: 'New Delhi',
    to: 'Howrah Jn',
    days: 'F',
    trainName: '12306 KOLKATA RAJDHNI'
  },
  {
    train: '<a href="/train-enquiry/12310">12310 RJPB TEJAS RAJ</a>',
    from: 'New Delhi',
    to: 'Rajendranagar T',
    days: 'Daily',
    trainName: '12310 RJPB TEJAS RAJ'
  },
  {
    train: '<a href="/train-enquiry/12314">12314 SEALDAH RAJDHNI</a>',
    from: 'New Delhi',
    to: 'Sealdah',
    days: 'Daily',
    trainName: '12314 SEALDAH RAJDHNI'
  },
  {
    train: '<a href="/train-enquiry/12424">12424 DBRT RAJDHANI</a>',
    from: 'New Delhi',
    to: 'Dibrugarh Town',
    days: 'Daily',
    trainName: '12424 DBRT RAJDHANI'
  },
  {
    train: '<a href="/train-enquiry/12425">12425 JAMMU RAJDHANI</a>',
    from: 'New Delhi',
    to: 'Jammu Tawi',
    days: 'Daily',
    trainName: '12425 JAMMU RAJDHANI'
  },
  {
    train: '<a href="/train-enquiry/12442">12442 BSP RAJDHNI EXP</a>',
    from: 'New Delhi',
    to: 'Bilaspur Jn',
    days: 'Tu Sa',
    trainName: '12442 BSP RAJDHNI EXP'
  },
  {
    train: '<a href="/train-enquiry/12454">12454 RNC RAJDHANI</a>',
    from: 'New Delhi',
    to: 'Ranchi',
    days: 'Sa',
    trainName: '12454 RNC RAJDHANI'
  },
  {
    train: '<a href="/train-enquiry/12952">12952 MMCT TEJAS RAJ</a>',
    from: 'New Delhi',
    to: 'Mumbai Central',
    days: 'Daily',
    trainName: '12952 MMCT TEJAS RAJ'
  },
  {
    train: '<a href="/train-enquiry/12958">12958 ADI SJ RAJDHANI</a>',
    from: 'New Delhi',
    to: 'Ahmedabad Jn',
    days: 'Daily',
    trainName: '12958 ADI SJ RAJDHANI'
  },
  {
    train: '<a href="/train-enquiry/20408">20408 RNC RAJDHANI</a>',
    from: 'New Delhi',
    to: 'Ranchi',
    days: 'W',
    trainName: '20408 RNC RAJDHANI'
  },
  {
    train: '<a href="/train-enquiry/20504">20504 DBRG RAJDHANI</a>',
    from: 'New Delhi',
    to: 'Dibrugarh',
    days: 'M Tu W F Sa',
    trainName: '20504 DBRG RAJDHANI'
  },
  {
    train: '<a href="/train-enquiry/20506">20506 DBRG RAJDHANI</a>',
    from: 'New Delhi',
    to: 'Dibrugarh',
    days: 'Th Su',
    trainName: '20506 DBRG RAJDHANI'
  },
  {
    train: '<a href="/train-enquiry/20818">20818 BBS RAJDHANI</a>',
    from: 'New Delhi',
    to: 'Bhubaneswar',
    days: 'Su',
    trainName: '20818 BBS RAJDHANI'
  },
  {
    train: '<a href="/train-enquiry/20840">20840 NDLS RNC RAJ EX</a>',
    from: 'New Delhi',
    to: 'Ranchi',
    days: 'M F',
    trainName: '20840 NDLS RNC RAJ EX'
  },
  {
    train: '<a href="/train-enquiry/22812">22812 BBS RAJDHANI</a>',
    from: 'New Delhi',
    to: 'Bhubaneswar',
    days: 'M F',
    trainName: '22812 BBS RAJDHANI'
  },
  {
    train: '<a href="/train-enquiry/22824">22824 BBS RAJDHANI</a>',
    from: 'New Delhi',
    to: 'Bhubaneswar',
    days: 'Tu W Th Sa',
    trainName: '22824 BBS RAJDHANI'
  },
  {
    train: '<a href="/train-enquiry/12309">12309 RJPB TEJAS RAJ</a>',
    from: 'Rajendranagar T',
    to: 'New Delhi',
    days: 'Daily',
    trainName: '12309 RJPB TEJAS RAJ'
  },
  {
    train: '<a href="/train-enquiry/12453">12453 RNC NDLS RAJ EX</a>',
    from: 'Ranchi',
    to: 'New Delhi',
    days: 'Su',
    trainName: '12453 RNC NDLS RAJ EX'
  },
  {
    train: '<a href="/train-enquiry/20407">20407 RNC NDLS RAJ EX</a>',
    from: 'Ranchi',
    to: 'New Delhi',
    days: 'Th',
    trainName: '20407 RNC NDLS RAJ EX'
  },
  {
    train: '<a href="/train-enquiry/20839">20839 RNC NDLS RAJ EX</a>',
    from: 'Ranchi',
    to: 'New Delhi',
    days: 'W Sa',
    trainName: '20839 RNC NDLS RAJ EX'
  },
  {
    train: '<a href="/train-enquiry/12313">12313 RAJDHANI EXPRES</a>',
    from: 'Sealdah',
    to: 'New Delhi',
    days: 'Daily',
    trainName: '12313 RAJDHANI EXPRES'
  },
  {
    train: '<a href="/train-enquiry/12437">12437 SC NZM RAJDHANI</a>',
    from: 'Secunderabad Jn',
    to: 'Hazrat Nizamuddin',
    days: 'W',
    trainName: '12437 SC NZM RAJDHANI'
  },
  {
    train: '<a href="/train-enquiry/12431">12431 RAJDHANI EXP</a>',
    from: 'Thiruvananthapuram Central',
    to: 'Hazrat Nizamuddin',
    days: 'Tu Th F',
    trainName: '12431 RAJDHANI EXP'
  },
  {
    train: '<a href="/train-enquiry/22208">22208 MAS SF AC EXP</a>',
    from: 'Thiruvananthapuram Central',
    to: 'Mgr Chennai Ctr',
    days: 'W Su',
    trainName: '22208 MAS SF AC EXP'
  }
]

export const getAllStations = () => {
  const stations = {}

  data?.forEach((row) => {
    stations[row.from] = row.from
    stations[row.to] = row.to
  })

  return Object.keys(stations).map((row, index) => ({
    title: row,
    value: index
  }))
}
