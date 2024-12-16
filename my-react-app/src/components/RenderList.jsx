import { people } from '../data.js';

export default function List() {
    const chemists = people.filter(person =>
      person.profession === 'chemist'
    );
    const listItems = chemists.map(person =>
      <li key={person.id}>
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
      </li>
    );
    return <ul>{listItems}</ul>;
  }
  
