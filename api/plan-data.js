export default async function handler(request, res) {
  const plan = [
    {
      weekNum: '1',
      compTime: '6 Hours',
      weekTitle: 'Week 1',
      weekDescription: 'Filler text...',
    },
    {
      weekNum: '1',
      compTime: '6 Hours',
      weekTitle: 'Week 1',
      weekDescription: 'Filler text...',
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
