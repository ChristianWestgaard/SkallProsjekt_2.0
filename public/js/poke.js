function addNewPokemon() {
    app.get('/add-Species', (req, res) => {
      const typeSpecies = new Species({
        type: document.getElementById('inputType').value,
        ability0: document.getElementById('inputAbility0'),
        ability1: document.getElementById('inputAbility1'),
        ability2: document.getElementById('inputAbility2'),
        name: document.getElementById('inputName'),
        signed: document.getElementById('NameOnCard')
      })
  
      Species.save()
      .then((results) =>{
        res.send(results)
        console.log("Complete");
      })
      .catch((err)=>{
        console.log(err);
      })
    })
  }