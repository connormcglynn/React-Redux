import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 20 ? (
            <div className="ninja" key={ ninja.id }>
                <div><b>Name:</b> { ninja.name }</div>
                <div><b>Age:</b> { ninja.age }</div>
                <div><b>Belt:</b> { ninja.belt }</div>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
                <div><br /></div>
            </div>
        ) : null;
    })

    return(
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}

export default Ninjas;