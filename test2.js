var devis=require("./devis")

.client({
  host: '127.0.0.1',
  port: 3000,
  timeout:400
})
devis.act({
    action: 'drive',
    cmd:'car'
  }, function(err, result) {
    if(err) console.log(err);
      console.log(result);
});



