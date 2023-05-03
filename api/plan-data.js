export default async function handler(request, res) {
  const plan = [
    {
      weekNum: '1',
      compTime: '2',
      weekTitle: 'Introduction',
      weekDescription: 'Why take this course?',
      wTotal: '4 videos (Total 13 min), 11 readings',
    },
    {
      weekNum: '2',
      compTime: '2',
      weekTitle: 'Misconceptions About Happiness',
      weekDescription: 'What do we think will make us happy?',
      wTotal: '2 videos (Total 7 min), 2 readings',
    },
    {
      weekNum: '3',
      compTime: '3',
      weekTitle: 'Why Our Expectations are so Bad',
      weekDescription: 'Why do we mispredict what make us happy?',
      wTotal: '1 videos (Total 4 min), 5 readings',
    },
  ];

  res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  res.json(plan);
}
