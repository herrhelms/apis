import app from '../../server'
import request from 'request'

app.get('/isx', (req,res) => {
  request.get(
    { url: 'https://isx.is/api/stats' },
    (err, response) => {
      if (err || response.statusCode !== 200) {
        return res.status(500).json({ error: 'isx.is refuses to respond or give back data' })
      }
      var obj
      try {
        obj = JSON.parse(response.body)
      } catch (error) {
        return res.status(500).json({ error:'Something is wrong with the data provided from the data source' })
      }
      return res.json(obj.stats)
    }
  );
});
