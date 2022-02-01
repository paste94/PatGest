import { useEffect, useState } from 'react';
import * as Database from '../database/database';

export default function PatientsList() {
  const [heroes, setHeroes] = useState(null);
  const [loading, setLoading] = useState(true);

  const subs = [];

  // const getDb = async () => new Promise((resolve) => resolve(Database.get()));

  useEffect(() => {
    Promise.resolve(Database.get())
      .then((db) => {
        const sub = db.heroes
          .find({
            selector: {},
            sort: [{ name: 'asc' }],
          })
          .$.subscribe((h) => {
            if (!h) {
              return;
            }
            console.log('reload heroes-list ');
            console.dir(heroes);
            setHeroes(h);
            setLoading(false);
          });
        subs.push(sub);
        return true;
      })
      .catch((err) => console.log(err));

    /*
    getDb
      .resolve()
      .then((db) => {
        const sub = db.heroes
          .find({
            selector: {},
            sort: [{ name: 'asc' }],
          })
          .$.subscribe((h) => {
            if (!h) {
              return;
            }
            console.log('reload heroes-list ');
            console.dir(heroes);
            setHeroes(h);
            setLoading(false);
          });
        subs.push(sub);
        return true;
      })
      .catch(() => {});
      */
    return () => {
      subs.forEach((s) => s.unsubscribe());
    };
  }, []);

  const deleteHero = async (hero) => {
    console.log('delete hero:');
    console.dir(hero);
    await hero.remove();
  };

  const editHero = async (hero) => {
    console.log('edit hero:');
    console.dir(hero);
  };

  return (
    <div id="list-box" className="box">
      <h3>Heroes</h3>
      {loading && <span>Loading...</span>}
      {!loading && heroes.length === 0 && <span>No heroes</span>}
      {!loading && (
        <ul id="heroes-list">
          {heroes.map((hero) => {
            return (
              <li key={hero.name}>
                <div
                  className="color-box"
                  style={{
                    background: hero.color,
                  }}
                />
                <span className="name">{hero.name}</span>
                <span className="name">{hero.color}</span>
                <div className="actions">
                  {/* <i className="fa fa-pencil-square-o" aria-hidden="true" onClick={() => this.editHero(hero)}></i> */}
                  <span
                    className="delete fa fa-trash-o"
                    aria-hidden="true"
                    onClick={() => deleteHero(hero)}
                  >
                    DELETE
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
