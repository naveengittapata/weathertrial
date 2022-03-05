exports.get_weathers = function(req, res){
    let weathers = {
        temp : 90.5,
        unit : 'fahrenheit',
        cloudy:' false',
        precipitationChances: 0,
    
        
      }

      res.send(weathers);

}