import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPlayer }) {
  const [ formData, setFormData] = useState({
    name: '',
    hp: '',
    sprites: {
      front: '',
      back: ''
    }
  });
  
  function handleChange(e) {
    if(e.target.name === 'frontUrl') {
      setFormData({...formData, 
        sprites: {...formData.sprites, front: e.target.value}})
    } else if(e.target.name === 'backUrl') {
      setFormData({...formData, 
        sprites: {...formData.sprites, back: e.target.value}})
    } else {
      setFormData({...formData, [e.target.name]: e.target.value})
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(res => res.json())
    .then(data => addPlayer(data));
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            value={formData.hp} 
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.sprites.front} 
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.sprites.back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
