const express = require ('express');
const router = express.Router();

let users = [];

router.get('/', (req, res)=> {
  if(users.length>0){
    res.status(200).json(users);
  }else{
    res.status(200).send("Não há usuários cadastrados");
  }  
})

router.get('/:id', (req, res)=> {
  let user = users.find(user => user.id === req.params.id);
  if(user){
    res.status(200).json(user);
  }else{
    res.status(200).send(`<h1>Usuário com id: ${req.params.id} não encontrado</h2>`)
  }  
})

router.post('/', (req, res)=> {
  if(req.body.id && req.body.name){
    const newUser = {
      id: req.body.id,
      name: req.body.name,
    }
    users.push(newUser);
    res.status(200).send(`Usuário cadastrado com sucesso`);
  }else{
    res.status(200).send(`Vocẽ não informou as informações do usuário`);
  }  
})

router.put('/:id', (req, res)=> {
  if(req.params.id){
    const userIndex = users.findIndex(user => user.id === req.params.id)
    if(userIndex!==-1){
      const userUpdated = {
        id: req.params.id,
        name: req.body.name
      }
      users[userIndex] = userUpdated;
      res.status(200).json(userUpdated);
    }else{
      res.status(200).send("Id não encontrado na lista!"+userIndex)
    }
  }else{
    res.status(200).send("Este id é inválido");
  }
})

router.delete('/:id', (req, res)=> {
  if(req.params.id){
    const userIndex = users.findIndex(user => user.id === req.params.id);
    if(userIndex!==-1){
      users.splice(userIndex, 1);
      res.status(200).send("Usuário excluído com sucesso!");
    }else{
      res.status(200).send("Não há nenhum usuário com este ID");
    }

  }else{
    res.status(200).send("Este id é inválido");
  }
})

module.exports = router;